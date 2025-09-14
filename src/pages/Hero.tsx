import { useParams } from "react-router-dom";
import HeroDetail from "../HeroDetail";
import { useEffect } from "react";
import "../CharacterPage.css";

function HeroPage() {
  const { linkID } = useParams(); // Get linkID from URL parameter

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page">
      <HeroDetail linkID={linkID} /> {/* Pass linkID instead of id */}
    </div>
  );
}

export default HeroPage;
