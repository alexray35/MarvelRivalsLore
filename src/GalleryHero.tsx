import React from "react";
import { HeroInfo as DefaultHeroInfo } from "./HeroList";
import { useNavigate } from "react-router-dom";

interface GalleryHeroProps {
  onHeroSelect?: (linkID: string) => void; // Changed from id to linkID
  heroes?: Array<{
    id: string;
    heroName: string;
    heroImage: string;
    linkID: string;
  }>; // Added linkID
}

const GalleryHero: React.FC<GalleryHeroProps> = ({
  onHeroSelect,
  heroes = DefaultHeroInfo,
}) => {
  const navigate = useNavigate();

  const handleHeroClick = (linkID: string) => {
    // Changed from id to linkID
    if (onHeroSelect) {
      onHeroSelect(linkID);
    } else {
      navigate(`/hero/${linkID}`); // Use URL parameter
    }
  };

  if (heroes.length === 0) {
    return <div>No hero data found.</div>;
  }

  return (
    <div className="gallery-hero">
      <div className="gallery-grid">
        {heroes.map((hero) => (
          <div
            key={hero.linkID} // Use linkID as key
            className="gallery-item"
            onClick={() => handleHeroClick(hero.linkID)} // Pass linkID
            style={{ cursor: "pointer" }}
          >
            <img
              className="hero-portrait"
              src={hero.heroImage}
              alt={hero.heroName}
              loading="lazy"
            />
            <div className="image-caption">{hero.heroName}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryHero;
