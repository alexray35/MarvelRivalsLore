// SkinsList.tsx
import { gameDataSources } from "../0manual/GameData";
import { HeroFullInfoList } from "../0manual/HeroFullList";
import skinTable from "../gamedata/UISkinTable.json";

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

// Create a simple mapping of character ID to hero name
const heroIdToNameMap: Map<string, string> = new Map();
HeroFullInfoList.forEach((hero) => {
  heroIdToNameMap.set(hero.id, hero.heroName);
});

// Array of skin IDs with their respective story IDs
const skinStories: { skinID: string; storyID: string }[] = [
  // Hero Stories
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
  { skinID: "1054300", storyID: "Phoenix1" },
  { skinID: "1020305", storyID: "Mantis1" },
  // Gambit
  // Immortal Weapons
  { skinID: "1016302", storyID: "season4-4" },
  { skinID: "1056501", storyID: "season4-4" },
  { skinID: "1049301", storyID: "season4-4" },
  { skinID: "1015300", storyID: "season4-4" },
  { skinID: "1052302", storyID: "season4-4" },
  { skinID: "1027304", storyID: "season4-4" },
  // Phoenix
  { skinID: "1053501", storyID: "season3-3" },
  { skinID: "1026302", storyID: "season3-3" },
  { skinID: "1049502", storyID: "season3-3" },
  { skinID: "1033502", storyID: "season3-3" },
  { skinID: "1045502", storyID: "season3-3" },
  { skinID: "1052502", storyID: "season3-3" },
  { skinID: "1029502", storyID: "season3-3" },
  // Ultron Virus
  { skinID: "1052301", storyID: "season2-3" },
  { skinID: "1021502", storyID: "season2-3" },
  // 2025 Aniversary
  { skinID: "1050301", storyID: "special71" },
  { skinID: "1031308", storyID: "special71" },
  { skinID: "1048302", storyID: "special71" },
  { skinID: "1035302", storyID: "special71" },
  // 2025 X-Mas
  { skinID: "1042303", storyID: "special81" },
  { skinID: "1041502", storyID: "special81" },
  { skinID: "1032304", storyID: "special81" },
  { skinID: "1043301", storyID: "special81" },
  { skinID: "1055501", storyID: "special81" },
  { skinID: "1025303", storyID: "special81" },
  // 2025 Halloween
  { skinID: "1042302", storyID: "special61" },
  { skinID: "1047302", storyID: "special61" },
  { skinID: "1045300", storyID: "special61" },
  // Thieves Guild
  { skinID: "1058300", storyID: "season5-4" },
  // Cards
  { skinID: "1022504", storyID: "season5-5" },
  { skinID: "1056300", storyID: "season5-5" },
  { skinID: "1053301", storyID: "season5-5" },
  { skinID: "1034504", storyID: "season5-5" },
  { skinID: "1017300", storyID: "season5-5" },
  { skinID: "1016502", storyID: "season5-5" },
  { skinID: "1030301", storyID: "season5-5" },
  { skinID: "1045301", storyID: "season5-5" },
  // Marauders season6-4
  { skinID: "1035303", storyID: "season6-4" },
  { skinID: "1057300", storyID: "season6-4" },
  { skinID: "1014301", storyID: "season6-4" },
  { skinID: "1048303", storyID: "season6-4" },
  { skinID: "1053502", storyID: "season6-4" },
  { skinID: "1034301", storyID: "season6-4" },
  // ESU season7
  { skinID: "1036510", storyID: "season7-3" },
  { skinID: "1050305", storyID: "season7-3" },
  { skinID: "1040302", storyID: "season7-3" },
  { skinID: "1022302", storyID: "season7-3" },
  { skinID: "1024306", storyID: "season7-3" },
  { skinID: "1048309", storyID: "season7-3" },
  { skinID: "1032306", storyID: "season7-3" },
  { skinID: "1052303", storyID: "season7-3" },
  { skinID: "1018304", storyID: "season7-3" },
  { skinID: "1031312", storyID: "season7-3" },
  { skinID: "1060500", storyID: "season7-3" },
  { skinID: "1023307", storyID: "season7-3" },
  { skinID: "1057800", storyID: "season7-3" },
  { skinID: "1020307", storyID: "season7-3" },
  // Krakoa Council Phoenix
  { skinID: "1054501", storyID: "season7-7" },
  // Alchemax
  { skinID: "1062500", storyID: "DevilDinosaur1" },
  { skinID: "1043303", storyID: "season8-3" },
  { skinID: "1058500", storyID: "season8-3" },
  { skinID: "1065501", storyID: "season8-3" },
  { skinID: "1029305", storyID: "season8-3" },
  //{ skinID: "psylock", storyID: "season8-3" },
  { skinID: "1049302", storyID: "season8-3" },
  // Avengers
  { skinID: "1016801", storyID: "special101" },
  //Summer 2026
  { skinID: "1025305", storyID: "special111" },
  { skinID: "1022303", storyID: "special111" },
  { skinID: "1016504", storyID: "special111" },
  { skinID: "1036301", storyID: "special111" },
  { skinID: "1018305", storyID: "special111" },
  { skinID: "1053302", storyID: "special111" },
  { skinID: "1055300", storyID: "special111" },
  { skinID: "1033504", storyID: "special111" },
  { skinID: "1040303", storyID: "special111" },
  { skinID: "1060501", storyID: "special111" },
];

