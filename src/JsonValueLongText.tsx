import React from "react";
import gameDataSources from "./GameData";
import { getNestedValue } from "./getNestedValue";

interface JsonValueProps {
  path: string;
  gameData?: object; // Optional override
}

const JsonValueLongText: React.FC<JsonValueProps> = ({
  path,
  gameData = gameDataSources.default,
}) => {
  const value = getNestedValue(gameData, path);

  if (value === undefined) {
    return <span>{"Not found value at " + path}</span>;
  }

  // Convert string to array split by newlines, then replace single newlines with double newlines
  const lines = String(value).split("\n");

  // Function to process text and replace <Slide>...</> with italic text
  const processText = (text: string) => {
    const parts = text.split(/(<Slide>.*?<\/>)/g);
    return parts.map((part, index) => {
      if (part.startsWith("<Slide>") && part.endsWith("</>")) {
        const content = part.slice(7, -3); // Remove <Slide> and </>
        return <i key={index}>{content}</i>;
      }
      return <React.Fragment key={index}>{part}</React.Fragment>;
    });
  };

  return (
    <span className="long-text">
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

export default JsonValueLongText;
