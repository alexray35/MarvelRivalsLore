// Season9_Keywords.tsx
import React from "react";

interface Blank {
  id: string;
  text: string;
}

interface Case {
  id: string;
  blanks: Blank[];
}

interface Season9KeywordsProps {
  caseId: string;
  blankId: string;
}

const cases: Case[] = [
  {
    id: "1",
    blanks: [
      {
        id: "B1",
        text: "MarvelActivityTable202_keyword_14_DisplayText",
      },
      {
        id: "B2",
        text: "MarvelActivityTable202_keyword_15_DisplayText",
      },
      {
        id: "B3",
        text: "MarvelActivityTable202_keyword_16_DisplayText",
      },
      {
        id: "B4",
        text: "MarvelActivityTable202_keyword_17_DisplayText",
      },
      {
        id: "B5",
        text: "MarvelActivityTable202_keyword_4_DisplayText",
      },
      {
        id: "B6",
        text: "MarvelActivityTable202_keyword_3_DisplayText",
      },
      {
        id: "B7",
        text: "MarvelActivityTable202_keyword_12_DisplayText",
      },
      {
        id: "B8",
        text: "MarvelActivityTable202_keyword_10_DisplayText",
      },
      {
        id: "B9",
        text: "MarvelActivityTable202_keyword_9_DisplayText",
      },
      {
        id: "B10",
        text: "MarvelActivityTable202_keyword_24_DisplayText",
      },
      {
        id: "B11",
        text: "MarvelActivityTable202_keyword_24_DisplayText",
      },
      {
        id: "B12",
        text: "MarvelActivityTable202_keyword_11_DisplayText",
      },
    ],
  },
  {
    id: "2",
    blanks: [
      {
        id: "A1",
        text: "MarvelActivityTable202_keyword_30_DisplayText",
      },
      {
        id: "A2",
        text: "MarvelActivityTable202_keyword_36_DisplayText",
      },
      {
        id: "A3",
        text: "MarvelActivityTable202_keyword_25_DisplayText",
      },
      {
        id: "A4",
        text: "MarvelActivityTable202_keyword_24_DisplayText",
      },
      {
        id: "A5",
        text: "MarvelActivityTable202_keyword_21_DisplayText",
      },
      {
        id: "A6",
        text: "MarvelActivityTable202_keyword_22_DisplayText",
      },
      {
        id: "A7",
        text: "MarvelActivityTable202_keyword_28_DisplayText",
      },
      {
        id: "A8",
        text: "MarvelActivityTable202_keyword_32_DisplayText",
      },
      {
        id: "A9",
        text: "MarvelActivityTable202_keyword_23_DisplayText",
      },
      {
        id: "A10",
        text: "MarvelActivityTable202_keyword_29_DisplayText",
      },
    ],
  },
];

// Export the helper function to get keyword text
export const getKeywordText = (caseId: string, blankId: string): string => {
  const foundCase = cases.find((c) => c.id === caseId);
  if (!foundCase) return `[Case ${caseId} Blank ${blankId}]`;

  const foundBlank = foundCase.blanks.find((b) => b.id === blankId);
  if (!foundBlank) return `[Case ${caseId} Blank ${blankId}]`;

  return foundBlank.text;
};

// React component version for other uses
const Season9_Keywords: React.FC<Season9KeywordsProps> = ({
  caseId,
  blankId,
}) => {
  return getKeywordText(caseId, blankId);
};

export default Season9_Keywords;
