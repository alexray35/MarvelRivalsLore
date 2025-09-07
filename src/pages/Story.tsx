// Story.tsx
import { useLocation } from "react-router-dom";
import StoryContent from "../StoryContent";
import { useEffect } from "react";

function StoryPage() {
  const location = useLocation();
  const { titlePath, isBeta, titleOverride } = location.state || {
    titlePath: "UIGalleryTable_01010001_CardCaption_CaptionTitle",
    isBeta: false,
    titleOverride: "", // Default to empty string
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page">
      <StoryContent
        storyTitlePath={titlePath}
        isBeta={isBeta}
        titleOverride={titleOverride} // Pass the override text directly
      />
    </div>
  );
}

export default StoryPage;
