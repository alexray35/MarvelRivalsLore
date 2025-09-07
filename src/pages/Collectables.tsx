// Collectables.tsx
import { useState } from "react";
import GalleryCollectable from "../GalleryCollectable";
import CollectableDetail from "../CollectableDetail";
import { CollectableInfo } from "../CollectableList";
import "../CollectablePage.css";

function CollectablesPage() {
  const [selectedCollectableId, setSelectedCollectableId] = useState<string>(
    CollectableInfo[0]?.id || "0180011"
  ); // Use first element's ID as default with fallback

  const handleCollectableSelect = (id: string) => {
    setSelectedCollectableId(id);
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
    </div>
  );
}

export default CollectablesPage;
