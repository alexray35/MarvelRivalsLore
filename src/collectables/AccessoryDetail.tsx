// AccessoryDetail.tsx
import React, { useState, useMemo } from "react";
import { AccessoryInfo } from "./AccessoryList";
import { gameDataSources, TAB_ORDER } from "../0manual/GameData";
import { getNestedValue } from "../getNestedValue";

interface AccessoryDetailProps {
  id?: string;
  isBeta?: boolean;
}

interface TabData {
  key: string;
  label: string;
  gameData: object;
  name: string;
  description: string;
  isDifferent: boolean;
}

const AccessoryDetail: React.FC<AccessoryDetailProps> = ({
  id = AccessoryInfo[0]?.id, // Use first element's ID as default
  isBeta = false,
}) => {
  const [selectedVersionIndex, setSelectedVersionIndex] = useState<number>(0);
  const collectable = AccessoryInfo.find((item) => item.id.includes(id));

  if (!collectable) {
    console.error(`No collectable found with id: ${id}`);
    return null;
  }

  // Get the active game data
  const activeGameDataSource = isBeta
    ? gameDataSources.beta
    : gameDataSources.default;
  const activeGameData = activeGameDataSource.data;
  const activeName = getNestedValue(activeGameData, collectable.accessoryName);
  const activeDescription = getNestedValue(
    activeGameData,
    collectable.accessoryDescription
  );

  // Get content from all data sources and check for differences
  const allTabs: TabData[] = useMemo(() => {
    // First create a map of all available tabs
    const tabsMap = new Map();

    Object.entries(gameDataSources).forEach(([key, gameDataSource]) => {
      const name = getNestedValue(
        gameDataSource.data,
        collectable.accessoryName
      );
      const description = getNestedValue(
        gameDataSource.data,
        collectable.accessoryDescription
      );

      // Only include if content exists
      if (name === undefined && description === undefined) return;

      // Check if content is different from active content
      const isDifferent =
        JSON.stringify(name) !== JSON.stringify(activeName) ||
        JSON.stringify(description) !== JSON.stringify(activeDescription);

      tabsMap.set(key, {
        key,
        label: gameDataSource.displayName,
        gameData: gameDataSource.data,
        name,
        description,
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
  }, [
    collectable.accessoryName,
    collectable.accessoryDescription,
    activeName,
    activeDescription,
  ]);

  // Filter tabs to only show those with differences (plus the default/current tab)
  const filteredTabs = allTabs.filter(
    (tab) => tab.isDifferent || tab.key === "default"
  );

  // Only show tabs if there are multiple versions with differences
  const showTabs = filteredTabs.length > 1;

  // Set the active tab data
  const activeTabData = filteredTabs[selectedVersionIndex] || filteredTabs[0];

  return (
    <div className="collectable-detail">
      <div className="subsection-container">
        <div className="subsection-content">
          <div className="subsection-image-container">
            <img
              src={`.${collectable.accessoryImage}`}
              alt={collectable.accessoryName}
              className="subsection-image"
            />
          </div>
          <div className="subsection-text-container">
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

            <div className="scrollable-area">
              <h2 className="subsection-title">
                {getNestedValue(
                  activeTabData.gameData,
                  collectable.accessoryName
                )}
              </h2>
              <p className="long-text">
                {getNestedValue(
                  activeTabData.gameData,
                  collectable.accessoryDescription
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessoryDetail;
