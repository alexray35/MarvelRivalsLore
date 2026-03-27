// CinematicList.tsx

interface CinematicInfo {
  name: string;
  url: string;
  type?: string;
}

interface SeasonGroup {
  seasonId: string;
  seasonName: string;
  seasonAltName: string;
  seasonYear: string;
  cinematics: CinematicInfo[];
  sortPriority?: number; // Optional custom sort priority
}

// Import the seasons data
import { SeasonInfoList, SeasonSpecialsInfoList } from "../0manual/SeasonsList";

// Define custom order for specials
// Map special season IDs to their desired position (relative to normal seasons)
const specialOrderMap: { [key: string]: number } = {
  "-7": 5.5,
  "-999": -0.5,
};

const processKeys = async (): Promise<{
  seasonGroups: SeasonGroup[];
}> => {
  try {
    const seasonGroups: SeasonGroup[] = [];

    // Process regular seasons
    SeasonInfoList.forEach((season) => {
      const cinematics: CinematicInfo[] = [];

      season.video.forEach((video) => {
        // Only include videos that have a URL
        if (video.url && video.url.trim() !== "") {
          cinematics.push({
            name: video.title,
            url: video.url,
            type: video.type,
          });
        }
      });

      // Only add season if it has cinematics
      if (cinematics.length > 0) {
        seasonGroups.push({
          seasonId: season.id,
          seasonName: season.name,
          seasonAltName: season.altName,
          seasonYear: season.year,
          cinematics: cinematics,
        });
      }
    });

    // Process special seasons
    SeasonSpecialsInfoList.forEach((special) => {
      const cinematics: CinematicInfo[] = [];

      special.video.forEach((video) => {
        // Only include videos that have a URL
        if (video.url && video.url.trim() !== "") {
          cinematics.push({
            name: video.title,
            url: video.url,
            type: video.type,
          });
        }
      });

      // Only add special season if it has cinematics
      if (cinematics.length > 0) {
        seasonGroups.push({
          seasonId: special.id,
          seasonName: special.name,
          seasonAltName: special.altName,
          seasonYear: special.year,
          cinematics: cinematics,
          sortPriority: specialOrderMap[special.id], // Add custom sort priority
        });
      }
    });

    // Sort seasons with custom logic
    seasonGroups.sort((a, b) => {
      const aId = parseInt(a.seasonId);
      const bId = parseInt(b.seasonId);

      // If both have sort priorities, use them
      if (a.sortPriority !== undefined && b.sortPriority !== undefined) {
        return a.sortPriority - b.sortPriority;
      }

      // If only a has sort priority, compare with b's ID
      if (a.sortPriority !== undefined) {
        return a.sortPriority - bId;
      }

      // If only b has sort priority, compare a's ID with b's priority
      if (b.sortPriority !== undefined) {
        return aId - b.sortPriority;
      }

      // Both are normal seasons, sort by ID
      return aId - bId;
    });

    return { seasonGroups };
  } catch (error) {
    console.error("Error processing seasons data:", error);
    return { seasonGroups: [] };
  }
};

const { seasonGroups } = await processKeys();
export { seasonGroups };
