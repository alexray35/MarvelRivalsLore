import React from "react";
import { LoreTimelineGroups } from "../0manual/LoreTimelineList";

const TimelineContent: React.FC = () => {
  return (
    <div className="timeline-content">
      {/* Loop through each Group */}
      {LoreTimelineGroups.map((group, groupIndex) => (
        <React.Fragment key={groupIndex}>
          {group.sections.map((section, index) => {
            // Check if this is the very last item inside this specific group
            const isLastItemInGroup = index === group.sections.length - 1;

            return (
              <div
                key={section.id || index}
                data-section-id={section.id}
                className={`timeline-content-entry ${
                  isLastItemInGroup ? "timeline-group-spacer" : ""
                }`}
              >
                <div className="timeline-content-title">
                  {/* Render SVGs for each Chronoverse */}
                  <div className="title-icon-container">
                    {section.chronoverses.map((cv, cvIndex) => (
                      <img
                        key={`${section.id}-cv-${cvIndex}`}
                        src={`../textures/timeline/chronoverse/${cv}.svg`}
                        alt={cv}
                        className="chronoverse-icon"
                      />
                    ))}
                  </div>

                  {/* The Title Text */}
                  <p
                    className={`subsection-title ${
                      section.major ? "subsection-title-major" : ""
                    }`}
                  >
                    {section.title}
                  </p>
                </div>

                {/* Loop through each SubSection */}
                {section.subSections.map((subSection, subIndex) => (
                  <div
                    key={`${section.id}-sub-${subIndex}`}
                    className="timeline-content-body"
                  >
                    <div className="timeline-content-text">
                      <div className="timeline-content-textarea">
                        <div className="long-text">
                          <p>{subSection.description}</p>
                        </div>
                      </div>
                    </div>

                    {/* Image displayed to the right of the description - only if image exists */}
                    {subSection.image && subSection.image.trim() !== "" && (
                      <div className="timeline-content-image">
                        <img
                          src={`/textures/${subSection.image}`}
                          alt={`${section.title} - ${subIndex + 1}`}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            );
          })}
        </React.Fragment>
      ))}
    </div>
  );
};

export default TimelineContent;
