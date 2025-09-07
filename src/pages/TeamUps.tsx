// TeamUps.tsx
import { useState } from "react";
import GalleryTeamUp from "../GalleryTeamUp";
import TeamUpDetail from "../TeamUpDetail";
import { TeamUps } from "../TeamUpList";

function TeamUpsPage() {
  // Set first team up as default if available
  const [selectedTeamUpRef, setSelectedTeamUpRef] = useState<string>(
    TeamUps.length > 0 ? TeamUps[0].ref : ""
  );

  const handleTeamUpSelect = (ref: string) => {
    setSelectedTeamUpRef(ref);
  };

  return (
    <div className="page">
      <h1 className="pagetitle">Team Ups</h1>
      <div className="teamups-container">
        <div className="teamups-gallery">
          <GalleryTeamUp onTeamUpSelect={handleTeamUpSelect} />
        </div>
        <div className="teamups-detail">
          {selectedTeamUpRef && <TeamUpDetail ref={selectedTeamUpRef} />}
        </div>
      </div>
    </div>
  );
}

export default TeamUpsPage;
