// HeroList.tsx

interface HeroInfo {
  id: string;
  heroName: string;
  heroImage: string;
  heroColor: string;
  heroRealName: string;
  heroDesc: string;
  heroLore: string;
  heroRender: string;
  heroLogo: string;
  heroSignature: string;
  linkID: string;
}

const processHeroData = async (): Promise<HeroInfo[]> => {
  try {
    // Fetch hero basic info
    const heroResponse = await fetch(
      "https://sheets.livepolls.app/api/spreadsheets/f9d0fcbd-88b5-4dfe-a857-c30d1619aaf9/Heroes"
    );
    const heroApiData = await heroResponse.json();
    const heroData = heroApiData.data;

    // Fetch hero detail info
    const detailResponse = await fetch(
      "https://sheets.livepolls.app/api/spreadsheets/f9d0fcbd-88b5-4dfe-a857-c30d1619aaf9/HeroDetail"
    );
    const detailApiData = await detailResponse.json();
    const detailData = detailApiData.data;

    // Create a map of detail data by ID for more reliable lookup
    const detailMap = new Map();
    detailData.forEach((row: { [x: string]: string }) => {
      const id = row["id"]?.trim();
      if (id) {
        detailMap.set(id, {
          heroRealName: row["RealName"]?.trim() || "",
          heroDesc: row["Description"]?.trim() || "",
          heroLore: row["Biography"]?.trim() || "",
        });
      }
    });

    const heroInfo = heroData
      .map((row: { [x: string]: string }) => {
        const id = row["id"].trim();
        const heroName = row["Name"].trim();
        const heroImage = `/textures/hero_portrait/img_selecthero_${id}001.png`;
        const heroColor = row["Color"].trim();

        // Get detail info from the detail map using ID instead of name
        const detailInfo = detailMap.get(id) || {};
        const { heroRealName, heroDesc, heroLore } = detailInfo;

        // Special case for heroRender when id is 1011
        const heroRender =
          id === "1011"
            ? "/textures/hero_prestigerender/img_prestige_10110013_hero.png"
            : `/textures/hero_prestigerender/img_prestige_${id}0010_hero.png`;
        //: `https://psylocke.gg/_next/image?url=%2Fapi%2Fgame%2Ftexture%3Fpath%3DMarvel%252FContent%252FMarvel%252FUI%252FTextures%252FHeroGallery_V3%252FHeroDetail%252FPrestige%252FHeroPrestige%252Fimg_prestige_${id}0010_hero.img_prestige_10460010_hero&w=1024&q=75`;

        const heroSignature = `/textures/hero_signature/img_story_herosign_${id}_sign.png`;
        const heroLogo = `/textures/hero_logo/img_herologo_${id}_logo.png`;

        // Generate linkID from hero name (remove spaces)
        const linkID = heroName.replace(/\s+/g, "");

        return {
          id,
          heroName,
          heroImage,
          heroColor,
          heroRealName: heroRealName || "Real Name Not Found",
          heroDesc: heroDesc || "Description Not Found",
          heroLore: heroLore || "Biography Not Found",
          heroRender,
          heroLogo,
          heroSignature,
          linkID,
        };
      })
      .sort((a: { heroName: string }, b: { heroName: string }) =>
        a.heroName.localeCompare(b.heroName)
      );

    return heroInfo;
  } catch (error) {
    console.error("Error processing hero data:", error);
    return []; // Return empty array on error
  }
};

const HeroInfo = await processHeroData();
export { HeroInfo };
