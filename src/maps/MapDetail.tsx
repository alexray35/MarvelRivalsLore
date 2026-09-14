import React, { useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { MapInfoRegular, MapInfoArcade } from "../0manual/MapList";
import { getNestedValue } from "../getNestedValue";
import gameDataSources, { TAB_ORDER } from "../0manual/GameData";
import ImageGallery from "../ImageGallery";
import JsonValue from "../JsonValue";
import youtubeWebsiteStringsData from "../0manual/YoutubeWebsiteStrings.json";

interface MapDetailProps {
  linkID?: string;
  isArcade?: boolean;
}

interface TabData {
  key: string;
  label: string;
  gameData: object;
  isDifferent: boolean;
}

const MapDetail: React.FC<MapDetailProps> = ({
  linkID: propLinkID,
  isArcade = false,
}) => {
  const { linkID: paramLinkID } = useParams<{ linkID: string }>();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<
    "loading" | "website" | "youtube" | "youtubeME"
  >("loading");
  const [selectedVersionIndex, setSelectedVersionIndex] = useState<number>(0);

  // Use propLinkID if provided, otherwise use the URL parameter
  const mapLinkID = propLinkID || paramLinkID || "YggsdrasillPath"; // Default fallback

  // Use the correct map list based on isArcade
  const mapList = isArcade ? MapInfoArcade : MapInfoRegular;

  // Find the map data matching the provided linkID
  const map = mapList.find((m) => m.linkID === mapLinkID);

  // Use YoutubeWebsiteStrings as the gameData source
  const youtubeWebsiteData = youtubeWebsiteStringsData as Record<
    string,
    string
  >;

  if (!map) {
    console.error(`No map found with linkID: ${mapLinkID}`);
    return null;
  }

  // Check if website or youtube descriptions exist
  const hasWebsiteDescription =
    map.websiteDescription && map.websiteDescription.trim() !== "";
  const hasYoutubeDescription =
    map.youtubeDescription && map.youtubeDescription.trim() !== "";
  const hasYoutubeMEDescription =
    map.youtubeMEDescription && map.youtubeMEDescription.trim() !== "";
  const hasExtraTabs =
    hasWebsiteDescription || hasYoutubeDescription || hasYoutubeMEDescription;

  // Get loading tips content from a game data source, filtering out undefined
  const getLoadingTipsContent = (gameData: object) => {
    return map.loadingTips
      .map((tip) => getNestedValue(gameData, tip))
      .filter((tip) => tip !== undefined);
  };

  // Get content from all data sources and check for differences
  const allTabs: TabData[] = useMemo(() => {
    // First create a map of all available tabs with their content
    const tabsMap = new Map();

    Object.entries(gameDataSources).forEach(([key, gameDataSource]) => {
      const loadingTipsContent = getLoadingTipsContent(gameDataSource.data);

      // Skip this version if all tips are missing
      if (loadingTipsContent.length === 0) return;

      tabsMap.set(key, {
        key,
        label: gameDataSource.displayName,
        gameData: gameDataSource.data,
        content: loadingTipsContent,
        isDifferent: false, // Will be set later
      });
    });

    // Now create the array in the desired order
    const orderedTabs: any[] = [];

    TAB_ORDER.forEach((key) => {
      const tab = tabsMap.get(key);
      if (tab) {
        orderedTabs.push(tab);
        tabsMap.delete(key);
      }
    });

    // Add any remaining tabs that weren't in the predefined order
    tabsMap.forEach((tab) => {
      orderedTabs.push(tab);
    });

    const tabsWithDiff = orderedTabs.map((tab, index) => {
      let isDifferent = false;

      // For the first tab, compare to itself (always false)
      if (index === 0) {
        isDifferent = false;
      } else {
        // Compare to previous version's content
        const prevContent = orderedTabs[index - 1]?.content || [];
        isDifferent =
          JSON.stringify(tab.content) !== JSON.stringify(prevContent);
      }

      return {
        ...tab,
        isDifferent,
      };
    });

    return tabsWithDiff;
  }, [map.loadingTips]);

  // Filter tabs to only show those with differences (always show the first/default tab)
  const filteredTabs = allTabs.filter((tab, index) => {
    // Always show the first tab (default)
    if (index === 0) return true;
    // Show if different from previous
    return tab.isDifferent;
  });

  // Only show tabs if there are multiple versions with differences
  const showLoadingVersionTabs = filteredTabs.length > 1;

  // Set the active tab data for loading tips
  const activeLoadingTabData =
    filteredTabs[selectedVersionIndex] || filteredTabs[0];

  // Extract YouTube video ID from URL
  const extractYouTubeId = (url: string): string | null => {
    // Handle different YouTube URL formats
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
      /youtube\.com\/watch\?v=([^&\n?#]+)/,
      /youtu\.be\/([^&\n?#]+)/,
      /youtube\.com\/embed\/([^&\n?#]+)/,
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match && match[1]) {
        return match[1];
      }
    }

    // If no pattern matches, assume the input is already a video ID
    if (url.length === 11) {
      return url;
    }

    return null;
  };

  // Render YouTube video gallery
  const renderYouTubeGallery = () => {
    if (!map.videos || map.videos.length === 0) {
      return null;
    }

    return (
      <div className="video-gallery-container">
        {map.videos.map((videoItem, index) => {
          const videoId = extractYouTubeId(videoItem.video);

          if (!videoId) {
            console.warn(`Invalid YouTube URL or ID: ${videoItem.video}`);
            return null;
          }

          const embedUrl = `https://www.youtube.com/embed/${videoId}`;

          return (
            <div key={index} className="video-item youtube-video">
              {videoItem.title && videoItem.title.trim() && (
                <p className="video-caption">{videoItem.title}</p>
              )}
              <div className="youtube-embed-container">
                <iframe
                  src={embedUrl}
                  title={`YouTube video ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="youtube-iframe"
                ></iframe>
              </div>
              {videoItem.loreTitle && videoItem.loreTitle.trim() && (
                <p className="video-caption video-small-caption">
                  "
                  {getNestedValue(gameDataSources.default, videoItem.loreTitle)}
                  "
                </p>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  // Handle click for DOM names
  const handleDomClick = (index: number | null) => {
    if (index === null) {
      setSelectedImage(null);
    } else if (map.domImages && map.domImages[index]) {
      setSelectedImage(map.domImages[index]);
    }
  };

  // Determine which image to display
  const displayImage = selectedImage || map.backgroundImage;

  // Render content based on active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case "loading": {
        // Get loading tips for the selected version, filtering out undefined
        const tips = map.loadingTips
          .map((tip) => getNestedValue(activeLoadingTabData.gameData, tip))
          .filter((tip) => tip !== undefined);

        if (tips.length === 0) {
          return (
            <div className="long-text">
              <p>No loading screen flavor available.</p>
            </div>
          );
        }

        return (
          <div className="long-text">
            {showLoadingVersionTabs && (
              <div
                className="tab-selector-container"
                style={{ marginBottom: "15px" }}
              >
                {filteredTabs.map((tab, index) => (
                  <span
                    key={tab.key}
                    className={`tab-selector ${
                      selectedVersionIndex === index ? "active" : ""
                    }`}
                    onClick={() => setSelectedVersionIndex(index)}
                  >
                    {tab.label}
                  </span>
                ))}
              </div>
            )}
            {tips.map((tip, index) => (
              <p key={index}>{tip}</p>
            ))}
          </div>
        );
      }
      case "website":
        return (
          <div className="long-text">
            <JsonValue
              path={map.websiteDescription || ""}
              gameData={youtubeWebsiteData}
            />
          </div>
        );
      case "youtube":
        return (
          <div className="long-text">
            <JsonValue
              path={map.youtubeDescription || ""}
              gameData={youtubeWebsiteData}
            />
          </div>
        );
      case "youtubeME":
        return (
          <div className="long-text">
            <JsonValue
              path={map.youtubeMEDescription || ""}
              gameData={youtubeWebsiteData}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="mapinfo-page">
      <h1 className="pagetitle">
        {map.group ? `${map.group}: ${map.name}` : map.name}
      </h1>

      <section className="map-content">
        {map.domNames && map.domNames.length > 0 && (
          <div className="tab-selector-container">
            <span
              className={`tab-selector ${
                selectedImage === null ? "active" : ""
              }`}
              onClick={() => handleDomClick(null)}
            >
              Main
            </span>
            {map.domNames.map((name, index) => (
              <span
                key={index}
                className={`tab-selector ${
                  selectedImage === map.domImages[index] ? "active" : ""
                }`}
                onClick={() => handleDomClick(index)}
              >
                {name}
              </span>
            ))}
          </div>
        )}
        <div className="map-mainimage">
          <img
            src={`/textures/map_background/${displayImage}`}
            alt={map.name || map.group}
            className="map-image"
          />
        </div>

        <section className="map-loading">
          {hasExtraTabs && (
            <div className="tab-selector-container">
              <span
                className={`tab-selector ${
                  activeTab === "loading" ? "active" : ""
                }`}
                onClick={() => {
                  setActiveTab("loading");
                  setSelectedVersionIndex(0);
                }}
              >
                Loading Tips
              </span>
              {hasWebsiteDescription && (
                <span
                  className={`tab-selector ${
                    activeTab === "website" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("website")}
                >
                  Website
                </span>
              )}
              {hasYoutubeDescription && (
                <span
                  className={`tab-selector ${
                    activeTab === "youtube" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("youtube")}
                >
                  Youtube
                </span>
              )}
              {hasYoutubeMEDescription && (
                <span
                  className={`tab-selector ${
                    activeTab === "youtubeME" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("youtubeME")}
                >
                  Youtube (ME)
                </span>
              )}
            </div>
          )}

          {renderTabContent()}
        </section>

        {map.videos && map.videos.length > 0 && (
          <section className="map-video-section">
            {renderYouTubeGallery()}
          </section>
        )}

        {map.images && map.images.length > 0 && (
          <section className="map-image-gallery-section">
            <ImageGallery
              images={map.images.map(
                (img) => `/textures/map_screenshots/${map.linkID}/${img}`
              )}
            />
          </section>
        )}
      </section>
    </div>
  );
};

export default MapDetail;
