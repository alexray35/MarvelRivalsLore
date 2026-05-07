// MagazineList.tsx

import { SeasonInfoList, SeasonSpecialsInfoList } from "../0manual/SeasonsList";

interface MagazineItem {
  id: string;
  season: string;
  imageName: string;
  overrideName: string;
  linkID: string;
}

interface SeasonInfo {
  number: string;
  name: string;
  year: string;
  image: string;
  numberSufix?: string;
}

interface MagazineGroups {
  serials: MagazineItem[];
  specials: MagazineItem[];
  bySeason: {
    [key: number]: MagazineItem[];
  };
}

// Store season information for lookups - now can have multiple entries per season
const seasonInfoMap: Map<string, SeasonInfo[]> = new Map();

// Helper function to add season info
const addSeasonInfo = (seasonId: string, seasonInfo: SeasonInfo) => {
  if (!seasonInfoMap.has(seasonId)) {
    seasonInfoMap.set(seasonId, []);
  }
  seasonInfoMap.get(seasonId)!.push(seasonInfo);
};

// Populate season info from SeasonInfoList
SeasonInfoList.forEach((season) => {
  if (season.gallerycard && season.gallerycard.length > 0) {
    season.gallerycard.forEach((gallerycard) => {
      addSeasonInfo(season.id, {
        number: season.id,
        name: gallerycard.title,
        year: season.year,
        image: gallerycard.cover,
        numberSufix: gallerycard.numberSufix,
      });
    });
  }
});

// Populate season info from SeasonSpecialsInfoList
SeasonSpecialsInfoList.forEach((special) => {
  if (special.gallerycard && special.gallerycard.length > 0) {
    special.gallerycard.forEach((gallerycard) => {
      addSeasonInfo(special.id, {
        number: special.id,
        name: gallerycard.title,
        year: special.year,
        image: gallerycard.cover,
        numberSufix: gallerycard.numberSufix,
      });
    });
  }
});

const processMagazineData = (): {
  groups: MagazineGroups;
  maxSerialSeason: number;
  maxSpecialSeason: number;
} => {
  const result: MagazineGroups = {
    serials: [],
    specials: [],
    bySeason: {},
  };

  let maxSerialSeason = 0;
  let maxSpecialSeason = 0;

  // Track counts for each season to generate linkIDs
  const seasonCounts: { [key: string]: number } = {};

  // Helper function to process a season's gallerycards
  const processSeasonGallerycards = (
    seasonId: string,
    seasonNum: number,
    gallerycards: { id: string; image: string; altName: string }[]
  ) => {
    gallerycards.forEach((card) => {
      const id = card.id;
      const season = seasonId;
      const imageName = card.image;
      const overrideName = card.altName;

      // Generate linkID based on season type
      let linkID: string;

      if (seasonNum >= 0) {
        // For serials: "season" + season + number
        const seasonKey = `season${seasonId}`;
        seasonCounts[seasonKey] = (seasonCounts[seasonKey] || 0) + 1;
        linkID = `${seasonKey}-${seasonCounts[seasonKey]}`;
      } else {
        // For specials: "special" + season (without dashes) + number
        const cleanedSeason = seasonId.replace(/-/g, "");
        const seasonKey = `special${cleanedSeason}`;
        seasonCounts[seasonKey] = (seasonCounts[seasonKey] || 0) + 1;
        linkID = `${seasonKey}${seasonCounts[seasonKey]}`;
      }

      const magazineItem: MagazineItem = {
        id,
        season,
        imageName,
        overrideName,
        linkID,
      };

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
    });
  };

  // Process serials from SeasonInfoList
  SeasonInfoList.forEach((season) => {
    const seasonNum = parseInt(season.id);
    if (season.gallerycard && season.gallerycard.length > 0) {
      season.gallerycard.forEach((gallerycard) => {
        processSeasonGallerycards(season.id, seasonNum, gallerycard.items);
      });
    }
  });

  // Process specials from SeasonSpecialsInfoList
  SeasonSpecialsInfoList.forEach((special) => {
    const seasonNum = parseInt(special.id);
    if (special.gallerycard && special.gallerycard.length > 0) {
      special.gallerycard.forEach((gallerycard) => {
        processSeasonGallerycards(special.id, seasonNum, gallerycard.items);
      });
    }
  });

  return {
    groups: result,
    maxSerialSeason,
    maxSpecialSeason,
  };
};

const {
  groups: MagazineGroups,
  maxSerialSeason,
  maxSpecialSeason,
} = processMagazineData();

// Export function to get groups by index
export const getMagazineGroup = (index: number): MagazineItem[] => {
  return MagazineGroups.bySeason[index] || [];
};

// Export the grouped magazines
export const { serials, specials } = MagazineGroups;

// Export the max season values
export const magazineMaxSerialSeason = maxSerialSeason;
export const magazineMaxSpecialSeason = maxSpecialSeason;

// Export season information for GalleryMagazine
export const magazineSerials = serials;
export const magazineSpecials = specials;

// Export season info maps for lookups - returns array of SeasonInfo for a season number
export const getSeasonInfo = (
  seasonNumber: string
): SeasonInfo[] | undefined => {
  return seasonInfoMap.get(seasonNumber);
};

// Export all seasons for year grouping - flattens all SeasonInfo entries
export const getAllSeasons = (): SeasonInfo[] => {
  const allSeasons: SeasonInfo[] = [];
  seasonInfoMap.forEach((seasonInfos) => {
    allSeasons.push(...seasonInfos);
  });
  return allSeasons;
};

// Export serials and specials seasons separately for type checking
export const getSerialsSeasons = (): SeasonInfo[] => {
  const serialsSeasons: SeasonInfo[] = [];
  SeasonInfoList.forEach((season) => {
    if (season.gallerycard && season.gallerycard.length > 0) {
      season.gallerycard.forEach((gallerycard) => {
        serialsSeasons.push({
          number: season.id,
          name: gallerycard.title,
          year: season.year,
          image: gallerycard.cover,
          numberSufix: gallerycard.numberSufix,
        });
      });
    }
  });
  return serialsSeasons;
};

export const getSpecialsSeasons = (): SeasonInfo[] => {
  const specialsSeasons: SeasonInfo[] = [];
  SeasonSpecialsInfoList.forEach((special) => {
    if (special.gallerycard && special.gallerycard.length > 0) {
      special.gallerycard.forEach((gallerycard) => {
        specialsSeasons.push({
          number: special.id,
          name: gallerycard.title,
          year: special.year,
          image: gallerycard.cover,
          numberSufix: gallerycard.numberSufix,
        });
      });
    }
  });
  return specialsSeasons;
};
