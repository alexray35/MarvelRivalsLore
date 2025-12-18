import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { MapInfoRegular, MapInfoArcade } from "./MapList";
import { getNestedValue } from "./getNestedValue";
import gameDataSources from "./GameData";

interface MapDetailProps {
  linkID?: string;
  isArcade?: boolean;
}

const MapDetail: React.FC<MapDetailProps> = ({
  linkID: propLinkID,
  isArcade = false,
}) => {
  const { linkID: paramLinkID } = useParams<{ linkID: string }>();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Use propLinkID if provided, otherwise use the URL parameter
  const mapLinkID = propLinkID || paramLinkID || "YggsdrasillPath"; // Default fallback

  // Use the correct map list based on isArcade
  const mapList = isArcade ? MapInfoArcade : MapInfoRegular;

  // Find the map data matching the provided linkID
  const map = mapList.find((m) => m.linkID === mapLinkID);

  if (!map) {
    console.error(`No map found with linkID: ${mapLinkID}`);
    return null;
  }

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
      return url; // YouTube video IDs are 11 characters
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
              {videoItem.caption && (
                <p className="video-caption">{videoItem.caption}</p>
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

  return (
    <div className="mapinfo-page">
      <h1 className="pagetitle">
        {map.name ? `${map.group}: ${map.name}` : map.group}
      </h1>

      {/* Map image and loading tips section */}
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
        {map.loadingTips && map.loadingTips.length > 0 && (
          <section className="map-loading">
            <section className="long-text">
              {map.loadingTips.map((tip, index) => (
                <p key={index}>
                  {getNestedValue(gameDataSources.default, tip)}
                </p>
              ))}
            </section>
          </section>
        )}
      </section>

      {/* YouTube videos section */}
      {map.videos && map.videos.length > 0 && (
        <section className="map-video-section">
          {renderYouTubeGallery()}
        </section>
      )}
    </div>
  );
};

export default MapDetail;
