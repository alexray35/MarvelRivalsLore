import { useLocation } from "react-router-dom";
import HeroDetail from "../HeroDetail";
import { useEffect } from "react";
import "../CharacterPage.css";

function HeroPage() {
  const location = useLocation();
  const { id } = location.state || {
    id: "1027", // Default hero ID
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page">
      <HeroDetail id={id} />
    </div>
  );
}

export default HeroPage;
