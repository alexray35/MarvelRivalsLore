import { useNavigate } from "react-router-dom";
import GalleryActivity from "../activity/GalleryActivity";
import { useEffect } from "react";

function ActivitiesPage() {
  const navigate = useNavigate();

  const handleActivitySelect = (linkID: string) => {
    // Changed to accept linkID
    navigate(`/activity/${linkID}`); // Use URL parameter
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page">
      <h1 className="pagetitle">Events</h1>
      <GalleryActivity onActivitySelect={handleActivitySelect} />
    </div>
  );
}

export default ActivitiesPage;
