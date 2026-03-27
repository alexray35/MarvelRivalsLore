// TeamUps.tsx
import { useState } from "react";
import GalleryTeamUp from "../teamups/GalleryTeamUp";
import TeamUpDetail from "../teamups/TeamUpDetail";
import { TeamUpInfoList } from "../0manual/TeamUpFullList";

function TeamUpsPage() {
  // Set first team up as default if available
  const [selectedTeamUpRef, setSelectedTeamUpRef] = useState<string>(
    TeamUpInfoList.length > 0 ? TeamUpInfoList[0].name : ""
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
