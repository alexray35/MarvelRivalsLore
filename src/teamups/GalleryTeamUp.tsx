import React from "react";
import { TeamUpInfoList } from "../0manual/TeamUpFullList";
import { useNavigate } from "react-router-dom";
import { HeroFullInfoList } from "../0manual/HeroFullList";

interface GalleryTeamUpProps {
  onTeamUpSelect?: (ref: string) => void;
}

const GalleryTeamUp: React.FC<GalleryTeamUpProps> = ({ onTeamUpSelect }) => {
  const navigate = useNavigate();

  const handleTeamUpClick = (name: string) => {
    if (onTeamUpSelect) {
      onTeamUpSelect(name);
    } else {
      // Default behavior if no onTeamUpSelect prop provided
      navigate("/teamup", { state: { ref: name } });
    }
  };

  if (TeamUpInfoList.length === 0) {
    return <div>No team up data found.</div>;
  }

  return (
    <div className="gallery-hero gallery-teamup">
      <div className="gallery-grid">
        {TeamUpInfoList.map((teamUp) => {
          // Get the latest version (last in the version array)
          const latestVersion = teamUp.version[teamUp.version.length - 1];

          const anchorHero = HeroFullInfoList.find(
            (h) => h.displayName === latestVersion.anchor
          );
          const anchorHeroColor = anchorHero?.color || "0c0909ff"; // Default color if no color found

          return (
            <div
              key={teamUp.name}
              className="gallery-item"
              onClick={() => handleTeamUpClick(teamUp.name)}
              style={{
                cursor: "pointer",
              }}
            >
              <div
                className="hero-portrait"
                style={{
                  cursor: "pointer",
                  backgroundColor: "#" + anchorHeroColor,
                }}
              >
                <img
                  className="teamup-icon"
                  src={latestVersion.image}
                  alt={teamUp.name}
                  loading="lazy"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GalleryTeamUp;
