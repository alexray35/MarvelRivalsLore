import { getNestedValue } from "../getNestedValue";
import { gameDataSources } from "./GameData";

interface HeroFullInfo {
  id: string;
  displayName: string;
  heroName: string;
  realName: string;
  portrait: string;
  render: string;
  logo: string;
  color: string;
  description: string;
  biography: string;
  season: string;
  story: { title: string; content: string; season: string; image: string }[];
  linkID: string;
}

const HeroFullInfoList: HeroFullInfo[] = [
  // Bruce Banner
  {
    id: "1011",
    heroName: "HeroUIAssetBPTable_10110010_HeroInfo_TName",
    realName: "HeroUIAssetBPTable_10110010_HeroInfo_RealName",
    portrait: "",
    render: "",
    logo: "",
    color: "7eba75",
    description: "HeroUIAseetBPTable_10110010_HeroSpciality",
    biography:
      "HeroUIAssetBPTable_10110010_HeroGalleryInfo_Biography_#0_Content",
    season: "BETA",
    story: [
      {
        title: "HeroUIAssetBPTable_10110010_HeroGallerylnfo_Story_#0_Title",
        content: "HeroUIAssetBPTable_10110010_HeroGallerylnfo_Story_#0_Content",
        season: "BETA",
        image: "",
      },
      {
        title: "HeroUIAssetBPTable_10110010_HeroGallerylnfo_Story_#1_Title",
        content: "",
        season: "",
        image: "",
      },
      {
        title: "HeroUIAssetBPTable_10110010_HeroGallerylnfo_Story_#2_Title",
        content: "",
        season: "",
        image: "",
      },
    ],
    linkID: "",
    displayName: "",
  },
  // The Punisher
  {
    id: "1014",
    heroName: "HeroUIAssetBPTable_10140010_HeroInfo_TName",
    realName: "HeroUIAssetBPTable_10140010_HeroInfo_RealName",
    portrait: "",
    render: "",
    logo: "",
    color: "7ea3b6",
    description: "HeroUIAseetBPTable_10140010_HeroSpciality",
    biography:
      "HeroUIAssetBPTable_10140010_HeroGalleryInfo_Biography_#0_Content",
    season: "BETA",
    story: [
      {
        title: "HeroUIAssetBPTable_10140000_HeroGalleryInfo_Story_#0_Title",
        content: "HeroUIAssetBPTable_10140010_HeroGalleryInfo_Story_#0_Content",
        season: "BETA",
        image: "",
      },
      {
        title: "HeroUIAssetBPTable_10140000_HeroGallerylnfo_Story_#1_Title",
        content: "UIHeroStoryTable_10140_Story_#1_Content",
        season: "8",
        image: "",
      },
      {
        title: "HeroUIAssetBPTable_10140000_HeroGallerylnfo_Story_#2_Title",
        content: "",
        season: "",
        image: "",
      },
    ],
    linkID: "",
    displayName: "",
  },
  // Storm
  {
    id: "1015",
    heroName: "HeroUIAssetBPTable_10150010_HeroInfo_TName",
    realName: "HeroUIAssetBPTable_10150010_HeroInfo_RealName",
    portrait: "",
    render: "",
    logo: "",
    color: "91a3dc",
    description: "HeroUIAseetBPTable_10150010_HeroSpciality",
    biography:
      "HeroUIAssetBPTable_10150010_HeroGalleryInfo_Biography_#0_Content",
    season: "BETA",
    story: [
      {
        title: "HeroUIAssetBPTable_10150010_HeroGallerylnfo_Story_#0_Title",
        content: "HeroUIAssetBPTable_10150010_HeroGallerylnfo_Story_#0_Content",
        season: "BETA",
        image: "",
      },
      {
        title: "HeroUIAssetBPTable_10150010_HeroGallerylnfo_Story_#1_Title",
        content: "",
        season: "",
        image: "",
      },
      {
        title: "HeroUIAssetBPTable_10150010_HeroGallerylnfo_Story_#2_Title",
        content: "",
        season: "",
        image: "",
      },
    ],
    linkID: "",
    displayName: "",
  },
  // Loki
  {
    id: "1016",
    heroName: "HeroUIAssetBPTable_10160010_HeroInfo_TName",
    realName: "HeroUIAssetBPTable_10160010_HeroInfo_RealName",
    portrait: "",
    render: "",
    logo: "",
    color: "5fa166",
    description: "HeroUIAseetBPTable_10160010_HeroSpciality",
    biography:
      "HeroUIAssetBPTable_10160010_HeroGalleryInfo_Biography_#0_Content",
    season: "BETA",
    story: [
      {
        title: "HeroUIAssetBPTable_10160010_HeroGallerylnfo_Story_#0_Title",
        content: "HeroUIAssetBPTable_10160010_HeroGallerylnfo_Story_#0_Content",
        season: "BETA",
        image: "",
      },
      {
        title: "HeroUIAssetBPTable_10160010_HeroGallerylnfo_Story_#1_Title",
        content: "UIHeroStoryTable_10160_Story_#1_Content",
        season: "4",
        image: "",
      },
      {
        title: "HeroUIAssetBPTable_10160010_HeroGallerylnfo_Story_#2_Title",
        content: "",
        season: "",
        image: "",
      },
    ],
    linkID: "",
    displayName: "",
  },
  // Human Torch
  {
    id: "1017",
    heroName: "HeroUIAssetBPTable_10170010_HeroInfo_TName",
    realName: "HeroUIAssetBPTable_10170010_HeroInfo_RealName",
    portrait: "",
    render: "",
    logo: "",
    color: "e5a360",
    description: "HeroUIAseetBPTable_10170010_HeroSpciality",
    biography:
      "HeroUIAssetBPTable_10170010_HeroGalleryInfo_Biography_#0_Content",
    season: "1",
    story: [
      {
        title: "HeroUIAssetBPTable_10170010_HeroGallerylnfo_Story_#0_Title",
        content: "HeroUIAssetBPTable_10170010_HeroGallerylnfo_Story_#0_Content",
        season: "1",
        image: "",
      },
      {
        title: "HeroUIAssetBPTable_10170010_HeroGallerylnfo_Story_#1_Title",
        content: "",
        season: "",
        image: "",
      },
      {
        title: "HeroUIAssetBPTable_10170010_HeroGallerylnfo_Story_#2_Title",
        content: "",
        season: "",
        image: "",
      },
    ],
    linkID: "",
    displayName: "",
  },
  // Doctor Strange
  {
    id: "1018",
    heroName: "HeroUIAssetBPTable_10180010_HeroInfo_TName",
    realName: "HeroUIAssetBPTable_10180010_HeroInfo_RealName",
    portrait: "",
    render: "",
    logo: "",
    color: "ee7f6f",
    description: "HeroUIAseetBPTable_10180010_HeroSpciality",
    biography:
      "HeroUIAssetBPTable_10180010_HeroGalleryInfo_Biography_#0_Content",
    season: "BETA",
    story: [
      {
        title: "HeroUIAssetBPTable_10180010_HeroGallerylnfo_Story_#0_Title",
        content: "HeroUIAssetBPTable_10180010_HeroGallerylnfo_Story_#0_Content",
        season: "BETA",
        image: "",
      },
      {
        title: "HeroUIAssetBPTable_10180010_HeroGallerylnfo_Story_#1_Title",
        content: "",
        season: "",
        image: "",
      },
      {
        title: "HeroUIAssetBPTable_10180010_HeroGallerylnfo_Story_#2_Title",
        content: "",
        season: "",
        image: "",
      },
    ],
    linkID: "",
    displayName: "",
  },
  // Mantis
  {
    id: "1020",
    heroName: "HeroUIAssetBPTable_10200010_HeroInfo_TName",
    realName: "HeroUIAssetBPTable_10200010_HeroInfo_RealName",
    portrait: "",
    render: "",
    logo: "",
    color: "84bf64",
    description: "HeroUIAseetBPTable_10200010_HeroSpciality",
    biography:
      "HeroUIAssetBPTable_10200010_HeroGalleryInfo_Biography_#0_Content",
    season: "0",
    story: [
      {
        title: "HeroUIAssetBPTable_10200010_HeroGallerylnfo_Story_#0_Title",
        content: "HeroUIAssetBPTable_10200010_HeroGallerylnfo_Story_#0_Content",
        season: "0",
        image: "",
      },
      {
        title: "HeroUIAssetBPTable_10200010_HeroGallerylnfo_Story_#1_Title",
        content: "UIHeroStoryTable_10200_Story_#1_Content",
        season: "6",
        image: "",
      },
      {
        title: "HeroUIAssetBPTable_10200010_HeroGallerylnfo_Story_#2_Title",
        content: "",
        season: "",
        image: "",
      },
    ],
    linkID: "",
    displayName: "",
  },
  // Hawkeye
  {
    id: "1021",
    heroName: "HeroUIAssetBPTable_10210010_HeroInfo_TName",
    realName: "HeroUIAssetBPTable_10210010_HeroInfo_RealName",
    portrait: "",
    render: "",
    logo: "",
    color: "c58bdb",
    description: "HeroUIAseetBPTable_10210010_HeroSpciality",
    biography:
      "HeroUIAssetBPTable_10210010_HeroGalleryInfo_Biography_#0_Content",
    season: "0",
    story: [
      {
        title: "HeroUIAssetBPTable_10210000_HeroGalleryInfo_Story_#0_Title",
        content: "HeroUIAssetBPTable_10210010_HeroGalleryInfo_Story_#0_Content",
        season: "0",
        image: "",
      },
      {
        title: "HeroUIAssetBPTable_10210000_HeroGallerylnfo_Story_#1_Title",
        content: "",
        season: "",
        image: "",
      },
      {
        title: "HeroUIAssetBPTable_10210000_HeroGallerylnfo_Story_#2_Title",
        content: "",
        season: "",
        image: "",
      },
    ],
    linkID: "",
    displayName: "",
  },
  // Captain America
  {
    id: "1022",
    heroName: "HeroUIAssetBPTable_10220000_HeroInfo_TName",
    realName: "HeroUIAssetBPTable_10220000_HeroInfo_RealName",
    portrait: "",
    render: "",
    logo: "",
    color: "3972b1",
    description: "UIHeroTable_10220_HeroBasic_Desc",
    biography:
      "HeroUIAssetBPTable_10220000_HeroGalleryInfo_Biography_#0_Content",
    season: "0",
    story: [
      {
        title: "HeroUIAssetBPTable_10220000_HeroGalleryInfo_Story_#0_Title",
        content: "HeroUIAssetBPTable_10220000_HeroGalleryInfo_Story_#0_Content",
        season: "0",
        image: "",
      },
      {
        title: "HeroUIAssetBPTable_10220000_HeroGallerylnfo_Story_#1_Title",
        content: "UIHeroStoryTable_10220_Story_#1_Content",
        season: "7",
        image: "",
      },
      {
        title: "HeroUIAssetBPTable_10220000_HeroGallerylnfo_Story_#2_Title",
        content: "",
        season: "",
        image: "",
      },
    ],
    linkID: "",
    displayName: "",
  },
  // Rocket Raccoon
  {
    id: "1023",
    heroName: "HeroUIAssetBPTable_10230010_HeroInfo_TName",
    realName: "HeroUIAssetBPTable_10230010_HeroInfo_RealName",
    portrait: "",
    render: "",
    logo: "",
    color: "e2a46f",
    description: "HeroUIAseetBPTable_10230010_HeroSpciality",
    biography:
      "HeroUIAssetBPTable_10230010_HeroGalleryInfo_Biography_#0_Content",
    season: "BETA",
    story: [
      {
        title: "HeroUIAssetBPTable_10230010_HeroGallerylnfo_Story_#0_Title",
        content: "HeroUIAssetBPTable_10230010_HeroGallerylnfo_Story_#0_Content",
        season: "BETA",
        image: "",
      },
      {
        title: "HeroUIAssetBPTable_10230010_HeroGallerylnfo_Story_#1_Title",
        content: "UIHeroStoryTable_10230_Story_#1_Content",
        season: "3",
        image: "",
      },
      {
        title: "HeroUIAssetBPTable_10230010_HeroGallerylnfo_Story_#2_Title",
        content: "",
        season: "",
        image: "",
      },
    ],
    linkID: "",
    displayName: "",
  },
  // Hela
  {
    id: "1024",
    heroName: "HeroUIAssetBPTable_10240010_HeroInfo_TName",
    realName: "HeroUIAssetBPTable_10240010_HeroInfo_RealName",
    portrait: "",
    render: "",
    logo: "",
    color: "6fc9c8",
    description: "HeroUIAseetBPTable_10240010_HeroSpciality",
    biography:
      "HeroUIAssetBPTable_10240010_HeroGalleryInfo_Biography_#0_Content",
    season: "BETA",
    story: [
      {
        title: "HeroUIAssetBPTable_10240010_HeroGallerylnfo_Story_#0_Title",
        content: "HeroUIAssetBPTable_10240010_HeroGallerylnfo_Story_#0_Content",
        season: "BETA",
        image: "",
      },
      {
        title: "HeroUIAssetBPTable_10240010_HeroGallerylnfo_Story_#1_Title",
        content: "UIHeroStoryTable_10240_Story_#1_Content",
        season: "3",
        image: "",
      },
      {
        title: "HeroUIAssetBPTable_10240010_HeroGallerylnfo_Story_#2_Title",
        content: "",
        season: "",
        image: "",
      },
    ],
    linkID: "",
    displayName: "",
  },
  // Cloak & Dagger
  {
    id: "1025",
    heroName: "HeroUIAssetBPTable_10250010_HeroInfo_TName",
    realName: "HeroUIAssetBPTable_10250010_HeroInfo_RealName",
    portrait: "",
    render: "",
    logo: "",
    color: "889afc",
    description: "UIHeroTable_10250_HeroBasic_Desc",
    biography:
      "HeroUIAssetBPTable_10250010_HeroGalleryInfo_Biography_#0_Content",
    season: "0",
    story: [
      {
        title: "UIHeroStoryTable_10250_Story_#0_Title",
        content: "UIHeroStoryTable_10250_Story_#0_Content",
        season: "0",
        image: "",
      },
      {
        title: "UIHeroStoryTable_10250_Story_#1_Title",
        content: "",
        season: "",
        image: "",
      },
      {
        title: "UIHeroStoryTable_10250_Story_#2_Title",
        content: "",
        season: "",
        image: "",
      },
    ],
    linkID: "",
    displayName: "",
  },
  // Black Panther
  {
    id: "1026",
    heroName: "HeroUIAssetBPTable_10260010_HeroInfo_TName",
    realName: "HeroUIAssetBPTable_10260010_HeroInfo_RealName",
    portrait: "",
    render: "",
    logo: "",
    color: "b78ff2",
    description: "HeroUIAseetBPTable_10260010_HeroSpciality",
    biography:
      "HeroUIAssetBPTable_10260010_HeroGalleryInfo_Biography_#0_Content",
    season: "BETA",
    story: [
      {
        title: "HeroUIAssetBPTable_10260000_HeroGalleryInfo_Story_#0_Title",
        content: "HeroUIAssetBPTable_10260010_HeroGalleryInfo_Story_#0_Content",
        season: "BETA",
        image: "",
      },
      {
        title: "HeroUIAssetBPTable_10260000_HeroGallerylnfo_Story_#1_Title",
        content: "UIHeroStoryTable_10260_Story_#1_Content",
        season: "",
        image: "",
      },
      {
        title: "HeroUIAssetBPTable_10260000_HeroGallerylnfo_Story_#2_Title",
        content: "",
        season: "",
        image: "",
      },
    ],
    linkID: "",
    displayName: "",
  },
  // Groot
  {
    id: "1027",
    heroName: "HeroUIAssetBPTable_10270010_HeroInfo_TName",
    realName: "HeroUIAssetBPTable_10270010_HeroInfo_RealName",
    portrait: "",
    render: "",
    logo: "",
    color: "9cb858",
    description: "HeroUIAseetBPTable_10270010_HeroSpciality",
    biography:
      "HeroUIAssetBPTable_10270010_HeroGalleryInfo_Biography_#0_Content",
    season: "BETA",
    story: [
      {
        title: "HeroUIAssetBPTable_10270010_HeroGallerylnfo_Story_#0_Title",
        content: "HeroUIAssetBPTable_10270010_HeroGallerylnfo_Story_#0_Content",
        season: "BETA",
        image: "",
      },
      {
        title: "HeroUIAssetBPTable_10270010_HeroGallerylnfo_Story_#1_Title",
        content: "",
        season: "",
        image: "",
      },
      {
        title: "HeroUIAssetBPTable_10270010_HeroGallerylnfo_Story_#2_Title",
        content: "",
        season: "",
        image: "",
      },
    ],
    linkID: "",
    displayName: "",
  },
  // Ultron
  {
    id: "1028",
    heroName: "HeroUIAssetBPTable_10280010_HeroInfo_TName",
    realName: "HeroUIAssetBPTable_10280010_HeroInfo_RealName",
    portrait: "",
    render: "",
    logo: "",
    color: "6a789d",
    description: "UIHeroTable_10280_HeroBasic_Desc",
    biography: "UIHeroStoryTable_10280_Biography",
    season: "2",
    story: [
      {
        title: "UIHeroStoryTable_10280_Story_#0_Title",
        content: "UIHeroStoryTable_10280_Story_#0_Content",
        season: "2",
        image: "",
      },
      {
        title: "UIHeroStoryTable_10280_Story_#1_Title",
        content: "",
        season: "",
        image: "",
      },
      {
        title: "UIHeroStoryTable_10280_Story_#2_Title",
        content: "",
        season: "",
        image: "",
      },
    ],
    linkID: "",
    displayName: "",
  },
  // Magik
  {
    id: "1029",
    heroName: "HeroUIAssetBPTable_10290010_HeroInfo_TName",
    realName: "HeroUIAssetBPTable_10290010_HeroInfo_RealName",
    portrait: "",
    render: "",
    logo: "",
    color: "be9e87",
    description: "HeroUIAseetBPTable_10290010_HeroSpciality",
    biography:
      "HeroUIAssetBPTable_10290010_HeroGalleryInfo_Biography_#0_Content",
    season: "BETA",
    story: [
      {
        title: "HeroUIAssetBPTable_10290010_HeroGallerylnfo_Story_#0_Title",
        content: "HeroUIAssetBPTable_10290010_HeroGallerylnfo_Story_#0_Content",
        season: "BETA",
        image: "",
      },
      {
        title: "HeroUIAssetBPTable_10290010_HeroGallerylnfo_Story_#1_Title",
        content: "",
        season: "",
        image: "",
      },
      {
        title: "HeroUIAssetBPTable_10290010_HeroGallerylnfo_Story_#2_Title",
        content: "",
        season: "",
        image: "",
      },
    ],
    linkID: "",
    displayName: "",
  },
  // Moon Knight
  {
    id: "1030",
    heroName: "HeroUIAssetBPTable_10300010_HeroInfo_TName",
    realName: "HeroUIAssetBPTable_10300010_HeroInfo_RealName",
    portrait: "",
    render: "",
    logo: "",
    color: "8db1c7",
    description: "HeroUIAseetBPTable_10300010_HeroSpciality",
    biography:
      "HeroUIAssetBPTable_10300000_HeroGalleryInfo_Biography_#0_Content",
    season: "0",
    story: [
      {
        title: "HeroUIAssetBPTable_10300010_HeroGallerylnfo_Story_#0_Title",
        content: "HeroUIAssetBPTable_10300010_HeroGallerylnfo_Story_#0_Content",
        season: "0",
        image: "",
      },
      {
        title: "HeroUIAssetBPTable_10300010_HeroGallerylnfo_Story_#1_Title",
        content: "HeroUIAssetBPTable_10300010_HeroGalleryInfo_Story_#1_Content",
        season: "9",
        image: "",
      },
      {
        title: "HeroUIAssetBPTable_10300010_HeroGallerylnfo_Story_#2_Title",
        content: "HeroUIAssetBPTable_10300010_HeroGalleryInfo_Story_#2_Content",
        season: "",
        image: "",
      },
    ],
    linkID: "",
    displayName: "",
  },
  // Luna Snow
  {
    id: "1031",
    heroName: "HeroUIAssetBPTable_10310010_HeroInfo_TName",
    realName: "HeroUIAssetBPTable_10310010_HeroInfo_RealName",
    portrait: "",
    render: "",
    logo: "",
    color: "70bcda",
    description: "HeroUIAseetBPTable_10310010_HeroSpciality",
    biography:
      "HeroUIAssetBPTable_10310000_HeroGalleryInfo_Biography_#0_Content",
    season: "BETA",
    story: [
      {
        title: "HeroUIAssetBPTable_10310010_HeroGallerylnfo_Story_#0_Title",
        content: "HeroUIAssetBPTable_10310010_HeroGallerylnfo_Story_#0_Content",
        season: "BETA",
        image: "",
      },
      {
        title: "HeroUIAssetBPTable_10310010_HeroGallerylnfo_Story_#1_Title",
        content: "",
        season: "",
        image: "",
      },
      {
        title: "HeroUIAssetBPTable_10310010_HeroGallerylnfo_Story_#2_Title",
        content: "",
        season: "",
        image: "",
      },
    ],
    linkID: "",
    displayName: "",
  },
  // Squirrel Girl
  {
    id: "1032",
    heroName: "HeroUIAssetBPTable_10320010_HeroInfo_TName",
    realName: "HeroUIAssetBPTable_10320000_HeroInfo_RealName",
    portrait: "",
    render: "",
    logo: "",
    color: "e3ac65",
    description: "HeroUIAssetBPTable_10320010_HeroSpciality",
    biography:
      "HeroUIAssetBPTable_10320000_HeroGallerylnfo_Biography_#0_Content",
    season: "0",
    story: [
      {
        title: "HeroUIAssetBPTable_10320000_HeroGalleryInfo_Story_#0_Title",
        content: "HeroUIAssetBPTable_10320010_HeroGalleryInfo_Story_#0_Content",
        season: "0",
        image: "",
      },
      {
        title: "HeroUIAssetBPTable_10320000_HeroGallerylnfo_Story_#1_Title",
        content: "HeroUIAssetBPTable_10320010_HeroGalleryInfo_Story_#1_Content",
        season: "2",
        image: "",
      },
      {
        title: "HeroUIAssetBPTable_10320000_HeroGallerylnfo_Story_#2_Title",
        content: "",
        season: "",
        image: "",
      },
    ],
    linkID: "",
    displayName: "",
  },
  // Black Widow
  {
    id: "1033",
    heroName: "HeroUIAssetBPTable_10330010_HeroInfo_TName",
    realName: "HeroUIAssetBPTable_10330000_HeroInfo_RealName",
    portrait: "",
    render: "",
    logo: "",
    color: "565b6b",
    description: "UIHeroTable_10330_HeroBasic_Desc",
    biography:
      "HeroUIAssetBPTable_10330000_HeroGalleryInfo_Biography_#0_Content",
    season: "0",
    story: [
      {
        title: "HeroUIAssetBPTable_10330000_HeroGalleryInfo_Story_#0_Title",
        content: "HeroUIAssetBPTable_10330000_HeroGalleryInfo_Story_#0_Content",
        season: "0",
        image: "",
      },
      {
        title: "HeroUIAssetBPTable_10330000_HeroGallerylnfo_Story_#1_Title",
        content: "",
        season: "",
        image: "",
      },
      {
        title: "HeroUIAssetBPTable_10330000_HeroGallerylnfo_Story_#2_Title",
        content: "",
        season: "",
        image: "",
      },
    ],
    linkID: "",
    displayName: "",
  },
  // Iron Man
  {
    id: "1034",
    heroName: "HeroUIAssetBPTable_10340010_HeroInfo_TName",
    realName: "HeroUIAssetBPTable_10340000_HeroInfo_RealName",
    portrait: "",
    render: "",
    logo: "",
    color: "f28392",
    description: "HeroUIAssetBPTable_10340010_HeroSpciality",
    biography:
      "HeroUIAssetBPTable_10340000_HeroGalleryInfo_Biography_#0_Content",
    season: "BETA",
    story: [
      {
        title: "HeroUIAssetBPTable_10340000_HeroGalleryInfo_Story_#0_Title",
        content: "HeroUIAssetBPTable_10340000_HeroGalleryInfo_Story_#0_Content",
        season: "BETA",
        image: "",
      },
      {
        title: "HeroUIAssetBPTable_10340000_HeroGallerylnfo_Story_#1_Title",
        content: "UIHeroStoryTable_10340_Story_#1_Content",
        season: "2",
        image: "",
      },
      {
        title: "HeroUIAssetBPTable_10340000_HeroGallerylnfo_Story_#2_Title",
        content: "UIHeroStoryTable_10340_Story_#2_Content",
        season: "3",
        image: "",
      },
    ],
    linkID: "",
    displayName: "",
  },
  // Venom
  {
    id: "1035",
    heroName: "HeroUIAssetBPTable_10350010_HeroInfo_TName",
    realName: "1035_RealName",
    portrait: "",
    render: "",
    logo: "",
    color: "668aa9",
    description: "HeroUIAseetBPTable_10350010_HeroSpciality",
    biography:
      "HeroUIAssetBPTable_10350010_HeroGalleryInfo_Biography_#0_Content",
    season: "BETA",
    story: [
      {
        title: "UIHeroStoryTable_10350_Story_#0_Title",
        content: "UIHeroStoryTable_10350_Story_#0_Content",
        season: "BETA",
        image: "",
      },
      {
        title: "UIHeroStoryTable_10350_Story_#1_Title",
        content: "UIHeroStoryTable_10350_Story_#1_Content",
        season: "3",
        image: "",
      },
      {
        title: "UIHeroStoryTable_10350_Story_#2_Title",
        content: "",
        season: "",
        image: "",
      },
    ],
    linkID: "",
    displayName: "",
  },
  // Spider-Man
  {
    id: "1036",
    heroName: "HeroUIAssetBPTable_10360000_HeroInfo_TName",
    realName: "1036_RealName",
    portrait: "",
    render: "",
    logo: "",
    color: "e88474",
    description: "HeroUIAssetBPTable_10360010_HeroSpciality",
    biography:
      "HeroUIAssetBPTable_10360000_HeroGallerylnfo_Biography_#0_Content",
    season: "BETA",
    story: [
      {
        title: "HeroUIAssetBPTable_10360000_HeroGallerylnfo_Story_#0_Title",
        content: "HeroUIAssetBPTable_10360000_HeroGallerylnfo_Story_#0_Content",
        season: "BETA",
        image: "",
      },
      {
        title: "HeroUIAssetBPTable_10360000_HeroGallerylnfo_Story_#1_Title",
        content: "UIHeroStoryTable_10360_Story_#1_Content",
        season: "7",
        image: "",
      },
      {
        title: "HeroUIAssetBPTable_10360000_HeroGallerylnfo_Story_#2_Title",
        content: "",
        season: "",
        image: "",
      },
    ],
    linkID: "",
    displayName: "",
  },
  // Magneto
  {
    id: "1037",
    heroName: "HeroUIAssetBPTable_10370000_HeroInfo_TName",
    realName: "1037_RealName",
    portrait: "",
    render: "",
    logo: "",
    color: "9785be",
    description: "HeroUIAseetBPTable_10370010_HeroSpciality",
    biography:
      "HeroUIAssetBPTable_10370010_HeroGallerylnfo_Biography_#0_Content",
    season: "BETA",
    story: [
      {
        title: "HeroUIAssetBPTable_10370010_HeroGallerylnfo_Story_#0_Title",
        content: "HeroUIAssetBPTable_10370010_HeroGallerylnfo_Story_#0_Content",
        season: "BETA",
        image: "",
      },
      {
        title: "HeroUIAssetBPTable_10370010_HeroGallerylnfo_Story_#1_Title",
        content: "UIHeroStoryTable_10370_Story_#1_Content",
        season: "",
        image: "",
      },
      {
        title: "HeroUIAssetBPTable_10370010_HeroGallerylnfo_Story_#2_Title",
        content: "",
        season: "",
        image: "",
      },
    ],
    linkID: "",
    displayName: "",
  },
  // Scarlet Witch
  {
    id: "1038",
    heroName: "HeroUIAssetBPTable_10380000_HeroInfo_TName",
    realName: "1038_RealName",
    portrait: "",
    render: "",
    logo: "",
    color: "d64265",
    description: "HeroUIAseetBPTable_10380010_HeroSpciality",
    biography:
      "HeroUIAssetBPTable_10380010_HeroGallerylnfo_Biography_#0_Content",
    season: "BETA",
    story: [
      {
        title: "HeroUIAssetBPTable_10380010_HeroGallerylnfo_Story_#0_Title",
        content: "HeroUIAssetBPTable_10380010_HeroGallerylnfo_Story_#0_Content",
        season: "BETA",
        image: "",
      },
      {
        title: "HeroUIAssetBPTable_10380010_HeroGallerylnfo_Story_#1_Title",
        content: "",
        season: "",
        image: "",
      },
      {
        title: "HeroUIAssetBPTable_10380010_HeroGallerylnfo_Story_#2_Title",
        content: "",
        season: "",
        image: "",
      },
    ],
    linkID: "",
    displayName: "",
  },
  // Thor
  {
    id: "1039",
    heroName: "HeroUIAssetBPTable_10390010_HeroInfo_TName",
    realName: "1039_RealName",
    portrait: "",
    render: "",
    logo: "",
    color: "8ab5ec",
    description: "HeroUIAssetBPTable_10390010_HeroSpciality",
    biography:
      "HeroUIAssetBPTable_10390000_HeroGallerylnfo_Biography_#0_Content",
    season: "BETA",
    story: [
      {
        title: "UIHeroStoryTable_10390_Story_#0_Title",
        content: "UIHeroStoryTable_10390_Story_#0_Content",
        season: "BETA",
        image: "",
      },
      {
        title: "UIHeroStoryTable_10390_Story_#1_Title",
        content: "HeroUIAssetBPTable_10390010_HeroGalleryInfo_Story_#1_Content",
        season: "",
        image: "",
      },
      {
        title: "UIHeroStoryTable_10390_Story_#2_Title",
        content: "HeroUIAssetBPTable_10390010_HeroGalleryInfo_Story_#2_Content",
        season: "",
        image: "",
      },
    ],
    linkID: "",
    displayName: "",
  },
  // Mister Fantastic
  {
    id: "1040",
    heroName: "HeroUIAssetBPTable_10400000_HeroInfo_TName",
    realName: "1040_RealName",
    portrait: "",
    render: "",
    logo: "",
    color: "61b8d5",
    description: "UIHeroTable_10400_HeroBasic_Desc",
    biography: "UIHeroStoryTable_10400_Biography",
    season: "1",
    story: [
      {
        title: "UIHeroStoryTable_10400_Story_#0_Title",
        content: "UIHeroStoryTable_10400_Story_#0_Content",
        season: "1",
        image: "",
      },
      {
        title: "UIHeroStoryTable_10400_Story_#1_Title",
        content: "",
        season: "",
        image: "",
      },
      {
        title: "UIHeroStoryTable_10400_Story_#2_Title",
        content: "",
        season: "",
        image: "",
      },
    ],
    linkID: "",
    displayName: "",
  },
  // Winter Soldier
  {
    id: "1041",
    heroName: "HeroUIAssetBPTable_10410000_HeroInfo_TName",
    realName: "1041_RealName",
    portrait: "",
    render: "",
    logo: "",
    color: "9aaf4d",
    description: "UIHeroTable_10410_HeroBasic_Desc",
    biography:
      "HeroUIAssetBPTable_10410000_HeroGallerylnfo_Biography_#0_Content",
    season: "0",
    story: [
      {
        title: "UIHeroStoryTable_10410_Story_#0_Title",
        content: "UIHeroStoryTable_10410_Story_#0_Content",
        season: "0",
        image: "",
      },
      {
        title: "UIHeroStoryTable_10410_Story_#1_Title",
        content: "",
        season: "",
        image: "",
      },
      {
        title: "UIHeroStoryTable_10410_Story_#2_Title",
        content: "",
        season: "",
        image: "",
      },
    ],
    linkID: "",
    displayName: "",
  },
  // Peni Parker
  {
    id: "1042",
    heroName: "HeroUIAssetBPTable_10420000_HeroInfo_TName",
    realName: "1042_TName",
    portrait: "",
    render: "",
    logo: "",
    color: "e46872",
    description: "HeroUIAseetBPTable_10420010_HeroSpciality",
    biography: "UIHeroStoryTable_10420_Biography",
    season: "BETA",
    story: [
      {
        title: "HeroUIAssetBPTable_10420000_HeroGalleryInfo_Story_#0_Title",
        content: "HeroUIAssetBPTable_10420000_HeroGalleryInfo_Story_#0_Content",
        season: "BETA",
        image: "",
      },
      {
        title: "HeroUIAssetBPTable_10420000_HeroGallerylnfo_Story_#1_Title",
        content: "",
        season: "",
        image: "",
      },
      {
        title: "HeroUIAssetBPTable_10420000_HeroGallerylnfo_Story_#2_Title",
        content: "",
        season: "",
        image: "",
      },
    ],
    linkID: "",
    displayName: "",
  },
  // Star-Lord
  {
    id: "1043",
    heroName: "HeroUIAssetBPTable_10430000_HeroInfo_TName",
    realName: "1043_RealName",
    portrait: "",
    render: "",
    logo: "",
    color: "1eacd1",
    description: "HeroUIAseetBPTable_10430010_HeroSpciality",
    biography:
      "HeroUIAssetBPTable_10430010_HeroGallerylnfo_Biography_#0_Content",
    season: "BETA",
    story: [
      {
        title: "HeroUIAssetBPTable_10430010_HeroGallerylnfo_Story_#0_Title",
        content: "HeroUIAssetBPTable_10430010_HeroGallerylnfo_Story_#0_Content",
        season: "BETA",
        image: "",
      },
      {
        title: "HeroUIAssetBPTable_10430010_HeroGallerylnfo_Story_#1_Title",
        content: "",
        season: "",
        image: "",
      },
      {
        title: "HeroUIAssetBPTable_10430010_HeroGallerylnfo_Story_#2_Title",
        content: "",
        season: "",
        image: "",
      },
    ],
    linkID: "",
    displayName: "",
  },
  // Blade
  {
    id: "1044",
    heroName: "HeroUIAssetBPTable_10440000_HeroInfo_TName",
    realName: "UIHeroTable_10440_HeroBasic_RealName",
    portrait: "",
    render: "",
    logo: "",
    color: "f07168",
    description: "UIHeroTable_10440_HeroBasic_Desc",
    biography: "UIHeroStoryTable_10440_Biography",
    season: "3",
    story: [
      {
        title: "UIHeroStoryTable_10440_Story_#0_Title",
        content: "UIHeroStoryTable_10440_Story_#0_Content",
        season: "3",
        image: "",
      },
      {
        title: "UIHeroStoryTable_10440_Story_#1_Title",
        content: "",
        season: "",
        image: "",
      },
      {
        title: "UIHeroStoryTable_10440_Story_#2_Title",
        content: "",
        season: "",
        image: "",
      },
    ],
    linkID: "",
    displayName: "",
  },
  // Namor
  {
    id: "1045",
    heroName: "HeroUIAssetBPTable_10450000_HeroInfo_TName",
    realName: "HeroUIAssetBPTable_10450000_HeroInfo_RealName",
    portrait: "",
    render: "",
    logo: "",
    color: "5ccdc4",
    description: "HeroUIAseetBPTable_10450010_HeroSpciality",
    biography:
      "HeroUIAssetBPTable_10450010_HeroGallerylnfo_Biography_#0_Content",
    season: "BETA",
    story: [
      {
        title: "HeroUIAssetBPTable_10450010_HeroGallerylnfo_Story_#0_Title",
        content: "HeroUIAssetBPTable_10450010_HeroGallerylnfo_Story_#0_Content",
        season: "BETA",
        image: "",
      },
      {
        title: "HeroUIAssetBPTable_10450010_HeroGallerylnfo_Story_#1_Title",
        content: "",
        season: "",
        image: "",
      },
      {
        title: "HeroUIAssetBPTable_10450010_HeroGallerylnfo_Story_#2_Title",
        content: "",
        season: "",
        image: "",
      },
    ],
    linkID: "",
    displayName: "",
  },
  // Adam Warlock
  {
    id: "1046",
    heroName: "HeroUIAssetBPTable_10460000_HeroInfo_TName",
    realName: "HeroUIAssetBPTable_10460000_HeroInfo_RealName",
    portrait: "",
    render: "",
    logo: "",
    color: "d2ad38",
    description: "HeroUIAseetBPTable_10460010_HeroSpciality",
    biography: "UIHeroStoryTable_10460_Biography",
    season: "BETA",
    story: [
      {
        title: "UIHeroStoryTable_10460_Story_#0_Title",
        content: "UIHeroStoryTable_10460_Story_#0_Content",
        season: "BETA",
        image: "",
      },
      {
        title: "UIHeroStoryTable_10460_Story_#1_Title",
        content: "",
        season: "",
        image: "",
      },
      {
        title: "UIHeroStoryTable_10460_Story_#2_Title",
        content: "",
        season: "",
        image: "",
      },
    ],
    linkID: "",
    displayName: "",
  },
  // Jeff the Land Shark
  {
    id: "1047",
    heroName: "HeroUIAssetBPTable_1047000_HeroInfo_TName",
    realName: "HeroUIAssetBPTable_1047000_HeroInfo_RealName",
    portrait: "",
    render: "",
    logo: "",
    color: "597698",
    description: "HeroUIAseetBPTable_10470010_HeroSpciality",
    biography:
      "HeroUIAssetBPTable_10470010_HeroGalleryInfo_Biography_#0_Content",
    season: "BETA",
    story: [
      {
        title: "UIHeroStoryTable_10470_Story_#0_Title",
        content: "UIHeroStoryTable_10470_Story_#0_Content",
        season: "BETA",
        image: "",
      },
      {
        title: "UIHeroStoryTable_10470_Story_#1_Title",
        content: "UIHeroStoryTable_10470_Story_#1_Content",
        season: "3",
        image: "",
      },
      {
        title: "UIHeroStoryTable_10470_Story_#2_Title",
        content: "",
        season: "",
        image: "",
      },
    ],
    linkID: "",
    displayName: "",
  },
  // Psylock
  {
    id: "1048",
    heroName: "HeroUIAssetBPTable_10480000_HeroInfo_TName",
    realName: "UIHeroTable_10480_HeroBasic_RealName",
    portrait: "",
    render: "",
    logo: "",
    color: "ad87d4",
    description: "UIHeroTable_10480_HeroBasic_Desc",
    biography: "UIHeroStoryTable_10480_Biography",
    season: "0",
    story: [
      {
        title: "UIHeroStoryTable_10480_Story_#0_Title",
        content: "UIHeroStoryTable_10480_Story_#0_Content",
        season: "0",
        image: "",
      },
      {
        title: "UIHeroStoryTable_10480_Story_#1_Title",
        content: "",
        season: "",
        image: "",
      },
      {
        title: "UIHeroStoryTable_10480_Story_#2_Title",
        content: "",
        season: "",
        image: "",
      },
    ],
    linkID: "",
    displayName: "",
  },
  // Wolverine
  {
    id: "1049",
    heroName: "HeroUIAssetBPTable_10490000_HeroInfo_TName",
    realName: "UIHeroTable_10490_HeroBasic_RealName",
    portrait: "",
    render: "",
    logo: "",
    color: "be962a",
    description: "UIHeroTable_10490_HeroBasic_Desc",
    biography: "UIHeroStoryTable_10490_Biography",
    season: "0",
    story: [
      {
        title: "UIHeroStoryTable_10490_Story_#0_Title",
        content: "UIHeroStoryTable_10490_Story_#0_Content",
        season: "0",
        image: "",
      },
      {
        title: "UIHeroStoryTable_10490_Story_#1_Title",
        content: "UIHeroStoryTable_10490_Story_#1_Content",
        season: "",
        image: "",
      },
      {
        title: "UIHeroStoryTable_10490_Story_#2_Title",
        content: "",
        season: "",
        image: "",
      },
    ],
    linkID: "",
    displayName: "",
  },
  // Invisible Woman
  {
    id: "1050",
    heroName: "UIHeroTable_10500_HeroBasic_TName",
    realName: "UIHeroTable_10500_HeroBasic_RealName",
    portrait: "",
    render: "",
    logo: "",
    color: "3fb3e2",
    description: "UIHeroTable_10500_HeroBasic_Desc",
    biography: "UIHeroStoryTable_10500_Biography",
    season: "1",
    story: [
      {
        title: "UIHeroStoryTable_10500_Story_#0_Title",
        content: "UIHeroStoryTable_10500_Story_#0_Content",
        season: "1",
        image: "",
      },
      {
        title: "UIHeroStoryTable_10500_Story_#1_Title",
        content: "",
        season: "",
        image: "",
      },
      {
        title: "UIHeroStoryTable_10500_Story_#2_Title",
        content: "",
        season: "",
        image: "",
      },
    ],
    linkID: "",
    displayName: "",
  },
  // The Thing
  {
    id: "1051",
    heroName: "UIHeroTable_10510_HeroBasic_TName",
    realName: "UIHeroTable_10510_HeroBasic_RealName",
    portrait: "",
    render: "",
    logo: "",
    color: "e2a26a",
    description: "UIHeroTable_10510_HeroBasic_Desc",
    biography: "UIHeroStoryTable_10510_Biography",
    season: "1",
    story: [
      {
        title: "UIHeroStoryTable_10510_Story_#0_Title",
        content: "UIHeroStoryTable_10510_Story_#0_Content",
        season: "1",
        image: "",
      },
      {
        title: "UIHeroStoryTable_10510_Story_#1_Title",
        content: "",
        season: "",
        image: "",
      },
      {
        title: "UIHeroStoryTable_10510_Story_#2_Title",
        content: "",
        season: "",
        image: "",
      },
    ],
    linkID: "",
    displayName: "",
  },
  // Iron Fist
  {
    id: "1052",
    heroName: "UIHeroTable_10520_HeroBasic_TName",
    realName: "UIHeroTable_10520_HeroBasic_RealName",
    portrait: "",
    render: "",
    logo: "",
    color: "25baa3",
    description: "UIHeroTable_10520_HeroBasic_Desc",
    biography: "UIHeroStoryTable_10520_Biography",
    season: "0",
    story: [
      {
        title: "UIHeroStoryTable_10520_Story_#0_Title",
        content: "UIHeroStoryTable_10520_Story_#0_Content",
        season: "0",
        image: "",
      },
      {
        title: "UIHeroStoryTable_10520_Story_#1_Title",
        content: "UIHeroStoryTable_10520_Story_#1_Content",
        season: "4",
        image: "",
      },
      {
        title: "UIHeroStoryTable_10520_Story_#2_Title",
        content: "",
        season: "",
        image: "",
      },
    ],
    linkID: "",
    displayName: "",
  },
  // Emma Frost
  {
    id: "1053",
    heroName: "UIHeroTable_10530_HeroBasic_TName",
    realName: "UIHeroTable_10530_HeroBasic_RealName",
    portrait: "",
    render: "",
    logo: "",
    color: "3fb3e2",
    description: "UIHeroTable_10530_HeroBasic_Desc",
    biography: "UIHeroStoryTable_10530_Biography",
    season: "2",
    story: [
      {
        title: "UIHeroStoryTable_10530_Story_#0_Title",
        content: "UIHeroStoryTable_10530_Story_#0_Content",
        season: "2",
        image: "",
      },
      {
        title: "UIHeroStoryTable_10530_Story_#1_Title",
        content: "",
        season: "",
        image: "",
      },
      {
        title: "UIHeroStoryTable_10530_Story_#2_Title",
        content: "",
        season: "",
        image: "",
      },
    ],
    linkID: "",
    displayName: "",
  },
  // Phoenix
  {
    id: "1054",
    heroName: "UIHeroTable_10540_HeroBasic_TName",
    realName: "UIHeroTable_10540_HeroBasic_RealName",
    portrait: "",
    render: "",
    logo: "",
    color: "ee7466",
    description: "UIHeroTable_10540_HeroBasic_Desc",
    biography: "UIHeroStoryTable_10540_Biography",
    season: "3",
    story: [
      {
        title: "UIHeroStoryTable_10540_Story_#0_Title",
        content: "UIHeroStoryTable_10540_Story_#0_Content",
        season: "3",
        image: "",
      },
      {
        title: "UIHeroStoryTable_10540_Story_#1_Title",
        content: "",
        season: "",
        image: "",
      },
      {
        title: "UIHeroStoryTable_10540_Story_#2_Title",
        content: "",
        season: "",
        image: "",
      },
    ],
    linkID: "",
    displayName: "",
  },
  // Angela
  {
    id: "1056",
    heroName: "UIHeroTable_10560_HeroBasic_TName",
    realName: "UIHeroTable_10560_HeroBasic_RealName",
    portrait: "",
    render: "",
    logo: "",
    color: "e49443",
    description: "UIHeroTable_10560_HeroBasic_Desc",
    biography: "UIHeroStoryTable_10560_Biography",
    season: "4",
    story: [
      {
        title: "UIHeroStoryTable_10560_Story_#0_Title",
        content: "UIHeroStoryTable_10560_Story_#0_Content",
        season: "4",
        image: "",
      },
      {
        title: "UIHeroStoryTable_10560_Story_#1_Title",
        content: "",
        season: "",
        image: "",
      },
      {
        title: "UIHeroStoryTable_10560_Story_#2_Title",
        content: "",
        season: "",
        image: "",
      },
    ],
    linkID: "",
    displayName: "",
  },
  // Daredevil
  {
    id: "1055",
    heroName: "UIHeroTable_10550_HeroBasic_TName",
    realName: "UIHeroTable_10550_HeroBasic_RealName",
    portrait: "",
    render: "",
    logo: "",
    color: "cd4868",
    description: "UIHeroTable_10550_HeroBasic_Desc",
    biography: "UIHeroStoryTable_10550_Biography",
    season: "4",
    story: [
      {
        title: "UIHeroStoryTable_10550_Story_#0_Title",
        content: "UIHeroStoryTable_10550_Story_#0_Content",
        season: "4",
        image: "",
      },
      {
        title: "UIHeroStoryTable_10550_Story_#1_Title",
        content: "UIHeroStoryTable_10550_Story_#1_Content",
        season: "8",
        image: "",
      },
      {
        title: "UIHeroStoryTable_10550_Story_#2_Title",
        content: "",
        season: "",
        image: "",
      },
    ],
    linkID: "",
    displayName: "",
  },
  // Gambit
  {
    id: "1058",
    heroName: "UIHeroTable_10580_HeroBasic_TName",
    realName: "UIHeroTable_10580_HeroBasic_RealName",
    portrait: "",
    render: "",
    logo: "",
    color: "c5498b",
    description: "UIHeroTable_10580_HeroBasic_Desc",
    biography: "UIHeroStoryTable_10580_Biography",
    season: "5",
    story: [
      {
        title: "UIHeroStoryTable_10580_Story_#0_Title",
        content: "UIHeroStoryTable_10580_Story_#0_Content",
        season: "5",
        image: "",
      },
      {
        title: "UIHeroStoryTable_10580_Story_#1_Title",
        content: "",
        season: "",
        image: "",
      },
      {
        title: "UIHeroStoryTable_10580_Story_#2_Title",
        content: "",
        season: "",
        image: "",
      },
    ],
    linkID: "",
    displayName: "",
  },
  // Rogue
  {
    id: "1065",
    heroName: "UIHeroTable_10650_HeroBasic_TName",
    realName: "UIHeroTable_10650_HeroBasic_RealName",
    portrait: "",
    render: "",
    logo: "",
    color: "c3aa53",
    description: "UIHeroTable_10650_HeroBasic_Desc",
    biography: "UIHeroStoryTable_10650_Biography",
    season: "5",
    story: [
      {
        title: "UIHeroStoryTable_10650_Story_#0_Title",
        content: "UIHeroStoryTable_10650_Story_#0_Content",
        season: "5",
        image: "",
      },
      {
        title: "UIHeroStoryTable_10650_Story_#1_Title",
        content: "",
        season: "",
        image: "",
      },
      {
        title: "UIHeroStoryTable_10650_Story_#2_Title",
        content: "",
        season: "",
        image: "",
      },
    ],
    linkID: "",
    displayName: "",
  },
  // Deadpool
  {
    id: "1057",
    heroName: "HeroUIAssetBPTable_10570000_SkinInfo_SkinName",
    realName: "UIHeroTable_10570_HeroBasic_RealName",
    portrait: "",
    render: "",
    logo: "",
    color: "f67676",
    description: "UIHeroTable_10570_HeroBasic_Desc",
    biography: "UIHeroStoryTable_10570_Biography",
    season: "6",
    story: [
      {
        title: "UIHeroStoryTable_10570_Story_#0_Title",
        content: "UIHeroStoryTable_10570_Story_#0_Content",
        season: "6",
        image: "",
      },
      {
        title: "UIHeroStoryTable_10570_Story_#1_Title",
        content: "",
        season: "",
        image: "",
      },
      {
        title: "UIHeroStoryTable_10570_Story_#2_Title",
        content: "",
        season: "",
        image: "",
      },
    ],
    linkID: "",
    displayName: "",
  },
  // Elsa
  {
    id: "1059",
    heroName: "UIHeroTable_10590_HeroBasic_TName",
    realName: "UIHeroTable_10590_HeroBasic_RealName",
    portrait: "",
    render: "",
    logo: "",
    color: "eb8461",
    description: "UIHeroTable_10590_HeroBasic_Desc",
    biography: "UIHeroStoryTable_10590_Biography",
    season: "6",
    story: [
      {
        title: "UIHeroStoryTable_10590_Story_#0_Title",
        content: "UIHeroStoryTable_10590_Story_#0_Content",
        season: "6",
        image: "",
      },
      {
        title: "UIHeroStoryTable_10590_Story_#1_Title",
        content: "",
        season: "",
        image: "",
      },
      {
        title: "UIHeroStoryTable_10590_Story_#2_Title",
        content: "",
        season: "",
        image: "",
      },
    ],
    linkID: "",
    displayName: "",
  },
  // White Fox
  {
    id: "1060",
    displayName: "White Fox",
    heroName: "HeroUIAssetBPTable_10600000_SkinInfo_SkinName",
    realName: "UIHeroTable_10600_HeroBasic_RealName",
    portrait: "",
    render: "",
    logo: "",
    color: "2db0b9",
    description: "UIHeroTable_10600_HeroBasic_Desc",
    biography: "UIHeroStoryTable_10600_Biography",
    season: "",
    story: [
      {
        title: "UIHeroStoryTable_10600_Story_#0_Title",
        content: "UIHeroStoryTable_10600_Story_#0_Content",
        season: "7",
        image: "",
      },
      {
        title: "UIHeroStoryTable_10600_Story_#1_Title",
        content: "",
        season: "",
        image: "",
      },
      {
        title: "UIHeroStoryTable_10600_Story_#2_Title",
        content: "",
        season: "",
        image: "",
      },
    ],
    linkID: "",
  },
  // Black Cat
  {
    id: "1061",
    displayName: "Black Cat",
    heroName: "UIHeroTable_10610_HeroBasic_TName",
    realName: "UIHeroTable_10610_HeroBasic_RealName",
    portrait: "",
    render: "",
    logo: "",
    color: "a994e4",
    description: "UIHeroTable_10610_HeroBasic_Desc",
    biography: "UIHeroStoryTable_10611_Biography",
    season: "7",
    story: [
      {
        title: "UIHeroStoryTable_10610_Story_#0_Title",
        content: "UIHeroStoryTable_10610_Story_#0_Content",
        season: "7",
        image: "",
      },
      {
        title: "UIHeroStoryTable_10610_Story_#1_Title",
        content: "",
        season: "",
        image: "",
      },
      {
        title: "UIHeroStoryTable_10610_Story_#2_Title",
        content: "",
        season: "",
        image: "",
      },
    ],
    linkID: "",
  },
  {
    id: "1062",
    displayName: "Devil Dinosaur",
    heroName: "UIHeroTable_10620_HeroBasic_TName",
    realName: "UIHeroTable_10620_HeroBasic_RealName",
    portrait: "",
    render: "",
    logo: "",
    color: "e6696b",
    description: "UIHeroTable_10620_HeroBasic_Desc",
    biography: "UIHeroStoryTable_10620_Biography",
    season: "8",
    story: [
      {
        title: "UIHeroStoryTable_10620_Story_#0_Title",
        content: "UIHeroStoryTable_10620_Story_#0_Content",
        season: "8",
        image: "",
      },
      {
        title: "UIHeroStoryTable_10620_Story_#1_Title",
        content: "",
        season: "",
        image: "",
      },
      {
        title: "UIHeroStoryTable_10620_Story_#2_Title",
        content: "",
        season: "",
        image: "",
      },
    ],
    linkID: "",
  },
  {
    id: "1063",
    displayName: "Cyclops",
    heroName: "UIHeroTable_10630_HeroBasic_TName",
    realName: "UIHeroTable_10630_HeroBasic_RealName",
    portrait: "",
    render: "",
    logo: "",
    color: "53b8e0",
    description: "UIHeroTable_10630_HeroBasic_Desc",
    biography: "UIHeroStoryTable_10630_Biography",
    season: "8",
    story: [
      {
        title: "UIHeroStoryTable_10630_Story_#0_Title",
        content: "UIHeroStoryTable_10630_Story_#0_Content",
        season: "8",
        image: "",
      },
      {
        title: "UIHeroStoryTable_10630_Story_#1_Title",
        content: "",
        season: "",
        image: "",
      },
      {
        title: "UIHeroStoryTable_10630_Story_#2_Title",
        content: "",
        season: "",
        image: "",
      },
    ],
    linkID: "",
  },
  {
    id: "1064",
    displayName: "Jubilee",
    heroName: "UIHeroTable_10640_HeroBasic_TName",
    realName: "UIHeroTable_10640_HeroBasic_RealName",
    portrait: "",
    render: "",
    logo: "",
    color: "be9332",
    description: "UIHeroTable_10640_HeroBasic_Desc",
    biography: "UIHeroStoryTable_10640_Biography",
    season: "",
    story: [
      {
        title: "UIHeroStoryTable_10640_Story_#0_Title",
        content: "UIHeroStoryTable_10640_Story_#0_Content",
        season: "9",
        image: "",
      },
      {
        title: "UIHeroStoryTable_10640_Story_#1_Title",
        content: "",
        season: "",
        image: "",
      },
      {
        title: "UIHeroStoryTable_10640_Story_#2_Title",
        content: "",
        season: "",
        image: "",
      },
    ],
    linkID: "",
  },
  {
    id: "1066",
    displayName: "The Hood",
    heroName: "UIHeroTable_10660_HeroBasic_TName",
    realName: "UIHeroTable_10660_HeroBasic_RealName",
    portrait: "",
    render: "",
    logo: "",
    color: "e46e6b",
    description: "UIHeroTable_10660_HeroBasic_Desc",
    biography: "UIHeroStoryTable_10660_Biography",
    season: "",
    story: [
      {
        title: "UIHeroStoryTable_10660_Story_#0_Title",
        content: "UIHeroStoryTable_10660_Story_#0_Content",
        season: "9",
        image: "",
      },
      {
        title: "UIHeroStoryTable_10660_Story_#1_Title",
        content: "",
        season: "",
        image: "",
      },
      {
        title: "UIHeroStoryTable_10660_Story_#2_Title",
        content: "",
        season: "",
        image: "",
      },
    ],
    linkID: "",
  },
];

HeroFullInfoList.forEach((hero) => {
  // Map portrait
  hero.portrait = `/textures/hero_portrait/img_selecthero_${hero.id}001.png`;

  // Map render with exception for id 1011
  if (hero.id === "1011") {
    hero.render =
      "/textures/hero_prestigerender/img_prestige_10110013_hero.png";
  } else {
    hero.render = `/textures/hero_prestigerender/img_prestige_${hero.id}0010_hero.png`;
  }

  // Map logo
  hero.logo = `/textures/hero_logo/img_herologo_${hero.id}_logo.png`;

  hero.displayName = (
    getNestedValue(gameDataSources.default.data, hero.heroName) || ""
  )
    .toLowerCase()
    .replace(/\b\w/g, (char: string) => char.toUpperCase());

  if (hero.displayName == "Jeff The Land Shark") {
    hero.displayName = "Jeff the Land Shark";
  }

  hero.linkID = hero.displayName.replace(/\s+/g, "");
});

HeroFullInfoList.sort((a, b) => a.linkID.localeCompare(b.linkID));

export { HeroFullInfoList };
