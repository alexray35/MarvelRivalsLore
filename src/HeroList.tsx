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
      "https://sheetdb.io/api/v1/f885sh79xfxqs?sheet=Heroes"
    );
    const data = await response.json();

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
