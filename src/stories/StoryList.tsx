// StoryList.tsx
import { HeroFullInfoList } from "../0manual/HeroFullList";
import { SeasonInfoList } from "../0manual/SeasonsList";

interface StoryInfo {
  titlePath: string;
  contentPath: string;
  imageName: string;
  hero: string;
  highlight: string;
  linkID: string;
  season: string;
}

const processStories = (): StoryInfo[] => {
  const storyInfo: StoryInfo[] = [];

  // Track story counts per hero for linkID generation
  const heroStoryCounts: { [key: string]: number } = {};

  // Get the last season ID from SeasonInfoList
  const lastSeasonId = SeasonInfoList[SeasonInfoList.length - 1]?.id;

  // Iterate through each hero in HeroFullInfoList
  HeroFullInfoList.forEach((hero) => {
    // Skip if hero doesn't have a linkID (shouldn't happen, but safe check)
    if (!hero.linkID) return;

    // Process each story for this hero
    hero.story.forEach((story, index) => {
      // Skip if story title is empty
      if (!story.title) return;

      const titlePath = story.title;
      const contentPath = story.content || "";
      const heroLinkID = hero.linkID;
      const season = story.season;

      // Determine highlight based on season match with last season
      let highlight = "";
      if (story.season && story.season === lastSeasonId) {
        highlight = "new";
      }

      // Generate image name based on hero id and story position
      let imageName = "img_herostory_superlogo_hover.png"; // default
      const heroId = hero.id;

      if (heroId) {
        // Position is 0-based index, add 1 for the image naming convention
        const position = index + 1;
        if (contentPath != "") {
          // Special case for hero id 1011 (Bruce Banner)
          if (heroId === "1011") {
            imageName = `img_herostory_${heroId}1${position}_hover.png`;
          } else {
            imageName = `img_herostory_${heroId}0${position}_hover.png`;
          }
        } else {
          if (heroId === "1011") {
            imageName = `img_herostory_${heroId}11_normal.png`;
          } else {
            imageName = `img_herostory_${heroId}01_normal.png`;
          }
        }
      }

      // Generate linkID: hero linkID + sequential number for this hero's stories
      heroStoryCounts[heroLinkID] = (heroStoryCounts[heroLinkID] || 0) + 1;
      const linkID = `${heroLinkID}${heroStoryCounts[heroLinkID]}`;

      storyInfo.push({
        titlePath,
        contentPath,
        imageName,
        hero: heroLinkID,
        highlight,
        linkID,
        season,
      });
    });
  });

  return storyInfo;
};

const StoryInfo = processStories();

export { StoryInfo };
