// AccessoryDetail.tsx
import React from "react";
import { AccessoryInfo } from "./AccessoryList";
import gameDataSources from "./GameData";
import { getNestedValue } from "./getNestedValue";

interface AccessoryDetailProps {
  id?: string;
}

const AccessoryDetail: React.FC<AccessoryDetailProps> = ({
  id = AccessoryInfo[0]?.id, // Use first element's ID as default
}) => {
  const collectable = AccessoryInfo.find((item) => item.id.includes(id));

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
              src={`.${collectable.accessoryImage}`}
              alt={collectable.accessoryName}
              className="subsection-image"
            />
          </div>
          <div className="subsection-text-container">
            <h2 className="subsection-title">
              {getNestedValue(
                gameDataSources.default,
                collectable.accessoryName
              )}
            </h2>
            <p className="long-text">
              {getNestedValue(
                gameDataSources.default,
                collectable.accessoryDescription
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessoryDetail;
