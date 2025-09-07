// MapList.tsx
interface MapInfo {
  group: string;
  name: string;
  domNames: string[];
  galleryImage: string;
  backgroundImage: string;
  domImages: string[];
  loadingTips: string[];

  loadingvideos: { video: string; caption: string }[];
  introvideos: { video: string; caption: string }[];
  outrovideos: { video: string; caption: string }[];
}

const MapInfoRegularOrdered: MapInfo[] = [
  {
    group: "Yggsgard",
    name: "Yggsdrasill Path",
    domNames: [],
    galleryImage: "img_mapselect_yggdrasil.png",
    backgroundImage: "img_map_yggdrasil.png",
    domImages: [],
    loadingTips: ["Loading_Asgard_1", "Loading_Asgard_2", "Loading_Asgard_3"],
    loadingvideos: [{ video: "Loading_Asgard.mp4", caption: "" }],
    introvideos: [
      { video: "AsgardE01_Attack_Video.mp4", caption: "Attack" },
      { video: "AsgardE01_Defence_Video.mp4", caption: "Defend" },
    ],
    outrovideos: [
      { video: "AsgardE01_Attack_Video.mp4", caption: "Attack" },
      { video: "AsgardE01_Defence_Video.mp4", caption: "Defend" },
    ],
  },
  {
    group: "Yggsgard",
    name: "Royal Palace",
    domNames: ["Bifrost Garden", "Throne Room", "Odin's Archive"],
    galleryImage: "img_mapselect_yggdrasil_throne.png",
    backgroundImage: "img_map_yggdrasil_throne.png",
    domImages: [
      "img_map_yggdrasil_garden.png",
      "img_map_yggdrasil_throne.png",
      "img_map_archive.png",
    ],
    loadingTips: ["Loading_Asgard_1", "Loading_Asgard_2", "Loading_Asgard_3"],
    loadingvideos: [{ video: "Loading_Asgard.mp4", caption: "" }],
    introvideos: [
      { video: "AsgardE01_Attack_Video.mp4", caption: "Attack" },
      { video: "AsgardE01_Defence_Video.mp4", caption: "Defend" },
    ],
    outrovideos: [
      { video: "AsgardE01_Attack_Video.mp4", caption: "Attack" },
      { video: "AsgardE01_Defence_Video.mp4", caption: "Defend" },
    ],
  },
  {
    group: "Tokyo 2099",
    name: "Shin-Shibuya",
    domNames: [],
    galleryImage: "img_mapselect_tokyowebworld_metropolis.png",
    backgroundImage: "img_map_tokyowebworld_metropolis.png",
    domImages: [],
    loadingTips: ["Loading_Tokyo_1", "Loading_Tokyo_2", "Loading_Tokyo_3"],
    loadingvideos: [{ video: "Loading_Tokyo.mp4", caption: "" }],
    introvideos: [
      { video: "TokyoEntrance_BackGround.mp4", caption: "Attack & Defend" },
    ],
    outrovideos: [
      { video: "TokyoH01_Attack_Video.mp4", caption: "Attack" },
      { video: "TokyoH01_Defence_Video.mp4", caption: "Defend" },
    ],
  },
  {
    group: "Tokyo 2099",
    name: "Spider-Islands",
    domNames: [],
    galleryImage: "img_mapselect_tokyowebworld_spiderisland.png",
    backgroundImage: "img_map_tokyowebworld_spiderisland.png",
    domImages: [],
    loadingTips: ["Loading_Tokyo_1", "Loading_Tokyo_2", "Loading_Tokyo_3"],
    loadingvideos: [{ video: "Loading_Tokyo.mp4", caption: "" }],
    introvideos: [{ video: "TojyoE01_Video.mp4", caption: "" }],
    outrovideos: [
      { video: "TokyoE01_Attack_Video.mp4", caption: "Attack" },
      { video: "TokyoE01_Defence_Video.mp4", caption: "Defend" },
    ],
  },
  {
    group: "Intergalactic Empire of Wakanda",
    name: "Birnin T'Challa",
    domNames: [
      "Imperial Institute of Science",
      "Stellar Spaceport",
      "Warrior Falls",
    ],
    galleryImage: "img_mapselect_practicerance.png",
    backgroundImage: "img_map_practicerance.png",
    domImages: [
      "img_map_wakanda.png",
      "img_map_golden_city.png",
      "img_map_goldencitywarriorfalls.png",
    ],
    loadingTips: [
      "Loading_Wakanda_1",
      "Loading_Wakanda_2",
      "Loading_Wakanda_3",
    ],
    loadingvideos: [{ video: "Wakanda_Loading_Science.mp4", caption: "" }],
    introvideos: [{ video: "Wakanda_Defence_Video.mp4", caption: "" }],
    outrovideos: [
      { video: "WakandaC01_Attack_Video.mp4", caption: "Attack" },
      { video: "WakandaC01_Defence_Video.mp4", caption: "Defend" },
    ],
  },
  {
    group: "Intergalactic Empire of Wakanda",
    name: "Hall of Djalia",
    domNames: [],
    galleryImage: "img_mapselect_hallofdialia.png",
    backgroundImage: "img_map_hallofdialia.png",
    domImages: [],
    loadingTips: [
      "Loading_Wakanda_1",
      "Loading_Wakanda_2",
      "Loading_Wakanda_3",
    ],
    loadingvideos: [{ video: "Wakanda_Loading_Science.mp4", caption: "" }],
    introvideos: [
      { video: "Wakanda_Attack_Video.mp4", caption: "Attack" },
      { video: "Wakanda_Defence_Video.mp4", caption: "" },
    ],
    outrovideos: [
      { video: "WakandaH01_Attack_Video.mp4", caption: "Attack" },
      { video: "WakandaH01_Defence_Video.mp4", caption: "Defend" },
    ],
  },
  {
    group: "Klyntar",
    name: "Symbiotic Surface",
    domNames: [],
    galleryImage: "img_mapselect_klyntar_ruins.png",
    backgroundImage: "img_map_klyntar_ruins.png",
    domImages: [],
    loadingTips: [
      "Loading_Klyntar_1",
      "Loading_Klyntar_2",
      "Loading_Klyntar_3",
    ],
    loadingvideos: [{ video: "KlyntarH01_Loading.mp4", caption: "" }],
    introvideos: [
      { video: "KlyntarH01_Attack.mp4", caption: "Attack" },
      { video: "KlyntarH01_Defence_Video.mp4", caption: "Defend" },
    ],
    outrovideos: [
      { video: "KlyntarH01_Attack_Video.mp4", caption: "Attack" },
      { video: "AsgardE01_Defence_Video.mp4", caption: "Defend" },
    ],
  },
  {
    group: "Hydra Charteris Base",
    name: "Hell's Heaven",
    domNames: ["Frozen Airfield", "Super-Soldier Factory", "Eldritch Monument"],
    galleryImage: "img_mapselect_hydracharterisbase.png",
    backgroundImage: "img_map_hydracharterisbase.png",
    domImages: [
      "img_map_hydracharterisbase.png",
      "img_map_hydrabase_arsenal.png",
      "img_map_hydrabase_altar.png",
    ],
    loadingTips: ["Loading_Hydra_1", "Loading_Hydra_2", "Loading_Hydra_3"],
    loadingvideos: [{ video: "HydraMC01_Loading_Video.mp4", caption: "" }],
    introvideos: [
      { video: "HydraA01_Attack_Video.mp4", caption: "Attack" },
      { video: "HydraA01_Defence_Video.mp4", caption: "Defend" },
    ],
    outrovideos: [
      { video: "HydraMC01_Attack_Video.mp4", caption: "Attack" },
      { video: "HydraMC01_Defence_Video.mp4", caption: "Defend" },
    ],
  },
  {
    group: "Empire of Eternal Night",
    name: "Midtown",
    domNames: [],
    galleryImage: "img_mapselect_midtown.png",
    backgroundImage: "img_map_midtown.png",
    domImages: [],
    loadingTips: [
      "MarvelIPWholeProcessTable_1201_LoadingVideoSubtitles_#0_Text",
      "MarvelIPWholeProcessTable_1201_LoadingVideoSubtitles_#1_Text",
      "MarvelIPWholeProcessTable_1201_LoadingVideoSubtitles_#2_Text",
    ],
    loadingvideos: [{ video: "NewYorkE01_Loading_Video.mp4", caption: "" }],
    introvideos: [
      { video: "NewYorkE01_Attack_Video.mp4", caption: "Attack" },
      { video: "NewYorkE01_Defence_Video.mp4", caption: "Defend" },
    ],
    outrovideos: [
      { video: "NewYorkE01_Attack_Video.mp4", caption: "Attack" },
      { video: "NewYorkE01_Defence_Video.mp4", caption: "Defend" },
    ],
  },
  {
    group: "Empire of Eternal Night",
    name: "Central Park",
    domNames: [],
    galleryImage: "img_mapselect_centralpark.png",
    backgroundImage: "img_map_centralpark.png",
    domImages: [],
    loadingTips: [
      "MarvelIPWholeProcessTable_1217_LoadingVideoSubtitles_#0_Text",
      "MarvelIPWholeProcessTable_1217_LoadingVideoSubtitles_#1_Text",
      "MarvelIPWholeProcessTable_1217_LoadingVideoSubtitles_#2_Text",
    ],
    loadingvideos: [{ video: "NewYorkH01_Loading_Video.mp4", caption: "" }],
    introvideos: [
      { video: "NewYorkH01_Attack_Video.mp4", caption: "Attack" },
      { video: "NewYorkH01_Defence_Video.mp4", caption: "Defend" },
    ],
    outrovideos: [
      { video: "NewYorkH01_Attack_Video.mp4", caption: "Attack" },
      { video: "NewYorkH01_Defence_Video.mp4", caption: "Defend" },
    ],
  },
  {
    group: "Hellfire Gala",
    name: "Krakoa",
    domNames: ["Carousel", "Cradle", "The Grove"],
    galleryImage: "img_mapselect_krakoa_carousel.png",
    backgroundImage: "img_map_krakoa_carousel.png",
    domImages: [
      "img_map_krakoa_carousel.png",
      "img_map_krakoa_cradle.png",
      "img_map_krakoa_grove.png",
    ],
    loadingTips: ["Loading_Arakko_1", "Loading_Arakko_2", "Loading_Arakko_3"],
    loadingvideos: [{ video: "KrakoaMC01_Loading_Video.mp4", caption: "" }],
    introvideos: [
      { video: "KrakoaMC01_LevelEntrance_Video.mp4", caption: "Attack" },
    ],
    outrovideos: [
      { video: "KrakoaMC01_Attack_Video.mp4", caption: "Attack" },
      { video: "KrakoaMC01_Defence_Video.mp4", caption: "Defend" },
    ],
  },
  {
    group: "Hellfire Gala",
    name: "Arakko",
    domNames: [],
    galleryImage: "img_mapselect_hellfiregala_arakko.png",
    backgroundImage: "img_map_hellfiregala_arakko.png",
    domImages: [],
    loadingTips: [
      "MarvelIPWholeProcessTable_1217_LoadingVideoSubtitles_#0_Text",
      "MarvelIPWholeProcessTable_1217_LoadingVideoSubtitles_#1_Text",
      "MarvelIPWholeProcessTable_1217_LoadingVideoSubtitles_#2_Text",
    ],
    loadingvideos: [{ video: "ArakkoE01_Loading_Video.mp4", caption: "" }],
    introvideos: [
      { video: "ArakkoE01_Attack_Video.mp4", caption: "Attack" },
      { video: "ArakkoE01_Defence_Video.mp4", caption: "Defend" },
    ],
    outrovideos: [
      { video: "ArakkoE01_Attack_Video.mp4", caption: "Attack" },
      { video: "ArakkoE01_Defence_Video.mp4", caption: "Defend" },
    ],
  },
  {
    group: "Klyntar",
    name: "Celestial Husk",
    domNames: ["Celestial Codex", "Celestial Hand", "Celestial Vault"],
    galleryImage: "img_mapselect_celestial_heart.png",
    backgroundImage: "img_map_celestial_heart.png",
    domImages: [
      "img_map_thorny_jungle.png",
      "img_map_celestial_hand.png",
      "img_map_celestial_heart.png",
    ],
    loadingTips: [
      "Loading_KlyntarC_1",
      "Loading_KlyntarC_2",
      "Loading_KlyntarC_3",
      "Loading_KlyntarC_4",
      "Loading_KlyntarC_5",
      "Loading_KlyntarC_6",
    ],
    loadingvideos: [{ video: "KlyntarMC01_Loading_Video.mp4", caption: "" }],
    introvideos: [
      { video: "KlyntarMC01_Attack.mp4", caption: "Attack" },
      { video: "KlyntarMC01_Defence.mp4", caption: "Defense" },
    ],
    outrovideos: [
      { video: "KlyntarMC01_Attack_Video.mp4", caption: "Attack" },
      { video: "KlyntarMC01_Defence_Video.mp4", caption: "Defend" },
    ],
  },
  {
    group: "Klyntar",
    name: "Throne of Knull",
    domNames: [],
    galleryImage: "img_mapselect_klyntar_abyssthrone.png",
    backgroundImage: "img_map_klyntar_abyssthrone.png",
    domImages: [],
    loadingTips: [
      "MarvelIPWholeProcessTable_1307_LoadingVideoSubtitles_#0_Text",
    ],
    loadingvideos: [{ video: "KlyntarEC01_Loading_Video.mp4", caption: "" }],
    introvideos: [],
    outrovideos: [
      { video: "KlyntarEC01_Attack_Video.mp4", caption: "Attack" },
      { video: "KlyntarEC01_Defence_Video.mp4", caption: "Defend" },
    ],
  },
];

