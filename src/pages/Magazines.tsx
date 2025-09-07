// Magazines.tsx
import { useNavigate } from "react-router-dom";
import GalleryMagazine from "../GalleryMagazine";
import { useEffect } from "react";

function MagazinesPage() {
  const navigate = useNavigate();

  const handleMagazineSelect = (id: string, overrideName: string) => {
    const titlePath = `UIGalleryTable_${id}_CardCaption_CaptionTitle`;
    const contentPath = `UIGalleryTable_${id}_CardCaption_CaptionContent`;
    navigate("/story", {
      state: {
        titlePath,
        contentPath,
        titleOverride: overrideName,
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
