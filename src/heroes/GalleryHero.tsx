import React from "react";
import { HeroFullInfoList } from "../0manual/HeroFullList";
import { useNavigate } from "react-router-dom";
import { getNestedValue } from "../getNestedValue";
import { gameDataSources } from "../0manual/GameData";

interface GalleryHeroProps {
  onHeroSelect?: (linkID: string) => void;
  heroNames?: string[]; // Accept hero names instead of full hero objects
}

const GalleryHero: React.FC<GalleryHeroProps> = ({
  onHeroSelect,
  heroNames = HeroFullInfoList.map((hero) => hero.heroName),
}) => {
  const navigate = useNavigate();

  // Look up hero details from HeroFullInfoList
  const heroes = heroNames
    .map((heroName) => {
      const hero = HeroFullInfoList.find((h) => h.heroName === heroName);
      if (!hero) return null;

      return {
        id: hero.id,
        heroName: getNestedValue(gameDataSources.default.data, hero.heroName),
        heroImage: hero.portrait,
        linkID: hero.linkID,
        heroColor: hero.color,
      };
    })
    .filter((hero): hero is NonNullable<typeof hero> => hero !== null);

  const handleHeroClick = (linkID: string) => {
    if (onHeroSelect) {
      onHeroSelect(linkID);
    } else {
      navigate(`/hero/${linkID}`);
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
            key={hero.linkID}
            className="gallery-item"
            onClick={() => handleHeroClick(hero.linkID)}
            style={{ cursor: "pointer" }}
          >
            <div
              className="hero-portrait"
              style={{
                cursor: "pointer",
                background: "#" + hero.heroColor,
              }}
            >
              <img
                className="hero-icon"
                src={hero.heroImage}
                alt={hero.heroName}
                loading="lazy"
              />
            </div>
            <div className="image-caption">{hero.heroName}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryHero;
