import { useNavigate } from "react-router-dom";
import GalleryStory from "../GalleryStory";
import { useEffect } from "react";

function StoriesPage() {
  const navigate = useNavigate();

  const handleStorySelect = (
    titlePath: string,
    contentPath: string,
    isBeta: boolean
  ) => {
    navigate("/story", { state: { titlePath, contentPath, isBeta } });
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
