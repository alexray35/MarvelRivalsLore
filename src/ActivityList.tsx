// ActivityList.tsx
interface ActivitySubsection {
  subsectionTitle: string;
  subsectionSubTitle: string;
  subsectionText: string;
  subsectionImage: string;
}

interface ActivitySection {
  sectionTitle: string;
  subsections: ActivitySubsection[];
}

interface ActivityInfo {
  name: string;
  image: string;
  sections: ActivitySection[];
}

const ActivityInfo_SeasonBETA: ActivityInfo[] = [
  {
    name: "Galacta's Quest",
    image: "beta.png",
    sections: [
      {
        sectionTitle: "",
        subsections: [
          {
            subsectionTitle: "Galacta's Brunch",
            subsectionSubTitle: "",
            subsectionText: "TXT_CAT_Activity_101_Galacta_Brunch",
            subsectionImage: "Galacta's Brunch.png",
          },
          {
            subsectionTitle: "Galacta's Dinner",
            subsectionSubTitle: "",
            subsectionText: "TXT_CAT_Activity_101_Galacta_Dinner",
            subsectionImage: "Galacta's Dinner.png",
          },
          {
            subsectionTitle: "Galacta's Big Dessert",
            subsectionSubTitle: "",
            subsectionText: "TXT_CAT_Activity_101_Galacta_Big_Dessert",
            subsectionImage: "Galacta's Big Dessert.png",
          },
          {
            subsectionTitle: "Galacta's Snack Time",
            subsectionSubTitle: "",
            subsectionText: "TXT_CAT_Activity_108_Galacta_1_Snack_Time_content",
            subsectionImage: "Galacta's Snack Time.png",
          },
          {
            subsectionTitle: "Galacta's Cosmic Tea",
            subsectionSubTitle: "",
            subsectionText: "TXT_CAT_Activity_108_Galacta_2_Cosmic_Tea_content",
            subsectionImage: "Galacta's Cosmic Tea.png",
          },
          {
            subsectionTitle: "Galacta's Just Desserts",
            subsectionSubTitle: "",
            subsectionText:
              "TXT_CAT_Activity_108_Galacta_3_Just_Desserts_content",
            subsectionImage: "Galacta's Just Desserts.png",
          },
          {
            subsectionTitle: "Galacta's Sweetest Treat",
            subsectionSubTitle: "",
            subsectionText:
              "TXT_CAT_Activity_108_Galacta_4_Sweetest_Treat_content",
            subsectionImage: "Galacta's Sweetest Treat.png",
          },
          {
            subsectionTitle: "Galacta's Stellar Seasoning",
            subsectionSubTitle: "",
            subsectionText:
              "TXT_CAT_Activity_108_Galacta_5_Stellar_Seasoning_content",
            subsectionImage: "Galacta's Stellar Seasoning.png",
          },
        ],
      },
    ],
  },
];

const ActivityInfo_Season0: ActivityInfo[] = [];

