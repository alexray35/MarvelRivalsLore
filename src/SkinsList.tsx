// SkinsList.tsx
import { gameDataSources } from "./GameData";
import { HeroInfo } from "./HeroList";
import skinTable from "./gamedata/UISkinTable.json";

interface SkinInfo {
  id: string;
  characterId: string;
  heroName?: string;

  skinName: string;
  skinDescription: string;
  skinSource: string;

  skinIcon: string;
  skinRender: string;
  skinActualName: string;

  skinTheme: string;

  skinStory: string;
}

/// Define the structure of the game data
interface GameData {
  [key: string]: any;
}

// Array of skin IDs with their respective story IDs
const skinStories: { skinID: string; storyID: string }[] = [
  { skinID: "1026301", storyID: "BlackPanther2" },
  { skinID: "1034502", storyID: "IronMan3" },
  { skinID: "1037300", storyID: "Magneto2" },
  { skinID: "1023500", storyID: "RocketRaccoon2" },
  { skinID: "1032302", storyID: "SquirrelGirl2" },
  { skinID: "1028500", storyID: "Ultron1" },
  { skinID: "1049500", storyID: "Wolverine2" },
  { skinID: "1035301", storyID: "Venom2" },
  { skinID: "1024303", storyID: "Hela2" },
  { skinID: "1047501", storyID: "JefftheLandShark2" },
  { skinID: "1016300", storyID: "Loki2" },
  { skinID: "1016302", storyID: "season4-4" },
  { skinID: "1056501", storyID: "season4-4" },
  { skinID: "1049301", storyID: "season4-4" },
  { skinID: "1015300", storyID: "season4-4" },
  { skinID: "1052302", storyID: "season4-4" },
  { skinID: "1053501", storyID: "season3-3" },
  { skinID: "1026302", storyID: "season3-3" },
  { skinID: "1049502", storyID: "season3-3" },
  { skinID: "1033502", storyID: "season3-3" },
  { skinID: "1045502", storyID: "season3-3" },
  { skinID: "1052502", storyID: "season3-3" },
  { skinID: "1054300", storyID: "Phoenix1" },
  { skinID: "1034502", storyID: "IronMan3" },
];

const extractSkinTheme = (fullSkinId: string): string => {
  try {
    const skinData = skinTable as GameData;

    if (!skinData || Object.keys(skinData).length === 0) {
      return "default";
    }

    const skinPath = skinData[0].Rows[fullSkinId + "0"].SkinLevel.AssetPathName;

    if (!skinPath) {
      return "Common";
    }

    const match = skinPath.match(/Lobby_(\d{4})/);

    if (match && match[1]) {
      return match[1];
    }

    return "Common";
  } catch (error) {
    console.error("Error extracting skin theme:", error);
    return "error";
  }
};

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
          // Determine the name key based on whether this is a special skin
          var nameKey = `MarvelItemTable_${fullSkinId}_ItemName`;
          var descKey = `MarvelItemTable_${fullSkinId}_ItemDescription_NormalDescription`;
          const sourceKey = `MarvelItemTable_${fullSkinId}_ItemDescription_AppearanceItemIPSource`;
          const iconPath = `/textures/skin_icon/item_skin_${fullSkinId}.png`;
          const renderPath = `/textures/skin_render/img_skin_${fullSkinId}.png`;
          var skinKeydName = subKeys[nameKey] || nameKey;
          var skinStory = "";

          // Check if this skin has a dedicated story
          const skinStoryData = skinStories.find(
            (story) => story.skinID === fullSkinId
          );
          if (skinStoryData) {
            skinStory = skinStoryData.storyID;
          }

          if (nameKey == skinKeydName) {
            nameKey = `UISkinTable_${fullSkinId}0_SkinBasic_SkinName`;
            skinKeydName = subKeys[nameKey] || nameKey;
          }

          if (fullSkinId == "1011501")
            descKey = "UISkinTable_10115010_SkinBasic_SkinDesc";
          else if (fullSkinId == "1016100") {
            nameKey = "HeroUIAssetBPTable_10161000_SkinInfo_SkinName";
            skinKeydName = subKeys[nameKey] || nameKey;
          }

          // Extract skin theme from UISkinTable
          const skinTheme = extractSkinTheme(fullSkinId);

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
            skinTheme,
            skinStory,
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
