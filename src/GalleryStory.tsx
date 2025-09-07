import React, { useState, useEffect } from "react";
import { StoryInfo, StoryInfoBeta } from "./StoryList";
import JsonValue from "./JsonValue";
import gameDataSources from "./GameData";

interface GalleryStoryProps {
  onStorySelect?: (
    titlePath: string,
    contentPath: string,
    isBeta: boolean
  ) => void;
  heroFilter?: string;
}

const GalleryStory: React.FC<GalleryStoryProps> = ({
  onStorySelect,
  heroFilter,
}) => {
  const [currentImages, setImageNames] = useState<string[]>([]);
  const [currentTitles, setStoryTitles] = useState<string[]>([]);
  const [currentContents, setStoryContents] = useState<string[]>([]);
  const [currentHeroes, setStoryHeroes] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [showAllStories, setShowAllStories] = useState<boolean>(true);
  const [showBetaStories, setShowBetaStories] = useState<boolean>(false); // New state for BETA toggle

  useEffect(() => {
    try {
      const activeStoryInfo = showBetaStories ? StoryInfoBeta : StoryInfo;

      if (activeStoryInfo.length === 0) {
        throw new Error("No story data found in StoryList");
      }

      const titles = activeStoryInfo.map((info) => info.titlePath);
      const images = activeStoryInfo.map((info) => info.imageName);
      const contents = activeStoryInfo.map((info) => info.contentPath);
      const heroes = activeStoryInfo.map((info) => info.hero);

      setImageNames(images);
      setStoryTitles(titles);
      setStoryContents(contents);
      setStoryHeroes(heroes);
      setIsLoading(false);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to load story data"
      );
      setIsLoading(false);
    }
  }, [showBetaStories]); // Add showBetaStories to dependency array

  if (isLoading) {
    return <div>Loading gallery...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (currentTitles.length === 0) {
    return <div>No story images found.</div>;
  }

  // Filter stories based on hero filter if provided
  let filteredIndices = currentContents
    .map((content, index) => ({ content, index, hero: currentHeroes[index] }))
    .filter(({ hero }) => !heroFilter || hero === heroFilter)
    .filter(({ content }) => showAllStories || content?.trim() !== "")
    .map(({ index }) => index);

  return (
    <div className="gallery-story">
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
            <div className="beta gallery-toggle">
              <label>
                <span style={{ marginRight: "10px" }}>
                  {showBetaStories
                    ? "Show BETA stories"
                    : "Show current stories"}
                </span>
                <span className="toggle-switch">
                  <input
                    type="checkbox"
                    checked={showBetaStories}
                    onChange={() => setShowBetaStories(!showBetaStories)}
                  />
                  <span className="toggle-slider"></span>
                </span>
              </label>
            </div>
          </>
        )}
      </div>
      <div className="gallery-grid">
        {filteredIndices.map((originalIndex) => {
          const title = currentTitles[originalIndex];
          const content = currentContents[originalIndex];
          const image = currentImages[originalIndex];
          const hasContent = content?.trim() !== "";

          return (
            <div
              key={originalIndex}
              className={`gallery-item ${showBetaStories ? "beta-item" : ""}`}
              onClick={() =>
                hasContent && onStorySelect?.(title, content, showBetaStories)
              }
              style={{ cursor: hasContent ? "pointer" : "default" }}
            >
              <img
                className={`storyimage ${hasContent ? "" : "nocontent"} ${
                  showBetaStories ? "beta-image" : ""
                }`}
                src={`/textures/stories/${image}`}
                alt={image}
                loading="lazy"
              />
              <div
                className="image-caption"
                style={{
                  color: hasContent
                    ? showBetaStories
                      ? "#36fe89"
                      : "#ffffff"
                    : "#ffffff60",
                }}
              >
                <JsonValue
                  path={title}
                  gameData={
                    showBetaStories
                      ? gameDataSources.beta
                      : gameDataSources.default
                  }
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GalleryStory;
