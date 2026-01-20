// CinematicList.tsx

interface CinematicInfo {
  season: string; // This should be a season number like "-999", "0", "1", etc.
  name: string;
  url: string;
}

const processKeys = async (): Promise<{
  cinematics: CinematicInfo[];
}> => {
  try {
    const response = await fetch(
      "https://sheets.livepolls.app/api/spreadsheets/f9d0fcbd-88b5-4dfe-a857-c30d1619aaf9/Cinematics"
    );

    const apiData = await response.json();
    const data = apiData.data; //new API shenanigans

    // Initialize empty arrays for both types
    const cinematics: CinematicInfo[] = [];

    data.forEach((row: { [x: string]: string }) => {
      const season = row["Season"].trim() || "";
      const name = row["Name"]?.trim() || "";
      const url = row["URL"]?.trim() || "";

      const cinematicItem = { season, name, url };

      cinematics.push(cinematicItem);
    });

    return { cinematics };
  } catch (error) {
    console.error("Error processing CSV file:", error);
    return { cinematics: [] }; // Return empty objects on error
  }
};

const { cinematics } = await processKeys();
export { cinematics };
