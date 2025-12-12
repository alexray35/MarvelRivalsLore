import React, { useState, useEffect } from "react";
import { StoryInfo } from "./StoryList";
import JsonValue from "./JsonValue";
import gameDataSources from "./GameData";

interface GalleryStoryProps {
  onStorySelect?: (linkID: string) => void; // Changed to accept linkID
  heroFilter?: string;
  togglesON?: boolean; // New optional parameter
  showOnlyHighlighted?: boolean; // New optional parameter
  showingAllStories?: boolean;
}

const GalleryStory: React.FC<GalleryStoryProps> = ({
  onStorySelect,
  heroFilter,
  togglesON = true, // Default to true for backward compatibility
  showOnlyHighlighted = false, // Default to false for backward compatibility
  showingAllStories = false,
}) => {
  const [currentImages, setImageNames] = useState<string[]>([]);
  const [currentTitles, setStoryTitles] = useState<string[]>([]);
  const [currentContents, setStoryContents] = useState<string[]>([]);
  const [currentHeroes, setStoryHeroes] = useState<string[]>([]);
  const [currentHighlights, setStoryHighlights] = useState<string[]>([]);
  const [currentLinkIDs, setStoryLinkIDs] = useState<string[]>([]); // Added for linkIDs
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [showAllStories, setShowAllStories] =
    useState<boolean>(showingAllStories);

  useEffect(() => {
    try {
      const activeStoryInfo = StoryInfo;

      if (activeStoryInfo.length === 0) {
        throw new Error("No story data found in StoryList");
      }

      const titles = activeStoryInfo.map((info) => info.titlePath);
      const images = activeStoryInfo.map((info) => info.imageName);
      const contents = activeStoryInfo.map((info) => info.contentPath);
      const heroes = activeStoryInfo.map((info) => info.hero);
      const highlights = activeStoryInfo.map((info) => info.highlight);
      const linkIDs = activeStoryInfo.map((info) => info.linkID); // Added linkIDs

      setImageNames(images);
      setStoryTitles(titles);
      setStoryContents(contents);
      setStoryHeroes(heroes);
      setStoryHighlights(highlights);
      setStoryLinkIDs(linkIDs); // Set linkIDs
      setIsLoading(false);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to load story data"
      );
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return <div>Loading gallery...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (currentTitles.length === 0) {
    return <div>No story images found.</div>;
  }

  // Filter stories based on hero filter, highlight, and content availability
  let filteredIndices = currentContents
    .map((content, index) => ({
      content,
      index,
      hero: currentHeroes[index],
      highlight: currentHighlights[index],
      linkID: currentLinkIDs[index], // Added linkID to filter
    }))
    .filter(({ hero }) => !heroFilter || hero === heroFilter)
    .filter(({ highlight }) => !showOnlyHighlighted || highlight?.trim() !== "")
    .filter(({ content }) => showAllStories || content?.trim() !== "")
    .map(({ index }) => index);

  return (
    <div className="gallery-story">
      {togglesON && (
        <div className="gallery-controls">
          {/* Only show toggles if no hero filter is provided */}
          {!heroFilter && (
            <>
              <div className="gallery-toggle">
                <label>
                  <span style={{ marginRight: "10px" }}>
                    {showAllStories
                      ? "Show all stories"
                      : "Show available stories"}
                  </span>
                  <span className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={showAllStories}
                      onChange={() => setShowAllStories(!showAllStories)}
                    />
                    <span className="toggle-slider"></span>
                  </span>
                </label>
              </div>
            </>
          )}
        </div>
      )}
      <div className="gallery-grid">
        {filteredIndices.map((originalIndex) => {
          const title = currentTitles[originalIndex];
          const content = currentContents[originalIndex];
          const image = currentImages[originalIndex];
          const linkID = currentLinkIDs[originalIndex]; // Get linkID
          const hasContent = content?.trim() !== "";
          const highlight = currentHighlights[originalIndex];
          const isHighlighted = highlight?.trim() !== "";

          return (
            <div
              key={originalIndex}
              className={`gallery-item ${
                isHighlighted ? "highlighted-item" : ""
              }`}
              onClick={() => hasContent && onStorySelect?.(linkID)} // Send linkID instead
              style={{ cursor: hasContent ? "pointer" : "default" }}
            >
              <img
                className={`storyimage ${hasContent ? "" : "nocontent"} ${
                  isHighlighted ? "highlighted-image" : ""
                }`}
                src={`/textures/stories/${image}`}
                alt={image}
                loading="lazy"
              />
              <div
                className="image-caption"
                style={{
                  color: hasContent ? "#ffffff" : "#ffffff60",
                }}
              >
                <JsonValue path={title} gameData={gameDataSources.default} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GalleryStory;