const ActivityInfo_Season1: ActivityInfo[] = [
  {
    name: "MarvelActivityTable_114_Name",
    image: "img_home_activity_s1seasonstory_normal.png",
    sections: [
      {
        sectionTitle: "",
        subsections: [
          {
            subsectionTitle: "MarvelActivityTable114_1_Title",
            subsectionSubTitle: "",
            subsectionText: "MarvelActivityTable114_1_Description",
            subsectionImage: "img_seasonstory_event_card1.png",
          },
          {
            subsectionTitle: "MarvelActivityTable114_2_Title",
            subsectionSubTitle: "",
            subsectionText: "MarvelActivityTable114_2_Description",
            subsectionImage: "img_seasonstory_event_card3_1.png",
          },
          {
            subsectionTitle: "MarvelActivityTable114_3_Title",
            subsectionSubTitle: "",
            subsectionText: "MarvelActivityTable114_3_Description",
            subsectionImage: "img_seasonstory_event_card2.png",
          },
          {
            subsectionTitle: "MarvelActivityTable114_4_Title",
            subsectionSubTitle: "",
            subsectionText: "MarvelActivityTable114_4_Description",
            subsectionImage: "img_seasonstory_event_card4.png",
          },
          {
            subsectionTitle: "MarvelActivityTable114_5_Title",
            subsectionSubTitle: "",
            subsectionText: "MarvelActivityTable114_5_Description",
            subsectionImage: "img_seasonstory_event_card5.png",
          },
        ],
      },
    ],
  },
  {
    name: "MarvelActivityTable_115_Name",
    image: "img_home_activity_s1seasonstory_normal2.png",
    sections: [
      {
        sectionTitle: "",
        subsections: [
          {
            subsectionTitle: "MarvelActivityTable115_1_Title",
            subsectionSubTitle: "",
            subsectionText: "MarvelActivityTable115_1_Description",
            subsectionImage: "img_s1seasonstory_main_item11.png",
          },
          {
            subsectionTitle: "MarvelActivityTable115_2_Title",
            subsectionSubTitle: "",
            subsectionText: "MarvelActivityTable115_2_Description",
            subsectionImage: "img_s1seasonstory_main_item2.png",
          },
          {
            subsectionTitle: "MarvelActivityTable115_3_Title",
            subsectionSubTitle: "",
            subsectionText: "MarvelActivityTable115_3_Description",
            subsectionImage: "img_s1seasonstory_main_item3.png",
          },
          {
            subsectionTitle: "MarvelActivityTable115_4_Title",
            subsectionSubTitle: "",
            subsectionText: "MarvelActivityTable115_4_Description",
            subsectionImage: "img_s1seasonstory_main_item4.png",
          },
          {
            subsectionTitle: "MarvelActivityTable115_5_Title",
            subsectionSubTitle: "",
            subsectionText: "MarvelActivityTable115_5_Description",
            subsectionImage: "img_s1seasonstory_main_item5_4.png",
          },
        ],
      },
    ],
  },
];

