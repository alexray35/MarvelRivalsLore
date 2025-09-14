// Story.tsx
import { useParams, useLocation } from "react-router-dom";
import StoryContent from "../StoryContent";
import { useEffect } from "react";

function StoryPage() {
  const { linkID } = useParams(); // Get linkID from URL parameter
  const location = useLocation();
  const { titleOverride } = location.state || { titleOverride: "" };

  // Default fallback if no linkID in URL
  const storyLinkID = linkID || "defaultStory";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page">
      <StoryContent storyLinkID={storyLinkID} titleOverride={titleOverride} />
    </div>
  );
}

export default StoryPage;
