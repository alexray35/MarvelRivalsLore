import React from "react";
import { LoreTimelineGroups } from "../0manual/LoreTimelineList";

interface TimelineDetailProps {
  contentRef: React.RefObject<HTMLDivElement | null>;
}

const TimelineDetail: React.FC<TimelineDetailProps> = ({ contentRef }) => {
  const handleTitleClick = (sectionId: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (contentRef.current) {
      const targetElement = contentRef.current.querySelector(
        `[data-section-id="${sectionId}"]`
      );
      if (targetElement) {
        // Get the element's position relative to the viewport
        const rect = targetElement.getBoundingClientRect();
        const margin = 100; // Offset from top of viewport

        // Scroll to position with margin
        window.scrollTo({
          top: window.scrollY + rect.top - margin,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div className="timeline-wrapper">
      {/* The vertical yellow line */}
      <div className="timeline-line" />

      <div className="timeline-items-container">
        {LoreTimelineGroups.map((group, groupIndex) => (
          <React.Fragment key={groupIndex}>
            {group.sections.map((section, index) => (
              <div
                key={section.id || index}
                className={`timeline-item ${index === 0 ? "new-group" : ""} ${
                  section.major ? "timeline-major-item" : ""
                }`}
                onClick={(e) => handleTitleClick(section.id, e)}
                style={{ cursor: "pointer" }}
              >
                {/* The short horizontal connector line */}
                <div
                  className={`timeline-connector ${
                    section.major ? "timeline-connector-major" : ""
                  }`}
                />

                {/* The Title Text - Checks 'major' to adjust size */}
                <span
                  className={`timeline-title ${
                    section.major ? "timeline-title-major" : ""
                  }`}
                >
                  {section.title}
                </span>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default TimelineDetail;
