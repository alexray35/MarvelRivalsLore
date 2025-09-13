// CollectableDetail.tsx
import React from "react";
import { SkinsInfo } from "./SkinsList";
import gameDataSources from "./GameData";
import { getNestedValue } from "./getNestedValue";

interface SkinDetailProps {
  id?: string;
}

const SkinDetail: React.FC<SkinDetailProps> = ({
  id = SkinsInfo[0]?.id, // Use first element's ID as default
}) => {
  const collectable = SkinsInfo.find((item) => item.id.includes(id));

  if (!collectable) {
    console.error(`No collectable found with id: ${id}`);
    return null;
  }

  return (
    <div className="collectable-detail skin-detail">
      <div className="subsection-container">
        <div className="subsection-content">
          <div className="subsection-image-container">
            <img
              src={`.${collectable.skinRender}`}
              alt={collectable.skinName}
              className="subsection-image skin-image"
            />
          </div>
          <div className="subsection-text-container">
            <h2 className="subsection-title">
              {getNestedValue(gameDataSources.default, collectable.skinName)}
            </h2>
            <p className="long-text skin-source">
              {getNestedValue(gameDataSources.default, collectable.skinSource)}
            </p>
            <p className="long-text">
              {getNestedValue(
                gameDataSources.default,
                collectable.skinDescription
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkinDetail;
