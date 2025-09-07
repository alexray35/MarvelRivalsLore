import { useNavigate } from "react-router-dom";
import GalleryActivity from "../GalleryActivity";
import { useEffect } from "react";

function ActivitiesPage() {
  const navigate = useNavigate();

  const handleActivitySelect = (name: string, season: number) => {
    navigate("/activity", { state: { name, season } });
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
