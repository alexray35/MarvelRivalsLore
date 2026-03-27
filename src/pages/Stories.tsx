// Stories.tsx
import { useNavigate } from "react-router-dom";
import GalleryStory from "../stories/GalleryStory";
import { useEffect } from "react";

function StoriesPage() {
  const navigate = useNavigate();

  const handleStorySelect = (linkID: string) => {
    navigate(`/story/${linkID}`); // Use URL parameter instead of state
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page">
      <h1 className="pagetitle">Stories</h1>
      <GalleryStory onStorySelect={handleStorySelect} />
    </div>
  );
}

export default StoriesPage;
