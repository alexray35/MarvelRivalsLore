// HeroList.tsx
interface HeroInfo {
  id: string;
  heroName: string;
  heroImage: string;
  heroColor: string;
}

const processKeys = async (): Promise<HeroInfo[]> => {
  try {
    const response = await fetch(
      "https://sheets.livepolls.app/api/spreadsheets/024e4a09-8df3-4026-be4e-b9b151bd1640/Heroes"
    );
    const apiData = await response.json();
    const data = apiData.data; //new API shenanigans

    const heroInfo = data
      .map((row: { [x: string]: string }) => {
        const id = row["id"].trim();
        const heroName = row["Name"].trim();
        const heroImage = `/textures/hero_portrait/img_selecthero_${id}001.png`;
        const heroColor = row["Color"].trim();

        return {
          id,
          heroName,
          heroImage,
          heroColor,
        };
      })
      .sort((a: { heroName: string }, b: { heroName: any }) =>
        a.heroName.localeCompare(b.heroName)
      );

    return heroInfo;
  } catch (error) {
    console.error("Error processing API data:", error);
    return []; // Return empty array on error
  }
};

const HeroInfo = await processKeys();
export { HeroInfo };
