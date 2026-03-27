// GalleryCollectable.tsx
import React from "react";
import { CollectableInfo } from "./CollectableList";

interface GalleryCollectableProps {
  onCollectableSelect: (id: string) => void;
}

const GalleryCollectable: React.FC<GalleryCollectableProps> = ({
  onCollectableSelect,
}) => {
  if (CollectableInfo.length === 0) {
    return <div>No collectable data found.</div>;
  }

  return (
    <div className="gallery-hero gallery-collect">
      <div className="gallery-grid">
        {CollectableInfo.map((collectable) => (
          <div
            key={collectable.id}
            className="gallery-item"
            onClick={() => onCollectableSelect(collectable.id)}
            style={{ cursor: "pointer" }}
          >
            <img
              className="hero-portrait"
              src={collectable.collectableImage}
              alt={collectable.collectableName}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryCollectable;
