// Images.tsx
import { useEffect } from "react";
import GalleryImages from "../images/GalleryImages";

function ImagesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page">
      <h1 className="pagetitle">Images</h1>
      <GalleryImages />
    </div>
  );
}

export default ImagesPage;
