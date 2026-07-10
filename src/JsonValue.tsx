import React from "react";
import gameDataSources from "./0manual/GameData";
import { getNestedValue } from "./getNestedValue";
import { getKeywordText } from "./Season9_Keywords";

interface JsonValueProps {
  path: string;
  gameData?: object; // Optional override
}

const JsonValue: React.FC<JsonValueProps> = ({
  path,
  gameData = gameDataSources.default,
}) => {
  const value = getNestedValue(gameData, path);

  if (value === undefined) {
    return <span>{"Not found value at " + path + " in " + gameData}</span>;
  }

  // Convert string to array split by newlines, then replace single newlines with double newlines
  const lines = String(value).split("\n");

  // Function to process text and replace tags with formatted text
  const processText = (text: string) => {
    const parts = text.split(
      /(<Slide>.*?<\/>|<GalleryStory>.*?<\/>|<Bold>.*?<\/>|<Yellow>.*?<\/>|<Red>.*?<\/>|<customwidget[^>]*>.*?<\/>)/g
    );
    return parts.map((part, index) => {
      // Handle existing tags
      if (part.startsWith("<Slide>") && part.endsWith("</>")) {
        const content = part.slice(7, -3); // Remove <Slide> and </>/
        return <i key={index}>{content}</i>;
      }
      if (part.startsWith("<GalleryStory>") && part.endsWith("</>")) {
        const content = part.slice(14, -3); // Remove <GalleryStory> and </>/
        return <i key={index}>{content}</i>;
      }
      if (part.startsWith("<Bold>") && part.endsWith("</>")) {
        const content = part.slice(6, -3); // Remove <Bold> and </>/
        return <strong key={index}>{content}</strong>;
      }
      if (part.startsWith("<Yellow>") && part.endsWith("</>")) {
        const content = part.slice(8, -3); // Remove <Yellow> and </>/
        return (
          <span key={index} style={{ color: "yellow" }}>
            {content}
          </span>
        );
      }
      if (part.startsWith("<Red>") && part.endsWith("</>")) {
        const content = part.slice(5, -3); // Remove <Red> and </>/
        return (
          <span key={index} style={{ color: "red" }}>
            {content}
          </span>
        );
      }

      // Handle custom widget tag
      if (part.startsWith("<customwidget") && part.endsWith("</>")) {
        // Extract case_id and blank_id using regex
        const caseIdMatch = part.match(/case_id="([^"]*)"/);
        const blankIdMatch = part.match(/blank_id="([^"]*)"/);

        const caseId = caseIdMatch ? caseIdMatch[1] : "";
        const blankId = blankIdMatch ? blankIdMatch[1] : "";

        // Get the keyword path as a string using the helper function
        const keywordPath = getKeywordText(caseId, blankId);

        // Now use it as a path to get the actual value from gameData
        const finalString = getNestedValue(gameData, keywordPath);

        // If the value is undefined, show a fallback
        if (finalString === undefined) {
          return (
            <span key={index} style={{ color: "yellow" }}>
              {keywordPath}
            </span>
          );
        }

        // Display the keyword text in yellow
        return (
          <span key={index} style={{ color: "yellow" }}>
            {finalString}
          </span>
        );
      }

      return <React.Fragment key={index}>{part}</React.Fragment>;
    });
  };

  return (
    <span>
      {lines.map((line, index) => (
        <React.Fragment key={index}>
          {processText(line)}
          {index !== lines.length - 1 && (
            <>
              <br />
            </>
          )}
        </React.Fragment>
      ))}
    </span>
  );
};

export default JsonValue;
