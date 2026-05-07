// GalleryImages.tsx
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { seasonImageGroups } from "./ImageList";

interface YearData {
  year: string;
  hasImages: boolean;
  seasons: SeasonImageGroup[];
}

interface SeasonImageGroup {
  seasonId: string;
  seasonName: string;
  seasonAltName: string;
  seasonYear: string;
  images: Array<{
    title: string;
    path: string;
  }>;
  sortPriority?: number;
}

const GalleryImages: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeYear, setActiveYear] = useState<string | null>(null);
  const [activeSeasonId, setActiveSeasonId] = useState<string | null>(null);
  const [availableYears, setAvailableYears] = useState<YearData[]>([]);
  const [currentSeasonGroup, setCurrentSeasonGroup] =
    useState<SeasonImageGroup | null>(null);

  // Parse URL parameters on mount and when URL changes
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const yearParam = params.get("year");
    const seasonParam = params.get("season");

    if (yearParam) {
      setActiveYear(yearParam);
    }
    if (seasonParam) {
      setActiveSeasonId(seasonParam);
    }
  }, [location.search]);

  // Update URL when year or season changes
  const updateUrl = (year: string, seasonId?: string) => {
    const params = new URLSearchParams();
    params.set("year", year);
    if (seasonId) {
      params.set("season", seasonId);
    }
    navigate(`${location.pathname}?${params.toString()}`, { replace: true });
  };

  // Process available years and their seasons from season groups
  useEffect(() => {
    try {
      // Group seasons by year, preserving the original order from seasonImageGroups
      const yearMap = new Map<string, YearData>();

      // Use the already-sorted seasonImageGroups array (which already has the special order applied)
      seasonImageGroups.forEach((group) => {
        const year = group.seasonYear;
        if (year) {
          const yearData = yearMap.get(year) || {
            year: year,
            hasImages: false,
            seasons: [],
          };
          yearData.seasons.push(group);
          yearData.hasImages = yearData.hasImages || group.images.length > 0;
          yearMap.set(year, yearData);
        }
      });

      // Convert to array and sort by year (descending)
      const years = Array.from(yearMap.values()).sort(
        (a, b) => parseInt(b.year) - parseInt(a.year)
      );

      // Sort seasons within each year using the same order logic as ImageList
      years.forEach((yearData) => {
        yearData.seasons.sort((a, b) => {
          const aId = parseInt(a.seasonId);
          const bId = parseInt(b.seasonId);

          // If both have sort priorities, use them
          if (a.sortPriority !== undefined && b.sortPriority !== undefined) {
            return a.sortPriority - b.sortPriority;
          }

          // If only a has sort priority, compare with b's ID
          if (a.sortPriority !== undefined) {
            return a.sortPriority - bId;
          }

          // If only b has sort priority, compare a's ID with b's priority
          if (b.sortPriority !== undefined) {
            return aId - b.sortPriority;
          }

          // Both are normal seasons, sort by ID
          return aId - bId;
        });
      });

      setAvailableYears(years);

      // Set initial active year and season from URL or defaults
      if (years.length > 0 && !activeYear) {
        const params = new URLSearchParams(location.search);
        const yearParam = params.get("year");
        const seasonParam = params.get("season");

        // Check if the year from URL exists and has images
        if (yearParam && years.some((y) => y.year === yearParam)) {
          const yearData = years.find((y) => y.year === yearParam);
          if (yearData && yearData.hasImages) {
            setActiveYear(yearParam);

            // If season is specified in URL, try to use it
            if (
              seasonParam &&
              yearData.seasons.some((s) => s.seasonId === seasonParam)
            ) {
              setActiveSeasonId(seasonParam);
            } else if (yearData.seasons.length > 0) {
              // Default to LAST season with images in this year (will become leftmost tab when reversed)
              const seasonsWithImages = yearData.seasons.filter(
                (s) => s.images.length > 0
              );
              const defaultSeason =
                seasonsWithImages.length > 0
                  ? seasonsWithImages[seasonsWithImages.length - 1] // Get the last one
                  : yearData.seasons[yearData.seasons.length - 1]; // Get the last season if none have images

              if (defaultSeason) {
                setActiveSeasonId(defaultSeason.seasonId);
                updateUrl(yearParam, defaultSeason.seasonId);
              }
            }
          } else {
            // If year exists but has no images, fall back to default
            const defaultYear = years.find((y) => y.hasImages);
            if (defaultYear) {
              setActiveYear(defaultYear.year);
              const seasonsWithImages = defaultYear.seasons.filter(
                (s) => s.images.length > 0
              );
              const defaultSeason =
                seasonsWithImages.length > 0
                  ? seasonsWithImages[seasonsWithImages.length - 1]
                  : defaultYear.seasons[defaultYear.seasons.length - 1];
              if (defaultSeason) {
                setActiveSeasonId(defaultSeason.seasonId);
                updateUrl(defaultYear.year, defaultSeason.seasonId);
              }
            }
          }
        } else {
          // No year in URL, use default (first year with images)
          const defaultYear = years.find((y) => y.hasImages);
          if (defaultYear) {
            setActiveYear(defaultYear.year);
            const seasonsWithImages = defaultYear.seasons.filter(
              (s) => s.images.length > 0
            );
            const defaultSeason =
              seasonsWithImages.length > 0
                ? seasonsWithImages[seasonsWithImages.length - 1]
                : defaultYear.seasons[defaultYear.seasons.length - 1];
            if (defaultSeason) {
              setActiveSeasonId(defaultSeason.seasonId);
              updateUrl(defaultYear.year, defaultSeason.seasonId);
            }
          } else if (years.length > 0) {
            setActiveYear(years[0].year);
            if (years[0].seasons.length > 0) {
              setActiveSeasonId(
                years[0].seasons[years[0].seasons.length - 1].seasonId
              );
              updateUrl(
                years[0].year,
                years[0].seasons[years[0].seasons.length - 1].seasonId
              );
            }
          }
        }
      }
    } catch (err) {
      console.error("Error processing year data:", err);
    }
  }, []); // Run once on mount

  // Update current season group when active year or active season changes
  useEffect(() => {
    if (!activeYear || !activeSeasonId) {
      setCurrentSeasonGroup(null);
      return;
    }

    try {
      const yearData = availableYears.find((y) => y.year === activeYear);
      if (yearData) {
        const seasonGroup = yearData.seasons.find(
          (s) => s.seasonId === activeSeasonId
        );
        setCurrentSeasonGroup(seasonGroup || null);
      } else {
        setCurrentSeasonGroup(null);
      }
    } catch (err) {
      console.error("Error finding season group:", err);
      setCurrentSeasonGroup(null);
    }
  }, [activeYear, activeSeasonId, availableYears]);

  // Handle year selection
  const handleYearSelect = (year: string) => {
    const yearData = availableYears.find((y) => y.year === year);
    if (!yearData || !yearData.hasImages) return;

    setActiveYear(year);

    // When year changes, select the LAST season with images in that year (will become leftmost tab when reversed)
    const seasonsWithImages = yearData.seasons.filter(
      (s) => s.images.length > 0
    );
    const defaultSeason =
      seasonsWithImages.length > 0
        ? seasonsWithImages[seasonsWithImages.length - 1]
        : yearData.seasons[yearData.seasons.length - 1];

    if (defaultSeason) {
      setActiveSeasonId(defaultSeason.seasonId);
      updateUrl(year, defaultSeason.seasonId);
    } else {
      updateUrl(year);
    }
  };

  // Handle season selection
  const handleSeasonSelect = (seasonId: string) => {
    if (!activeYear) return;

    const yearData = availableYears.find((y) => y.year === activeYear);
    if (yearData) {
      const seasonGroup = yearData.seasons.find((s) => s.seasonId === seasonId);
      if (seasonGroup && seasonGroup.images.length > 0) {
        setActiveSeasonId(seasonId);
        updateUrl(activeYear, seasonId);
      }
    }
  };

  // Render image item with title above
  const renderImage = (
    imageItem: { title: string; path: string },
    index: number
  ) => {
    // Construct image path - adjust this based on your image serving strategy
    const imagePath = `textures/season_images/${imageItem.path}`; // Modify this path as needed

    return (
      <div
        key={`${imageItem.path}-${imageItem.title}-${index}`}
        className="image-item"
      >
        {imageItem.title && <p className="video-caption">{imageItem.title}</p>}
        <div className="video-container">
          <img
            src={imagePath}
            alt={imageItem.title}
            className="gallery-image"
            loading="lazy"
          />
        </div>
      </div>
    );
  };

  // Get display name for season
  const getSeasonDisplayName = (seasonGroup: SeasonImageGroup): string => {
    const seasonNumber = parseInt(seasonGroup.seasonId);

    const seasonName = seasonGroup.seasonAltName || seasonGroup.seasonName;

    if (!isNaN(seasonNumber) && seasonNumber > 0) {
      return `Season ${seasonGroup.seasonId}: ${seasonName}`;
    } else if (seasonNumber === 0) {
      return seasonName;
    } else {
      return seasonName;
    }
  };

  // Get current year's seasons for the season tabs (preserving the order, but reversed)
  const getCurrentYearSeasons = (): SeasonImageGroup[] => {
    const yearData = availableYears.find((y) => y.year === activeYear);
    if (!yearData) return [];

    // Return seasons in reverse order
    return [...yearData.seasons].reverse();
  };

  return (
    <div className="gallery-cinematic">
      {/* Year tab selector */}
      {availableYears.length > 0 && (
        <div className="tab-selector-container year-tab">
          {availableYears.map((yearData) => (
            <span
              key={yearData.year}
              className={`tab-selector year-selector ${
                activeYear === yearData.year ? "active" : ""
              } ${!yearData.hasImages ? "disabled" : ""}`}
              onClick={() => handleYearSelect(yearData.year)}
            >
              {yearData.year}
            </span>
          ))}
        </div>
      )}

      {/* Season tab selector - appears under the year selector when a year is selected */}
      {activeYear && getCurrentYearSeasons().length > 0 && (
        <div className="tab-selector-container season-tab">
          {getCurrentYearSeasons().map((season) => {
            const hasImages = season.images.length > 0;
            const seasonNumber = parseInt(season.seasonId);

            // Determine display name for the tab
            let displayName = "";
            if (!isNaN(seasonNumber) && seasonNumber > 0) {
              displayName = `Season ${season.seasonId}`;
            } else if (seasonNumber === -999) {
              // Special case for events/compilations
              displayName = season.seasonAltName || season.seasonName;
            } else {
              displayName = season.seasonAltName || season.seasonName;
            }

            return (
              <span
                key={season.seasonId}
                className={`tab-selector season-selector ${
                  activeSeasonId === season.seasonId ? "active" : ""
                } ${!hasImages ? "disabled" : ""}`}
                onClick={() => hasImages && handleSeasonSelect(season.seasonId)}
              >
                {displayName}
              </span>
            );
          })}
        </div>
      )}

      {/* Images content */}
      {!currentSeasonGroup || currentSeasonGroup.images.length === 0 ? (
        <div className="no-images-message">
          {activeYear && activeSeasonId
            ? `No images found for ${activeYear} ${
                currentSeasonGroup
                  ? getSeasonDisplayName(currentSeasonGroup)
                  : ""
              }`
            : activeYear
            ? `No images found for ${activeYear}`
            : "Loading images..."}
        </div>
      ) : (
        <div>
          <h1 className="subpagetitle">
            {getSeasonDisplayName(currentSeasonGroup)}
          </h1>
          <div className="image-gallery-container">
            {currentSeasonGroup.images.map((image, index) =>
              renderImage(image, index)
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryImages;