const ActivityInfo_Season2: ActivityInfo[] = [
  {
    name: "133_MatchActivity_118_ST.TXT_Activity_Title",
    image: "img_home_activity_s21seasonstory_normal.png",
    sections: [
      {
        sectionTitle: "MarvelActivityTable118_1_HeroDetailSubTitle",
        subsections: [
          {
            subsectionTitle: "MarvelActivityTable118_1_HeroDetailSubTitle",
            subsectionSubTitle: "",
            subsectionText: "MarvelActivityTable118_1_HeroDetailContent",
            subsectionImage: "img_s21seasonstory_herodetails_1053icon.png",
          },
          {
            subsectionTitle: "MarvelActivityTable118_1_LineInfo_#0_StoryTitle",
            subsectionSubTitle: "",
            subsectionText: "MarvelActivityTable118_1_LineInfo_#0_StoryContext",
            subsectionImage: "img_s21seasonstory_plot_1053icon1.png",
          },
          {
            subsectionTitle: "MarvelActivityTable118_1_LineInfo_#1_StoryTitle",
            subsectionSubTitle: "",
            subsectionText: "MarvelActivityTable118_1_LineInfo_#1_StoryContext",
            subsectionImage: "img_s21seasonstory_plot_1053icon2.png",
          },
          {
            subsectionTitle: "MarvelActivityTable118_1_LineInfo_#2_StoryTitle",
            subsectionSubTitle: "",
            subsectionText: "MarvelActivityTable118_1_LineInfo_#2_StoryContext",
            subsectionImage: "img_s21seasonstory_plot_1053icon3.png",
          },
        ],
      },
      {
        sectionTitle: "MarvelActivityTable118_2_HeroDetailSubTitle",
        subsections: [
          {
            subsectionTitle: "MarvelActivityTable118_2_HeroDetailSubTitle",
            subsectionSubTitle: "",
            subsectionText: "MarvelActivityTable118_2_HeroDetailContent",
            subsectionImage: "img_s21seasonstory_herodetails_1049icon.png",
          },
          {
            subsectionTitle: "MarvelActivityTable118_2_LineInfo_#0_StoryTitle",
            subsectionSubTitle: "",
            subsectionText: "MarvelActivityTable118_2_LineInfo_#0_StoryContext",
            subsectionImage: "img_s21seasonstory_plot_1049icon1.png",
          },
          {
            subsectionTitle: "MarvelActivityTable118_2_LineInfo_#1_StoryTitle",
            subsectionSubTitle: "",
            subsectionText: "MarvelActivityTable118_2_LineInfo_#1_StoryContext",
            subsectionImage: "img_s21seasonstory_plot_1049icon3.png",
          },
          {
            subsectionTitle: "MarvelActivityTable118_2_LineInfo_#2_StoryTitle",
            subsectionSubTitle: "",
            subsectionText: "MarvelActivityTable118_2_LineInfo_#2_StoryContext",
            subsectionImage: "img_s21seasonstory_plot_1049icon2.png",
          },
        ],
      },
      {
        sectionTitle: "MarvelActivityTable118_3_HeroDetailSubTitle",
        subsections: [
          {
            subsectionTitle: "MarvelActivityTable118_3_HeroDetailSubTitle",
            subsectionSubTitle: "",
            subsectionText: "MarvelActivityTable118_3_HeroDetailContent",
            subsectionImage: "img_s21seasonstory_herodetails_1026icon.png",
          },
          {
            subsectionTitle: "MarvelActivityTable118_3_LineInfo_#0_StoryTitle",
            subsectionSubTitle: "",
            subsectionText: "MarvelActivityTable118_3_LineInfo_#0_StoryContext",
            subsectionImage: "img_s21seasonstory_plot_1026icon1.png",
          },
          {
            subsectionTitle: "MarvelActivityTable118_3_LineInfo_#1_StoryTitle",
            subsectionSubTitle: "",
            subsectionText: "MarvelActivityTable118_3_LineInfo_#1_StoryContext",
            subsectionImage: "img_s21seasonstory_plot_1026icon3.png",
          },
          {
            subsectionTitle: "MarvelActivityTable118_3_LineInfo_#2_StoryTitle",
            subsectionSubTitle: "",
            subsectionText: "MarvelActivityTable118_3_LineInfo_#2_StoryContext",
            subsectionImage: "img_s21seasonstory_plot_1026icon2.png",
          },
        ],
      },
      {
        sectionTitle: "MarvelActivityTable118_4_HeroDetailSubTitle",
        subsections: [
          {
            subsectionTitle: "MarvelActivityTable118_4_HeroDetailSubTitle",
            subsectionSubTitle: "",
            subsectionText: "MarvelActivityTable118_4_HeroDetailContent",
            subsectionImage: "img_s21seasonstory_herodetails_1045icon.png",
          },
          {
            subsectionTitle: "MarvelActivityTable118_4_LineInfo_#0_StoryTitle",
            subsectionSubTitle: "",
            subsectionText: "MarvelActivityTable118_4_LineInfo_#0_StoryContext",
            subsectionImage: "img_s21seasonstory_plot_1045icon1.png",
          },
          {
            subsectionTitle: "MarvelActivityTable118_4_LineInfo_#1_StoryTitle",
            subsectionSubTitle: "",
            subsectionText: "MarvelActivityTable118_4_LineInfo_#1_StoryContext",
            subsectionImage: "img_s21seasonstory_plot_1045icon3.png",
          },
          {
            subsectionTitle: "MarvelActivityTable118_4_LineInfo_#2_StoryTitle",
            subsectionSubTitle: "",
            subsectionText: "MarvelActivityTable118_4_LineInfo_#2_StoryContext",
            subsectionImage: "img_s21seasonstory_plot_1045icon2.png",
          },
        ],
      },
    ],
  },
  {
    name: "133_MatchActivity_119_ST.TXT_Activity_Title",
    image: "img_home_activity_s22seasonstory_normal.png",
    sections: [
      {
        sectionTitle: "MarvelActivityTable119_1_HeroDetailSubTitle",
        subsections: [
          {
            subsectionTitle: "MarvelActivityTable119_1_HeroDetailSubTitle",
            subsectionSubTitle: "",
            subsectionText: "MarvelActivityTable119_1_HeroDetailContent",
            subsectionImage: "img_s22seasonstory_herodetails_1034icon.png",
          },
          {
            subsectionTitle: "MarvelActivityTable119_1_LineInfo_#0_StoryTitle",
            subsectionSubTitle: "",
            subsectionText: "MarvelActivityTable119_1_LineInfo_#0_StoryContext",
            subsectionImage: "img_s22seasonstory_plot_1034icon1.png",
          },
          {
            subsectionTitle: "MarvelActivityTable119_1_LineInfo_#1_StoryTitle",
            subsectionSubTitle: "",
            subsectionText: "MarvelActivityTable119_1_LineInfo_#1_StoryContext",
            subsectionImage: "img_s22seasonstory_plot_1034icon2.png",
          },
          {
            subsectionTitle: "MarvelActivityTable119_1_LineInfo_#2_StoryTitle",
            subsectionSubTitle: "",
            subsectionText: "MarvelActivityTable119_1_LineInfo_#2_StoryContext",
            subsectionImage: "img_s22seasonstory_plot_1034icon3.png",
          },
        ],
      },
      {
        sectionTitle:
          "133_MatchActivity_119_ST.MarvelActivityTable119_2_HeroDetailSubTitle",
        subsections: [
          {
            subsectionTitle: "MarvelActivityTable119_2_HeroDetailSubTitle",
            subsectionSubTitle: "",
            subsectionText: "MarvelActivityTable119_2_HeroDetailContent",
            subsectionImage: "img_s22seasonstory_herodetails_1033icon.png",
          },
          {
            subsectionTitle: "MarvelActivityTable119_2_LineInfo_#0_StoryTitle",
            subsectionSubTitle: "",
            subsectionText: "MarvelActivityTable119_2_LineInfo_#0_StoryContext",
            subsectionImage: "img_s22seasonstory_plot_1033icon1.png",
          },
          {
            subsectionTitle: "MarvelActivityTable119_2_LineInfo_#1_StoryTitle",
            subsectionSubTitle: "",
            subsectionText: "MarvelActivityTable119_2_LineInfo_#1_StoryContext",
            subsectionImage: "img_s22seasonstory_plot_1033icon2.png",
          },
          {
            subsectionTitle: "MarvelActivityTable119_2_LineInfo_#2_StoryTitle",
            subsectionSubTitle: "",
            subsectionText: "MarvelActivityTable119_2_LineInfo_#2_StoryContext",
            subsectionImage: "img_s22seasonstory_plot_1033icon3.png",
          },
        ],
      },
      {
        sectionTitle: "MarvelActivityTable119_3_HeroDetailSubTitle",
        subsections: [
          {
            subsectionTitle: "MarvelActivityTable119_3_HeroDetailSubTitle",
            subsectionSubTitle: "",
            subsectionText: "MarvelActivityTable119_3_HeroDetailContent",
            subsectionImage: "img_s22seasonstory_herodetails_1037icon.png",
          },
          {
            subsectionTitle: "MarvelActivityTable119_3_LineInfo_#0_StoryTitle",
            subsectionSubTitle: "",
            subsectionText: "MarvelActivityTable119_3_LineInfo_#0_StoryContext",
            subsectionImage: "img_s22seasonstory_plot_1037icon1.png",
          },
          {
            subsectionTitle: "MarvelActivityTable119_3_LineInfo_#1_StoryTitle",
            subsectionSubTitle: "",
            subsectionText: "MarvelActivityTable119_3_LineInfo_#1_StoryContext",
            subsectionImage: "img_s22seasonstory_plot_1037icon2.png",
          },
          {
            subsectionTitle: "MarvelActivityTable119_3_LineInfo_#2_StoryTitle",
            subsectionSubTitle: "",
            subsectionText: "MarvelActivityTable119_3_LineInfo_#2_StoryContext",
            subsectionImage: "img_s22seasonstory_plot_1037icon3.png",
          },
        ],
      },
      {
        sectionTitle: "MarvelActivityTable119_4_HeroDetailSubTitle",
        subsections: [
          {
            subsectionTitle: "MarvelActivityTable119_4_HeroDetailSubTitle",
            subsectionSubTitle: "",
            subsectionText: "MarvelActivityTable119_4_HeroDetailContent",
            subsectionImage: "img_s22seasonstory_herodetails_1028icon.png",
          },
          {
            subsectionTitle: "MarvelActivityTable119_4_LineInfo_#0_StoryTitle",
            subsectionSubTitle: "",
            subsectionText: "MarvelActivityTable119_4_LineInfo_#0_StoryContext",
            subsectionImage: "img_s22seasonstory_plot_1028icon1.png",
          },
          {
            subsectionTitle: "MarvelActivityTable119_4_LineInfo_#1_StoryTitle",
            subsectionSubTitle: "",
            subsectionText: "MarvelActivityTable119_4_LineInfo_#1_StoryContext",
            subsectionImage: "img_s22seasonstory_plot_1028icon2.png",
          },
          {
            subsectionTitle: "MarvelActivityTable119_4_LineInfo_#2_StoryTitle",
            subsectionSubTitle: "",
            subsectionText: "MarvelActivityTable119_4_LineInfo_#2_StoryContext",
            subsectionImage: "img_s22seasonstory_plot_1028icon3.png",
          },
        ],
      },
    ],
  },
];

