import React from "react";
import { TeamUps } from "./TeamUpList";
import { useNavigate } from "react-router-dom";
import { HeroInfo } from "./HeroList";

interface GalleryTeamUpProps {
  onTeamUpSelect?: (ref: string) => void;
}

const GalleryTeamUp: React.FC<GalleryTeamUpProps> = ({ onTeamUpSelect }) => {
  const navigate = useNavigate();

  const handleTeamUpClick = (ref: string) => {
    if (onTeamUpSelect) {
      onTeamUpSelect(ref);
    } else {
      // Default behavior if no onTeamUpSelect prop provided
      navigate("/teamup", { state: { ref } });
    }
  };

  if (TeamUps.length === 0) {
    return <div>No team up data found.</div>;
  }

  return (
    <div className="gallery-hero gallery-teamup">
      <div className="gallery-grid">
        {TeamUps.map((teamUp) => {
          // Get the latest version (last in the sorted array)
          const latestVersion = teamUp.versions[teamUp.versions.length - 1];

          const anchorHero = HeroInfo.find(
            (h) => h.heroName === latestVersion.anchor
          );
          const anchorHeroColor = anchorHero?.heroColor || "#ffffff"; // Default to white if no color found

          return (
            <div
              key={teamUp.ref}
              className="gallery-item"
              onClick={() => handleTeamUpClick(teamUp.ref)}
              style={{
                cursor: "pointer",
              }}
            >
              <img
                className="hero-portrait"
                src={latestVersion.image}
                alt={teamUp.ref}
                loading="lazy"
                style={{
                  cursor: "pointer",
                  backgroundColor: "#" + anchorHeroColor,
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GalleryTeamUp;
