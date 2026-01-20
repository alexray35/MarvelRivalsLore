import { useEffect } from "react";
import GalleryCinematic from "../GalleryCinematics";

function CinematicsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page">
      <h1 className="pagetitle">Cinematics</h1>
      <GalleryCinematic />
    </div>
  );
}

export default CinematicsPage;