const extractSkinTheme = (fullSkinId: string): string => {
  try {
    const skinData = skinTable as GameData;

    if (!skinData || Object.keys(skinData).length === 0) {
      return "default";
    }

    let skinEntry = null;

    // If skinData is an array, try to find the entry by matching the ID
    if (Array.isArray(skinData)) {
      const skinKey = fullSkinId + "0";
      skinEntry = skinData.find(
        (item: any) => item.Id === skinKey || item.id === skinKey
      );

      if (!skinEntry && skinData[0]?.Rows) {
        skinEntry = skinData[0].Rows[skinKey];
      }
    }
    // If skinData has Rows property at the root
    else if (skinData.Rows) {
      const skinKey = fullSkinId + "0";
      skinEntry = skinData.Rows[skinKey];
    }
    // If skinData is an object with numeric keys
    else if (skinData[0]?.Rows) {
      const skinKey = fullSkinId + "0";
      skinEntry = skinData[0].Rows[skinKey];
    }

    if (
      !skinEntry ||
      !skinEntry.SkinLevel ||
      !skinEntry.SkinLevel.AssetPathName
    ) {
      return "Common";
    }

    const skinPath = skinEntry.SkinLevel.AssetPathName;
    const match = skinPath.match(/Lobby_(\d{4})/);

    if (match && match[1]) {
      return match[1];
    }

    return "Common";
  } catch (error) {
    console.error(`Error extracting skin theme for ${fullSkinId}:`, error);
    return "error";
  }
};

const extractSkinsFromGameData = (): SkinInfo[] => {
  try {
    const skinMap = new Map<string, SkinInfo>();
    const typedGameData = gameDataSources.default.data as GameData;

    // Iterate through all main keys in the game data
    for (const mainKey in typedGameData) {
      // Check if this is a skin parent key (123_Customize_XXXX_ST)
      const parentMatch = mainKey.match(/123_Customize_(\d{4})_ST$/);
      if (!parentMatch) continue;

      const characterId = parentMatch[1];
      const subKeys = typedGameData[mainKey];

      // Get hero name from the map
      const heroName = heroIdToNameMap.get(characterId);

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
          var iconPath = `/textures/skin_icon/item_skin_${fullSkinId}.png`;
          var renderPath = `/textures/skin_render/img_skin_${fullSkinId}.png`;

          if (fullSkinId == "1017301") {
            iconPath = `/textures/skin_icon/item_skin_1017300.png`;
            renderPath = `/textures/skin_render/img_skin_1017300.png`;
          }
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
            heroName: heroName || "Unknown Hero",
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

const SkinsInfo = extractSkinsFromGameData();
export { SkinsInfo };
