// Accessorys.tsx
import { useState } from "react";
import GalleryAccessory from "../GalleryAccessory";
import AccessoryDetail from "../AccessoryDetail";
import { AccessoryInfo } from "../AccessoryList";

function AccessoriesPage() {
  const [selectedAccessoryId, setSelectedAccessoryId] = useState<string>(
    AccessoryInfo[0]?.id || "0180011"
  ); // Use first element's ID as default with fallback

  const handleAccessorySelect = (id: string) => {
    setSelectedAccessoryId(id);
  };

  return (
    <div className="page">
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

export default AccessoriesPage;
