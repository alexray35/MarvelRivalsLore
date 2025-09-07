// GameData.tsx
import gameData from "./gamedata/Game 2025 08 22.json";
import gameBetaData from "./gamedata/Game 2024 08 05 BETA.json";
import gameSeason0Data from "./gamedata/Game 2024 12 04.json";
import gameSeason2Data from "./gamedata/Game 2025 04 11 2.json";
import gameSeason2_5Data from "./gamedata/Game 2025 07 03.json";
import gameSeason3Data from "./gamedata/Game 2025 07 11.json";
import gameSeason3FFData from "./gamedata/Game 2025 07 24.json";
import gameSeason3_5Data from "./gamedata/Game 2025 08 08.json";
import limboData from "./gamedata/Game Limbo.json";

export interface GameData {
  // Define the structure of your game data if needed
  [key: string]: any;
}

export interface GameDataSources {
  [key: string]: GameData;
}

export const gameDataSources: GameDataSources = {
  default: gameData,
  beta: gameBetaData,
  season0: gameSeason0Data,
  season2: gameSeason2Data,
  season2_5: gameSeason2_5Data,
  season3: gameSeason3Data,
  season3FF: gameSeason3FFData,
  season3_5: gameSeason3_5Data,
  limbo: limboData,
};

export default gameDataSources;
