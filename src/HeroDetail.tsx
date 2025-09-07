import React from "react";
import { useNavigate } from "react-router-dom";
import { HeroDetailInfo } from "./HeroDetailList";
import JsonValue from "./JsonValue";
import GalleryStory from "./GalleryStory";
import { HeroInfo } from "./HeroList";

interface HeroDetailProps {
  id?: string; // Optional prop with default value
}

const HeroDetail: React.FC<HeroDetailProps> = ({ id = "1017" }) => {
  const navigate = useNavigate();

  // Find the hero data matching the provided id
  const hero = HeroDetailInfo.find(
    (item) =>
      item.heroRender.includes(id) ||
      item.heroSignature.includes(id) ||
      item.heroLogo.includes(id)
  );

  // Find the hero name from HeroInfo using the id
  const heroData = HeroInfo.find((h) => h.id === id);
  const heroName = heroData?.heroName || "";

  const handleStorySelect = (titlePath: string, contentPath: string) => {
    navigate("/story", { state: { titlePath, contentPath } });
  };

  if (!hero) {
    console.error(`No hero found with id: ${id}`);
    return null;
  }

  return (
    <div className="hero-page">
      {/* Floating character render */}
      <div className="character-render">
        <img
          src={hero.heroRender}
          alt="Character Render"
          className="render-image"
        />
      </div>

      {/* Header section with logo, names, and signature */}
      <header className="character-header">
        <div className="header-content">
          <img
            src={hero.heroLogo}
            alt="Character Logo"
            className="character-logo"
          />
          <div className="name-container">
            <h1 className="subpagetitle heroname">
              <JsonValue path={hero.heroName} />
            </h1>
            <h2 className="subpagetitle heroname herorealname">
              <JsonValue path={hero.heroRealName} />
            </h2>
          </div>
        </div>
      </header>

      {/* Description section */}
      <section className="character-content">
        <p className="subpagetitle">Description</p>
        <section className="long-text">
          <p>
            <JsonValue path={hero.heroDesc} />
          </p>
        </section>
      </section>

      {/* Lore section */}
      <section className="character-content">
        <p className="subpagetitle">Lore</p>
        <section className="long-text">
          <p>
            <JsonValue path={hero.heroLore} />
          </p>
        </section>
      </section>

      {/* Stories section */}
      <section className="character-content">
        <p className="subpagetitle">Stories</p>
        <GalleryStory heroFilter={heroName} onStorySelect={handleStorySelect} />
      </section>
    </div>
  );
};

export default HeroDetail;
