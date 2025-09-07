import React from 'react';
import { MapInfoRegular, MapInfoArcade } from './MapList';

interface GalleryMapProps {
  onMapSelect?: (name: string, isArcade: boolean) => void;
}

const GalleryMap: React.FC<GalleryMapProps> = ({ onMapSelect }) => {
  const handleMapClick = (name: string, isArcade: boolean) => {
    if (onMapSelect) {
      onMapSelect(name, isArcade);
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
              key={map.name}
              className="gallery-item"
              onClick={() => handleMapClick(map.name, isArcade)}
              style={{ cursor: 'pointer' }}
            >
              <div className="image-wrapper">
                <img
                  className="map-thumbnail"
                  src={`./textures/map_gallery/${map.galleryImage}`}
                  alt={map.name}
                  loading="lazy"
                />
                <div className="image-caption">
                  <span>{map.name}</span>
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
      <h2 className='pagetitle'>Arcade</h2>
      {renderGallery(MapInfoArcade, true)}
    </div>
  );
};
export default GalleryMap;