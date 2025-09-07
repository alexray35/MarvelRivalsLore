import { useNavigate } from "react-router-dom";
import GalleryHero from "../GalleryHero";
import { useEffect } from "react";

function HeroesPage() {
  const navigate = useNavigate();

  const handleHeroSelect = (id: string) => {
    navigate("/hero", { state: { id } });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page">
      <h1 className="pagetitle">Heroes</h1>
      <GalleryHero onHeroSelect={handleHeroSelect} />
    </div>
  );
}

export default HeroesPage;
