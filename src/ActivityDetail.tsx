import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  ActivityInfo_Season0,
  ActivityInfo_Season1,
  ActivityInfo_Season2,
  ActivityInfo_Season3,
  ActivityInfo_Season4,
  ActivityInfo_SeasonBETA,
} from "./ActivityList";
import { getNestedValue } from "./getNestedValue";
import gameDataSources from "./GameData";

interface ActivityDetailProps {
  name?: string;
  season?: number;
}

const ActivityDetail: React.FC<ActivityDetailProps> = ({
  name: propName,
  season = 0,
}) => {
  const { name: paramName } = useParams<{ name: string }>();
  const [selectedSectionIndex, setSelectedSectionIndex] = useState<
    number | null
  >(null);

  const activityName = propName || paramName || "Example Activity Season 0";
  const isBetaSeason = season === -1;

  const activityList =
    season === 0
      ? ActivityInfo_Season0
      : season === 1
      ? ActivityInfo_Season1
      : season === 2
      ? ActivityInfo_Season2
      : season === 3
      ? ActivityInfo_Season3
      : season === 4
      ? ActivityInfo_Season4
      : ActivityInfo_SeasonBETA;

  const activity = activityList.find((a) => a.name === activityName);

  if (!activity) {
    console.error(`No activity found with name: ${activityName}`);
    return null;
  }

  const handleSectionClick = (index: number | null) => {
    setSelectedSectionIndex(index);
  };

  const hasMultipleSections = activity.sections.length > 1;
  const displaySectionIndex =
    selectedSectionIndex !== null ? selectedSectionIndex : 0;
  const displaySection = activity.sections[displaySectionIndex];

  return (
    <div className="activityinfo-page">
      <h2 className="subpagetitle">
        {isBetaSeason
          ? activity.name
          : getNestedValue(gameDataSources.default, activity.name)}
      </h2>
      <div>
        {hasMultipleSections && (
          <div className="tab-selector-container">
            {activity.sections.map((section, index) => (
              <span
                key={index}
                className={`tab-selector ${
                  displaySectionIndex === index ? "active" : ""
                }`}
                onClick={() => handleSectionClick(index)}
              >
                {isBetaSeason
                  ? section.sectionTitle
                  : getNestedValue(
                      gameDataSources.default,
                      section.sectionTitle
                    )}
              </span>
            ))}
          </div>
        )}
      </div>

      <section className="activity-content">
        {displaySection && (
          <div className="activity-section">
            {displaySection.subsections.map((subsection, index) => (
              <div key={index} className="subsection-container">
                <div className="subsection-content">
                  <div className="subsection-image-container">
                    <img
                      src={`./textures/activities/${subsection.subsectionImage}`}
                      alt={
                        isBetaSeason
                          ? subsection.subsectionTitle
                          : getNestedValue(
                              gameDataSources.default,
                              subsection.subsectionTitle
                            )
                      }
                      className="subsection-image"
                    />
                  </div>
                  <div className="subsection-text-container">
                    <h4 className="subsection-title">
                      {isBetaSeason
                        ? subsection.subsectionTitle
                        : getNestedValue(
                            gameDataSources.default,
                            subsection.subsectionTitle
                          )}
                    </h4>
                    {subsection.subsectionSubTitle && (
                      <h5 className="subsection-title">
                        {isBetaSeason
                          ? subsection.subsectionSubTitle
                          : getNestedValue(
                              gameDataSources.default,
                              subsection.subsectionSubTitle
                            )}
                      </h5>
                    )}
                    <p className="long-text">
                      {getNestedValue(
                        isBetaSeason
                          ? gameDataSources.beta
                          : gameDataSources.default,
                        subsection.subsectionText
                      )}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default ActivityDetail;
