// MagazineList.tsx

interface MagazineItem {
  id: string;
  season: string;
  imageName: string;
  overrideName: string;
  linkID: string; // Added linkID field
}

interface MagazineGroups {
  serials: MagazineItem[];
  specials: MagazineItem[];
  bySeason: {
    [key: number]: MagazineItem[];
  };
}

const processMagazineData = async (): Promise<{
  groups: MagazineGroups;
  maxSerialSeason: number;
  maxSpecialSeason: number;
}> => {
  try {
    const response = await fetch(
      "https://sheets.livepolls.app/api/spreadsheets/f9d0fcbd-88b5-4dfe-a857-c30d1619aaf9/Magazine"
    );

    const apiData = await response.json();
    const data = apiData.data; //new API shenanigans

    const result: MagazineGroups = {
      serials: [],
      specials: [],
      bySeason: {},
    };

    let maxSerialSeason = 0;
    let maxSpecialSeason = 0;

    // Track counts for each season
    const seasonCounts: { [key: string]: number } = {};

    data
      .filter((row: { [x: string]: string }) => row["Id"]?.trim())
      .forEach((row: { [x: string]: string }) => {
        const id = row["Id"].trim();
        const season = row["Season"].trim();
        const imageName = row["Image"].trim();
        const overrideName = row["Override"]?.trim() || "";
        const seasonNum = parseInt(season);

        if (id.length >= 7) {
          // Generate linkID based on season type
          let linkID: string;

          if (seasonNum >= 0) {
            // For serials: "season" + season + number
            const seasonKey = `season${season}`;
            seasonCounts[seasonKey] = (seasonCounts[seasonKey] || 0) + 1;
            linkID = `${seasonKey}-${seasonCounts[seasonKey]}`;
          } else {
            // For specials: "special" + season (without dashes) + number
            const cleanedSeason = season.replace(/-/g, "");
            const seasonKey = `special${cleanedSeason}`;
            seasonCounts[seasonKey] = (seasonCounts[seasonKey] || 0) + 1;
            linkID = `${seasonKey}${seasonCounts[seasonKey]}`;
          }

          const magazineItem = { id, season, imageName, overrideName, linkID };

          // Add to bySeason dictionary
          if (!result.bySeason[seasonNum]) {
            result.bySeason[seasonNum] = [];
          }
          result.bySeason[seasonNum].push(magazineItem);

          // Add to either serials or specials
          if (seasonNum >= 0) {
            result.serials.push(magazineItem);
            if (seasonNum > maxSerialSeason) {
              maxSerialSeason = seasonNum;
            }
          } else {
            result.specials.push(magazineItem);
            if (seasonNum < maxSpecialSeason) {
              maxSpecialSeason = seasonNum;
            }
          }
        }
      });

    return {
      groups: result,
      maxSerialSeason,
      maxSpecialSeason,
    };
  } catch (error) {
    console.error("Error processing CSV file:", error);
    return {
      groups: {
        serials: [],
        specials: [],
        bySeason: {},
      },
      maxSerialSeason: 0,
      maxSpecialSeason: 0,
    };
  }
};

const {
  groups: MagazineGroups,
  maxSerialSeason,
  maxSpecialSeason,
} = await processMagazineData();

// Export function to get groups by index
export const getMagazineGroup = (index: number): MagazineItem[] => {
  return MagazineGroups.bySeason[index] || [];
};

// Export the grouped magazines
export const { serials, specials } = MagazineGroups;

// Export the max season values
export const magazineMaxSerialSeason = maxSerialSeason;
export const magazineMaxSpecialSeason = maxSpecialSeason;
