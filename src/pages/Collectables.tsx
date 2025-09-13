// Collectables.tsx
import { useState } from "react";
import GalleryCollectable from "../GalleryCollectable";
import CollectableDetail from "../CollectableDetail";
import { CollectableInfo } from "../CollectableList";
import GalleryAccessory from "../GalleryAccessory";
import AccessoryDetail from "../AccessoryDetail";
import { AccessoryInfo } from "../AccessoryList";
import "../CollectablePage.css";

function CollectablesPage() {
  const [selectedCollectableId, setSelectedCollectableId] = useState<string>(
    CollectableInfo[0]?.id || "0180011"
  ); // Use first element's ID as default with fallback

  const [selectedAccessoryId, setSelectedAccessoryId] = useState<string>(
    AccessoryInfo[0]?.id || "0180011"
  ); // Use first element's ID as default with fallback

  const handleCollectableSelect = (id: string) => {
    setSelectedCollectableId(id);
  };

  const handleAccessorySelect = (id: string) => {
    setSelectedAccessoryId(id);
  };

  return (
    <div className="page">
      <h1 className="pagetitle">Collectables</h1>
      <div className="collectables-container">
        <div className="collectables-gallery">
          <GalleryCollectable onCollectableSelect={handleCollectableSelect} />
        </div>
        <div className="collectables-detail">
          <CollectableDetail id={selectedCollectableId} />
        </div>
      </div>

      <h1 className="pagetitle">Accessories</h1>
      <div className="collectables-container">
        <div className="collectables-gallery">
          <GalleryAccessory onAccessorySelect={handleAccessorySelect} />
        </div>
        <div className="collectables-detail">
          <AccessoryDetail id={selectedAccessoryId} />
        </div>
      </div>
    </div>
  );
}

export default CollectablesPage;
