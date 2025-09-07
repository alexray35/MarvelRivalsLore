// CollectableList.tsx
import { gameDataSources } from "./GameData"; // Changed import

interface CollectableInfo {
  id: string;
  collectableName: string;
  collectableDescription: string;
  collectableImage: string;
}

// Define the structure of the game data
interface GameData {
  [key: string]: any; // Simplified to match GameData.tsx
}

const extractIdsFromGameData = (): CollectableInfo[] => {
  try {
    const idSet = new Set<string>();
    const typedGameData = gameDataSources.default.data as GameData; // Added .data

    // Iterate through all main keys in the game data
    for (const mainKey in typedGameData) {
      const subKeys = typedGameData[mainKey];

      // Iterate through all subkeys
      for (const subKey in subKeys) {
        // Check if the subkey matches our pattern
        const match = subKey.match(/MarvelItemTable_018(\d{4})_ItemName/);
        if (match) {
          const id = "018" + match[1];
          idSet.add(id);
        }
      }
    }

    // Convert the Set to an array of CollectableInfo and sort by ID
    const collectableInfo = Array.from(idSet)
      .map((id) => {
        return {
          id,
          collectableName: `MarvelItemTable_${id}_ItemName`,
          collectableDescription: `MarvelItemTable_${id}_ItemDescription_NormalDescription`,
          collectableImage: `/textures/collectable/item_plot_${id}.png`,
        };
      })
      .sort((a, b) => b.id.localeCompare(a.id));

    return collectableInfo;
  } catch (error) {
    console.error("Error processing Game.json:", error);
    return []; // Return empty array on error
  }
};

const CollectableInfo = extractIdsFromGameData();
export { CollectableInfo };
