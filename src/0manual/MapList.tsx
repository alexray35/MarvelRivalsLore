// MapList.tsx
interface MapInfo {
  linkID: string;
  group: string;
  name: string;
  domNames: string[];
  galleryImage: string;
  backgroundImage: string;
  domImages: string[];
  loadingTips: string[];
  videos: { title: string; video: string; loreTitle: string }[];
  images: string[];
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
    images: [],
    videos: [
      {
        title: "Map Reveal",
        video: "https://www.youtube.com/watch?v=8nYwiVjhBWQ",
        loreTitle: "",
      },
      {
        title: "Loading Screen",
        video: "https://www.youtube.com/watch?v=KlmqEDwNcWA",
        loreTitle: "UIGalleryFootageTable_5002_LoadingVideos_#0_VideoName",
      },
      {
        title: "Intro - Attack",
        video: "https://www.youtube.com/watch?v=8jo-eFQA1rA",
        loreTitle: "UIGalleryFootageTable_5002_EntryVideos_#0_VideoName",
      },
      {
        title: "Intro - Defence",
        video: "https://www.youtube.com/watch?v=snHEvtvxKaQ",
        loreTitle: "UIGalleryFootageTable_5002_EntryVideos_#1_VideoName",
      },
      {
        title: "Outro - Attack",
        video: "https://www.youtube.com/watch?v=bMMsSDG4Bk8",
        loreTitle: "UIGalleryFootageTable_5002_ExitVideos_#2_VideoName",
      },
      {
        title: "Outro - Defence",
        video: "https://www.youtube.com/watch?v=dFTqiBFamGk",
        loreTitle: "UIGalleryFootageTable_5002_ExitVideos_#3_VideoName",
      },
      {
        title: "Loading Screen - Unused",
        video: "https://www.youtube.com/watch?v=AfqmJfdgukQ",
        loreTitle: "",
      },
      {
        title: "Loading Screen - Unused",
        video: "https://www.youtube.com/watch?v=7O_ATYmTSjg",
        loreTitle: "",
      },
    ],
    linkID: "",
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
    images: [],
    videos: [
      {
        title: "Map Reveal",
        video: "https://www.youtube.com/watch?v=8nYwiVjhBWQ",
        loreTitle: "",
      },
      {
        title: "Loading Screen",
        video: "https://www.youtube.com/watch?v=KlmqEDwNcWA",
        loreTitle: "UIGalleryFootageTable_5002_LoadingVideos_#0_VideoName",
      },
      {
        title: "Outro Cinematic",
        video: "https://www.youtube.com/watch?v=b4q75Tb0GYk",
        loreTitle: "UIGalleryFootageTable_5002_ExitVideos_#0_VideoName",
      },
      {
        title: "Outro Cinematic",
        video: "https://www.youtube.com/watch?v=OTVqdOnTWZA",
        loreTitle: "UIGalleryFootageTable_5002_ExitVideos_#1_VideoName",
      },
      {
        title: "Loading Screen - Unused",
        video: "https://www.youtube.com/watch?v=RH_V1TWFIP8",
        loreTitle: "",
      },
    ],
    linkID: "",
  },
  {
    group: "Tokyo 2099",
    name: "Shin-Shibuya",
    domNames: [],
    galleryImage: "img_mapselect_tokyowebworld_metropolis.png",
    backgroundImage: "img_map_tokyowebworld_metropolis.png",
    domImages: [],
    loadingTips: ["Loading_Tokyo_1", "Loading_Tokyo_2", "Loading_Tokyo_3"],
    images: [],
    videos: [
      {
        title: "Map Reveal",
        video: "https://www.youtube.com/watch?v=8NUtV1CkyKs",
        loreTitle: "",
      },
      {
        title: "Loading Screen",
        video: "https://www.youtube.com/watch?v=RWs4tubqHlM",
        loreTitle: "UIGalleryFootageTable_5003_LoadingVideos_#0_VideoName",
      },
      {
        title: "Intro Cinematic",
        video: "https://www.youtube.com/watch?v=d7I4BFW8UtQ",
        loreTitle: "UIGalleryFootageTable_5003_EntryVideos_#0_VideoName",
      },
      {
        title: "Outro - Attack",
        video: "https://www.youtube.com/watch?v=lCm1XAWwIEc",
        loreTitle: "UIGalleryFootageTable_5003_ExitVideos_#0_VideoName",
      },
      {
        title: "Outro - Defence",
        video: "https://www.youtube.com/watch?v=Hvmex1onx-8",
        loreTitle: "UIGalleryFootageTable_5003_ExitVideos_#1_VideoName",
      },
      {
        title: "Screen",
        video: "https://www.youtube.com/watch?v=CyL8gYgIrI8",
        loreTitle: "",
      },
      {
        title: "Screen",
        video: "https://www.youtube.com/watch?v=OPpf4Hqb7_8",
        loreTitle: "",
      },
      {
        title: "Screen",
        video: "https://www.youtube.com/watch?v=jirNbLzqgcM",
        loreTitle: "",
      },
      {
        title: "Loading Screen - Unused",
        video: "https://www.youtube.com/watch?v=3n5Z93uSwJY",
        loreTitle: "",
      },
    ],
    linkID: "",
  },
  {
    group: "Tokyo 2099",
    name: "Spider-Islands",
    domNames: [],
    galleryImage: "img_mapselect_tokyowebworld_spiderisland.png",
    backgroundImage: "img_map_tokyowebworld_spiderisland.png",
    domImages: [],
    loadingTips: ["Loading_Tokyo_1", "Loading_Tokyo_2", "Loading_Tokyo_3"],
    images: [],
    videos: [
      {
        title: "Map Reveal",
        video: "https://www.youtube.com/watch?v=jqnZzywDfTs",
        loreTitle: "",
      },
      {
        title: "Loading Screen",
        video: "https://www.youtube.com/watch?v=RWs4tubqHlM",
        loreTitle: "UIGalleryFootageTable_5003_LoadingVideos_#0_VideoName",
      },
      {
        title: "Intro Cinematic",
        video: "https://www.youtube.com/watch?v=hQKsIjv8LUI",
        loreTitle: "UIGalleryFootageTable_5003_EntryVideos_#1_VideoName",
      },
      {
        title: "Outro - Attack",
        video: "https://www.youtube.com/watch?v=iChoPWI5dIg",
        loreTitle: "UIGalleryFootageTable_5003_ExitVideos_#2_VideoName",
      },
      {
        title: "Outro - Defence",
        video: "https://www.youtube.com/watch?v=zQ7ZJwdnRSs",
        loreTitle: "UIGalleryFootageTable_5003_ExitVideos_#3_VideoName",
      },
      {
        title: "Loading Screen - Unused",
        video: "https://www.youtube.com/watch?v=AO3n2DQwLZk",
        loreTitle: "",
      },
    ],
    linkID: "",
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
    images: [],
    videos: [
      {
        title: "Map Reveal",
        video: "https://www.youtube.com/watch?v=dz_778SYulo",
        loreTitle: "",
      },
      {
        title: "Loading Screen",
        video: "https://www.youtube.com/watch?v=zMgHNFNGN6w",
        loreTitle: "UIGalleryFootageTable_5004_LoadingVideos_#0_VideoName",
      },
      {
        title: "Intro Cinematic",
        video: "https://www.youtube.com/watch?v=nEfvNICkzMI",
        loreTitle: "UIGalleryFootageTable_5004_EntryVideos_#1_VideoName",
      },
      {
        title: "Outro Cinematic",
        video: "https://www.youtube.com/watch?v=TtAlRAY6amI",
        loreTitle: "UIGalleryFootageTable_5004_ExitVideos_#2_VideoName",
      },
      {
        title: "Outro Cinematic",
        video: "https://www.youtube.com/watch?v=YTjhd2GDelc",
        loreTitle: "UIGalleryFootageTable_5004_ExitVideos_#3_VideoName",
      },
      {
        title: "Loading Screen - Unused",
        video: "https://www.youtube.com/watch?v=SQk-9mktnq8",
        loreTitle: "",
      },
      {
        title: "Loading Screen - Unused",
        video: "https://www.youtube.com/watch?v=TCfjVyk1axU",
        loreTitle: "",
      },
    ],
    linkID: "",
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
    images: [],
    videos: [
      {
        title: "Map Reveal",
        video: "https://www.youtube.com/watch?v=dz_778SYulo",
        loreTitle: "",
      },
      {
        title: "Loading Screen",
        video: "https://www.youtube.com/watch?v=zMgHNFNGN6w",
        loreTitle: "UIGalleryFootageTable_5004_LoadingVideos_#0_VideoName",
      },
      {
        title: "Intro - Attack",
        video: "https://www.youtube.com/watch?v=BRTBzdmE0CA",
        loreTitle: "UIGalleryFootageTable_5004_EntryVideos_#0_VideoName",
      },
      {
        title: "Intro - Defence",
        video: "https://www.youtube.com/watch?v=nEfvNICkzMI",
        loreTitle: "UIGalleryFootageTable_5004_EntryVideos_#1_VideoName",
      },
      {
        title: "Outro - Attack",
        video: "https://www.youtube.com/watch?v=2kqhTxJ1lVI",
        loreTitle: "UIGalleryFootageTable_5004_ExitVideos_#0_VideoName",
      },
      {
        title: "Outro - Defence",
        video: "https://www.youtube.com/watch?v=GPYOORlz2BU",
        loreTitle: "UIGalleryFootageTable_5004_ExitVideos_#1_VideoName",
      },
    ],
    linkID: "",
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
      "Loading_Klyntar_4",
      "Loading_Klyntar_5",
    ],
    images: [],
    videos: [
      {
        title: "Map Reveal",
        video: "https://www.youtube.com/watch?v=zEaFAj8h0ow",
        loreTitle: "",
      },
      {
        title: "Loading Screen",
        video: "https://www.youtube.com/watch?v=ftZNoiNZMxg",
        loreTitle: "UIGalleryFootageTable_5005_LoadingVideos_#0_VideoName",
      },
      {
        title: "Intro - Attack",
        video: "https://www.youtube.com/watch?v=8t8L4_P6i2s",
        loreTitle: "UIGalleryFootageTable_5005_EntryVideos_#0_VideoName",
      },
      {
        title: "Intro - Defence",
        video: "https://www.youtube.com/watch?v=dGSykQsF26g",
        loreTitle: "UIGalleryFootageTable_5005_EntryVideos_#1_VideoName",
      },
      {
        title: "Outro - Attack",
        video: "https://www.youtube.com/watch?v=abEk38F70_g",
        loreTitle: "UIGalleryFootageTable_5005_ExitVideos_#0_VideoName",
      },
      {
        title: "Outro - Defence",
        video: "https://www.youtube.com/watch?v=QHaJLg25DfI",
        loreTitle: "UIGalleryFootageTable_5005_ExitVideos_#1_VideoName",
      },
    ],
    linkID: "",
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
    loadingTips: [
      "Loading_Hydra_1",
      "Loading_Hydra_2",
      "Loading_Hydra_3",
      "Loading_Hydra_4",
      "Loading_Hydra_5",
    ],
    images: [],
    videos: [
      {
        title: "Map Reveal",
        video: "https://www.youtube.com/watch?v=vSQ3D9-dWbA",
        loreTitle: "",
      },
      {
        title: "Loading Screen",
        video: "https://www.youtube.com/watch?v=NFZSV8yj3aM",
        loreTitle: "UIGalleryFootageTable_5001_LoadingVideos_#0_VideoName",
      },
      {
        title: "Intro Cinematic",
        video: "https://www.youtube.com/watch?v=Iu6gKajeXkY",
        loreTitle: "UIGalleryFootageTable_5001_EntryVideos_#0_VideoName",
      },
      {
        title: "Outro Cinematic",
        video: "https://www.youtube.com/watch?v=ROmhnA7zx0E",
        loreTitle: "UIGalleryFootageTable_5001_ExitVideos_#1_VideoName",
      },
      {
        title: "Outro Cinematic",
        video: "https://www.youtube.com/watch?v=GMS1nAgtylE",
        loreTitle: "UIGalleryFootageTable_5001_ExitVideos_#0_VideoName",
      },
      {
        title: "Loading Screen - Unused",
        video: "https://www.youtube.com/watch?v=lPV0PGuuo2Q",
        loreTitle: "",
      },
      {
        title: "Intro - Unused",
        video: "https://www.youtube.com/watch?v=VlMaMEJVoyw",
        loreTitle: "",
      },
      {
        title: "Outro - Unused",
        video: "https://www.youtube.com/watch?v=y3PkhlPb71U",
        loreTitle: "",
      },
    ],
    linkID: "",
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
    images: [],
    videos: [
      {
        title: "Map Reveal",
        video: "https://www.youtube.com/watch?v=DmtMVOcHr-8",
        loreTitle: "",
      },
      {
        title: "Loading Screen",
        video: "https://www.youtube.com/watch?v=a3GnNST3H-Y",
        loreTitle: "UIGalleryFootageTable_5006_LoadingVideos_#1_VideoName",
      },
      {
        title: "Intro - Attack",
        video: "https://www.youtube.com/watch?v=CFyiUzCt6Mk",
        loreTitle: "UIGalleryFootageTable_5006_EntryVideos_#0_VideoName",
      },
      {
        title: "Intro - Defence",
        video: "https://www.youtube.com/watch?v=FL1eiXFEjqY",
        loreTitle: "UIGalleryFootageTable_5006_EntryVideos_#1_VideoName",
      },
      {
        title: "Outro - Attack",
        video: "https://www.youtube.com/watch?v=klsqOja27vk",
        loreTitle: "UIGalleryFootageTable_5006_ExitVideos_#0_VideoName",
      },
      {
        title: "Outro - Defence",
        video: "https://www.youtube.com/watch?v=Pc55qZugaWw",
        loreTitle: "UIGalleryFootageTable_5006_ExitVideos_#1_VideoName",
      },
    ],
    linkID: "",
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
    images: [],
    videos: [
      {
        title: "Map Reveal",
        video: "https://www.youtube.com/watch?v=fs_pMBXSr9Y",
        loreTitle: "",
      },
      {
        title: "Loading Screen",
        video: "https://www.youtube.com/watch?v=TiWi1OOY8V8",
        loreTitle: "UIGalleryFootageTable_5006_LoadingVideos_#2_VideoName",
      },
      {
        title: "Intro - Attack",
        video: "https://www.youtube.com/watch?v=QO9ZxVTOUuk",
        loreTitle: "UIGalleryFootageTable_5006_EntryVideos_#2_VideoName",
      },
      {
        title: "Intro - Defence",
        video: "https://www.youtube.com/watch?v=uZp6DYEj-OQ",
        loreTitle: "UIGalleryFootageTable_5006_EntryVideos_#3_VideoName",
      },
      {
        title: "Outro - Attack",
        video: "https://www.youtube.com/watch?v=w4bS88Sdwfc",
        loreTitle: "UIGalleryFootageTable_5006_ExitVideos_#3_VideoName",
      },
      {
        title: "Outro - Defence",
        video: "https://www.youtube.com/watch?v=o6vhi1wdOVA",
        loreTitle: "UIGalleryFootageTable_5006_ExitVideos_#4_VideoName",
      },
    ],
    linkID: "",
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
    images: [],
    videos: [
      {
        title: "Map Reveal",
        video: "https://www.youtube.com/watch?v=xIo0RxLYkQU",
        loreTitle: "",
      },
      {
        title: "Loading Screen",
        video: "https://www.youtube.com/watch?v=Vk9w_nKHhc4",
        loreTitle: "UIGalleryFootageTable_5008_LoadingVideos_#0_VideoName",
      },
      {
        title: "Intro",
        video: "https://www.youtube.com/watch?v=5wLZx5l62-4",
        loreTitle: "UIGalleryFootageTable_5008_EntryVideos_#0_VideoName",
      },
      {
        title: "Outro",
        video: "https://www.youtube.com/watch?v=ByXmbvy2bjo",
        loreTitle: "UIGalleryFootageTable_5008_ExitVideos_#0_VideoName",
      },
      {
        title: "Outro",
        video: "https://www.youtube.com/watch?v=e7NAfkF4ErM",
        loreTitle: "UIGalleryFootageTable_5008_ExitVideos_#1_VideoName",
      },
    ],
    linkID: "",
  },
  {
    group: "Hellfire Gala",
    name: "Arakko",
    domNames: [],
    galleryImage: "img_mapselect_hellfiregala_arakko.png",
    backgroundImage: "img_map_hellfiregala_arakko.png",
    domImages: [],
    loadingTips: ["Loading_Arakko_1", "Loading_Arakko_2", "Loading_Arakko_3"],
    images: [],
    videos: [
      {
        title: "Map Reveal",
        video: "https://www.youtube.com/watch?v=_DCOXD7X7yA",
        loreTitle: "",
      },
      {
        title: "Loading Screen",
        video: "https://www.youtube.com/watch?v=WcNPnZKbrr4",
        loreTitle: "UIGalleryFootageTable_5008_LoadingVideos_#1_VideoName",
      },
      {
        title: "Intro - Attack",
        video: "https://www.youtube.com/watch?v=BT8n5vg_f88",
        loreTitle: "UIGalleryFootageTable_5008_EntryVideos_#1_VideoName",
      },
      {
        title: "Intro - Defence",
        video: "https://www.youtube.com/watch?v=OSezFQ0Bm9s",
        loreTitle: "UIGalleryFootageTable_5008_EntryVideos_#2_VideoName",
      },
      {
        title: "Outro - Attack",
        video: "https://www.youtube.com/watch?v=mm6lp1XZyBs",
        loreTitle: "UIGalleryFootageTable_5008_ExitVideos_#2_VideoName",
      },
      {
        title: "Outro - Defence",
        video: "https://www.youtube.com/watch?v=uwmt50bQfTs",
        loreTitle: "UIGalleryFootageTable_5008_ExitVideos_#3_VideoName",
      },
    ],
    linkID: "",
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
    images: [],
    videos: [
      {
        title: "Map Reveal",
        video: "https://www.youtube.com/watch?v=CUvBdR0HUqw",
        loreTitle: "",
      },
      {
        title: "Loading Screen",
        video: "https://www.youtube.com/watch?v=O2kXhL7wDJM",
        loreTitle: "UIGalleryFootageTable_5005_LoadingVideos_#1_VideoName",
      },
      {
        title: "Outro",
        video: "https://www.youtube.com/watch?v=URPXl5C-28U",
        loreTitle: "UIGalleryFootageTable_5005_ExitVideos_#2_VideoName",
      },
      {
        title: "Outro",
        video: "https://www.youtube.com/watch?v=s72kNGrB6qs",
        loreTitle: "UIGalleryFootageTable_5005_ExitVideos_#3_VideoName",
      },
    ],
    linkID: "",
  },
  {
    group: "K'un-Lun",
    name: "Heart of Heaven",
    domNames: [],
    galleryImage: "img_mapselect_kunlun_heartoftiandu.png",
    backgroundImage: "img_map_kunlun_heartoftiandu.png",
    domImages: [],
    loadingTips: [
      "Loading_KunlunH01_1",
      "Loading_KunlunH01_2",
      "Loading_KunlunH01_3",
    ],
    images: [],
    videos: [
      {
        title: "Map Reveal",
        video: "https://www.youtube.com/watch?v=WkTmJp0dcUA",
        loreTitle: "",
      },
      {
        title: "Loading Screen",
        video: "https://www.youtube.com/watch?v=EQwwID8OO3E",
        loreTitle: "UIGalleryFootageTable_5007_LoadingVideos_#0_VideoName",
      },
      {
        title: "Outro - Attack",
        video: "https://www.youtube.com/watch?v=jxwjOoyEnBs",
        loreTitle: "UIGalleryFootageTable_5007_ExitVideos_#0_VideoName",
      },
      {
        title: "Outro - Defence",
        video: "https://www.youtube.com/watch?v=VAcEC9xJaeU",
        loreTitle: "UIGalleryFootageTable_5007_ExitVideos_#1_VideoName",
      },
    ],
    linkID: "",
  },
  {
    group: "",
    name: "Museum of Contemplation",
    domNames: [],
    galleryImage: "img_mapselect_museum_collectorpark.png",
    backgroundImage: "img_map_museum_collectorpark.png",
    domImages: [],
    loadingTips: ["Loading_Museum_1", "Loading_Museum_2", "Loading_Museum_3"],
    images: [],
    videos: [
      {
        title: "Map Reveal",
        video: "https://www.youtube.com/watch?v=AWEtIaKvs5w",
        loreTitle: "",
      },
      {
        title: "Loading Screen",
        video: "https://www.youtube.com/watch?v=hnuSodyq-ZM",
        loreTitle: "UIGalleryFootageTable_5016_LoadingVideos_#0_VideoName",
      },
      {
        title: "Outro - Attack",
        video: "https://www.youtube.com/watch?v=gmyCyUkyvYA",
        loreTitle: "UIGalleryFootageTable_5016_ExitVideos_#0_VideoName",
      },
      {
        title: "Outro - Defence",
        video: "https://www.youtube.com/watch?v=k-iOhAv4NlQ",
        loreTitle: "UIGalleryFootageTable_5016_ExitVideos_#0_VideoName",
      },
    ],
    linkID: "",
  },
  {
    group: "",
    name: "Lower Manhattan",
    domNames: [],
    galleryImage: "img_mapselect_newyork_manhattan.png",
    backgroundImage: "img_map_newyork_manhattan.png",
    domImages: [],
    loadingTips: [
      "Loading_Manhattan_1",
      "Loading_Manhattan_2",
      "Loading_Manhattan_3",
    ],
    videos: [
      {
        title: "Map Reveal",
        video: "",
        loreTitle: "",
      },
      {
        title: "Map Reveal",
        video: "https://www.youtube.com/watch?v=ChBE64P3Ams",
        loreTitle: "",
      },
      {
        title: "Loading Screen",
        video: "https://www.youtube.com/watch?v=6kri1INcFsk",
        loreTitle: "UIGalleryFootageTable_5017_LoadingVideos_#0_VideoName",
      },
      {
        title: "Outro - Attack",
        video: "https://www.youtube.com/watch?v=GCD01hd2MPA",
        loreTitle: "UIGalleryFootageTable_5017_ExitVideos_#0_VideoName",
      },
      {
        title: "Outro - Defence",
        video: "https://www.youtube.com/watch?v=Xtd3DhINlAc",
        loreTitle: "UIGalleryFootageTable_5017_ExitVideos_#1_VideoName",
      },
      {
        title: "Screen",
        video: "https://www.youtube.com/watch?v=HEpqAtUJvzo",
        loreTitle: "",
      },
      {
        title: "Screen",
        video: "https://www.youtube.com/watch?v=Fwr5gFlUYiQ",
        loreTitle: "",
      },
      {
        title: "Screen",
        video: "https://www.youtube.com/watch?v=0a518DCXLUM",
        loreTitle: "",
      },
      {
        title: "Screen",
        video: "https://www.youtube.com/watch?v=chYEYYxED5w",
        loreTitle: "",
      },
      {
        title: "Screen",
        video: "https://www.youtube.com/watch?v=PXbyr30wDFI",
        loreTitle: "",
      },
      {
        title: "Screen",
        video: "https://www.youtube.com/watch?v=z_fNwdhjI40",
        loreTitle: "",
      },
    ],
    images: [],
    linkID: "",
  },
  {
    linkID: "",
    group: "",
    name: "Thebes",
    domNames: [],
    galleryImage: "soon.png",
    backgroundImage: "img_map_egypt_thebes.png",
    domImages: [],
    loadingTips: [
      "UIGalleryFootageTable_5019_LoadingVideos_#0_Subtitles_#0_Text",
      "UIGalleryFootageTable_5019_LoadingVideos_#0_Subtitles_#1_Text",
      "UIGalleryFootageTable_5019_LoadingVideos_#0_Subtitles_#2_Text",
    ],
    videos: [
      {
        title: "Loading Screen",
        video: "https://www.youtube.com/watch?v=spfIxemiHDs",
        loreTitle: "UIGalleryFootageTable_5019_LoadingVideos_#0_VideoName",
      },
    ],
    images: [],
  },
];

