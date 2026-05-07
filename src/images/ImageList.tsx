// ImageList.tsx

interface ImageInfo {
  title: string;
  path: string;
}

interface SeasonImageGroup {
  seasonId: string;
  seasonName: string;
  seasonAltName: string;
  seasonYear: string;
  images: ImageInfo[];
  sortPriority?: number; // Optional custom sort priority
}

// Import the seasons data and special order map
import {
  SeasonInfoList,
  SeasonSpecialsInfoList,
  specialOrderMap,
} from "../0manual/SeasonsList";

const processImageKeys = async (): Promise<{
  seasonImageGroups: SeasonImageGroup[];
}> => {
  try {
    const seasonImageGroups: SeasonImageGroup[] = [];

    // Process regular seasons
    SeasonInfoList.forEach((season) => {
      const images: ImageInfo[] = [];

      season.image.forEach((image) => {
        // Only include images that have a path
        if (image.path && image.path.trim() !== "") {
          images.push({
            title: image.title,
            path: image.path,
          });
        }
      });

      // Only add season if it has images
      if (images.length > 0) {
        seasonImageGroups.push({
          seasonId: season.id,
          seasonName: season.name,
          seasonAltName: season.altName,
          seasonYear: season.year,
          images: images,
        });
      }
    });

    // Process special seasons
    SeasonSpecialsInfoList.forEach((special) => {
      const images: ImageInfo[] = [];

      special.image.forEach((image) => {
        // Only include images that have a path
        if (image.path && image.path.trim() !== "") {
          images.push({
            title: image.title,
            path: image.path,
          });
        }
      });

      // Only add special season if it has images
      if (images.length > 0) {
        seasonImageGroups.push({
          seasonId: special.id,
          seasonName: special.name,
          seasonAltName: special.altName,
          seasonYear: special.year,
          images: images,
          sortPriority: specialOrderMap[special.id], // Add custom sort priority
        });
      }
    });

    // Sort seasons with custom logic (same as CinematicList)
    seasonImageGroups.sort((a, b) => {
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

    return { seasonImageGroups };
  } catch (error) {
    console.error("Error processing image data:", error);
    return { seasonImageGroups: [] };
  }
};

const { seasonImageGroups } = await processImageKeys();
export { seasonImageGroups };
