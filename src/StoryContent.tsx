// StoryContent.tsx
import React from "react";
import JsonValue from "./JsonValue";
import { LoreItems } from "./LoreList";
import { gameDataSources } from "./GameData";
import { getNestedValue } from "./getNestedValue";

interface StoryProps {
  storyTitlePath: string;
  isBeta?: boolean;
  titleOverride?: string; // Changed from boolean to string
}

const Story: React.FC<StoryProps> = ({
  storyTitlePath,
  isBeta = false,
  titleOverride = "", // Default to empty string
}) => {
  const loreItem = LoreItems.find((item) => item.titlePath === storyTitlePath);
  const activeGameData = isBeta
    ? gameDataSources.beta
    : gameDataSources.default;

  if (!loreItem) {
    console.error(`No lore item found for title path: ${storyTitlePath}`);
    return null;
  }

  return (
    <div className="story-container">
      <h1 className="pagetitle">
        {titleOverride ? (
          titleOverride // Display the override text directly
        ) : (
          <JsonValue path={loreItem.titlePath} gameData={activeGameData} />
        )}
      </h1>
      <img
        className="story-illustration"
        src={loreItem.imagePath}
        alt={getNestedValue(activeGameData, loreItem.titlePath)}
        loading="lazy"
      />
      <div className="story-content">
        <section className="long-text">
          <JsonValue path={loreItem.contentPath} gameData={activeGameData} />
        </section>
      </div>
    </div>
  );
};

export default Story;
