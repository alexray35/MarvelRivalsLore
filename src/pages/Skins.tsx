// Skins.tsx
import { useState } from "react";
import GallerySkins from "../skins/GallerySkins.tsx";
import SkinDetail from "../skins/SkinDetail.tsx";
import { SkinsInfo } from "../skins/SkinsList";

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
      <div className="collectables-container skin-container">
        <div className="collectables-gallery skins-gallery">
          <GallerySkins onSkinSelect={handleSkinSelect} />
        </div>
        <div className="collectables-detail skin-detail">
          <SkinDetail id={selectedSkinId} />
        </div>
      </div>
    </div>
  );
}

export default SkinsPage;