const ActivityInfo_Season3: ActivityInfo[] = [
  {
    name: "MarvelActivityTable_129_Name",
    image: "img_home_activity_s31seasonstory_normal.png",
    sections: [
      {
        sectionTitle: "",
        subsections: [
          {
            subsectionTitle: "MarvelActivityTable129_1_StoryNumber",
            subsectionSubTitle: "MarvelActivityTable129_1_Title",
            subsectionText: "MarvelActivityTable129_1_StoryContent",
            subsectionImage:
              "img_s31seasonstory_eventdetails_item1_complete.png",
          },
          {
            subsectionTitle: "MarvelActivityTable129_2_StoryTitle",
            subsectionSubTitle: "MarvelActivityTable129_2_StoryNumber",
            subsectionText: "MarvelActivityTable129_2_StoryContent",
            subsectionImage:
              "img_s31seasonstory_eventdetails_item2_complete.png",
          },
          {
            subsectionTitle: "MarvelActivityTable129_3_Title",
            subsectionSubTitle: "MarvelActivityTable129_3_StoryNumber",
            subsectionText: "MarvelActivityTable129_3_StoryContent",
            subsectionImage:
              "img_s31seasonstory_eventdetails_item3_complete.png",
          },
          {
            subsectionTitle: "MarvelActivityTable129_4_StoryTitle",
            subsectionSubTitle: "MarvelActivityTable129_4_StoryNumber",
            subsectionText: "MarvelActivityTable129_4_StoryContent",
            subsectionImage:
              "img_s31seasonstory_eventdetails_item4_complete.png",
          },
          {
            subsectionTitle: "MarvelActivityTable129_5_Title",
            subsectionSubTitle: "MarvelActivityTable129_5_StoryNumber",
            subsectionText: "MarvelActivityTable129_5_StoryContent",
            subsectionImage:
              "img_s31seasonstory_eventdetails_item5_complete.png",
          },
          {
            subsectionTitle: "MarvelActivityTable129_6_Title",
            subsectionSubTitle: "MarvelActivityTable129_6_StoryNumber",
            subsectionText: "MarvelActivityTable129_6_StoryContent",
            subsectionImage:
              "img_s31seasonstory_eventdetails_item6_complete.png",
          },
          {
            subsectionTitle: "MarvelActivityTable129_7_Title",
            subsectionSubTitle: "MarvelActivityTable129_7_StoryNumber",
            subsectionText: "MarvelActivityTable129_7_StoryContent",
            subsectionImage:
              "img_s31seasonstory_eventdetails_item7_complete.png",
          },
        ],
      },
    ],
  },
];

export {
  ActivityInfo_Season0,
  ActivityInfo_Season1,
  ActivityInfo_Season2,
  ActivityInfo_Season3,
  ActivityInfo_SeasonBETA,
};
