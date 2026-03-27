// Galleryskin.tsx
import React from "react";
import { SkinsInfo } from "./SkinsList";

interface GallerySkinProps {
  onSkinSelect: (id: string) => void;
}

const GalleryCollectable: React.FC<GallerySkinProps> = ({ onSkinSelect }) => {
  if (SkinsInfo.length === 0) {
    return <div>No collectable data found.</div>;
  }

  return (
    <div className="gallery-hero gallery-skins">
      <div className="gallery-grid">
        {SkinsInfo.map((skin) => (
          <div
            key={skin.id}
            className="gallery-item"
            onClick={() => onSkinSelect(skin.id)}
            style={{ cursor: "pointer" }}
          >
            <img
              className="hero-portrait"
              src={skin.skinIcon}
              alt={skin.skinName}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryCollectable;
