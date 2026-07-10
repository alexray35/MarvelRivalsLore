// StoryContent.tsx
import React, { useState, useMemo } from "react";
import JsonValue from "../JsonValue";
import { LoreItems } from "../LoreList";
import { gameDataSources, TAB_ORDER } from "../0manual/GameData";
import { getNestedValue } from "../getNestedValue";

interface StoryProps {
  storyLinkID: string; // Changed from storyTitlePath to storyLinkID
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

const Story: React.FC<StoryProps> = ({
  storyLinkID, // Changed from storyTitlePath to storyLinkID
  isBeta = false,
  titleOverride = "",
}) => {
  const [selectedVersionIndex, setSelectedVersionIndex] = useState<number>(0);
  const loreItem = LoreItems.find((item) => item.linkID === storyLinkID); // Changed to use linkID

  if (!loreItem) {
    console.error(`No lore item found for link ID: ${storyLinkID}`);
    return null;
  }

  // Get the active game data
  const activeGameDataSource = isBeta
    ? gameDataSources.beta
    : gameDataSources.default;
  const activeGameData = activeGameDataSource.data;
  const activeContent = getNestedValue(activeGameData, loreItem.contentPath);
  const activeTitle = getNestedValue(activeGameData, loreItem.titlePath);

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

  // Get all previous titles (excluding the active title)
  const previousTitles = useMemo(() => {
    const titles = new Set<string>();

    Object.entries(gameDataSources).forEach((gameDataSource) => {
      const title = getNestedValue(gameDataSource, loreItem.titlePath);
      // Only include if title exists and is different from active title
      if (title && title !== activeTitle && typeof title === "string") {
        titles.add(title);
      }
    });

    // Convert to array and filter out any empty strings
    return Array.from(titles).filter((title) => title.trim() !== "");
  }, [loreItem.titlePath, activeTitle]);

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

      {/* Previous titles section */}
      {previousTitles.length > 0 && (
        <div className="previous-titles">
          Title in BETA or before story release: {previousTitles.join(", ")}
        </div>
      )}

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
