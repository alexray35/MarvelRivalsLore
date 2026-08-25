import TimelineDetail from "../timeline/TimelineDetail";
import TimelineContent from "../timeline/TimelineContent";
import { useRef } from "react";

function TimelinePage() {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="timeline-page">
      <h1 className="pagetitle">Timeline (wip)</h1>
      {/* Sidebar - Fixed to the left */}
      <TimelineDetail contentRef={contentRef} />
      <div>
        {/* Main Content - Offset to the right so it doesn't hide behind the sidebar */}
        <div className="main-content-area">
          <div ref={contentRef}>
            <TimelineContent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimelinePage;
