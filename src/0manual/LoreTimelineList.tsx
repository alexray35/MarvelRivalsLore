// LoreTimelineList.tsx
import timelineStringsData from "./TimelineStrings.json";

export interface LoreSubSection {
  descriptionId: string;
  description?: string;
  image: string;
}

export interface LoreSection {
  title: string;
  id: string;
  major?: boolean;
  chronoverses: Chronoverse[];
  subSections: LoreSubSection[];
}

export type Chronoverse = "Present" | "Collaspsing" | "Mosaic" | "2099";

export interface TimelineGroup {
  sections: LoreSection[];
}

// Function to populate descriptions
const populateDescriptions = (groups: TimelineGroup[]): TimelineGroup[] => {
  // Type assertion for the imported JSON
  const timelineStrings = timelineStringsData as Record<string, string>;

  return groups.map((group) => ({
    ...group,
    sections: group.sections.map((section) => ({
      ...section,
      subSections: section.subSections.map((subSection) => ({
        ...subSection,
        description:
          timelineStrings[subSection.descriptionId] ||
          timelineStrings.default ||
          "String missing.",
      })),
    })),
  }));
};

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
        title: "Captain America of 2099",
        chronoverses: ["2099", "Mosaic"],
        subSections: [
          {
            descriptionId: "cap_1",
            image: "timeline/captainamerica2099.png",
          },
        ],
        id: "",
      },
      {
        title: "Hydra Charteris Base",
        major: true,
        chronoverses: ["Present"],
        subSections: [
          {
            descriptionId: "hydra_0",
            image: "map_background/img_map_hydracharterisbase.png",
          },
          {
            descriptionId: "hydra_1",
            image: "gallerycards_lq/img_gallery_card_horizontal_05.png",
          },
          {
            descriptionId: "hydra_2",
            image: "map_background/img_map_hydrabase_arsenal.png",
          },
          {
            descriptionId: "hydra_3",
            image: "map_background/img_map_hydrabase_altar.png",
          },
          {
            descriptionId: "hydra_4",
            image: "",
          },
          {
            descriptionId: "hydra_5",
            image: "timeline/hydra_capVSbucky.png",
          },
        ],
        id: "",
      },
    ],
  },
];

// Populate descriptions and export
const LoreTimelineGroupsRawWithIds = populateSectionIds(LoreTimelineGroupsRaw);
const LoreTimelineGroups = populateDescriptions(LoreTimelineGroupsRawWithIds);

export { LoreTimelineGroups };
