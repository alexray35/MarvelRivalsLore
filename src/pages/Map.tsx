import { useLocation, useParams } from "react-router-dom";
import MapDetail from "../maps/MapDetail";
import { useEffect } from "react";

function MapPage() {
  const { linkID } = useParams(); // Get linkID from URL parameter
  const location = useLocation();
  const { isArcade } = location.state || {
    // Get isArcade from state
    isArcade: false,
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page">
      <MapDetail linkID={linkID} isArcade={isArcade} />{" "}
      {/* Pass linkID instead of name */}
    </div>
  );
}

export default MapPage;
