import { useLocation } from "react-router-dom";
import ActivityDetail from "../ActivityDetail";
import { useEffect } from "react";
import "../ActivityPage.css";

function ActivityPage() {
  const location = useLocation();
  const { name, season } = location.state || {
    name: "TXT_HeroDetails_Title1", // Default activity name
    season: 2, // Default season (0 for Season 0)
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(name);
  }, []);

  return (
    <div className="page">
      <ActivityDetail name={name} season={season} />
    </div>
  );
}

export default ActivityPage;
