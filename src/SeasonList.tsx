// SeasonList.tsx

interface SeasonInfo {
  number: string;
  name: string;
  image: string;
}

const processKeys = async (): Promise<{
  serials: SeasonInfo[];
  specials: SeasonInfo[];
}> => {
  try {
    const response = await fetch(
      "https://sheets.livepolls.app/api/spreadsheets/024e4a09-8df3-4026-be4e-b9b151bd1640/Seasons"
    );

    const apiData = await response.json();
    const data = apiData.data; //new API shenanigans

    // Initialize empty arrays for both types
    const serials: SeasonInfo[] = [];
    const specials: SeasonInfo[] = [];

    data.forEach((row: { [x: string]: string }) => {
      const number = row["Season"].trim();
      const name = row["Name"]?.trim() || "";
      const image = row["Image"]?.trim() || "323";

      const seasonItem = { number, name, image };

      // Check if the season number is positive or negative
      if (parseInt(number) >= 0) {
        serials.push(seasonItem);
      } else {
        specials.push(seasonItem);
      }
    });

    return { serials, specials };
  } catch (error) {
    console.error("Error processing CSV file:", error);
    return { serials: [], specials: [] }; // Return empty objects on error
  }
};

const { serials, specials } = await processKeys();
export { serials, specials };
