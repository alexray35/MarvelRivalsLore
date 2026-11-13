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
  gameData: object;
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
  const activeTitle = getNestedValue(activeGameData, loreItem.titlePath);

  // Build the chronological key list: TAB_ORDER is newest -> oldest, so we
  // reverse it to walk oldest -> newest for the rolling diff. Any keys not
  // present in TAB_ORDER are appended at the *oldest* end so they never
  // disturb the known chronology.
  const orderedKeys = useMemo(() => {
    const known = TAB_ORDER.filter((key) => key in gameDataSources);
    const knownSet = new Set(known);
    const extras = Object.keys(gameDataSources).filter(
      (key) => !knownSet.has(key)
    );
    return [...extras, ...[...known].reverse()];
  }, []);

  // Walk oldest -> newest. First source that has the content path becomes the
  // initial "current"; each time a later source differs, we emit the previous
  // "current" as a tab and adopt the new value. The final "current" is always
  // emitted as the last (newest) tab.
  const versionTabs: TabData[] = useMemo(() => {
    const tabs: TabData[] = [];
    let current: TabData | null = null;
    let currentContent: string | undefined;

    for (const key of orderedKeys) {
      const source = gameDataSources[key];
      if (!source) continue;

      const content = getNestedValue(source.data, loreItem.contentPath);
      if (content === undefined) continue; // skip sources missing this story

      const serialized = JSON.stringify(content);

      if (current === null) {
        current = { key, label: source.displayName, gameData: source.data };
        currentContent = serialized;
        continue;
      }

      if (serialized !== currentContent) {
        tabs.push(current);
        current = { key, label: source.displayName, gameData: source.data };
        currentContent = serialized;
      }
    }

    if (current !== null) {
      tabs.push(current);
    }

    // `tabs` is oldest -> newest; reverse so the UI shows newest first.
    return tabs.reverse();
  }, [loreItem.contentPath, orderedKeys]);

  // Titles across all sources that differ from the active one.
  const previousTitles = useMemo(() => {
    const titles = new Set<string>();

    Object.values(gameDataSources).forEach((source) => {
      const title = getNestedValue(source.data, loreItem.titlePath);
      if (title && title !== activeTitle && typeof title === "string") {
        titles.add(title);
      }
    });

    return Array.from(titles).filter((title) => title.trim() !== "");
  }, [loreItem.titlePath, activeTitle]);

  const activeTabData = versionTabs[selectedVersionIndex] ?? versionTabs[0];

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

      <div className="tabspacing">
        <div className="tab-selector-container">
          {versionTabs.map((tab, index) => (
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
