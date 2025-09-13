import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { MapInfoRegular, MapInfoArcade } from "./MapList";
import { getNestedValue } from "./getNestedValue";
import gameDataSources from "./GameData";

interface MapDetailProps {
  name?: string; // Optional prop with default value
  isArcade?: boolean; // New prop to determine which map list to use
}

const MapDetail: React.FC<MapDetailProps> = ({
  name: propName,
  isArcade = false,
}) => {
  const { name: paramName } = useParams<{ name: string }>();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Use propName if provided, otherwise use the URL parameter
  const mapName = propName || paramName || "Yggsdrasill Path";

  // Use the correct map list based on isArcade
  const mapList = isArcade ? MapInfoArcade : MapInfoRegular;

  // Find the map data matching the provided name
  const map = mapList.find((m) => m.name === mapName);

  if (!map) {
    console.error(`No map found with name: ${mapName}`);
    return null;
  }

  // Rest of the component remains the same...
  const renderVideoGallery = (
    videos: { video: string; caption: string }[],
    folder: string
  ) => {
    return (
      <div className="video-gallery-container">
        {videos.map((video, index) => (
          <div key={index} className="video-item">
            <video controls className="video-player">
              <source
                src={`./textures/${folder}/${video.video}`}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <p className="video-caption">{video.caption}</p>
          </div>
        ))}
      </div>
    );
  };

  // Handle click for DOM names
  const handleDomClick = (index: number | null) => {
    if (index === null) {
      setSelectedImage(null);
    } else if (map.domImages && map.domImages[index]) {
      setSelectedImage(map.domImages[index]);
    }
  };

  // Determine which image to display
  const displayImage = selectedImage || map.backgroundImage;

  return (
    <div className="mapinfo-page">
      <h1 className="pagetitle">
        {map.group}: {map.name}
      </h1>

      {/* Loading tips section */}
      <section className="map-content">
        {map.domNames && map.domNames.length > 0 && (
          <div className="tab-selector-container">
            <span
              className={`tab-selector ${
                selectedImage === null ? "active" : ""
              }`}
              onClick={() => handleDomClick(null)}
            >
              Main
            </span>
            {map.domNames.map((name, index) => (
              <span
                key={index}
                className={`tab-selector ${
                  selectedImage === map.domImages[index] ? "active" : ""
                }`}
                onClick={() => handleDomClick(index)}
              >
                {name}
              </span>
            ))}
          </div>
        )}
        <div className="map-mainimage">
          <img
            src={`./textures/map_background/${displayImage}`}
            alt={map.name}
            className="map-image"
          />
        </div>
        <section className="map-loading">
          <section className="long-text">
            {map.loadingTips.map((tip, index) => (
              <p key={index}>{getNestedValue(gameDataSources.default, tip)}</p>
            ))}
          </section>
        </section>
      </section>

      <section className="map-video-section">
        {/* Loading videos section - only show if loadingvideos has elements */}
        {map.loadingvideos && map.loadingvideos.length > 0 && (
          <section className="map-video">
            <p className="subpagetitle">Loading</p>
            {renderVideoGallery(map.loadingvideos, "map_loading")}
          </section>
        )}

        {/* Intro videos section - only show if introvideos has elements */}
        {map.introvideos && map.introvideos.length > 0 && (
          <section className="map-video">
            <p className="subpagetitle">Intros</p>
            {renderVideoGallery(map.introvideos, "map_intros")}
          </section>
        )}

        {/* Outro videos section - only show if outrovideos has elements */}
        {map.outrovideos && map.outrovideos.length > 0 && (
          <section className="map-video">
            <p className="subpagetitle">Outros</p>
            {renderVideoGallery(map.outrovideos, "map_outros")}
          </section>
        )}
      </section>
    </div>
  );
};

export default MapDetail;
