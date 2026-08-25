import React, { useState, useEffect, useMemo } from "react";
import { StoryInfo } from "./StoryList";
import JsonValue from "../JsonValue";
import gameDataSources from "../0manual/GameData";
import { HeroFullInfoList } from "../0manual/HeroFullList";

interface GalleryStoryProps {
  onStorySelect?: (linkID: string) => void;
  heroFilter?: string;
  togglesON?: boolean;
  showOnlyHighlighted?: boolean;
  showingAllStories?: boolean;
}

type SortOption = "hero" | "season";

// Constants for localStorage keys
const STORAGE_KEYS = {
  SORT_BY: "gallery_sort_by",
  SHOW_ALL_STORIES: "gallery_show_all_stories",
  SHOW_DIVIDERS: "gallery_show_dividers",
};

const GalleryStory: React.FC<GalleryStoryProps> = ({
  onStorySelect,
  heroFilter,
  togglesON = true,
  showOnlyHighlighted = false,
  showingAllStories = false,
}) => {
  const [currentImages, setImageNames] = useState<string[]>([]);
  const [currentTitles, setStoryTitles] = useState<string[]>([]);
  const [currentContents, setStoryContents] = useState<string[]>([]);
  const [currentHeroes, setStoryHeroes] = useState<string[]>([]);
  const [currentHighlights, setStoryHighlights] = useState<string[]>([]);
  const [currentLinkIDs, setStoryLinkIDs] = useState<string[]>([]);
  const [currentSeasons, setStorySeasons] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Load state from localStorage or use defaults
  const [showAllStories, setShowAllStories] = useState<boolean>(() => {
    // If togglesON is false, use the default (showingAllStories)
    if (!togglesON) return showingAllStories;
    const saved = localStorage.getItem(STORAGE_KEYS.SHOW_ALL_STORIES);
    return saved !== null ? JSON.parse(saved) : showingAllStories;
  });

  const [sortBy, setSortBy] = useState<SortOption>(() => {
    // If togglesON is false, use default "hero"
    if (!togglesON) return "hero";
    const saved = localStorage.getItem(STORAGE_KEYS.SORT_BY);
    return (saved as SortOption) || "hero";
  });

  const [showDividers, setShowDividers] = useState<boolean>(() => {
    // If togglesON is false, use default false
    if (!togglesON) return false;
    const saved = localStorage.getItem(STORAGE_KEYS.SHOW_DIVIDERS);
    return saved !== null ? JSON.parse(saved) : false;
  });

  // Save state changes to localStorage (only when togglesON is true)
  useEffect(() => {
    if (togglesON) {
      localStorage.setItem(
        STORAGE_KEYS.SHOW_ALL_STORIES,
        JSON.stringify(showAllStories)
      );
    }
  }, [showAllStories, togglesON]);

  useEffect(() => {
    if (togglesON) {
      localStorage.setItem(STORAGE_KEYS.SORT_BY, sortBy);
    }
  }, [sortBy, togglesON]);

  useEffect(() => {
    if (togglesON) {
      localStorage.setItem(
        STORAGE_KEYS.SHOW_DIVIDERS,
        JSON.stringify(showDividers)
      );
    }
  }, [showDividers, togglesON]);

  // Reset to defaults when togglesON changes from true to false
  useEffect(() => {
    if (!togglesON) {
      setShowAllStories(showingAllStories);
      setSortBy("hero");
      setShowDividers(false);
    }
  }, [togglesON, showingAllStories]);

  // Create a map of hero linkID to displayName
  const heroDisplayNames = useMemo(() => {
    const names: { [key: string]: string } = {};
    HeroFullInfoList.forEach((hero) => {
      if (hero.linkID) {
        names[hero.linkID] = hero.displayName || hero.linkID;
      }
    });
    return names;
  }, []);

  useEffect(() => {
    try {
      const activeStoryInfo = StoryInfo;

      if (activeStoryInfo.length === 0) {
        throw new Error("No story data found in StoryList");
      }

      const titles = activeStoryInfo.map((info) => info.titlePath);
      const images = activeStoryInfo.map((info) => info.imageName);
      const contents = activeStoryInfo.map((info) => info.contentPath);
      const heroes = activeStoryInfo.map((info) => info.hero);
      const highlights = activeStoryInfo.map((info) => info.highlight);
      const linkIDs = activeStoryInfo.map((info) => info.linkID);
      const seasons = activeStoryInfo.map((info) => info.season);

      setImageNames(images);
      setStoryTitles(titles);
      setStoryContents(contents);
      setStoryHeroes(heroes);
      setStoryHighlights(highlights);
      setStoryLinkIDs(linkIDs);
      setStorySeasons(seasons);
      setIsLoading(false);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to load story data"
      );
      setIsLoading(false);
    }
  }, []);

  // Get season order for sorting
  const getSeasonOrder = (season: string, hasContent: boolean): number => {
    if (season === "BETA") return -1;
    if (season === "" || !season) {
      // If it has content but no season, it's a "Placeholder"
      // Placeholders come after numbered seasons but before "Unreleased"
      return hasContent ? 998 : 999; // Unreleased
    }
    const num = parseInt(season);
    return isNaN(num) ? 999 : num;
  };

  // Filter and sort stories
  const processedStories = useMemo(() => {
    // First, create array of story data with their indices
    let stories = currentContents.map((content, index) => ({
      index,
      content,
      hero: currentHeroes[index],
      highlight: currentHighlights[index],
      linkID: currentLinkIDs[index],
      season: currentSeasons[index],
      title: currentTitles[index],
      image: currentImages[index],
      hasContent: content?.trim() !== "",
    }));

    // Apply filters
    stories = stories
      .filter(({ hero }) => !heroFilter || hero === heroFilter)
      .filter(
        ({ highlight }) => !showOnlyHighlighted || highlight?.trim() !== ""
      )
      .filter(({ content }) => showAllStories || content?.trim() !== "");

    // Apply sorting
    if (sortBy === "hero") {
      stories.sort((a, b) => {
        const nameA = heroDisplayNames[a.hero] || a.hero;
        const nameB = heroDisplayNames[b.hero] || b.hero;
        return nameA.localeCompare(nameB);
      });
    } else if (sortBy === "season") {
      stories.sort((a, b) => {
        const orderA = getSeasonOrder(a.season, a.hasContent);
        const orderB = getSeasonOrder(b.season, b.hasContent);
        if (orderA !== orderB) return orderA - orderB;
        // If same season, sort by hero
        const nameA = heroDisplayNames[a.hero] || a.hero;
        const nameB = heroDisplayNames[b.hero] || b.hero;
        return nameA.localeCompare(nameB);
      });
    }

    return stories;
  }, [
    currentContents,
    currentHeroes,
    currentHighlights,
    currentLinkIDs,
    currentSeasons,
    currentTitles,
    currentImages,
    heroFilter,
    showOnlyHighlighted,
    showAllStories,
    sortBy,
    heroDisplayNames,
  ]);

  // Group stories for dividers
  const groupedStories = useMemo(() => {
    if (!showDividers) {
      return [{ groupName: "", stories: processedStories }];
    }

    const groups: { [key: string]: typeof processedStories } = {};

    processedStories.forEach((story) => {
      let groupKey: string;
      if (sortBy === "hero") {
        groupKey = heroDisplayNames[story.hero] || story.hero;
      } else {
        // Season sorting
        if (story.season === "" || !story.season) {
          // Check if it has content to determine if it's Placeholder or Unreleased
          groupKey = story.hasContent ? "Placeholder" : "Unreleased";
        } else {
          groupKey = story.season;
        }
      }
      if (!groups[groupKey]) {
        groups[groupKey] = [];
      }
      groups[groupKey].push(story);
    });

    // Sort groups
    const sortedGroupKeys = Object.keys(groups).sort((a, b) => {
      if (sortBy === "hero") {
        return a.localeCompare(b);
      } else {
        const getOrder = (key: string) => {
          if (key === "BETA") return -1;
          if (key === "Placeholder") return 998;
          if (key === "Unreleased") return 999;
          const num = parseInt(key);
          return isNaN(num) ? 999 : num;
        };
        return getOrder(a) - getOrder(b);
      }
    });

    return sortedGroupKeys.map((key) => ({
      groupName: key,
      stories: groups[key],
    }));
  }, [processedStories, showDividers, sortBy, heroDisplayNames]);

  if (isLoading) {
    return <div>Loading gallery...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (currentTitles.length === 0) {
    return <div>No story images found.</div>;
  }

  return (
    <div className="gallery-container">
      <div className="gallery-story">
        {togglesON && (
          <div className="gallery-controls">
            {!heroFilter && (
              <>
                <div className="gallery-toggle">
                  <label>
                    <span style={{ marginRight: "10px" }}>Sort by:</span>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value as SortOption)}
                    >
                      <option value="hero">Hero</option>
                      <option value="season">Season</option>
                    </select>
                  </label>
                </div>
                <div className="gallery-toggle">
                  <label>
                    <span style={{ marginRight: "10px" }}>
                      Show all stories
                    </span>
                    <span className="toggle-switch">
                      <input
                        type="checkbox"
                        checked={showAllStories}
                        onChange={() => setShowAllStories(!showAllStories)}
                      />
                      <span className="toggle-slider"></span>
                    </span>
                  </label>
                </div>
                <div className="gallery-toggle">
                  <label>
                    <span style={{ marginRight: "10px" }}>Show dividers</span>
                    <span className="toggle-switch">
                      <input
                        type="checkbox"
                        checked={showDividers}
                        onChange={() => setShowDividers(!showDividers)}
                      />
                      <span className="toggle-slider"></span>
                    </span>
                  </label>
                </div>
              </>
            )}
          </div>
        )}

        {groupedStories.map((group, groupIndex) => (
          <React.Fragment key={groupIndex}>
            {showDividers && group.groupName && (
              <div className="story-divider">
                <h1 className="subpagetitle">
                  {sortBy === "hero"
                    ? group.groupName
                    : group.groupName === "BETA"
                    ? "BETA"
                    : group.groupName === "Placeholder"
                    ? "Placeholder"
                    : group.groupName === "Unreleased"
                    ? "Unreleased"
                    : `Season ${group.groupName}`}
                </h1>
              </div>
            )}
            <div className="gallery-grid">
              {group.stories.map((story) => {
                const hasContent = story.content?.trim() !== "";
                const isHighlighted = story.highlight?.trim() !== "";

                return (
                  <div
                    key={story.index}
                    className={`gallery-item ${
                      isHighlighted ? "highlighted-item" : ""
                    }`}
                    onClick={() => hasContent && onStorySelect?.(story.linkID)}
                    style={{ cursor: hasContent ? "pointer" : "default" }}
                  >
                    <img
                      className={`storyimage ${
                        hasContent ? "hascontent" : "nocontent"
                      } ${isHighlighted ? "highlighted-image" : ""}`}
                      src={`/textures/stories/${story.image}`}
                      alt={story.image}
                      loading="lazy"
                    />
                    <div
                      className="image-caption"
                      style={{
                        color: hasContent ? "#ffffff" : "#ffffff60",
                      }}
                    >
                      <JsonValue
                        path={story.title}
                        gameData={gameDataSources.default}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default GalleryStory;
