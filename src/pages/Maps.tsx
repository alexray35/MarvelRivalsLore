import { useNavigate } from "react-router-dom";
import GalleryMap from "../maps/GalleryMap";
import { useEffect } from "react";

function MapsPage() {
  const navigate = useNavigate();

  const handleMapSelect = (linkID: string, isArcade: boolean) => {
    // Changed to accept linkID
    navigate(`/map/${linkID}`, {
      state: { isArcade }, // Only pass isArcade via state
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page">
      <h1 className="pagetitle">Maps</h1>
      <GalleryMap onMapSelect={handleMapSelect} />
    </div>
  );
}

export default MapsPage;
