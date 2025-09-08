import React from "react";
import {
  ActivityInfo_Season0,
  ActivityInfo_Season1,
  ActivityInfo_Season2,
  ActivityInfo_Season3,
  ActivityInfo_SeasonBETA,
} from "./ActivityList";
import { useNavigate } from "react-router-dom";
import { getNestedValue } from "./getNestedValue";
import gameDataSources from "./GameData";

interface GalleryActivityProps {
  onActivitySelect?: (name: string, season: number) => void;
  showOnlyLatestSeason?: boolean; // New optional parameter
}

const GalleryActivity: React.FC<GalleryActivityProps> = ({
  onActivitySelect,
  showOnlyLatestSeason = false, // Default to false for backward compatibility
}) => {
  const navigate = useNavigate();

  const handleActivityClick = (name: string, season: number) => {
    if (onActivitySelect) {
      onActivitySelect(name, season);
    } else {
      navigate("/activity", { state: { name, season } });
    }
  };

  const seasonData = [
    { number: 3, activities: ActivityInfo_Season3, isBeta: false },
    { number: 2, activities: ActivityInfo_Season2, isBeta: false },
    { number: 1, activities: ActivityInfo_Season1, isBeta: false },
    { number: 0, activities: ActivityInfo_Season0, isBeta: false },
    { number: -999, activities: ActivityInfo_SeasonBETA, isBeta: true },
  ].filter((season) => season.activities.length > 0);

  // Filter to only show the latest season if showOnlyLatestSeason is true
  const filteredSeasonData =
    showOnlyLatestSeason && seasonData.length > 0
      ? [seasonData[0]] // Get the first item (latest season)
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
                key={activity.name}
                className="gallery-item"
                onClick={() =>
                  handleActivityClick(
                    activity.name,
                    season.isBeta ? -1 : season.number
                  )
                }
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
