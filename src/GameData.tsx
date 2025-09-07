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

export interface GameDataSource {
  data: GameData;
  displayName: string;
}

export interface GameDataSources {
  [key: string]: GameDataSource;
}

export const gameDataSources: GameDataSources = {
  default: {
    data: gameData,
    displayName: "Current",
  },
  beta: {
    data: gameBetaData,
    displayName: "Beta",
  },
  season0: {
    data: gameSeason0Data,
    displayName: "Season 0",
  },
  season2: {
    data: gameSeason2Data,
    displayName: "Season 2",
  },
  season2_5: {
    data: gameSeason2_5Data,
    displayName: "Season 2.5",
  },
  season3: {
    data: gameSeason3Data,
    displayName: "Season 3",
  },
  season3FF: {
    data: gameSeason3FFData,
    displayName: "Season 3 FF",
  },
  season3_5: {
    data: gameSeason3_5Data,
    displayName: "Season 3.5",
  },
  limbo: {
    data: limboData,
    displayName: "Limbo",
  },
};

export default gameDataSources;
