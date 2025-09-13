// Skins.tsx
import { useState } from "react";
import GallerySkins from "../GallerySkins.tsx";
import SkinDetail from "../SkinDetail.tsx";
import { SkinsInfo } from "../SkinsList";
import "../CollectablePage.css";

function SkinsPage() {
  const [selectedSkinId, setSelectedCollectableId] = useState<string>(
    SkinsInfo[0]?.id || "1046100"
  ); // Use first element's ID as default with fallback

  const handleSkinSelect = (id: string) => {
    setSelectedCollectableId(id);
  };

  return (
    <div className="page">
      <h1 className="pagetitle">Skins</h1>
      <div className="collectables-container">
        <div className="collectables-gallery skins-gallery">
          <GallerySkins onSkinSelect={handleSkinSelect} />
        </div>
        <div className="collectables-detail">
          <SkinDetail id={selectedSkinId} />
        </div>
      </div>
    </div>
  );
}

export default SkinsPage;
