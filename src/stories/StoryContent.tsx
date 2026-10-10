// StoryContent.tsx
import React, { useState, useMemo } from "react";
import JsonValue from "../JsonValue";
import { LoreItems } from "../LoreList";
import { gameDataSources, TAB_ORDER } from "../0manual/GameData";
import { getNestedValue } from "../getNestedValue";

interface StoryProps {
  storyLinkID: string;
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
  storyLinkID,
  isBeta = false,
  titleOverride = "",
}) => {
  const [selectedVersionIndex, setSelectedVersionIndex] = useState<number>(0);
  const loreItem = LoreItems.find((item) => item.linkID === storyLinkID);

  if (!loreItem) {
    console.error(`No lore item found for link ID: ${storyLinkID}`);
    return null;
  }

  const activeGameDataSource = isBeta
    ? gameDataSources.beta
    : gameDataSources.default;
  const activeGameData = activeGameDataSource.data;
  const activeContent = getNestedValue(activeGameData, loreItem.contentPath);
  const activeTitle = getNestedValue(activeGameData, loreItem.titlePath);

  const allTabs: TabData[] = useMemo(() => {
    const tabsMap = new Map<string, TabData>();

    Object.entries(gameDataSources).forEach(([key, gameDataSource]) => {
      const content = getNestedValue(gameDataSource.data, loreItem.contentPath);
      if (content === undefined) return;

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

    const orderedTabs: TabData[] = [];

    TAB_ORDER.forEach((key) => {
      const tab = tabsMap.get(key);
      if (tab) {
        orderedTabs.push(tab);
        tabsMap.delete(key);
      }
    });

    tabsMap.forEach((tab) => {
      orderedTabs.push(tab);
    });

    return orderedTabs;
  }, [loreItem.contentPath, activeContent]);

  const previousTitles = useMemo(() => {
    const titles = new Set<string>();

    Object.entries(gameDataSources).forEach(([, gameDataSource]) => {
      // FIX: use .data here, not the wrapper object
      const title = getNestedValue(gameDataSource.data, loreItem.titlePath);
      if (title && title !== activeTitle && typeof title === "string") {
        titles.add(title);
      }
    });

    return Array.from(titles).filter((title) => title.trim() !== "");
  }, [loreItem.titlePath, activeTitle]);

  const filteredTabs = allTabs.filter(
    (tab) => tab.isDifferent || tab.key === "default"
  );

  const showTabs = filteredTabs.length > 1;

  // FIX: guard against empty filteredTabs
  const activeTabData = filteredTabs[selectedVersionIndex] ?? filteredTabs[0];

  // FIX: render a safe fallback instead of crashing
  if (!activeTabData) {
    return (
      <div className="story-container">
        <h1 className="mainpagetitle">{titleOverride || "???"}</h1>
        <img
          className="story-illustration"
          src={loreItem.imagePath}
          alt={
            typeof activeTitle === "string" && activeTitle.trim() !== ""
              ? activeTitle
              : titleOverride || ""
          }
          loading="lazy"
        />
        <div className="story-content">
          <section className="long-text">
            <p>Story not yet released.</p>
          </section>
        </div>
      </div>
    );
  }

  return (
    <div className="story-container">
      <h1 className="mainpagetitle">
        {titleOverride ? (
          titleOverride
        ) : (
          <JsonValue path={loreItem.titlePath} gameData={activeGameData} />
        )}
      </h1>

      {previousTitles.length > 0 && (
        <div className="previous-titles">
          Title in BETA or before story release: {previousTitles.join(", ")}
        </div>
      )}

      <img
        className="story-illustration"
        src={loreItem.imagePath}
        alt={
          typeof activeTitle === "string" && activeTitle.trim() !== ""
            ? activeTitle
            : titleOverride || ""
        }
        loading="lazy"
      />

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
