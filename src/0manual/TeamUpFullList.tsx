interface TeamUpInfo {
  name: string;
  version: {
    id: string;
    name: string;
    description: string;
    season: string;
    anchor: string;
    follower: string[];
    image: string;
  }[];
}

const TeamUpInfoList: TeamUpInfo[] = [
  {
    name: "Ragnarok Rebirth",
    version: [
      {
        id: "100001",
        name: "100001_TName",
        description: "100001_Background",
        season: "season2_5",
        anchor: "Hela",
        follower: ["Loki"],
        image: "",
      },
      {
        id: "100001",
        name: "100001_TName",
        description: "100001_Background_1",
        season: "season2_5",
        anchor: "Hela",
        follower: ["Loki", "Thor"],
        image: "",
      },
      {
        id: "100001",
        name: "100001_TName",
        description: "100001_Background_1",
        season: "season3_5",
        anchor: "Hela",
        follower: ["Thor"],
        image: "",
      },
    ],
  },
  {
    name: "Metallic Chaos",
    version: [
      {
        id: "100002",
        name: "100002_TName",
        description: "100002_Background",
        season: "season2_5",
        anchor: "Magneto",
        follower: ["Scarlet Witch"],
        image: "",
      },
    ],
  },
  {
    name: "Planet X Pals",
    version: [
      {
        id: "100004",
        name: "100004_TName",
        description: "100004_Background",
        season: "season2_5",
        anchor: "Groot",
        follower: ["Rocket Raccoon"],
        image: "",
      },
      {
        id: "100004",
        name: "100004_TName",
        description: "100004_Background_1",
        season: "season2_5",
        anchor: "Groot",
        follower: ["Jeff the Land Shark", "Rocket Raccoon"],
        image: "",
      },
    ],
  },
  {
    name: "Gamma Charge",
    version: [
      {
        id: "100006",
        name: "100006_TName",
        description: "100006_Background",
        season: "beta",
        anchor: "Bruce Banner",
        follower: ["Doctor Strange", "Iron Man"],
        image: "",
      },
      {
        id: "100006",
        name: "100006_TName",
        description: "100006_Background",
        season: "season2_5",
        anchor: "Bruce Banner",
        follower: ["Iron Man", "Namor"],
        image: "",
      },
      {
        id: "100022",
        name: "100022_TName",
        description: "MarvelBondGroupTable_100022_BondGroupDesc",
        season: "season2_5",
        anchor: "Bruce Banner",
        follower: ["Namor"],
        image: "",
      },
      {
        id: "100006",
        name: "100045_TName",
        description: "MarvelBondGroupTable_100045_BondGroupDesc",
        season: "season4",
        anchor: "Bruce Banner",
        follower: ["Black Panther", "Namor"],
        image: "",
      },
      {
        id: "100006",
        name: "100048_TName",
        description: "MarvelBondGroupTable_100045_BondGroupDesc",
        season: "season4_5",
        anchor: "Bruce Banner",
        follower: ["Black Panther"],
        image: "",
      },
      {
        id: "100006",
        name: "MarvelBondGroupTable_100060_GroupName",
        description: "MarvelBondGroupTable_100060_BondGroupDesc",
        season: "season6_5",
        anchor: "Bruce Banner",
        follower: ["Black Panther", "The Thing"],
        image: "",
      },
    ],
  },
  {
    name: "Ammo Overload",
    version: [
      {
        id: "100007",
        name: "100007_TName",
        description: "100007_Background",
        season: "season2_5",
        anchor: "Rocket Raccoon",
        follower: ["The Punisher"],
        image: "",
      },
      {
        id: "100007",
        name: "100007_TName",
        description: "100007_Background",
        season: "beta",
        anchor: "Rocket Raccoon",
        follower: ["The Punisher", "Winter Soldier"],
        image: "",
      },
      {
        id: "100007",
        name: "100007_TName",
        description: "100007_Background",
        season: "season2_5",
        anchor: "Rocket Raccoon",
        follower: ["The Punisher"],
        image: "",
      },
    ],
  },
  {
    name: "Dimensional Shortcut",
    version: [
      {
        id: "100008",
        name: "100008_TName",
        description: "100008_Background",
        season: "limbo",
        anchor: "Magik",
        follower: ["Black Panther"],
        image: "",
      },
      {
        id: "100008",
        name: "100008_TName",
        description: "100008_Background",
        season: "season0",
        anchor: "Magik",
        follower: ["Black Panther", "Psylocke"],
        image: "",
      },
      {
        id: "100008",
        name: "100008_TName",
        description: "100008_Background",
        season: "season2_5",
        anchor: "Magik",
        follower: ["Black Panther"],
        image: "",
      },
    ],
  },
  {
    name: "Chilling Charisma",
    version: [
      {
        id: "100011",
        name: "100011_TName",
        description: "100011_Background",
        season: "beta",
        anchor: "Luna Snow",
        follower: ["Namor"],
        image: "",
      },
      {
        id: "100011",
        name: "100011_TName",
        description: "100011_Background_1",
        season: "season0",
        anchor: "Luna Snow",
        follower: ["Jeff the Land Shark", "Namor"],
        image: "",
      },
      {
        id: "100011",
        name: "100011_TName",
        description: "100011_Background_1",
        season: "season2_5",
        anchor: "Luna Snow",
        follower: ["Jeff the Land Shark"],
        image: "",
      },
    ],
  },
  {
    name: "Symbiote Bond",
    version: [
      {
        id: "100005",
        name: "100005_TName",
        description: "100005_Background",
        season: "season2_5",
        anchor: "Venom",
        follower: ["Peni Parker", "Spider-Man"],
        image: "",
      },
    ],
  },
  {
    name: "Guardian Revival",
    version: [
      {
        id: "100010",
        name: "100010_TName",
        description: "100010_Background",
        season: "season2_5",
        anchor: "Adam Warlock",
        follower: ["Mantis", "Star-Lord"],
        image: "",
      },
    ],
  },
  {
    name: "Voltaic Union",
    version: [
      {
        id: "100003",
        name: "100003_TName",
        description: "100003_Background_1",
        season: "beta",
        anchor: "Thor",
        follower: ["Storm"],
        image: "",
      },
      {
        id: "100003",
        name: "100003_TName",
        description: "100003_Background_1",
        season: "season2_5",
        anchor: "Thor",
        follower: ["Captain America", "Storm"],
        image: "",
      },
    ],
  },
  {
    name: "Allied Agents",
    version: [
      {
        id: "100013",
        name: "100013_TName",
        description: "100013_background",
        season: "season2_5",
        anchor: "Hawkeye",
        follower: ["Black Widow"],
        image: "",
      },
    ],
  },
  {
    name: "Atlas Bond",
    version: [
      {
        id: "100016",
        name: "MarvelBondGroupTable_100016_GroupName",
        description: "100020_background",
        season: "season2_5",
        anchor: "Iron Fist",
        follower: ["Luna Snow"],
        image: "",
      },
    ],
  },
  {
    name: "Lunar Force",
    version: [
      {
        id: "100009",
        name: "100009_TName",
        description: "100009_background",
        season: "season0",
        anchor: "Cloak & Dagger",
        follower: ["Moon Knight"],
        image: "",
      },
      {
        id: "100009",
        name: "100009_TName",
        description: "MarvelBondGroupTable_100037_BondGroupDesc",
        season: "season3_5",
        anchor: "Cloak & Dagger",
        follower: ["Blade", "Moon Knight"],
        image: "",
      },
    ],
  },
  {
    name: "Esu Alumnus",
    version: [
      {
        id: "100018",
        name: "MarvelBondGroupTable_100022_GroupName",
        description: "100018_background",
        season: "season2_5",
        anchor: "Spider-Man",
        follower: ["Squirrel Girl"],
        image: "",
      },
    ],
  },
  {
    name: "Fastball Special",
    version: [
      {
        id: "100025",
        name: "MarvelBondGroupTable_100015_GroupName",
        description: "100017_background",
        season: "season2_5",
        anchor: "Bruce Banner",
        follower: ["Wolverine"],
        image: "",
      },
      {
        id: "100025",
        name: "MarvelBondGroupTable_100015_GroupName",
        description: "MarvelBondGroupTable_100015_BondGroupDesc",
        season: "season2_5",
        anchor: "Wolverine",
        follower: ["Bruce Banner", "The Thing"],
        image: "",
      },
    ],
  },
  {
    name: "Fantastic Four",
    version: [
      {
        id: "100017",
        name: "MarvelBondGroupTable_100017_GroupName",
        description: "MarvelBondGroupTable_100017_BondGroupDesc",
        season: "season2_5",
        anchor: "Invisible Woman",
        follower: ["Human Torch", "Mister Fantastic", "The Thing"],
        image: "",
      },
    ],
  },
  {
    name: "Storming Ignition",
    version: [
      {
        id: "100014",
        name: "100014_TName",
        description: "100014_background",
        season: "season2_5",
        anchor: "Human Torch",
        follower: ["Storm"],
        image: "",
      },
    ],
  },
  {
    name: "Arcane Order",
    version: [
      {
        id: "100020",
        name: "100020_TName",
        description: "100020_background",
        season: "season2_5",
        anchor: "Doctor Strange",
        follower: ["Scarlet Witch"],
        image: "",
      },
      {
        id: "100044",
        name: "100044_TName",
        description: "MarvelBondGroupTable_100044_BondGroupDesc",
        season: "season4",
        anchor: "Doctor Strange",
        follower: ["Magik", "Scarlet Witch"],
        image: "",
      },
    ],
  },
  {
    name: "Mental Projection",
    version: [
      {
        id: "100023",
        name: "100023_TName",
        description: "MarvelBondGroupTable_100023_BondGroupDesc",
        season: "season2_5",
        anchor: "Emma Frost",
        follower: ["Magneto", "Psylocke"],
        image: "",
      },
      {
        id: "100023",
        name: "100023_TName",
        description: "MarvelBondGroupTable_100023_BondGroupDesc",
        season: "season5",
        anchor: "Emma Frost",
        follower: ["Psylocke"],
        image: "",
      },
    ],
  },
  {
    name: "Stars Aligned",
    version: [
      {
        id: "100021",
        name: "100021_TName",
        description: "MarvelBondGroupTable_100021_BondGroupDesc",
        season: "season2_5",
        anchor: "Captain America",
        follower: ["Winter Soldier"],
        image: "",
      },
    ],
  },
  {
    name: "Stark Protocol",
    version: [
      {
        id: "100019",
        name: "100019_TName",
        description: "MarvelBondGroupTable_100019_BondGroupDesc",
        season: "season2_5",
        anchor: "Iron Man",
        follower: ["Ultron"],
        image: "",
      },
      {
        id: "100035",
        name: "100019_TName",
        description: "MarvelBondGroupTable_100035_BondGroupDesc",
        season: "season3",
        anchor: "Iron Man",
        follower: ["Squirrel Girl", "Ultron"],
        image: "",
      },
    ],
  },
  {
    name: "Rocket Network",
    version: [
      {
        id: "100029",
        name: "MarvelBondGroupTable_100029_GroupName",
        description: "MarvelBondGroupTable_100029_BondGroupDesc",
        season: "season2_5",
        anchor: "Rocket Raccoon",
        follower: ["Peni Parker"],
        image: "",
      },
      {
        id: "100039",
        name: "MarvelBondGroupTable_100039_GroupName",
        description: "MarvelBondGroupTable_100039_BondGroupDesc",
        season: "season3_5",
        anchor: "Rocket Raccoon",
        follower: ["Peni Parker", "Star-Lord"],
        image: "",
      },
      {
        id: "100039",
        name: "MarvelBondGroupTable_100039_GroupName",
        description: "MarvelBondGroupTable_100039_BondGroupDesc",
        season: "season6",
        anchor: "Rocket Raccoon",
        follower: ["Star-Lord"],
        image: "",
      },
      {
        id: "100039",
        name: "MarvelBondGroupTable_100062_GroupName",
        description: "MarvelBondGroupTable_100062_BondGroupDesc",
        season: "season6_5",
        anchor: "Rocket Raccoon",
        follower: ["Mister Fantastic", "Star-Lord"],
        image: "",
      },
    ],
  },
  {
    name: "Chilling Assault",
    version: [
      {
        id: "100030",
        name: "MarvelBondGroupTable_100030_GroupName",
        description: "MarvelBondGroupTable_100030_BondGroupDesc",
        season: "season2_5",
        anchor: "Luna Snow",
        follower: ["Hawkeye"],
        image: "",
      },
      {
        id: "100038",
        name: "MarvelBondGroupTable_100038_GroupName",
        description: "MarvelBondGroupTable_100038_BondGroupDesc",
        season: "season3_5",
        anchor: "Luna Snow",
        follower: ["Hawkeye", "Iron Fist"],
        image: "",
      },
      {
        id: "100038",
        name: "MarvelBondGroupTable_100038_GroupName",
        description: "MarvelBondGroupTable_100038_BondGroupDesc",
        season: "season5",
        anchor: "Luna Snow",
        follower: ["Iron Fist"],
        image: "",
      },
      {
        id: "100038",
        name: "MarvelBondGroupTable_100038_GroupName",
        description: "MarvelBondGroupTable_100053_BondGroupDesc",
        season: "season5_5",
        anchor: "Luna Snow",
        follower: ["Emma Frost", "Iron Fist"],
        image: "",
      },
    ],
  },
  {
    name: "Symbiote Shenanigans",
    version: [
      {
        id: "100031",
        name: "MarvelBondGroupTable_100031_GroupName",
        description: "MarvelBondGroupTable_100031_BondGroupDesc",
        season: "season2_5",
        anchor: "Venom",
        follower: ["Jeff the Land Shark"],
        image: "",
      },
      {
        id: "100036",
        name: "MarvelBondGroupTable_100031_GroupName",
        description: "MarvelBondGroupTable_100036_BondGroupDesc",
        season: "season3",
        anchor: "Venom",
        follower: ["Hela", "Jeff the Land Shark"],
        image: "",
      },
    ],
  },
  {
    name: "Operation: Microchip",
    version: [
      {
        id: "100032",
        name: "MarvelBondGroupTable_100032_GroupName",
        description: "MarvelBondGroupTable_100032_BondGroupDesc",
        season: "season2.5",
        anchor: "The Punisher",
        follower: ["Black Widow"],
        image: "",
      },
    ],
  },
  {
    name: "Jeff-Nado",
    version: [
      {
        id: "100033",
        name: "100033_TName",
        description: "MarvelBondGroupTable_100033_BondGroupDesc",
        season: "season2.5",
        anchor: "Storm",
        follower: ["Jeff the Land Shark"],
        image: "",
      },
    ],
  },
  {
    name: "Ever-Burning Bond",
    version: [
      {
        id: "100034",
        name: "MarvelBondGroupTable_100034_GroupName",
        description: "MarvelBondGroupTable_100034_BondGroupDesc",
        season: "season3",
        anchor: "Human Torch",
        follower: ["Spider-Man"],
        image: "",
      },
    ],
  },
  {
    name: "Primal Flame",
    version: [
      {
        id: "100024",
        name: "100024_TName",
        description: "MarvelBondGroupTable_100024_BondGroupDesc",
        season: "season3",
        anchor: "Phoenix",
        follower: ["Wolverine"],
        image: "",
      },
      {
        id: "100052",
        name: "100024_TName",
        description: "MarvelBondGroupTable_100024_BondGroupDesc",
        season: "season5",
        anchor: "Phoenix",
        follower: ["Black Widow", "Wolverine"],
        image: "",
      },
    ],
  },
  {
    name: "First Steps",
    version: [
      {
        id: "100042",
        name: "100042_TName",
        description: "MarvelBondGroupTable_100042_BondGroupDesc",
        season: "season3.0FF",
        anchor: "Human Torch",
        follower: ["The Thing"],
        image: "",
      },
    ],
  },
  {
    name: "Duality Dance",
    version: [
      {
        id: "100040",
        name: "MarvelBondGroupTable_100040_GroupName",
        description: "MarvelBondGroupTable_100040_BondGroupDesc",
        season: "season3_5",
        anchor: "Adam Warlock",
        follower: ["Luna Snow"],
        image: "",
      },
    ],
  },
  {
    name: "Vibrant Vitality",
    version: [
      {
        id: "100041",
        name: "MarvelBondGroupTable_100041_GroupName",
        description: "MarvelBondGroupTable_100041_BondGroupDesc",
        season: "season3_5",
        anchor: "Mantis",
        follower: ["Groot", "Loki"],
        image: "",
      },
    ],
  },
  {
    name: "Divine Armory",
    version: [
      {
        id: "100027",
        name: "MarvelBondGroupTable_100027_GroupName",
        description: "MarvelBondGroupTable_100027_BondGroupDesc",
        season: "season4",
        anchor: "Angela",
        follower: ["Thor"],
        image: "",
      },
    ],
  },
  {
    name: "Bestial Hunt",
    version: [
      {
        id: "100046",
        name: "100046_TName",
        description: "MarvelBondGroupTable_100046_BondGroupDesc",
        season: "season4_5",
        anchor: "Daredevil",
        follower: ["The Punisher"],
        image: "",
      },
    ],
  },
  {
    name: "Deep Wrath",
    version: [
      {
        id: "100047",
        name: "100047_TName",
        description: "MarvelBondGroupTable_100047_BondGroupDesc",
        season: "season4_5",
        anchor: "Hela",
        follower: ["Namor"],
        image: "",
      },
    ],
  },
  {
    name: "Blade of Khonshu",
    version: [
      {
        id: "100051",
        name: "MarvelBondGroupTable_100051_GroupName",
        description: "MarvelBondGroupTable_100051_BondGroupDesc",
        season: "season5",
        anchor: "Moon Knight",
        follower: ["Blade"],
        image: "",
      },
    ],
  },
  {
    name: "Explosive Entanglement",
    version: [
      {
        id: "100049",
        name: "MarvelBondGroupTable_100049_GroupName",
        description: "MarvelBondGroupTable_100049_BondGroupDesc",
        season: "season5",
        anchor: "Gambit",
        follower: ["Magneto"],
        image: "",
      },
      {
        id: "100049",
        name: "MarvelBondGroupTable_100049_GroupName",
        description: "MarvelBondGroupTable_100049_BondGroupDesc",
        season: "season5_5",
        anchor: "Gambit",
        follower: ["Magneto", "Rogue"],
        image: "",
      },
    ],
  },
  {
    name: "Sword of Duality",
    version: [
      {
        id: "1000501",
        name: "100009_TName",
        description: "MarvelBondGroupTable_100050_BondGroupDesc",
        season: "season5",
        anchor: "Cloak & Dagger",
        follower: ["Hawkeye"],
        image: "",
      },
      {
        id: "100050",
        name: "100009_TName",
        description: "MarvelBondGroupTable_100050_BondGroupDesc",
        season: "season5_5",
        anchor: "Cloak & Dagger",
        follower: ["Hawkeye", "Psylocke"],
        image: "",
      },
    ],
  },
  {
    name: "Mr. Pool's Interdimensional Toy Box",
    version: [
      {
        id: "100056",
        name: "MarvelBondGroupTable_100056_GroupName",
        description: "MarvelBondGroupTable_100056_BondGroupDesc",
        season: "season6",
        anchor: "Deadpool",
        follower: ["Jeff the Land Shark"],
        image: "",
      },
      {
        id: "100056",
        name: "MarvelBondGroupTable_100056_GroupName",
        description: "MarvelBondGroupTable_100056_BondGroupDesc",
        season: "season6_5",
        anchor: "Deadpool",
        follower: ["Jeff the Land Shark", "Elsa Bloodstone"],
        image: "",
      },
    ],
  },
  {
    name: "Parker Power-Up",
    version: [
      {
        id: "100057",
        name: "MarvelBondGroupTable_100057_GroupName",
        description: "MarvelBondGroupTable_100057_BondGroupDesc",
        season: "season6",
        anchor: "Peni Parker",
        follower: ["Spider-Man"],
        image: "",
      },
    ],
  },
  {
    name: "Psionic Mayhem",
    version: [
      {
        id: "100059",
        name: "MarvelBondGroupTable_100059_GroupName",
        description: "MarvelBondGroupTable_100059_BondGroupDesc",
        season: "season6_5",
        anchor: "Invisible Woman",
        follower: ["Doctor Strange"],
        image: "",
      },
    ],
  },
  {
    name: "Blessing of the Kumiho",
    version: [
      {
        id: "100063",
        name: "MarvelBondGroupTable_100063_GroupName",
        description: "MarvelBondGroupTable_100063_BondGroupDesc",
        season: "season7",
        anchor: "White Fox",
        follower: ["Luna Snow"],
        image: "",
      },
    ],
  },
  {
    name: "Cosmic Cyclone",
    version: [
      {
        id: "100064",
        name: "MarvelBondGroupTable_100064_GroupName",
        description: "MarvelBondGroupTable_100064_BondGroupDesc",
        season: "season7",
        anchor: "Storm",
        follower: ["Adam Warlock"],
        image: "",
      },
    ],
  },
];

TeamUpInfoList.forEach((teamup) => {
  teamup.version.forEach((version) => {
    version.image = `/textures/teamup/icon_collaborativeskills_${version.id}skill.png`;
  });
});

TeamUpInfoList.sort((a, b) => {
  const lastSeasonA = a.version[a.version.length - 1]?.season || "";
  const lastSeasonB = b.version[b.version.length - 1]?.season || "";

  if (lastSeasonA !== lastSeasonB) {
    return lastSeasonB.localeCompare(lastSeasonA);
  }

  return a.name.localeCompare(b.name);
});

export { TeamUpInfoList };
