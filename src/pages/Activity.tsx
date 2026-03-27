// Activity.tsx
import { useParams } from "react-router-dom";
import ActivityDetail from "../activity/ActivityDetail";
import { useEffect } from "react";

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
