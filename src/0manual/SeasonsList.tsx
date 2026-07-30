interface SeasonInfo {
  id: string;
  name: string;
  altName: string;
  year: string;
  gallerycard: {
    cover: string;
    title: string;
    numberSufix?: string;
    items: { id: string; image: string; altName: string }[];
  }[];
  video: { title: string; url: string; type: string }[];
  image: { title: string; path: string }[];
}

const SeasonInfoList: SeasonInfo[] = [
  {
    id: "-999",
    name: "BETA",
    altName: "Pre-Release",
    year: "2024",
    gallerycard: [],
    video: [
      {
        title: "Rivals' First Stand",
        url: "https://www.youtube.com/watch?v=RTnsfVGxdjM",
        type: "Cinematic",
      },
      {
        title: "Console Announce Trailer",
        url: "https://www.youtube.com/watch?v=XOrp5HeY6U8",
        type: "Cinematic",
      },
      {
        title: "No One Rivals Doom",
        url: "https://www.youtube.com/watch?v=MI3w4oP7uvo",
        type: "Cinematic",
      },
      {
        title: "Stars Aligned",
        url: "https://www.youtube.com/watch?v=tiAZrZGkIgY",
        type: "Cinematic",
      },
    ],
    image: [],
  },
  {
    id: "0",
    name: "Doom's Rise",
    altName: "",
    year: "2024",
    gallerycard: [
      {
        cover: "img_gallery_magazine_01.png",
        title: "Doom's Rise",
        items: [
          {
            id: "01010001",
            image: "img_gallery_card_vertical_01.png",
            altName: "",
          },
          {
            id: "01010002",
            image: "img_gallery_card_horizontal_02.png",
            altName: "",
          },
          {
            id: "01010003",
            image: "img_gallery_card_vertical_03.png",
            altName: "",
          },
          {
            id: "01010004",
            image: "img_gallery_card_horizontal_01.png",
            altName: "",
          },
          {
            id: "01010005",
            image: "img_gallery_card_horizontal_03.png",
            altName: "",
          },
          {
            id: "01010006",
            image: "img_gallery_card_horizontal_05.png",
            altName: "",
          },
          {
            id: "01010007",
            image: "img_gallery_card_horizontal_04.png",
            altName: "",
          },
        ],
      },
    ],
    video: [
      {
        title: "Rivals 'Til the End",
        url: "https://www.youtube.com/watch?v=6QtF-z25nIA",
        type: "Cinematic",
      },
      {
        title: "Trailer",
        url: "https://www.youtube.com/watch?v=jyCJbGUsUkc",
        type: "Cinematic",
      },
      {
        title: "Log In",
        url: "https://www.youtube.com/watch?v=KTKd327sNLU",
        type: "Homescreen",
      },
      {
        title: "Transition",
        url: "https://www.youtube.com/watch?v=z99lghRgaIQ",
        type: "Homescreen",
      },
      {
        title: "Home",
        url: "https://www.youtube.com/watch?v=791ketRw8XY",
        type: "Homescreen",
      },
    ],
    image: [],
  },
  {
    id: "1",
    name: "Eternal Night Falls",
    altName: "",
    year: "2025",
    gallerycard: [
      {
        cover: "img_gallery_magazine_s1.png",
        title: "Eternal Night Falls",
        items: [
          {
            id: "01010008",
            image: "img_gallerys1_magazine_01.png",
            altName: "",
          },
          {
            id: "01010009",
            image: "img_gallerys1_card_vertical_01.png",
            altName: "",
          },
          {
            id: "01010010",
            image: "img_gallerys1_card_horizontal_01.png",
            altName: "",
          },
          {
            id: "01010011",
            image: "img_gallerys1_card_horizontal_02.png",
            altName: "",
          },
          {
            id: "01010012",
            image: "img_gallerys1_card_horizontal_03.png",
            altName: "",
          },
          {
            id: "01010013",
            image: "img_gallerys1_card_horizontal_04.png",
            altName: "",
          },
          {
            id: "01010014",
            image: "img_gallerys1_card_horizontal_05.png",
            altName: "",
          },
          {
            id: "01010015",
            image: "img_gallerys1_card_horizontal_06.png",
            altName: "",
          },
          {
            id: "01010016",
            image: "img_gallerys1_card_horizontal_07.png",
            altName: "",
          },
        ],
      },
    ],
    video: [
      {
        title: "Trailer",
        url: "https://www.youtube.com/watch?v=zATLJ6Cqt0c",
        type: "Trailer",
      },
      {
        title: "Login",
        url: "https://www.youtube.com/watch?v=4VbdtQKpFaU",
        type: "Homescreen",
      },
      {
        title: "Transition",
        url: "https://www.youtube.com/watch?v=r7cxk7wrxXk",
        type: "Homescreen",
      },
      {
        title: "Home",
        url: "https://www.youtube.com/watch?v=l5Vq4IoeR40",
        type: "Homescreen",
      },
    ],
    image: [
      {
        title: "Lore",
        path: "S1 Lore.jpg",
      },
    ],
  },
  {
    id: "2",
    name: "Hellfire Gala",
    altName: "",
    year: "2025",
    gallerycard: [
      {
        cover: "img_gallery_magazine_s2.png",
        title: "Hellfire Gala",
        items: [
          {
            id: "01010017",
            image: "img_gallerys2_magazine_01.png",
            altName: "",
          },
          {
            id: "01010018",
            image: "img_gallerys2_card_horizontal_01.png",
            altName: "",
          },
          {
            id: "01010019",
            image: "img_gallerys2_card_vertical_01.png",
            altName: "",
          },
          {
            id: "01010020",
            image: "img_gallerys2_card_horizontal_02.png",
            altName: "",
          },
          {
            id: "01010021",
            image: "img_gallerys2_card_horizontal_03.png",
            altName: "",
          },
          {
            id: "01010022",
            image: "img_gallerys2_card_horizontal_04.png",
            altName: "",
          },
          {
            id: "01010023",
            image: "img_gallerys2_card_horizontal_05.png",
            altName: "",
          },
          {
            id: "01010024",
            image: "img_gallerys2_card_horizontal_06.png",
            altName: "",
          },
          {
            id: "01010025",
            image: "img_gallerys2_card_vertical_02.png",
            altName: "",
          },
          {
            id: "01010026",
            image: "img_gallerys2_card_horizontal_07.png",
            altName: "",
          },
        ],
      },
    ],
    video: [
      {
        title: "Trailer",
        url: "https://www.youtube.com/watch?v=thyG51IdChc",
        type: "Trailer",
      },
      {
        title: "Login",
        url: "https://www.youtube.com/watch?v=N2tvOsSC9nw",
        type: "Homescreen",
      },
      {
        title: "Transition",
        url: "https://www.youtube.com/watch?v=HbMT0GPUz3A",
        type: "Homescreen",
      },
      {
        title: "Home",
        url: "https://www.youtube.com/watch?v=lJALEDITlsQ",
        type: "Homescreen",
      },
    ],
    image: [
      {
        title: "Lore",
        path: "S2 Lore.jpg",
      },
    ],
  },
  {
    id: "3",
    name: "The Abyss Awakens",
    altName: "",
    year: "2025",
    gallerycard: [
      {
        cover: "img_gallery_magazine_s3.png",
        title: "The Abyss Awakens",
        items: [
          {
            id: "01010027",
            image: "img_gallerys3_magazine_01.png",
            altName: "Flarkin' Klyntar",
          },
          {
            id: "01010028",
            image: "img_gallerys3_magazine_02.png",
            altName: "A Light In the Darkness",
          },
          {
            id: "01010029",
            image: "img_gallerys3_card_horizontal_01.png",
            altName: "The Phoenix Reborn?",
          },
          {
            id: "01010030",
            image: "img_gallerys3_card_horizontal_02.png",
            altName: "'Till Death Do Us Part",
          },
          {
            id: "01010031",
            image: "img_gallerys3_card_horizontal_03.png",
            altName: "A Dire Warning",
          },
          {
            id: "01010032",
            image: "img_gallerys3_card_horizontal_04.png",
            altName: "On The Blade's Edge",
          },
          {
            id: "01010033",
            image: "img_gallerys3_card_horizontal_05.png",
            altName: "Divine Balance",
          },
          {
            id: "01010034",
            image: "img_gallerys3_card_horizontal_06.png",
            altName: "Kings In Black",
          },
          {
            id: "01010035",
            image: "img_gallerys3_card_horizontal_07.png",
            altName: "Phoenix Endsong",
          },
          {
            id: "01010036",
            image: "img_gallerys3_card_horizontal_08.png",
            altName: "Nowhere Left To Run",
          },
        ],
      },
    ],
    video: [
      {
        title: "Trailer",
        url: "https://www.youtube.com/watch?v=kIhLPAWKKsg",
        type: "Trailer",
      },
      {
        title: "Login",
        url: "https://www.youtube.com/watch?v=4syfd4zERCs",
        type: "Homescreen",
      },
      {
        title: "Transition",
        url: "https://www.youtube.com/watch?v=HA-WQUjoeuc",
        type: "Homescreen",
      },
      {
        title: "Home",
        url: "https://www.youtube.com/watch?v=dbLLYx6_4qM",
        type: "Homescreen",
      },
    ],
    image: [
      {
        title: "Lore",
        path: "S3 Lore.jpg",
      },
    ],
  },
  {
    id: "4",
    name: "Heart of the Dragon",
    altName: "",
    year: "2025",
    gallerycard: [
      {
        cover: "img_gallery_magazine_s4.png",
        title: "Heart of the Dragon",
        items: [
          {
            id: "01010037",
            image: "img_gallerys4_magazine_01.png",
            altName: "",
          },
          {
            id: "01010038",
            image: "img_gallerys4_card_horizontal_01.png",
            altName: "",
          },
          {
            id: "01010039",
            image: "img_gallerys4_card_horizontal_02.png",
            altName: "",
          },
          {
            id: "01010040",
            image: "img_gallerys4_card_horizontal_03.png",
            altName: "",
          },
          {
            id: "01010041",
            image: "img_gallerys4_card_horizontal_04.png",
            altName: "",
          },
          {
            id: "01010042",
            image: "img_gallerys4_card_horizontal_05.png",
            altName: "",
          },
          {
            id: "01010069",
            image: "img_gallerys4_card_horizontal_06.png",
            altName: "",
          },
          {
            id: "01010070",
            image: "img_gallerys4_card_horizontal_07.png",
            altName: "",
          },
          {
            id: "01010071",
            image: "img_gallerys4_card_horizontal_08.png",
            altName: "",
          },
        ],
      },
    ],
    video: [
      {
        title: "Trailer",
        url: "https://www.youtube.com/watch?v=67FVMNGMFXU",
        type: "Trailer",
      },
      {
        title: "Login",
        url: "https://www.youtube.com/watch?v=d0syphCD2DY",
        type: "Homescreen",
      },
      {
        title: "Transition",
        url: "https://www.youtube.com/watch?v=OcsyzPyflhE",
        type: "Homescreen",
      },
      {
        title: "Home",
        url: "https://www.youtube.com/watch?v=Unv4zQIIbNM",
        type: "Homescreen",
      },
    ],
    image: [
      {
        title: "Lore 1",
        path: "S4 Lore 1.jpg",
      },
      {
        title: "Lore 2",
        path: "S4 Lore 2.jpg",
      },
      {
        title: "Lore 3",
        path: "S4 Lore 3.jpg",
      },
      {
        title: "Lore 4",
        path: "S4 Lore 4.jpg",
      },
    ],
  },
  {
    id: "5",
    name: "Love is a Battlefield",
    altName: "",
    year: "2025",
    gallerycard: [
      {
        cover: "img_gallery_magazine_s5.png",
        title: "Love is a Battlefield",
        items: [
          {
            id: "01010043",
            image: "img_gallerys5_magazine_01.png",
            altName: "",
          },
          {
            id: "01010044",
            image: "img_gallerys5_card_horizontal_01.png",
            altName: "",
          },
          {
            id: "01010045",
            image: "img_gallerys5_card_horizontal_02.png",
            altName: "",
          },
          {
            id: "01010046",
            image: "img_gallerys5_card_horizontal_03.png",
            altName: "",
          },
          {
            id: "01010047",
            image: "img_gallerys5_card_horizontal_04.png",
            altName: "",
          },
          {
            id: "01010048",
            image: "img_gallerys5_card_horizontal_05.png",
            altName: "",
          },
          {
            id: "01010049",
            image: "img_gallerys5_card_horizontal_06.png",
            altName: "",
          },
        ],
      },
    ],
    video: [
      {
        title: "Trailer",
        url: "https://www.youtube.com/watch?v=hXOUHb64164",
        type: "Trailer",
      },
      {
        title: "Login",
        url: "https://www.youtube.com/watch?v=uRQOW22dJL8",
        type: "Homescreen",
      },
      {
        title: "Transition",
        url: "https://www.youtube.com/watch?v=IW8RsO3OKd8",
        type: "Homescreen",
      },
      {
        title: "Home",
        url: "https://www.youtube.com/watch?v=3jCssJYfurg",
        type: "Homescreen",
      },
    ],
    image: [
      {
        title: "Lore 1",
        path: "S5 Lore 1.jpg",
      },
      {
        title: "Lore 2",
        path: "S5 Lore 2.jpg",
      },
      {
        title: "Lore 3",
        path: "S5 Lore 3.jpg",
      },
      {
        title: "Black Cat Teaser",
        path: "S5 Black Cat Teaser.png",
      },
      {
        title: "Kingpin Teaser",
        path: "S5 Kingpin Teaser.png",
      },
    ],
  },
  {
    id: "6",
    name: "Night at the Museum",
    altName: "",
    year: "2026",
    gallerycard: [
      {
        cover: "img_gallery_magazine_s6.png",
        title: "Night at the Museum",
        items: [
          {
            id: "01010050",
            image: "img_gallerys6_magazine_01.png",
            altName: "",
          },
          {
            id: "01010051",
            image: "img_gallerys6_card_horizontal_01.png",
            altName: "",
          },
          {
            id: "01010052",
            image: "img_gallerys6_card_horizontal_02.png",
            altName: "",
          },
          {
            id: "01010053",
            image: "img_gallerys6_card_horizontal_03.png",
            altName: "",
          },
          {
            id: "01010054",
            image: "img_gallerys6_card_horizontal_04.png",
            altName: "",
          },
          {
            id: "01010055",
            image: "img_gallerys6_card_horizontal_05.png",
            altName: "",
          },
          {
            id: "01010056",
            image: "img_gallerys6_card_horizontal_06.png",
            altName: "",
          },
        ],
      },
    ],
    video: [
      {
        title: "Trailer",
        url: "https://www.youtube.com/watch?v=Aj53c2Uxrtc",
        type: "Trailer",
      },
      {
        title: "Login",
        url: "https://www.youtube.com/watch?v=JUNv6Eii37M",
        type: "Homescreen",
      },
      {
        title: "Transition",
        url: "https://www.youtube.com/watch?v=x5_erHtZVUM",
        type: "Homescreen",
      },
      {
        title: "Home",
        url: "https://www.youtube.com/watch?v=LfTFb4Q-9NQ",
        type: "Homescreen",
      },
    ],
    image: [
      {
        title: "Lore 1",
        path: "S6 Lore 1.jpg",
      },
      {
        title: "Lore 2",
        path: "S6 Lore 2.jpg",
      },
      {
        title: "Lore 3",
        path: "S6 Lore 3.jpg",
      },
      {
        title: "BP QR Code",
        path: "S6 BP QR Code.png",
      },
      {
        title: "BP Upgraded QR Code",
        path: "S6 BP Upgraded QR Code.png",
      },
      {
        title: "Black Cat Teaser Update",
        path: "S6 Black Cat Teaser Update.png",
      },
    ],
  },
  {
    id: "7",
    name: "The Hunt is On",
    altName: "",
    year: "2026",
    gallerycard: [
      {
        cover: "img_gallery_magazine_s7.png",
        title: "The Hunt is On",
        items: [
          {
            id: "01010057",
            image: "img_gallerys7_magazine_01.png",
            altName: "",
          },
          {
            id: "01010058",
            image: "img_gallerys7_card_horizontal_01.png",
            altName: "",
          },
          {
            id: "01010059",
            image: "img_gallerys7_card_horizontal_02.png",
            altName: "",
          },
          {
            id: "01010060",
            image: "img_gallerys7_card_horizontal_03.png",
            altName: "",
          },
          {
            id: "01010061",
            image: "img_gallerys7_card_horizontal_04.png",
            altName: "",
          },
          {
            id: "01010062",
            image: "img_gallerys7_card_horizontal_05.png",
            altName: "",
          },
          {
            id: "01010063",
            image: "img_gallerys7_card_horizontal_06.png",
            altName: "",
          },
        ],
      },
      {
        cover: "img_gallery_magazine_pve.png",
        title: "Blood Hunt",
        numberSufix: ".5",
        items: [
          {
            id: "01020009",
            image: "img_gallerypve_magazine_01.png",
            altName: "King in Exile",
          },
          {
            id: "01020010",
            image: "img_gallerypve_card_horizontal_01.png",
            altName: "",
          },
          {
            id: "01020011",
            image: "img_gallerypve_card_horizontal_02.png",
            altName: "",
          },
          {
            id: "01020012",
            image: "img_gallerypve_card_horizontal_03.png",
            altName: "",
          },
          {
            id: "01020013",
            image: "img_gallerypve_card_horizontal_04.png",
            altName: "",
          },
          {
            id: "01020014",
            image: "img_gallerypve_card_horizontal_05.png",
            altName: "",
          },
        ],
      },
    ],
    video: [
      {
        title: "Trailer",
        url: "https://www.youtube.com/watch?v=HdG4elTlDv8",
        type: "Trailer",
      },
      {
        title: "Login",
        url: "https://www.youtube.com/watch?v=X0RJcnrlyPk",
        type: "Homescreen",
      },
      {
        title: "Transition",
        url: "https://www.youtube.com/watch?v=grNVzUTmzJg",
        type: "Homescreen",
      },
      {
        title: "Home",
        url: "https://www.youtube.com/watch?v=PEa_N3c7bLc",
        type: "Homescreen",
      },
    ],
    image: [
      {
        title: "Lore 1",
        path: "S7 Lore 1.jpg",
      },
      {
        title: "Lore 2",
        path: "S7 Lore 2.jpg",
      },
      {
        title: "Lore 3",
        path: "S7 Lore 3.jpg",
      },
      {
        title: "Black Cat Teaser Update",
        path: "S7 Black Cat Teaser Update.png",
      },
    ],
  },
  {
    id: "8",
    name: "Sins of Alchemax",
    altName: "",
    year: "2026",
    gallerycard: [
      {
        cover: "img_gallery_magazine_s8.png",
        title: "Sins of Alchemax",
        items: [
          {
            id: "01010064",
            image: "img_gallerys8_magazine_01.png",
            altName: "",
          },
          {
            id: "01010065",
            image: "img_gallerys8_card_horizontal_01.png",
            altName: "",
          },
          {
            id: "01010066",
            image: "img_gallerys8_card_horizontal_02.png",
            altName: "",
          },
          {
            id: "01010067",
            image: "img_gallerys8_card_horizontal_03.png",
            altName: "",
          },
          {
            id: "01010068",
            image: "img_gallerys8_card_horizontal_04.png",
            altName: "",
          },
        ],
      },
    ],
    video: [
      {
        title: "Trailer",
        url: "https://www.youtube.com/watch?v=F4B0Jpr4Rw4",
        type: "Trailer",
      },
      {
        title: "Login",
        url: "https://www.youtube.com/watch?v=7vV5OFOL4XA",
        type: "Homescreen",
      },
      {
        title: "Transition",
        url: "https://www.youtube.com/watch?v=MpjTABuuFjo",
        type: "Homescreen",
      },
      {
        title: "Home",
        url: "https://www.youtube.com/watch?v=s35tm2guI6U",
        type: "Homescreen",
      },
    ],
    image: [
      {
        title: "Lore 1",
        path: "S8 Lore 1.jpg",
      },
      {
        title: "Lore 2",
        path: "S8 Lore 2.jpg",
      },
      {
        title: "Lore 3",
        path: "S8 Lore 3.jpg",
      },
    ],
  },
  {
    id: "9",
    name: "The Mystery of Thebes",
    altName: "",
    year: "2026",
    gallerycard: [
      {
        cover: "img_gallery_magazine_s9.png",
        title: "The Mystery of Thebes",
        items: [
          {
            id: "01010072",
            image: "img_gallerys9_magazine_01.png",
            altName: "",
          },
          {
            id: "01010073",
            image: "img_gallerys9_card_horizontal_01.png",
            altName: "",
          },
          {
            id: "01010074",
            image: "img_gallerys9_card_horizontal_02.png",
            altName: "",
          },
          {
            id: "01010075",
            image: "img_gallerys9_card_horizontal_03.png",
            altName: "",
          },
          {
            id: "01010076",
            image: "img_gallerys9_card_horizontal_04.png",
            altName: "",
          },
        ],
      },
    ],
    video: [
      {
        title: "Trailer",
        url: "https://www.youtube.com/watch?v=YusekrZKvwQ",
        type: "Trailer",
      },
      {
        title: "Login",
        url: "https://www.youtube.com/watch?v=Muv_OURJHeo",
        type: "",
      },
      {
        title: "Transition",
        url: "https://www.youtube.com/watch?v=7IaQquQUQmQ",
        type: "",
      },
      {
        title: "Home",
        url: "https://www.youtube.com/watch?v=aYU5AH1LVUY",
        type: "",
      },
    ],
    image: [
      {
        title: "Lore 1",
        path: "S9 Lore 1.jpg",
      },
      {
        title: "Lore 2",
        path: "S9 Lore 2.jpg",
      },
      {
        title: "Lore 3",
        path: "S9 Lore 3.jpg",
      },
      {
        title: "Lore 4",
        path: "S9 Lore 4.jpg",
      },
    ],
  },
];

