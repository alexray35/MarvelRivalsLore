// Magazines.tsx
import { useNavigate } from "react-router-dom";
import GalleryMagazine from "../GalleryMagazine";
import { useEffect } from "react";

function MagazinesPage() {
  const navigate = useNavigate();

  const handleMagazineSelect = (linkID: string, overrideName: string) => {
    navigate(`/story/${linkID}`, {
      state: {
        titleOverride: overrideName, // Still pass titleOverride via state
      },
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page">
      <h1 className="pagetitle">Serials</h1>
      <GalleryMagazine onMagazineSelect={handleMagazineSelect} />
    </div>
  );
}

export default MagazinesPage;
