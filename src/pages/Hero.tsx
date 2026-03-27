import { useParams } from "react-router-dom";
import HeroDetail from "../heroes/HeroDetail";
import { useEffect } from "react";

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
