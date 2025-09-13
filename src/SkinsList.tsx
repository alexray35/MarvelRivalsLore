// SkinsList.tsx
import { gameDataSources } from "./GameData";
import { HeroInfo } from "./HeroList";

interface SkinInfo {
  id: string; // XXXXYYY format (character ID + skin ID)
  characterId: string; // XXXX format
  skinName: string;
  skinDescription: string;
  skinSource: string;
  skinIcon: string;
  skinRender: string;
  heroName?: string;
  skinActualName: string;
}

// Define the structure of the game data
interface GameData {
  [key: string]: any;
}

const extractSkinsFromGameData = (heroes: HeroInfo[]): SkinInfo[] => {
  try {
    const skinMap = new Map<string, SkinInfo>();
    const typedGameData = gameDataSources.default.data as GameData;

    // Create a map for quick hero lookup
    const heroMap = new Map<string, HeroInfo>();
    heroes.forEach((hero) => {
      heroMap.set(hero.id, hero);
    });

    // Iterate through all main keys in the game data
    for (const mainKey in typedGameData) {
      // Check if this is a skin parent key (123_Customize_XXXX_ST)
      const parentMatch = mainKey.match(/123_Customize_(\d{4})_ST$/);
      if (!parentMatch) continue;

      const characterId = parentMatch[1];
      const subKeys = typedGameData[mainKey];

      // Get hero info for this character
      const heroInfo = heroMap.get(characterId);

      // Iterate through all subkeys to find skin information
      for (const subKey in subKeys) {
        // Check if this is a skin source key (indicates a valid skin)
        const sourceMatch = subKey.match(
          /MarvelItemTable_(\d{4})(\d{3})_ItemDescription_AppearanceItemIPSource$/
        );
        if (!sourceMatch || sourceMatch[1] !== characterId) continue;

        const skinId = sourceMatch[2];
        const fullSkinId = characterId + skinId;

        if (!skinMap.has(fullSkinId)) {
          // Get skin name and description keys
          const nameKey = `MarvelItemTable_${fullSkinId}_ItemName`;
          const descKey = `MarvelItemTable_${fullSkinId}_ItemDescription_NormalDescription`;
          const sourceKey = `MarvelItemTable_${fullSkinId}_ItemDescription_AppearanceItemIPSource`;
          const iconPath = `/textures/skin_icon/item_skin_${fullSkinId}.png`;
          const renderPath = `/textures/skin_render/img_skin_${fullSkinId}.png`;
          const skinKeydName = subKeys[nameKey] || nameKey;

          const skinInfo: SkinInfo = {
            id: fullSkinId,
            characterId: characterId,
            skinName: nameKey,
            skinDescription: descKey,
            skinSource: sourceKey,
            skinIcon: iconPath,
            skinRender: renderPath,
            heroName: heroInfo?.heroName || "Unknown Hero",
            skinActualName: skinKeydName,
          };

          skinMap.set(fullSkinId, skinInfo);
        }
      }
    }

    return Array.from(skinMap.values()).sort((a, b) => {
      if (a.heroName !== b.heroName) {
        return a.heroName!.localeCompare(b.heroName!);
      }
      return a.skinActualName.localeCompare(b.skinActualName);
    });
  } catch (error) {
    console.error("Error processing Game.json:", error);
    return []; // Return empty array on error
  }
};

const SkinsInfo = extractSkinsFromGameData(HeroInfo);
console.log(SkinsInfo);
export { SkinsInfo };
