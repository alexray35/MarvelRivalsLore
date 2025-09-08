// TeamUpList.tsx
interface TeamUpVersion {
  id: string;
  version: string;
  name: string;
  description: string;
  image: string;
  override: string;
  anchor: string;
  followers: string[];
}

interface TeamUp {
  ref: string;
  versions: TeamUpVersion[];
}

const processTeamUps = async (): Promise<TeamUp[]> => {
  try {
    const response = await fetch(
      "https://sheets.livepolls.app/api/spreadsheets/024e4a09-8df3-4026-be4e-b9b151bd1640/TeamUps"
    );

    const apiData = await response.json();
    const data = apiData.data; //new API shenanigans

    // Group entries by ref instead of id
    const teamUpsMap = new Map<string, TeamUp>();

    data.forEach((row: { [x: string]: string }) => {
      const ref = row["Ref"]?.trim();
      if (!ref) return; // Skip rows without ref

      const id = row["id"]?.trim() || "";
      const version = row["Version"]?.trim() || "1";
      const name = row["Name"]?.trim() || "";
      const description = row["Description"]?.trim() || "";
      const override = row["Override"]?.trim() || "";
      const anchor = row["Anchor"]?.trim() || "";
      const followersStr = row["Follower"]?.trim() || "";
      const image = `/textures/teamup/icon_collaborativeskills_${id}skill.png`;

      // Split followers by " / " and trim each one
      const followers = followersStr
        .split("/")
        .map((f) => f.trim())
        .filter((f) => f);

      const versionData: TeamUpVersion = {
        id,
        version,
        name,
        description,
        image,
        override,
        anchor,
        followers,
      };

      if (!teamUpsMap.has(ref)) {
        teamUpsMap.set(ref, {
          ref,
          versions: [versionData],
        });
      } else {
        const existingTeamUp = teamUpsMap.get(ref)!;
        // Check if this version already exists
        const versionExists = existingTeamUp.versions.some(
          (v) => v.version === version
        );
        if (!versionExists) {
          existingTeamUp.versions.push(versionData);
        }
      }
    });

    // Convert map to array, sort versions by version number, and reverse the array
    const teamUps = Array.from(teamUpsMap.values())
      .map((teamUp) => ({
        ...teamUp,
        versions: teamUp.versions.sort(
          (a, b) => parseInt(a.version) - parseInt(b.version)
        ),
      }))
      .reverse(); // This reverses the order of the team-ups array

    return teamUps;
  } catch (error) {
    console.error("Error processing TeamUps CSV file:", error);
    return []; // Return empty array on error
  }
};

const TeamUps = await processTeamUps();
export { TeamUps };
