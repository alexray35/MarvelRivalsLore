// StoryContent.tsx
import React, { useState, useMemo } from "react";
import JsonValue from "./JsonValue";
import { LoreItems } from "./LoreList";
import { gameDataSources } from "./GameData";
import { getNestedValue } from "./getNestedValue";

interface StoryProps {
  storyTitlePath: string;
  isBeta?: boolean;
  titleOverride?: string;
}

interface TabData {
  key: string;
  label: string;
  content: any;
  gameData: object;
  isDifferent: boolean;
}

// Define the desired order for the tabs (newest to oldest)
const TAB_ORDER = [
  "default", // Current
  "season3_5", // Season 3.5
  "season3FF", // Season 3 FF
  "season3", // Season 3
  "season2_5", // Season 2.5
  "season2", // Season 2
  "season0", // Season 0
  "beta", // Beta
  "limbo", // Limbo
];

const Story: React.FC<StoryProps> = ({
  storyTitlePath,
  isBeta = false,
  titleOverride = "",
}) => {
  const [selectedVersionIndex, setSelectedVersionIndex] = useState<number>(0);
  const loreItem = LoreItems.find((item) => item.titlePath === storyTitlePath);

  if (!loreItem) {
    console.error(`No lore item found for title path: ${storyTitlePath}`);
    return null;
  }

  // Get the active game data
  const activeGameDataSource = isBeta
    ? gameDataSources.beta
    : gameDataSources.default;
  const activeGameData = activeGameDataSource.data;
  const activeContent = getNestedValue(activeGameData, loreItem.contentPath);

  // Get content from all data sources and check for differences
  const allTabs: TabData[] = useMemo(() => {
    // First create a map of all available tabs
    const tabsMap = new Map();

    Object.entries(gameDataSources).forEach(([key, gameDataSource]) => {
      const content = getNestedValue(gameDataSource.data, loreItem.contentPath);
      // Only include if content exists
      if (content === undefined) return;

      // Check if content is different from active content
      const isDifferent =
        JSON.stringify(content) !== JSON.stringify(activeContent);

      tabsMap.set(key, {
        key,
        label: gameDataSource.displayName,
        content,
        gameData: gameDataSource.data,
        isDifferent,
      });
    });

    // Now create the array in the desired order, filtering out missing keys
    const orderedTabs: TabData[] = [];

    TAB_ORDER.forEach((key) => {
      const tab = tabsMap.get(key);
      if (tab) {
        orderedTabs.push(tab);
        tabsMap.delete(key); // Remove from map so we don't add it again
      }
    });

    // Add any remaining tabs that weren't in the predefined order
    tabsMap.forEach((tab) => {
      orderedTabs.push(tab);
    });

    return orderedTabs;
  }, [loreItem.contentPath, activeContent]);

  // Filter tabs to only show those with differences (plus the default/current tab)
  const filteredTabs = allTabs.filter(
    (tab) => tab.isDifferent || tab.key === "default"
  );

  // Only show tabs if there are multiple versions with differences
  const showTabs = filteredTabs.length > 1;

  // Set the active tab data
  const activeTabData = filteredTabs[selectedVersionIndex] || filteredTabs[0];

  return (
    <div className="story-container">
      <h1 className="mainpagetitle">
        {titleOverride ? (
          titleOverride
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

      {/* Tabs navigation - only show tabs with differences */}
      {showTabs && (
        <div className="tabspacing">
          <div className="tab-selector-container">
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
        </div>
      )}

      <div className="story-content">
        <section className="long-text">
          <JsonValue
            path={loreItem.contentPath}
            gameData={activeTabData.gameData}
          />
        </section>
      </div>
    </div>
  );
};

export default Story;
