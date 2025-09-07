import { useNavigate } from "react-router-dom";
import GalleryMap from "../GalleryMap";
import { useEffect } from "react";

function MapsPage() {
  const navigate = useNavigate();

  const handleMapSelect = (name: string, isArcade: boolean) => {
    navigate("/map", { state: { name, isArcade } });
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
