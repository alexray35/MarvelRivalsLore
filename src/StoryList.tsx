// StoryList.tsx

interface StoryInfo {
  titlePath: string;
  contentPath: string;
  imageName: string;
  hero: string;
  highlight: string;
  linkID: string; // Added linkID field
}

const processKeys = async (csvPath: string): Promise<StoryInfo[]> => {
  try {
    const response = await fetch(csvPath);
    const apiData = await response.json();
    const data = apiData.data; //new API shenanigans

    // Track hero story counts
    const heroStoryCounts: { [key: string]: number } = {};

    // Filter rows that have a Title value and map to StoryTrio objects
    const storyInfo = data.map((row: { [x: string]: string }) => {
      const titlePath = row["Title"].trim();
      const contentPath = row["Content"]?.trim() || "";
      const contentID = row["id"]?.trim() || "";
      const hero = row["Hero"]?.trim() || "";
      const highlight = row["New"]?.trim() || "";

      // Generate image name based on contentID and position in titlePath
      let imageName = "img_herostory_superlogo_hover.png"; // default
      if (contentPath && contentID) {
        const positionMatch = titlePath.match(/#(\d+)_/);
        if (positionMatch) {
          const position = parseInt(positionMatch[1]) + 1;
          imageName = `img_herostory_${contentID}0${position}_hover.png`;
          if (contentID == "1011")
            imageName = `img_herostory_${contentID}1${position}_hover.png`;
        }
      }

      // Generate linkID: hero (without spaces) + sequential number
      const heroKey = hero.replace(/\s+/g, "");
      heroStoryCounts[heroKey] = (heroStoryCounts[heroKey] || 0) + 1;
      const linkID = `${heroKey}${heroStoryCounts[heroKey]}`;

      return {
        titlePath,
        contentPath,
        imageName,
        hero,
        highlight,
        linkID, // Added linkID
      };
    });

    return storyInfo;
  } catch (error) {
    console.error("Error processing CSV file:", error);
    return []; // Return empty array on error
  }
};

const processStories = async (): Promise<StoryInfo[]> => {
  return await processKeys(
    "https://sheets.livepolls.app/api/spreadsheets/024e4a09-8df3-4026-be4e-b9b151bd1640/Stories"
  );
};

const StoryInfo = await processStories();

export { StoryInfo };