const MapInfoArcadeOrdered: MapInfo[] = [
  {
    group: "Tokyo 2099",
    name: "Ninomaru",
    domNames: [],
    galleryImage: "img_mapselect_tokyowebworld_spiderisland.png",
    backgroundImage: "img_map_tokyowebworld_spiderisland.png",
    domImages: [],
    loadingTips: ["Loading_Tokyo_1", "Loading_Tokyo_2", "Loading_Tokyo_3"],
    loadingvideos: [{ video: "Loading_Tokyo.mp4", caption: "" }],
    introvideos: [{ video: "TojyoE01_Video.mp4", caption: "Attack & Defend" }],
    outrovideos: [],
  },
  {
    group: "Empire of Eternal Night",
    name: "Sanctum Sanctorum",
    domNames: [],
    galleryImage: "img_mapselect_sanctumsanctorum.png",
    backgroundImage: "img_map_sanctumsanctorum.png",
    domImages: [],
    loadingTips: [
      "Loading_SanctumSanctorum_1",
      "Loading_SanctumSanctorum_2",
      "Loading_SanctumSanctorum_3",
    ],
    loadingvideos: [{ video: "NewYorkM01_Loading_Video.mp4", caption: "" }],
    introvideos: [],
    outrovideos: [],
  },
  {
    group: "Intergalactic Empire of Wakanda",
    name: "World Arena",
    domNames: [],
    galleryImage: "img_mapselect_practicerance.png",
    backgroundImage: "img_mapselect_practicerance.png",
    domImages: [],
    loadingTips: [
      "MarvelIPWholeProcessTable_1289_LoadingVideoSubtitles_#0_Text",
      "MarvelIPWholeProcessTable_1289_LoadingVideoSubtitles_#1_Text",
      "MarvelIPWholeProcessTable_1289_LoadingVideoSubtitles_#2_Text",
    ],
    loadingvideos: [{ video: "Springfestival_Loading.mp4", caption: "" }],
    introvideos: [],
    outrovideos: [],
  },
  {
    group: "Age of Ultron",
    name: "Digital Duel Grounds",
    domNames: [],
    galleryImage: "img_mapselect_krakoa_carousel.png",
    backgroundImage: "img_map_krakoa_carousel.png",
    domImages: [],
    loadingTips: [
      "MarvelIPWholeProcessTable_1314_LoadingVideoSubtitles_#0_Text",
    ],
    loadingvideos: [{ video: "HellfireGala_Loading_Video.mp4", caption: "" }],
    introvideos: [],
    outrovideos: [],
  },
];

const MapInfoRegular = [...MapInfoRegularOrdered].reverse();
const MapInfoArcade = [...MapInfoArcadeOrdered].reverse();

export { MapInfoRegular, MapInfoArcade };
