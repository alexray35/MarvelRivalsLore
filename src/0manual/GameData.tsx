// GameData.tsx
import gameData from "../gamedata/Game 2026 07 10.json";
import gameBetaData from "../gamedata/Game 2024 08 05 BETA.json";
import gameSeason0Data from "../gamedata/Game 2024 12 04.json";
import gameSeason2Data from "../gamedata/Game 2025 04 11 2.json";
import gameSeason2_5Data from "../gamedata/Game 2025 07 03.json";
import gameSeason3Data from "../gamedata/Game 2025 07 11.json";
import gameSeason3FFData from "../gamedata/Game 2025 07 24.json";
import gameSeason3_5Data from "../gamedata/Game 2025 08 08.json";
import gameSeason4Data from "../gamedata/Game 2025 09 12.json";
import gameSeason4_5Data from "../gamedata/Game 2025 10 09.json";
import gameSeason5Data from "../gamedata/Game 2025 11 13.json";
import gameSeason5_5Data from "../gamedata/Game 2025 12 11.json";
import gameSeason6Data from "../gamedata/Game 2026 01 15.json";
import gameSeason6_5Data from "../gamedata/Game 2026 02 12.json";
import gameSeason7Data from "../gamedata/Game 2026 03 19.json";
import gameSeason7_5Data from "../gamedata/Game 2026 04 16.json";
import gameSeason8Data from "../gamedata/Game 2026 05 14.json";
import gameSeason8_5Data from "../gamedata/Game 2026 06 11.json";
import gameSeason9Data from "../gamedata/Game 2026 07 10.json";
import limboData from "../gamedata/Game Limbo.json";
import skinData from "../gamedata/UISkinTable.json";

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
  season4: {
    data: gameSeason4Data,
    displayName: "Season 4",
  },
  season4_5: {
    data: gameSeason4_5Data,
    displayName: "Season 4.5",
  },
  season5: {
    data: gameSeason5Data,
    displayName: "Season 5",
  },
  season5_5: {
    data: gameSeason5_5Data,
    displayName: "Season 5.5",
  },
  season6: {
    data: gameSeason6Data,
    displayName: "Season 6",
  },
  season6_5: {
    data: gameSeason6_5Data,
    displayName: "Season 6.5",
  },
  season7: {
    data: gameSeason7Data,
    displayName: "Season 7",
  },
  season7_5: {
    data: gameSeason7_5Data,
    displayName: "Season 7.5",
  },
  season8: {
    data: gameSeason8Data,
    displayName: "Season 8",
  },
  season8_5: {
    data: gameSeason8_5Data,
    displayName: "Season 8.5",
  },
  season9: {
    data: gameSeason9Data,
    displayName: "Season 9",
  },
  limbo: {
    data: limboData,
    displayName: "Limbo",
  },
  skins: {
    data: skinData,
    displayName: "skin",
  },
};

// Define the desired order for the tabs (newest to oldest)
export const TAB_ORDER = [
  "default",
  "season9",
  "season8_5",
  "season8",
  "season7_5",
  "season7",
  "season6",
  "season5_5",
  "season5",
  "season4_5",
  "season4",
  "season3_5",
  "season3FF",
  "season3",
  "season2_5",
  "season2",
  "season0",
  "beta",
  "limbo",
];

export default gameDataSources;
