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
}

interface MagazineGroups {
  serials: MagazineItem[];
  specials: MagazineItem[];
  bySeason: {
    [key: number]: MagazineItem[];
  };
}

// Store season information for lookups
const seasonInfoMap: Map<string, SeasonInfo> = new Map();

// Populate season info from SeasonInfoList
SeasonInfoList.forEach((season) => {
  seasonInfoMap.set(season.id, {
    number: season.id,
    name: season.name,
    year: season.year,
    image: season.cover,
  });
});

// Populate season info from SeasonSpecialsInfoList
SeasonSpecialsInfoList.forEach((special) => {
  seasonInfoMap.set(special.id, {
    number: special.id,
    name: special.name,
    year: special.year,
    image: special.cover,
  });
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
      processSeasonGallerycards(season.id, seasonNum, season.gallerycard);
    }
  });

  // Process specials from SeasonSpecialsInfoList
  SeasonSpecialsInfoList.forEach((special) => {
    const seasonNum = parseInt(special.id);
    if (special.gallerycard && special.gallerycard.length > 0) {
      processSeasonGallerycards(special.id, seasonNum, special.gallerycard);
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

// Export season info maps for lookups
export const getSeasonInfo = (seasonNumber: string): SeasonInfo | undefined => {
  return seasonInfoMap.get(seasonNumber);
};

// Export all seasons for year grouping
export const getAllSeasons = (): SeasonInfo[] => {
  return Array.from(seasonInfoMap.values());
};

// Export serials and specials seasons separately for type checking
export const getSerialsSeasons = (): SeasonInfo[] => {
  return SeasonInfoList.filter((season) => season.gallerycard?.length > 0).map(
    (season) => ({
      number: season.id,
      name: season.name,
      year: season.year,
      image: season.cover,
    })
  );
};

export const getSpecialsSeasons = (): SeasonInfo[] => {
  return SeasonSpecialsInfoList.filter(
    (special) => special.gallerycard?.length > 0
  ).map((special) => ({
    number: special.id,
    name: special.name,
    year: special.year,
    image: special.cover,
  }));
};
