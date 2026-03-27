import React, { useState, useEffect } from "react";
import { TeamUpInfoList } from "../0manual/TeamUpFullList";
import { HeroFullInfoList } from "../0manual/HeroFullList";
import gameDataSources, { type GameData } from "../0manual/GameData";
import JsonValue from "../JsonValue";
import GalleryHero from "../heroes/GalleryHero";

interface TeamUpDetailProps {
  ref?: string;
}

const TeamUpDetail: React.FC<TeamUpDetailProps> = ({
  ref = "Ragnarok Rebirth",
}) => {
  const [selectedVersionIndex, setSelectedVersionIndex] = useState<
    number | null
  >(null);

  const teamUp = TeamUpInfoList.find((item) => item.name === ref);

  // Reset selectedVersionIndex when ref changes (new team up is selected)
  useEffect(() => {
    setSelectedVersionIndex(null);
  }, [ref]);

  if (!teamUp) {
    console.error(`No team up found with ref: ${ref}`);
    return null;
  }

  const sortedVersions = [...teamUp.version].reverse(); // Reverse to show newest first

  // Use null coalescing to default to 0, but also ensure index is within bounds
  const displayVersionIndex =
    selectedVersionIndex !== null &&
    selectedVersionIndex < sortedVersions.length
      ? selectedVersionIndex
      : 0;
  const displayVersion = sortedVersions[displayVersionIndex];

  // Get the appropriate data source - using season instead of override
  const dataSource: GameData =
    displayVersion.season && gameDataSources[displayVersion.season]
      ? gameDataSources[displayVersion.season]
      : gameDataSources.default;

  // Create hero name list: anchor first, then followers
  const teamUpHeroNames = [];

  // Add anchor hero if it exists in HeroFullInfoList
  const anchorHero = HeroFullInfoList.find(
    (h) => h.displayName === displayVersion.anchor
  );
  if (anchorHero) {
    teamUpHeroNames.push(anchorHero.heroName); // Push heroName, not displayName
  }

  // Add followers if they exist in HeroFullInfoList
  displayVersion.follower.forEach((followerName) => {
    const followerHero = HeroFullInfoList.find(
      (h) => h.displayName === followerName
    );
    if (followerHero) {
      teamUpHeroNames.push(followerHero.heroName); // Push heroName, not displayName
    }
  });

  return (
    <div className="teamup-detail">
      <div className="tabspacing">
        <div className="tab-selector-container">
          {sortedVersions.map((_, index) => (
            <span
              key={index}
              className={`tab-selector ${
                displayVersionIndex === index ? "active" : ""
              }`}
              onClick={() => setSelectedVersionIndex(index)}
            >
              Version {sortedVersions.length - index}
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
              <JsonValue path={displayVersion.name} gameData={dataSource} />
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
        <GalleryHero heroNames={teamUpHeroNames} />
      </div>
    </div>
  );
};

export default TeamUpDetail;
