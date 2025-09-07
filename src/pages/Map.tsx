import { useLocation } from "react-router-dom";
import MapDetail from "../MapDetail";
import { useEffect } from "react";
import "../MapPage.css";

function MapPage() {
  const location = useLocation();
  const { name, isArcade } = location.state || {
    name: "Royal Palace", // Default map name
    isArcade: false,
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(name);
  }, []);

  return (
    <div className="page">
      <MapDetail name={name} isArcade={isArcade} />
    </div>
  );
}

export default MapPage;
