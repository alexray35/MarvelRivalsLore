// AccessoryList.tsx
import gameDataSources from "./GameData";

interface AccessoryInfo {
  id: string;
  accessoryName: string;
  accessoryDescription: string;
  accessoryImage: string;
}

// Define the structure of the game data
interface GameData {
  [mainKey: string]: {
    [subKey: string]: string;
  };
}

const extractIdsFromGameData = (): AccessoryInfo[] => {
  try {
    const idSet = new Set<string>();
    const typedGameData = gameDataSources.default as GameData;

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
        return {
          id,
          accessoryName: `MarvelItemTable_Slot_${id}_ItemName`,
          accessoryDescription: `MarvelItemTable_Slot_${id}_ItemDescription_NormalDescription`,
          accessoryImage: `/textures/accessory/item_pendant_${id}.png`,
        };
      })
      .sort((a, b) => b.id.localeCompare(a.id));

    return accessoryInfo;
  } catch (error) {
    console.error("Error processing Game.json:", error);
    return []; // Return empty array on error
  }
};

const AccessoryInfo = extractIdsFromGameData();
export { AccessoryInfo };
