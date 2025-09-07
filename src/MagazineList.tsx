// MagazineList.tsx

interface MagazineItem {
  id: string;
  season: string;
  imageName: string;
  overrideName: string;
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
      "https://sheetdb.io/api/v1/f885sh79xfxqs?sheet=Magazine"
    );

    const data = await response.json();

    const result: MagazineGroups = {
      serials: [],
      specials: [],
      bySeason: {},
    };

    let maxSerialSeason = 0;
    let maxSpecialSeason = 0;

    data
      .filter((row: { [x: string]: string }) => row["Id"]?.trim())
      .forEach((row: { [x: string]: string }) => {
        const id = row["Id"].trim();
        const season = row["Season"].trim();
        const imageName = row["Image"].trim();
        const overrideName = row["Override"]?.trim() || "";
        const seasonNum = parseInt(season);

        if (id.length >= 7) {
          const magazineItem = { id, season, imageName, overrideName };

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
