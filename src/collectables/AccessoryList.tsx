// AccessoryList.tsx
import { gameDataSources } from "../0manual/GameData"; // Changed import
import { HeroFullInfoList } from "../0manual/HeroFullList";

interface AccessoryInfo {
  id: string;
  accessoryName: string;
  accessoryDescription: string;
  accessoryImage: string;
  accessoryHeroID: string;
}

// Define the structure of the game data
interface GameData {
  [key: string]: any; // Simplified to match GameData.tsx
}

const extractIdsFromGameData = (): AccessoryInfo[] => {
  try {
    const idSet = new Set<string>();
    const typedGameData = gameDataSources.default.data as GameData; // Added .data

    // Iterate through all main keys in the game data
    for (const mainKey in typedGameData) {
      const subKeys = typedGameData[mainKey];

      // Iterate through all subkeys
      for (const subKey in subKeys) {
        // Check if the subkey matches our pattern
        const match = subKey.match(
          /MarvelItemTable_Slot_03810(\d{6})_ItemName/
        );
        if (match) {
          const id = "03810" + match[1];
          idSet.add(id);
        }
      }
    }

    // Convert the Set to an array of AccessoryInfo and sort by ID
    const accessoryInfo = Array.from(idSet)
      .map((id) => {
        var heroID = id.slice(3, -4);
        // Check if the ID matches the special cases
        const specialIds = [
          "03810230001",
          "03810360001",
          "03810410001",
          "03810470001",
          "03810480001",
          "03810500001",
          "03810530001",
        ];
        var imagePath = specialIds.includes(id)
          ? `/textures/accessory/item_pendant_${id}.png`
          : `/textures/accessory/item_pandant_${id}.png`;

        if (id == "03810250001") {
          imagePath = `/textures/accessory/item_pandant_038102500001.png`;
        }
        if (id == "03810360001") {
          imagePath = `/textures/accessory/item_pendant_03810410001.png`;
        }
        if (id == "03810410001") {
          imagePath = `/textures/accessory/item_pendant_03810360001.png`;
        }
        if (
          /^038104[0-9]0002$/.test(id) ||
          /^038103[0-9]0002$/.test(id) ||
          id === "03810140001"
        ) {
          imagePath = `/textures/accessory/item_pandant_03899990001.png`;
        }
        if (
          /^038104[0-9]0003$/.test(id) ||
          /^038103[0-9]0003$/.test(id) ||
          id === "03810140002"
        ) {
          imagePath = `/textures/accessory/item_pandant_03899990002.png`;
        }
        return {
          id,
          accessoryName: `MarvelItemTable_Slot_${id}_ItemName`,
          accessoryDescription: `MarvelItemTable_Slot_${id}_ItemDescription_NormalDescription`,
          accessoryImage: imagePath,
          accessoryHeroID: heroID,
        };
      })
      .sort((a, b) => {
        const heroA =
          HeroFullInfoList.find((h) => h.id === a.accessoryHeroID)
            ?.displayName || "";
        const heroB =
          HeroFullInfoList.find((h) => h.id === b.accessoryHeroID)
            ?.displayName || "";
        if (heroA !== heroB) return heroA.localeCompare(heroB);
        const lastDigitA = a.id.slice(-1);
        const lastDigitB = b.id.slice(-1);
        return lastDigitA.localeCompare(lastDigitB);
      });

    return accessoryInfo;
  } catch (error) {
    console.error("Error processing Game.json:", error);
    return []; // Return empty array on error
  }
};

const AccessoryInfo = extractIdsFromGameData();
export { AccessoryInfo };