const MapInfoArcadeOrdered: MapInfo[] = [
  {
    group: "",
    name: "Practice Range",
    domNames: [],
    galleryImage: "img_mapselect_practicerance.png",
    backgroundImage: "img_map_practicerance.png",
    domImages: [],
    loadingTips: [
      "121_Train_ST.TXT_Loading1",
      "121_Train_ST.TXT_Loading2",
      "121_Train_ST.TXT_Loading3",
      "121_Train_ST.TXT_Loading4",
      "121_Train_ST.TXT_Loading5",
      "121_Train_ST.TXT_Loading6",
    ],
    images: [],
    videos: [
      {
        title: "Loading Screen",
        video: "https://www.youtube.com/watch?v=zMgHNFNGN6w",
        loreTitle: "UIGalleryFootageTable_5004_LoadingVideos_#0_VideoName",
      },
      {
        title: "Loading Screen - Unused",
        video: "https://www.youtube.com/watch?v=Wf1GxB_1E-s",
        loreTitle: "",
      },
    ],
    linkID: "",
  },
  {
    group: "Tokyo 2099",
    name: "Ninomaru",
    domNames: [],
    galleryImage: "img_mapselect_tokyowebworld_spiderisland.png",
    backgroundImage: "img_map_tokyowebworld_spiderisland.png",
    domImages: [],
    loadingTips: ["Loading_Tokyo_1", "Loading_Tokyo_2", "Loading_Tokyo_3"],
    images: [],
    videos: [
      {
        title: "Loading Screen",
        video: "https://www.youtube.com/watch?v=RWs4tubqHlM",
        loreTitle: "UIGalleryFootageTable_5003_LoadingVideos_#0_VideoName",
      },
    ],
    linkID: "",
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
    images: [],
    videos: [
      {
        title: "Map Reveal",
        video: "https://www.youtube.com/watch?v=pVlerpIo3Pk",
        loreTitle: "",
      },
      {
        title: "Loading Screen",
        video: "https://www.youtube.com/watch?v=EXRY-TOkhkE",
        loreTitle: "UIGalleryFootageTable_5006_LoadingVideos_#0_VideoName",
      },
      {
        title: "Outro",
        video: "https://www.youtube.com/watch?v=UYYhN-htSjs",
        loreTitle: "UIGalleryFootageTable_5006_ExitVideos_#2_VideoName",
      },
    ],
    linkID: "",
  },
  {
    group: "Intergalactic Empire of Wakanda",
    name: "World Arena",
    domNames: [],
    galleryImage: "worldarena.png",
    backgroundImage: "worldarena.png",
    domImages: [],
    loadingTips: [
      "MarvelIPWholeProcessTable_1289_LoadingVideoSubtitles_#0_Text",
      "MarvelIPWholeProcessTable_1289_LoadingVideoSubtitles_#1_Text",
      "MarvelIPWholeProcessTable_1289_LoadingVideoSubtitles_#2_Text",
    ],
    images: [],
    videos: [
      {
        title: "Mode Reveal",
        video: "https://www.youtube.com/watch?v=r1ogvqoq09I",
        loreTitle: "",
      },
      {
        title: "Loading Screen",
        video: "https://www.youtube.com/watch?v=3UfKmsHrdC0",
        loreTitle: "",
      },
    ],
    linkID: "",
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
    images: [],
    videos: [
      {
        title: "Mode Reveal",
        video: "https://www.youtube.com/watch?v=gVIUnElubKk",
        loreTitle: "",
      },
      {
        title: "Loading Screen",
        video: "https://www.youtube.com/watch?v=9JfMoM9cpH8",
        loreTitle: "",
      },
    ],
    linkID: "",
  },
  {
    group: "Klyntar",
    name: "Throne of Knull",
    domNames: [],
    galleryImage: "img_mapselect_klyntar_abyssthrone.png",
    backgroundImage: "img_map_klyntar_abyssthrone.png",
    domImages: [],
    loadingTips: [
      "MarvelIPWholeProcessTable_1307_LoadingVideoSubloreTitles_#0_Text",
      "MarvelIPWholeProcessTable_1307_LoadingVideoSubloreTitles_#1_Text",
      "MarvelIPWholeProcessTable_1307_LoadingVideoSubloreTitles_#2_Text",
    ],
    images: [],
    videos: [
      {
        title: "Map Reveal",
        video: "https://www.youtube.com/watch?v=P44x3oxvhFY",
        loreTitle: "",
      },
      {
        title: "Mode Reveal",
        video: "https://www.youtube.com/watch?v=pGfp8UJDpdg",
        loreTitle: "",
      },
      {
        title: "Loading Screen",
        video: "https://www.youtube.com/watch?v=FD_WK8LQIqk",
        loreTitle: "UIGalleryFootageTable_5005_LoadingVideos_#2_VideoName",
      },
      {
        title: "Outro",
        video: "https://www.youtube.com/watch?v=YNgS_Y7zRaw",
        loreTitle: "UIGalleryFootageTable_5005_ExitVideos_#4_VideoName",
      },
      {
        title: "Outro",
        video: "https://www.youtube.com/watch?v=o2Y9TsCuDts",
        loreTitle: "UIGalleryFootageTable_5005_ExitVideos_#5_VideoName",
      },
    ],
    linkID: "",
  },
  {
    group: "Marvel Zombies",
    name: "Midtown",
    domNames: [],
    galleryImage: "img_mapselect_midtown.png",
    backgroundImage: "img_map_midtown.png",
    domImages: [],
    loadingTips: [
      "MarvelIPWholeProcessTable_1403_LoadingVideoSubtitles_#0_Text",
      "MarvelIPWholeProcessTable_1403_LoadingVideoSubtitles_#1_Text",
      "MarvelIPWholeProcessTable_1403_LoadingVideoSubtitles_#2_Text",
    ],
    images: [],
    videos: [
      {
        title: "Mode Trailer",
        video: "https://www.youtube.com/watch?v=grjC63MftfI",
        loreTitle: "",
      },
      {
        title: "Loading Screen",
        video: "https://www.youtube.com/watch?v=xeuK-9_xQZM",
        loreTitle: "",
      },
    ],
    linkID: "",
  },
  {
    group: "",
    name: "Grand Garden",
    domNames: [],
    galleryImage: "img_mapselect_grandgarden.png",
    backgroundImage: "img_map_grandgarden.png",
    domImages: [],
    loadingTips: [
      "Loading_Garden_1",
      "Loading_Garden_2",
      "Loading_Garden_3",
      "Loading_Garden_4",
    ],
    images: [],
    videos: [
      {
        title: "Map Reveal",
        video: "https://www.youtube.com/watch?v=-9NKTTnOsLc",
        loreTitle: "",
      },
      {
        title: "Mode Reveal",
        video: "https://www.youtube.com/watch?v=ZcSk1EQYW8k",
        loreTitle: "",
      },
      {
        title: "Loading Screen",
        video: "https://www.youtube.com/watch?v=FNztRS6Dipk",
        loreTitle: "UIGalleryFootageTable_5015_LoadingVideos_#0_VideoName",
      },
      {
        title: "Outro",
        video: "https://www.youtube.com/watch?v=D2lPcLn2nUw",
        loreTitle: "UIGalleryFootageTable_5015_ExitVideos_#0_VideoName",
      },
    ],
    linkID: "",
  },
  {
    group: "Times Square",
    name: "",
    domNames: [],
    galleryImage: "timessquare.png",
    backgroundImage: "timessquare.png",
    domImages: [],
    loadingTips: [],
    images: [],
    videos: [
      {
        title: "Map Reveal",
        video: "https://www.youtube.com/watch?v=WIpkjohfu3E",
        loreTitle: "",
      },
      {
        title: "Loading Screen",
        video: "https://www.youtube.com/watch?v=eBL9UDwmrOs",
        loreTitle: "",
      },
    ],
    linkID: "",
  },
  {
    group: "",
    name: "Jeffland",
    domNames: [],
    galleryImage: "img_mapselect_jeffland.png",
    backgroundImage: "img_map_jeffland.png",
    domImages: [],
    loadingTips: [
      "Loading_JeffLand_1",
      "Loading_JeffLand_2",
      "Loading_JeffLand_3",
    ],
    images: [],
    videos: [
      {
        loreTitle: "",
        video: "https://www.youtube.com/watch?v=WIpkjohfu3E",
        title: "Map Reveal",
      },
      {
        loreTitle: "",
        video: "https://www.youtube.com/watch?v=2DEpKcigA30",
        title: "Mode Reveal",
      },
      {
        loreTitle: "",
        video: "https://www.youtube.com/watch?v=CrBRsoUSzx4",
        title: "Loading Screen",
      },
    ],
    linkID: "",
  },
  {
    group: "Blood Hunt",
    name: "Blood-Night New York",
    domNames: [],
    galleryImage: "img_mapselect_midtown.png",
    backgroundImage: "img_map_midtown.png",
    domImages: [],
    loadingTips: [
      "MarvelIPWholeProcessTable_1422_LoadingVideoSubtitles_#0_Text",
      "MarvelIPWholeProcessTable_1422_LoadingVideoSubtitles_#1_Text",
      "MarvelIPWholeProcessTable_1422_LoadingVideoSubtitles_#2_Text",
    ],
    images: [],
    videos: [
      {
        loreTitle: "",
        video: "https://www.youtube.com/watch?v=Zd8xPgLCQkw",
        title: "Mode Trailer",
      },
      {
        loreTitle: "",
        video: "https://www.youtube.com/watch?v=Gbj8IqDztGc",
        title: "Loading Screen",
      },
      {
        loreTitle: "",
        video: "https://www.youtube.com/watch?v=hkIYAU_ngWU",
        title: "Outro (Dracula)",
      },
      {
        loreTitle: "",
        video: "https://www.youtube.com/watch?v=lHM34YYcdyE",
        title: "Outro (Kingpin)",
      },
    ],
    linkID: "",
  },
  {
    group: "",
    name: "Alchemax Headquarters",
    domNames: [],
    galleryImage: "img_mapselect_nuevayork_acm.png",
    backgroundImage: "img_map_nuevayork_acm.png",
    domImages: [],
    loadingTips: [
      "Loading_NuevaYorkM01_1",
      "Loading_NuevaYorkM01_2",
      "Loading_NuevaYorkM01_3",
    ],
    videos: [
      {
        title: "Map Reveal",
        video: "https://www.youtube.com/watch?v=t8gyiobtcL4",
        loreTitle: "",
      },
      {
        title: "Loading Screen",
        video: "https://www.youtube.com/watch?v=hfFN9b8n6dk",
        loreTitle: "UIGalleryFootageTable_5018_LoadingVideos_#0_VideoName",
      },
      {
        title: "Outro",
        video: "https://www.youtube.com/watch?v=aZ4Ush3li14",
        loreTitle: "UIGalleryFootageTable_5018_ExitVideos_#0_VideoName",
      },
    ],
    images: [],
    linkID: "",
  },
  {
    group: "K'un-Lun",
    name: "Shenloong Arena",
    domNames: [],
    galleryImage: "img_mapselect_kunlun_shenlongarena.png",
    backgroundImage: "img_map_kunlun_shenlongarena.png",
    domImages: [],
    loadingTips: [
      "Loading_KunlunEC01_1",
      "Loading_KunlunEC01_2",
      "Loading_KunlunEC01_3",
    ],
    videos: [
      {
        title: "Map Reveal",
        video: "https://www.youtube.com/watch?v=kLeiPx1GiGU",
        loreTitle: "",
      },
      {
        title: "Game Mode Trailer",
        video: "https://www.youtube.com/watch?v=QjANeeIoPdU",
        loreTitle: "",
      },
      {
        title: "Loading Screen",
        video: "https://www.youtube.com/watch?v=fRow_oMweDY",
        loreTitle: "UIGalleryFootageTable_5007_LoadingVideos_#1_VideoName",
      },
      {
        title: "Outro - Attack",
        video: "https://www.youtube.com/watch?v=IYwx3AXW5m0",
        loreTitle: "UIGalleryFootageTable_5007_ExitVideos_#2_VideoName",
      },
      {
        title: "Outro - Defence",
        video: "https://www.youtube.com/watch?v=6JcE0tXonJU",
        loreTitle: "UIGalleryFootageTable_5007_ExitVideos_#3_VideoName",
      },
    ],
    images: [],
    linkID: "",
  },
  {
    group: "",
    name: "Hellfire Bay Beach",
    domNames: [],
    galleryImage: "hellfirebaybeach.png",
    backgroundImage: "hellfirebaybeach.png",
    domImages: [],
    loadingTips: [],
    videos: [
      {
        title: "Loading Screen",
        video: "https://www.youtube.com/watch?v=B56-W9VX8aM",
        loreTitle: "",
      },
    ],
    images: [],
    linkID: "",
  },
];

const MapInfoWithLinkIDs = MapInfoRegularOrdered.map((map) => ({
  ...map,
  linkID: (map.group + map.name).replace(/\s+/g, ""), // Combine group + name
}));

const MapArcadeInfoWithLinkIDs = MapInfoArcadeOrdered.map((map) => ({
  ...map,
  linkID: (map.group + map.name).replace(/\s+/g, ""), // Combine group + name
}));

const MapInfoRegular = [...MapInfoWithLinkIDs].reverse();
const MapInfoArcade = [...MapArcadeInfoWithLinkIDs].reverse();

export { MapInfoRegular, MapInfoArcade };
