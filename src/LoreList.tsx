// LoreList.tsx
import { StoryInfo } from "./StoryList";
import {
  serials as magazineSerials,
  specials as magazineSpecials,
} from "./MagazineList";
import { getNestedValue } from "./getNestedValue";
import gameDataSources from "./GameData";
import {
  serials as seasonSerials,
  specials as seasonSpecials,
} from "./SeasonList";

interface LoreItem {
  title: string;
  titlePath: string;
  contentPath: string;
  imagePath: string;
  type: string;
  source: string;
}

const getSeasonName = (seasonNumber: number): string => {
  // Combine both serial and special seasons for lookup
  const allSeasons = [...seasonSerials, ...seasonSpecials];
  const season = allSeasons.find((s) => s.number === seasonNumber.toString());
  const seasonName = season?.name;
  return seasonName ? seasonName : "Season Title";
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
      });
    }
  });

  return loreItems;
};

const LoreItems = await processLoreData();

// Sort the items alphabetically by title

export { LoreItems };
