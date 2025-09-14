import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import JsonValue from "./JsonValue";
import GalleryStory from "./GalleryStory";
import { HeroInfo } from "./HeroList";

interface HeroDetailProps {
  linkID?: string; // Changed from id to linkID
}

const HeroDetail: React.FC<HeroDetailProps> = ({ linkID: propLinkID }) => {
  const navigate = useNavigate();
  const { linkID: paramLinkID } = useParams<{ linkID: string }>(); // Get linkID from URL

  // Use propLinkID if provided, otherwise use the URL parameter, otherwise default
  const heroLinkID = propLinkID || paramLinkID || "IronMan"; // Default fallback

  // Find the hero data matching the provided linkID
  const hero = HeroInfo.find((h) => h.linkID === heroLinkID);

  const handleStorySelect = (linkID: string) => {
    navigate(`/story/${linkID}`);
  };

  if (!hero) {
    console.error(`No hero found with linkID: ${heroLinkID}`);
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
            <h1 className="subpagetitle heroname">{hero.heroName}</h1>
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
        <GalleryStory
          heroFilter={hero.heroName} // Use heroName for filtering
          showingAllStories={true}
          onStorySelect={handleStorySelect}
        />
      </section>
    </div>
  );
};

export default HeroDetail;
