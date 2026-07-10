import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  ActivityInfo_Season0,
  ActivityInfo_Season1,
  ActivityInfo_Season2,
  ActivityInfo_Season3,
  ActivityInfo_Season4,
  ActivityInfo_Season9,
  ActivityInfo_SeasonBETA,
} from "../0manual/ActivityList";
import JsonValue from "../JsonValue";
import gameDataSources from "../0manual/GameData";

interface ActivityDetailProps {
  linkID?: string;
}

const ActivityDetail: React.FC<ActivityDetailProps> = ({
  linkID: propLinkID,
}) => {
  const { linkID: paramLinkID } = useParams<{ linkID: string }>();
  const [selectedEntryIndex, setSelectedEntryIndex] = useState<number>(0);
  const [selectedSectionIndex, setSelectedSectionIndex] = useState<number>(0);

  const activityLinkID = propLinkID || paramLinkID || "season0activity1";

  const allActivities = [
    ...ActivityInfo_SeasonBETA,
    ...ActivityInfo_Season0,
    ...ActivityInfo_Season1,
    ...ActivityInfo_Season2,
    ...ActivityInfo_Season3,
    ...ActivityInfo_Season4,
    ...ActivityInfo_Season9,
  ];

  const activity = allActivities.find((a) => a.linkID === activityLinkID);

  if (!activity) {
    console.error(`No activity found with linkID: ${activityLinkID}`);
    return null;
  }

  // Determine which data source to use based on versionOverride
  const getDataSource = (versionOverride?: string) => {
    if (versionOverride && gameDataSources[versionOverride]) {
      return gameDataSources[versionOverride];
    }
    return gameDataSources.default;
  };

  const dataSource = getDataSource(activity.versionOverride);
  const isBetaSeason = ActivityInfo_SeasonBETA.includes(activity);

  // Handle entry tab clicks
  const handleEntryClick = (index: number) => {
    setSelectedEntryIndex(index);
    setSelectedSectionIndex(0); // Reset section selection when entry changes
  };

  // Handle section tab clicks
  const handleSectionClick = (index: number) => {
    setSelectedSectionIndex(index);
  };

  // Get current entry and section
  const currentEntry = activity.entries?.[selectedEntryIndex];
  const hasMultipleEntries = (activity.entries?.length || 0) > 1;
  const hasMultipleSections = (currentEntry?.sections?.length || 0) > 1;

  const displaySectionIndex = selectedSectionIndex;
  const displaySection = currentEntry?.sections?.[displaySectionIndex];

  // If no entries or sections, show empty state
  if (!currentEntry || !displaySection) {
    return (
      <div className="activityinfo-page">
        <h2 className="subpagetitle">
          {isBetaSeason ? (
            activity.name
          ) : (
            <JsonValue path={activity.name} gameData={dataSource.data} />
          )}
        </h2>
        <p>No content available for this activity.</p>
      </div>
    );
  }

  return (
    <div className="activityinfo-page">
      <h2 className="subpagetitle">
        {isBetaSeason ? (
          activity.name
        ) : (
          <JsonValue path={activity.name} gameData={dataSource.data} />
        )}
      </h2>

      {/* Entry Tabs */}
      {hasMultipleEntries && (
        <div className="tab-selector-container entry-tabs">
          {activity.entries?.map((entry, index) => (
            <span
              key={`entry-${index}`}
              className={`tab-selector ${
                selectedEntryIndex === index ? "active" : ""
              }`}
              onClick={() => handleEntryClick(index)}
            >
              {isBetaSeason ? (
                entry.entryTitle
              ) : (
                <JsonValue path={entry.entryTitle} gameData={dataSource.data} />
              )}
            </span>
          ))}
        </div>
      )}

      {/* Section Tabs */}
      {hasMultipleSections && (
        <div className="tab-selector-container section-tabs">
          {currentEntry.sections.map((section, index) => (
            <span
              key={`section-${index}`}
              className={`tab-selector ${
                displaySectionIndex === index ? "active" : ""
              }`}
              onClick={() => handleSectionClick(index)}
            >
              {isBetaSeason ? (
                section.sectionTitle
              ) : (
                <JsonValue
                  path={section.sectionTitle}
                  gameData={dataSource.data}
                />
              )}
            </span>
          ))}
        </div>
      )}

      <section className="activity-content">
        <div className="activity-section">
          {displaySection.subsections.map((subsection, index) => {
            // Determine if this specific subsection needs a different data source
            const subsectionDataSource = isBetaSeason
              ? gameDataSources.beta
              : dataSource;

            // Check if there's an image
            const hasImage =
              subsection.subsectionImage &&
              subsection.subsectionImage.trim() !== "";

            // Check if subsection title has content
            const hasTitle = isBetaSeason
              ? subsection.subsectionTitle &&
                subsection.subsectionTitle.trim() !== ""
              : subsection.subsectionTitle && subsection.subsectionTitle !== "";

            return (
              <div key={index} className="subsection-container">
                <div className="subsection-content">
                  {hasImage && (
                    <div className="subsection-image-container">
                      <img
                        src={`/textures/activities/${subsection.subsectionImage}`}
                        alt={
                          isBetaSeason
                            ? subsection.subsectionTitle
                            : (() => {
                                const value = subsection.subsectionTitle;
                                return typeof value === "string" ? value : "";
                              })()
                        }
                        className="subsection-image"
                      />
                    </div>
                  )}
                  <div className="subsection-text-container">
                    {hasTitle && (
                      <h4 className="subsection-title">
                        {isBetaSeason ? (
                          subsection.subsectionTitle
                        ) : (
                          <JsonValue
                            path={subsection.subsectionTitle}
                            gameData={subsectionDataSource.data}
                          />
                        )}
                      </h4>
                    )}
                    {subsection.subsectionSubTitle && (
                      <h5 className="subsection-title">
                        {isBetaSeason ? (
                          subsection.subsectionSubTitle
                        ) : (
                          <JsonValue
                            path={subsection.subsectionSubTitle}
                            gameData={subsectionDataSource.data}
                          />
                        )}
                      </h5>
                    )}
                    <p className="long-text">
                      <JsonValue
                        path={subsection.subsectionText}
                        gameData={
                          isBetaSeason
                            ? gameDataSources.beta.data
                            : subsectionDataSource.data
                        }
                      />
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default ActivityDetail;