const SeasonSpecialsInfoList: SeasonInfo[] = [
  {
    id: "-1",
    name: "Winter Celebration",
    altName: "",
    year: "2024",
    gallerycard: [
      {
        cover: "img_gallery_magazine_winter.png",
        title: "Winter Celebration",
        items: [
          {
            id: "01020001",
            image: "img_gallery_card_vertical_02.png",
            altName: "",
          },
        ],
      },
    ],
    video: [],
    image: [],
  },
  {
    id: "-2",
    name: "Spring Festival Special",
    altName: "",
    year: "2025",
    gallerycard: [
      {
        cover: "img_gallery_magazine_spring.png",
        title: "Spring Festival Special",
        items: [
          {
            id: "01020002",
            image: "img_gallery_card_horizontal_06.png",
            altName: "",
          },
        ],
      },
    ],
    video: [],
    image: [],
  },
  {
    id: "-3",
    name: "Galacta's Cosmic Adventure",
    altName: "",
    year: "2025",
    gallerycard: [
      {
        cover: "img_gallery_magazine_discovery.png",
        title: "Galacta's Cosmic Adventure",
        items: [
          {
            id: "01020003",
            image: "img_gallerys1_card_horizontal_08.png",
            altName: "",
          },
        ],
      },
    ],
    video: [],
    image: [],
  },
  {
    id: "-4",
    name: "Hellfire Gala: Special Edition",
    altName: "",
    year: "2025",
    gallerycard: [
      {
        cover: "img_gallery_magazine_hellfire.png",
        title: "Hellfire Gala: Special Edition",
        items: [
          {
            id: "01020004",
            image: "img_gallery_magazine_hellfire1.png",
            altName: "",
          },
          {
            id: "01020004",
            image: "img_gallery_magazine_hellfire2.png",
            altName: "",
          },
          {
            id: "01020004",
            image: "img_gallery_magazine_hellfire3.png",
            altName: "",
          },
          {
            id: "01020004",
            image: "img_gallery_magazine_hellfire4.png",
            altName: "",
          },
          {
            id: "01020004",
            image: "img_gallery_magazine_hellfire5.png",
            altName: "",
          },
          {
            id: "01020004",
            image: "img_gallery_magazine_hellfire6.png",
            altName: "",
          },
          {
            id: "01020004",
            image: "img_gallery_magazine_hellfire7.png",
            altName: "",
          },
          {
            id: "01020004",
            image: "img_gallery_magazine_hellfire8.png",
            altName: "",
          },
        ],
      },
    ],
    video: [],
    image: [],
  },
  {
    id: "-5",
    name: "Summer Special",
    altName: "",
    year: "2025",
    gallerycard: [
      {
        cover: "img_gallery_magazine_25summer.png",
        title: "Summer Special",
        items: [
          {
            id: "01020005",
            image: "img_gallery_card_25summer01.png",
            altName: "",
          },
        ],
      },
    ],
    video: [],
    image: [],
  },
  {
    id: "-6",
    name: "Voyage to Astonish",
    altName: "",
    year: "2025",
    gallerycard: [
      {
        cover: "img_gallery_magazine_25halloween.png",
        title: "Voyage to Astonish",
        items: [
          {
            id: "01020006",
            image: "img_gallery_card_25halloween.png",
            altName: "",
          },
        ],
      },
    ],
    video: [],
    image: [],
  },
  {
    id: "-7",
    name: "All Systems Go",
    altName: "Happy Rivals' Day",
    year: "2025",
    gallerycard: [
      {
        cover: "img_gallery_magazine_tercentenary1.png",
        title: "All Systems Go",
        items: [
          {
            id: "01020007",
            image: "img_gallery_card_tercentenary1.png",
            altName: "",
          },
        ],
      },
    ],
    video: [
      {
        title: "Login",
        url: "https://www.youtube.com/watch?v=slOzPUdhPzo",
        type: "Homescreen",
      },
      {
        title: "Transition",
        url: "https://www.youtube.com/watch?v=WUQmzZfaXoY",
        type: "Homescreen",
      },
      {
        title: "Home",
        url: "https://www.youtube.com/watch?v=kIecamNx9oE",
        type: "Homescreen",
      },
      {
        title: "Login (CN)",
        url: "https://www.youtube.com/watch?v=nPQrqiFONKc",
        type: "Homescreen",
      },
      {
        title: "Transition (CN)",
        url: "https://www.youtube.com/watch?v=SkSPCkZLIVE",
        type: "Homescreen",
      },
      {
        title: "Home (CN)",
        url: "https://www.youtube.com/watch?v=nC7iAaQ9-QI",
        type: "Homescreen",
      },
    ],
    image: [],
  },
  {
    id: "-8",
    name: "Unfurgettable Holiday",
    altName: "",
    year: "2025",
    gallerycard: [
      {
        cover: "img_gallery_magazine_25winter.png",
        title: "Unfurgettable Holiday",
        items: [
          {
            id: "01020008",
            image: "img_gallery_card_25winter.png",
            altName: "",
          },
        ],
      },
    ],
    video: [],
    image: [],
  },
  {
    id: "-10",
    name: "Marvel Rivals: Path to Doomsday",
    altName: "",
    year: "2026",
    gallerycard: [
      {
        cover: "img_gallery_magazine_mcu2.png",
        title: "Marvel Rivals: Path to Doomsday",
        items: [
          {
            id: "01020015",
            image: "img_gallerymcu_magazine_01.png",
            altName: "",
          },
          {
            id: "01020017",
            image: "img_gallerymcu_magazine_02.png",
            altName: "",
          },
        ],
      },
    ],
    video: [
      {
        title: "The Avengers - Loading",
        url: "https://www.youtube.com/watch?v=H0sabIIMWu4",
        type: "Login Screen",
      },
    ],
    image: [],
  },
  {
    id: "-11",
    name: "Summer Spectacular 2.0",
    altName: "",
    year: "2026",
    gallerycard: [
      {
        cover: "img_gallery_magazine_26summer.png",
        title: "Summer Spectacular 2.0",
        items: [
          {
            id: "01020016",
            image: "img_gallery_card_26summer02.png",
            altName: "",
          },
        ],
      },
    ],
    video: [],
    image: [],
  },
];

export const specialOrderMap: { [key: string]: number } = {
  "-7": 5.5,
  "-999": -0.5,
};

export { SeasonInfoList, SeasonSpecialsInfoList };
