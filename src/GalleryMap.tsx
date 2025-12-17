import React from "react";
import { MapInfoRegular, MapInfoArcade } from "./MapList";

interface GalleryMapProps {
  onMapSelect?: (linkID: string, isArcade: boolean) => void; // Changed to accept linkID
}

const GalleryMap: React.FC<GalleryMapProps> = ({ onMapSelect }) => {
  const handleMapClick = (linkID: string, isArcade: boolean) => {
    // Changed to accept linkID
    if (onMapSelect) {
      onMapSelect(linkID, isArcade);
    }
  };

  const renderGallery = (maps: typeof MapInfoRegular, isArcade: boolean) => {
    if (maps.length === 0) {
      return null;
    }

    return (
      <div className="gallery-section">
        <div className="gallery-grid">
          {maps.map((map) => (
            <div
              key={map.linkID} // Use linkID as key
              className="gallery-item"
              onClick={() => handleMapClick(map.linkID, isArcade)} // Pass linkID
              style={{ cursor: "pointer" }}
            >
              <div className="image-wrapper">
                <img
                  className="map-thumbnail"
                  src={`/textures/map_gallery/${map.galleryImage}`} // Fixed path with /
                  alt={map.name || map.group}
                  loading="lazy"
                />
                <div className="image-caption">
                  <span>{map.name || map.group}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="gallery-map">
      {renderGallery(MapInfoRegular, false)}
      <h2 className="pagetitle">Other</h2>
      {renderGallery(MapInfoArcade, true)}
    </div>
  );
};
export default GalleryMap;
