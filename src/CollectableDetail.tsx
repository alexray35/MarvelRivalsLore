// CollectableDetail.tsx
import React from "react";
import { CollectableInfo } from "./CollectableList";
import gameDataSources from "./GameData";
import { getNestedValue } from "./getNestedValue";

interface CollectableDetailProps {
  id?: string;
}

const CollectableDetail: React.FC<CollectableDetailProps> = ({
  id = CollectableInfo[0]?.id, // Use first element's ID as default
}) => {
  const collectable = CollectableInfo.find((item) => item.id.includes(id));

  if (!collectable) {
    console.error(`No collectable found with id: ${id}`);
    return null;
  }

  return (
    <div className="collectable-detail">
      <div className="subsection-container">
        <div className="subsection-content">
          <div className="subsection-image-container">
            <img
              src={`.${collectable.collectableImage}`}
              alt={collectable.collectableName}
              className="subsection-image"
            />
          </div>
          <div className="subsection-text-container">
            <h2 className="subsection-title">
              {getNestedValue(
                gameDataSources.default,
                collectable.collectableName
              )}
            </h2>
            <p className="long-text">
              {getNestedValue(
                gameDataSources.default,
                collectable.collectableDescription
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectableDetail;
