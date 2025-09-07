import React, { useState } from "react";
import { TeamUps } from "./TeamUpList";
import { HeroInfo } from "./HeroList";
import { getNestedValue } from "./getNestedValue";
import gameDataSources, { type GameData } from "./GameData";
import JsonValue from "./JsonValue";
import GalleryHero from "./GalleryHero";

interface TeamUpDetailProps {
  ref?: string;
}

const TeamUpDetail: React.FC<TeamUpDetailProps> = ({
  ref = "Ragnarok Rebirth",
}) => {
  const [selectedVersionIndex, setSelectedVersionIndex] = useState<
    number | null
  >(null);

  const teamUp = TeamUps.find((item) => item.ref === ref);

  if (!teamUp) {
    console.error(`No team up found with ref: ${ref}`);
    return null;
  }

  const sortedVersions = [...teamUp.versions].sort(
    (a, b) => parseInt(b.version) - parseInt(a.version)
  );

  const displayVersionIndex =
    selectedVersionIndex !== null ? selectedVersionIndex : 0;
  const displayVersion = sortedVersions[displayVersionIndex];

  // Get the appropriate data source
  const dataSource: GameData =
    displayVersion.override && gameDataSources[displayVersion.override]
      ? gameDataSources[displayVersion.override]
      : gameDataSources.default;

  // Create hero list: anchor first, then followers
  const teamUpHeroes = [];
  const anchorHero = HeroInfo.find((h) => h.heroName === displayVersion.anchor);
  if (anchorHero) teamUpHeroes.push(anchorHero);

  displayVersion.followers.forEach((followerName) => {
    const follower = HeroInfo.find((h) => h.heroName === followerName);
    if (follower) teamUpHeroes.push(follower);
  });

  return (
    <div className="teamup-detail">
      <div className="tabspacing">
        <div className="tab-selector-container">
          {sortedVersions.map((version, index) => (
            <span
              key={version.version}
              className={`tab-selector ${
                displayVersionIndex === index ? "active" : ""
              }`}
              onClick={() => setSelectedVersionIndex(index)}
            >
              Version {version.version}
            </span>
          ))}
        </div>
      </div>

      <div className="subsection-container">
        <div className="subsection-content">
          <div className="subsection-image-container">
            <img
              src={displayVersion.image}
              alt={displayVersion.name}
              className="subsection-image"
            />
          </div>
          <div className="subsection-text-container">
            <h2 className="subsection-title">
              {getNestedValue(dataSource, displayVersion.name)}
            </h2>
            <div className="teamuptext">
              <p className="long-text">
                <JsonValue
                  path={displayVersion.description}
                  gameData={dataSource}
                />
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Gallery Section */}
      <div className="teamup-heroes-section">
        <GalleryHero heroes={teamUpHeroes} />
      </div>
    </div>
  );
};

export default TeamUpDetail;
