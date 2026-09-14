// LoreTimelineList.tsx
export interface LoreSubSection {
  descriptionPath: string; // Changed from descriptionId to descriptionPath
  image?: string;
}

export interface LoreSection {
  title: string;
  id: string;
  major?: boolean;
  chronoverses: Chronoverse[];
  subSections: LoreSubSection[];
}

export type Chronoverse = "Present" | "Collapsed" | "Mosaic" | "2099";

export interface TimelineGroup {
  sections: LoreSection[];
}

const populateSectionIds = (groups: TimelineGroup[]): TimelineGroup[] => {
  return groups.map((group) => ({
    ...group,
    sections: group.sections.map((section) => ({
      ...section,
      id: section.id || section.title.replace(/\s+/g, ""),
    })),
  }));
};

const LoreTimelineGroupsRaw: TimelineGroup[] = [
  {
    sections: [
      {
        title: "Timestream Entanglement",
        major: true,
        chronoverses: ["Present", "2099", "Mosaic", "Collapsed"],
        subSections: [
          {
            descriptionPath: "", // Empty path for sections without text
            image: "",
          },
          {
            descriptionPath: "klyntar_adam_1",
            image: "stories/img_herostory_104601_hover.png",
          },
          {
            descriptionPath: "klyntar_knull_1",
            image: "timeline/knull.png",
          },
          {
            descriptionPath: "klyntar_venom_1",
            image: "stories/img_herostory_103501_hover.png",
          },
          {
            descriptionPath: "iew_1",
            image: "/timeline/Chrono-Vibranium.png",
          },
          {
            descriptionPath: "tse_present", // Path format matching game data structure
            image: "timeline/captainamericapresent.png",
          },
        ],
        id: "",
      },
      {
        title: "Knull's Corruption Spreads",
        chronoverses: ["Mosaic"],
        subSections: [
          {
            descriptionPath: "iew_1_2",
            image: "timeline/wakandaorishacorrupted.png",
          },
        ],
        id: "",
      },
      {
        title: "Adam's Voyage",
        chronoverses: [],
        subSections: [
          {
            descriptionPath: "klyntar_adam_2",
            image: "stories/img_herostory_104601_hover.png",
          },
          {
            descriptionPath: "klyntar_adam_3",
            image: "stories/img_herostory_104601_hover.png",
          },
        ],
        id: "",
      },
      {
        title: "Wakanda and Knull's Corruption",
        chronoverses: ["Mosaic"],
        subSections: [
          {
            descriptionPath: "iew_2",
            image: "timeline/wakandaorishacorrupted.png",
          },
          {
            descriptionPath: "klyntar_gog_1",
            image: "timeline/ShuriGoG.png",
          },
          {
            descriptionPath: "iew_3",
            image: "timeline/wakandaknull.png",
          },
        ],
        id: "",
      },
      {
        title: "Captain America of 2099",
        chronoverses: ["2099", "Mosaic"],
        subSections: [
          {
            descriptionPath: "cap_1",
            image: "timeline/captainamerica2099.png",
          },
          {
            descriptionPath: "cap_2",
            image: "stories/img_herostory_102201_hover.png",
          },
        ],
        id: "",
      },
      {
        title: "Gateway to Maveth",
        chronoverses: ["Present"],
        subSections: [
          {
            descriptionPath: "hydra_0",
            image: "/timeline/hydrabase.png",
          },
          {
            descriptionPath: "hydra_1",
            image: "gallerycards/img_gallery_card_horizontal_05.png",
          },
          {
            descriptionPath: "hydra_2",
            image: "timeline/hawkeyesupersoldier.png",
          },
          {
            descriptionPath: "hydra_3",
            image: "timeline/hydrabucky.png",
          },
          {
            descriptionPath: "hydra_4",
            image: "stories/img_herostory_104101_hover.png",
          },
          {
            descriptionPath: "hydra_5",
            image: "timeline/hydra_capVSbucky.png",
          },
        ],
        id: "",
      },
      {
        title: "Corrupted Bast",
        chronoverses: ["Mosaic"],
        subSections: [
          {
            descriptionPath: "iew_4",
            image: "gallerycards/img_gallery_card_horizontal_03.png",
          },
        ],
        id: "",
      },
      {
        title: "Crashing onto Klyntar",
        chronoverses: ["Mosaic"],
        subSections: [
          {
            descriptionPath: "klyntar_gog_2",
            image: "timeline/KlyntarGoG1.png",
          },
          {
            descriptionPath: "klyntar_gog_3",
            image: "stories/img_herostory_102301_hover.png",
          },
          {
            descriptionPath: "klyntar_gog_4",
            image: "stories/img_herostory_102701_hover.png",
          },
          {
            descriptionPath: "klyntar_gog_5",
            image: "stories/img_herostory_102701_hover.png",
          },
          {
            descriptionPath: "klyntar_venom_2",
            image: "stories/img_herostory_103501_hover.png",
          },
          {
            descriptionPath: "klyntar_gog_6",
            image: "gallerycards/img_gallery_card_horizontal_04.png",
          },
          {
            descriptionPath: "klyntar_gog_7",
            image: "stories/img_herostory_104301_hover.png",
          },
          {
            descriptionPath: "klyntar_adam_4",
            image: "stories/img_herostory_104601_hover.png",
          },
          {
            descriptionPath: "klyntar_venom_3",
            image: "stories/img_herostory_103501_hover.png",
          },
          {
            descriptionPath: "klyntar_venom_4",
            image: "map_background/img_map_klyntar_ruins.png",
          },
        ],
        id: "",
      },
    ],
  },
];

// Populate IDs and export
const LoreTimelineGroups = populateSectionIds(LoreTimelineGroupsRaw);

export { LoreTimelineGroups };
