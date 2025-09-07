import React from "react";
import { HeroInfo as DefaultHeroInfo } from "./HeroList";
import { useNavigate } from "react-router-dom";

interface GalleryHeroProps {
  onHeroSelect?: (id: string) => void;
  heroes?: Array<{ id: string; heroName: string; heroImage: string }>;
}

const GalleryHero: React.FC<GalleryHeroProps> = ({
  onHeroSelect,
  heroes = DefaultHeroInfo,
}) => {
  const navigate = useNavigate();

  const handleHeroClick = (id: string) => {
    if (onHeroSelect) {
      onHeroSelect(id);
    } else {
      navigate("/hero", { state: { id } });
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
            key={hero.id}
            className="gallery-item"
            onClick={() => handleHeroClick(hero.id)}
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
