// GalleryActivity.tsx
import React from "react";
import {
  ActivityInfo_Season0,
  ActivityInfo_Season1,
  ActivityInfo_Season2,
  ActivityInfo_Season3,
  ActivityInfo_Season4,
  ActivityInfo_SeasonBETA,
} from "./ActivityList";
import { useNavigate } from "react-router-dom";
import { getNestedValue } from "./getNestedValue";
import gameDataSources from "./GameData";

interface GalleryActivityProps {
  onActivitySelect?: (linkID: string) => void; // Changed to accept linkID
  showOnlyLatestSeason?: boolean;
}

const GalleryActivity: React.FC<GalleryActivityProps> = ({
  onActivitySelect,
  showOnlyLatestSeason = false,
}) => {
  const navigate = useNavigate();

  const handleActivitySelect = (linkID: string) => {
    // Changed to accept linkID
    navigate(`/activity/${linkID}`); // Use URL parameter
  };

  const seasonData = [
    { number: 4, activities: ActivityInfo_Season4, isBeta: false },
    { number: 3, activities: ActivityInfo_Season3, isBeta: false },
    { number: 2, activities: ActivityInfo_Season2, isBeta: false },
    { number: 1, activities: ActivityInfo_Season1, isBeta: false },
    { number: 0, activities: ActivityInfo_Season0, isBeta: false },
    { number: -999, activities: ActivityInfo_SeasonBETA, isBeta: true },
  ].filter((season) => season.activities.length > 0);

  const filteredSeasonData =
    showOnlyLatestSeason && seasonData.length > 0
      ? [seasonData[0]]
      : seasonData;

  return (
    <div className="gallery-activity">
      {filteredSeasonData.map((season) => (
        <div key={season.isBeta ? "beta" : season.number}>
          {!showOnlyLatestSeason && (
            <h1 className="subpagetitle">
              {season.isBeta ? "BETA" : `Season ${season.number}`}
            </h1>
          )}
          <div className="gallery-grid">
            {season.activities.map((activity) => (
              <div
                key={activity.linkID} // Use linkID as key
                className="gallery-item"
                onClick={() => handleActivitySelect(activity.linkID)} // Pass linkID
                style={{ cursor: "pointer" }}
              >
                <img
                  className="activity-image"
                  src={`./textures/activity_gallery/${activity.image}`}
                  alt={getNestedValue(
                    season.isBeta
                      ? gameDataSources.beta
                      : gameDataSources.default,
                    activity.name
                  )}
                  loading="lazy"
                />
                <div className="image-caption">
                  {season.isBeta
                    ? activity.name
                    : getNestedValue(gameDataSources.default, activity.name)}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GalleryActivity;
