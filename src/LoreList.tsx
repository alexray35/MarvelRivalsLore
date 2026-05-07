// LoreList.tsx
import { StoryInfo } from "./stories/StoryList";
import {
  magazineSerials,
  magazineSpecials,
  getSeasonInfo,
} from "./magazine/MagazineList";
import { getNestedValue } from "./getNestedValue";
import gameDataSources from "./0manual/GameData";

interface LoreItem {
  title: string;
  titlePath: string;
  contentPath: string;
  imagePath: string;
  type: string;
  source: string;
  linkID: string; // Added linkID field
}

const getSeasonName = (seasonNumber: number): string => {
  const seasonInfoArray = getSeasonInfo(seasonNumber.toString());
  // Get the first season info entry if available, otherwise return default
  return seasonInfoArray &&
    seasonInfoArray.length > 0 &&
    seasonInfoArray[0].name
    ? seasonInfoArray[0].name
    : "Season Title";
};

const processLoreData = async (): Promise<LoreItem[]> => {
  const loreItems: LoreItem[] = [];

  // Process all magazine items (both serials and specials)
  const allMagazines = [...magazineSerials, ...magazineSpecials];

  allMagazines.forEach((magazine) => {
    const seasonNum = parseInt(magazine.season);
    const isSpecial = seasonNum < 0;

    loreItems.push({
      title: getNestedValue(
        gameDataSources.default,
        `UIGalleryTable_${magazine.id}_CardCaption_CaptionTitle`
      ),
      titlePath: `UIGalleryTable_${magazine.id}_CardCaption_CaptionTitle`,
      contentPath: `UIGalleryTable_${magazine.id}_CardCaption_CaptionContent`,
      imagePath: `/textures/gallerycards/${magazine.imageName}`,
      type: isSpecial ? "Special Edition" : "Gallery Story",
      source: isSpecial
        ? `Special: ${getSeasonName(seasonNum)}`
        : `Magazine: Season ${seasonNum}`,
      linkID: magazine.linkID, // Added magazine linkID
    });
  });

  // Process Story items (only those with content)
  StoryInfo.forEach((story) => {
    if (story.contentPath) {
      loreItems.push({
        title: getNestedValue(gameDataSources.default, story.titlePath),
        titlePath: story.titlePath,
        contentPath: story.contentPath,
        imagePath: `/textures/stories/${story.imageName}`,
        type: "Hero Story",
        source: "Hero: " + story.hero,
        linkID: story.linkID, // Added story linkID
      });
    }
  });

  return loreItems;
};

const LoreItems = await processLoreData();

// Sort the items alphabetically by title

export { LoreItems };
