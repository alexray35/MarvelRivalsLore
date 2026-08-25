import React, { useState, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import JsonValue from "../JsonValue";
import GalleryStory from "../stories/GalleryStory";
import { HeroFullInfoList } from "../0manual/HeroFullList"; // Changed import
import { gameDataSources, TAB_ORDER } from "../0manual/GameData";
import { getNestedValue } from "../getNestedValue";

interface HeroDetailProps {
  linkID?: string;
  isBeta?: boolean;
}

interface TabData {
  key: string;
  label: string;
  gameData: object;
  isDifferent: boolean;
}

const HeroDetail: React.FC<HeroDetailProps> = ({
  linkID: propLinkID,
  isBeta = false,
}) => {
  const navigate = useNavigate();
  const { linkID: paramLinkID } = useParams<{ linkID: string }>();
  const [selectedVersionIndex, setSelectedVersionIndex] = useState<number>(0);

  // Use propLinkID if provided, otherwise use the URL parameter, otherwise default
  const heroLinkID = propLinkID || paramLinkID || "IronMan"; // Default fallback

  // Find the hero data matching the provided linkID
  const hero = HeroFullInfoList.find((h) => h.linkID === heroLinkID);

  const handleStorySelect = (linkID: string) => {
    navigate(`/story/${linkID}`);
  };

  if (!hero) {
    console.error(`No hero found with linkID: ${heroLinkID}`);
    return null;
  }

  // Get the active game data
  const activeGameDataSource = isBeta
    ? gameDataSources.beta
    : gameDataSources.default;
  const activeGameData = activeGameDataSource.data;
  const activeDesc = getNestedValue(activeGameData, hero.description);
  const activeLore = getNestedValue(activeGameData, hero.biography);

  // Get content from all data sources and check for differences
  const allTabs: TabData[] = useMemo(() => {
    // First create a map of all available tabs
    const tabsMap = new Map();

    Object.entries(gameDataSources).forEach(([key, gameDataSource]) => {
      const descContent = getNestedValue(gameDataSource.data, hero.description);
      const loreContent = getNestedValue(gameDataSource.data, hero.biography);

      // Only include if both content exists
      if (descContent === undefined || loreContent === undefined) return;

      // Check if content is different from active content
      const isDescDifferent =
        JSON.stringify(descContent) !== JSON.stringify(activeDesc);
      const isLoreDifferent =
        JSON.stringify(loreContent) !== JSON.stringify(activeLore);
      const isDifferent = isDescDifferent || isLoreDifferent;

      tabsMap.set(key, {
        key,
        label: gameDataSource.displayName,
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
  }, [hero.description, hero.biography, activeDesc, activeLore]);

  // Filter tabs to only show those with differences (plus the default/current tab)
  const filteredTabs = allTabs.filter(
    (tab) => tab.isDifferent || tab.key === "default"
  );

  // Only show tabs if there are multiple versions with differences
  const showTabs = filteredTabs.length > 1;

  // Set the active tab data
  const activeTabData = filteredTabs[selectedVersionIndex] || filteredTabs[0];

  return (
    <div className="hero-page">
      {/* Floating character render */}
      <div className="character-render">
        <img
          src={hero.render}
          alt="Character Render"
          className="render-image"
        />
      </div>

      {/* Header section with logo, names, and signature */}
      <header className="character-header">
        <div className="header-content">
          <img
            src={hero.logo}
            alt="Character Logo"
            className="character-logo"
          />
          <div className="name-container">
            <h1 className="subpagetitle heroname">
              <JsonValue
                path={hero.heroName}
                gameData={activeTabData.gameData}
              />
            </h1>
            <h2 className="subpagetitle heroname herorealname">
              <JsonValue
                path={hero.realName}
                gameData={activeTabData.gameData}
              />
            </h2>
          </div>
        </div>
      </header>

      {/* Version selector tabs - only show tabs with differences */}
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

      {/* Description section */}
      <section className="character-content">
        <p className="subpagetitle">Description</p>
        <section className="long-text">
          <p>
            <JsonValue
              path={hero.description}
              gameData={activeTabData.gameData}
            />
          </p>
        </section>
      </section>

      {/* Lore section */}
      <section className="character-content">
        <p className="subpagetitle">Lore</p>
        <section className="long-text">
          <p>
            <JsonValue
              path={hero.biography}
              gameData={activeTabData.gameData}
            />
          </p>
        </section>
      </section>

      {/* Stories section */}
      <section className="character-content">
        <p className="subpagetitle">Stories</p>
        <GalleryStory
          togglesON={false}
          heroFilter={hero.linkID}
          showingAllStories={true}
          onStorySelect={handleStorySelect}
        />
      </section>
    </div>
  );
};

export default HeroDetail;
