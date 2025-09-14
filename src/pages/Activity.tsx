// Activity.tsx
import { useParams } from "react-router-dom";
import ActivityDetail from "../ActivityDetail";
import { useEffect } from "react";
import "../ActivityPage.css";

function ActivityPage() {
  const { linkID } = useParams(); // Get linkID from URL parameter

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page">
      <ActivityDetail linkID={linkID} />
    </div>
  );
}

export default ActivityPage;
