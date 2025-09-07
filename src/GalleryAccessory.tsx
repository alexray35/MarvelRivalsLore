// GalleryAccessory.tsx
import React from "react";
import { AccessoryInfo } from "./AccessoryList";
import { getNestedValue } from "./getNestedValue";
import gameDataSources from "./GameData";

interface GalleryAccessoryProps {
  onAccessorySelect: (id: string) => void;
}

const GalleryAccessory: React.FC<GalleryAccessoryProps> = ({
  onAccessorySelect,
}) => {
  if (AccessoryInfo.length === 0) {
    return <div>No collectable data found.</div>;
  }

  return (
    <div className="gallery-hero gallery-collect">
      <div className="gallery-grid">
        {AccessoryInfo.map((collectable) => (
          <div
            key={collectable.id}
            className="gallery-item"
            onClick={() => onAccessorySelect(collectable.id)}
            style={{ cursor: "pointer" }}
          >
            <img
              className="hero-portrait"
              src={collectable.accessoryImage}
              alt={collectable.accessoryName}
              loading="lazy"
            />
            <div className="image-caption">
              {getNestedValue(
                gameDataSources.default,
                collectable.accessoryName
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryAccessory;
