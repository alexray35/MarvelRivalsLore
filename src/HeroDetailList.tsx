// HeroDetailList.tsx

interface HeroDetailInfo {
  heroName: string;
  heroRealName: string;
  heroDesc: string;
  heroLore: string;
  heroRender: string;
  heroLogo: string;
  heroSignature: string;
}

const processKeys = async (): Promise<HeroDetailInfo[]> => {
  try {
    const response = await fetch(
      "https://sheets.livepolls.app/api/spreadsheets/024e4a09-8df3-4026-be4e-b9b151bd1640/HeroDetail"
    );

    const apiData = await response.json();
    const data = apiData.data; //new API shenanigans

    const heroDetailInfo = data.map((row: { [x: string]: string }) => {
      const id = row["id"].trim();
      const heroName = row["HeroName"].trim();
      const heroRealName = row["RealName"].trim();

      const heroDesc = row["Description"].trim();
      const heroLore = row["Biography"].trim();

      // Special case for heroRender when id is 1011
      const heroRender =
        id === "1011"
          ? "/textures/hero_prestigerender/img_prestige_10110013_hero.png"
          : `/textures/hero_prestigerender/img_prestige_${id}0010_hero.png`;

      const heroSignature = `/textures/hero_signature/img_story_herosign_${id}_sign.png`;

      const heroLogo = `/textures/hero_logo/img_herologo_${id}_logo.png`;

      return {
        heroName,
        heroRealName,
        heroDesc,
        heroLore,
        heroRender,
        heroLogo,
        heroSignature,
      };
    });

    return heroDetailInfo;
  } catch (error) {
    console.error("Error processing CSV file:", error);
    return []; // Return empty array on error
  }
};

const HeroDetailInfo = await processKeys();
export { HeroDetailInfo };
