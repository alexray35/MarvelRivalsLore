import React from "react";
import gameDataSources from "./0manual/GameData";
import { getNestedValue } from "./getNestedValue";

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
      /(<Slide>.*?<\/>|<GalleryStory>.*?<\/>|<Bold>.*?<\/>)/g
    );
    return parts.map((part, index) => {
      if (part.startsWith("<Slide>") && part.endsWith("</>")) {
        const content = part.slice(7, -3); // Remove <Slide> and </>
        return <i key={index}>{content}</i>;
      }
      if (part.startsWith("<GalleryStory>") && part.endsWith("</>")) {
        const content = part.slice(14, -3); // Remove <GalleryStory> and </>
        return <i key={index}>{content}</i>;
      }
      if (part.startsWith("<Bold>") && part.endsWith("</>")) {
        const content = part.slice(6, -3); // Remove <Bold> and </>
        return <strong key={index}>{content}</strong>;
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
