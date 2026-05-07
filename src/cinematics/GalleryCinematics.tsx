// GalleryCinematics.tsx
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { seasonGroups } from "./CinematicList";

interface YearData {
  year: string;
  hasCinematics: boolean;
  seasons: SeasonGroup[];
}

interface SeasonGroup {
  seasonId: string;
  seasonName: string;
  seasonAltName: string;
  seasonYear: string;
  cinematics: Array<{
    name: string;
    url: string;
    type?: string;
  }>;
  sortPriority?: number;
}

const GalleryCinematic: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeYear, setActiveYear] = useState<string | null>(null);
  const [activeSeasonId, setActiveSeasonId] = useState<string | null>(null);
  const [availableYears, setAvailableYears] = useState<YearData[]>([]);
  const [currentSeasonGroup, setCurrentSeasonGroup] =
    useState<SeasonGroup | null>(null);

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
      // Group seasons by year, preserving the original order from seasonGroups
      const yearMap = new Map<string, YearData>();

      // Use the already-sorted seasonGroups array (which already has the special order applied)
      seasonGroups.forEach((group) => {
        const year = group.seasonYear;
        if (year) {
          const yearData = yearMap.get(year) || {
            year: year,
            hasCinematics: false,
            seasons: [],
          };
          yearData.seasons.push(group);
          yearData.hasCinematics =
            yearData.hasCinematics || group.cinematics.length > 0;
          yearMap.set(year, yearData);
        }
      });

      // Convert to array and sort by year (descending)
      const years = Array.from(yearMap.values()).sort(
        (a, b) => parseInt(b.year) - parseInt(a.year)
      );

      // Sort seasons within each year using the same order logic as CinematicList
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

        // Check if the year from URL exists and has cinematics
        if (yearParam && years.some((y) => y.year === yearParam)) {
          const yearData = years.find((y) => y.year === yearParam);
          if (yearData && yearData.hasCinematics) {
            setActiveYear(yearParam);

            // If season is specified in URL, try to use it
            if (
              seasonParam &&
              yearData.seasons.some((s) => s.seasonId === seasonParam)
            ) {
              setActiveSeasonId(seasonParam);
            } else if (yearData.seasons.length > 0) {
              // Default to LAST season with cinematics in this year (will become leftmost tab when reversed)
              const seasonsWithCinematics = yearData.seasons.filter(
                (s) => s.cinematics.length > 0
              );
              const defaultSeason =
                seasonsWithCinematics.length > 0
                  ? seasonsWithCinematics[seasonsWithCinematics.length - 1] // Get the last one
                  : yearData.seasons[yearData.seasons.length - 1]; // Get the last season if none have cinematics

              if (defaultSeason) {
                setActiveSeasonId(defaultSeason.seasonId);
                updateUrl(yearParam, defaultSeason.seasonId);
              }
            }
          } else {
            // If year exists but has no cinematics, fall back to default
            const defaultYear = years.find((y) => y.hasCinematics);
            if (defaultYear) {
              setActiveYear(defaultYear.year);
              const seasonsWithCinematics = defaultYear.seasons.filter(
                (s) => s.cinematics.length > 0
              );
              const defaultSeason =
                seasonsWithCinematics.length > 0
                  ? seasonsWithCinematics[seasonsWithCinematics.length - 1]
                  : defaultYear.seasons[defaultYear.seasons.length - 1];
              if (defaultSeason) {
                setActiveSeasonId(defaultSeason.seasonId);
                updateUrl(defaultYear.year, defaultSeason.seasonId);
              }
            }
          }
        } else {
          // No year in URL, use default (first year with cinematics)
          const defaultYear = years.find((y) => y.hasCinematics);
          if (defaultYear) {
            setActiveYear(defaultYear.year);
            const seasonsWithCinematics = defaultYear.seasons.filter(
              (s) => s.cinematics.length > 0
            );
            const defaultSeason =
              seasonsWithCinematics.length > 0
                ? seasonsWithCinematics[seasonsWithCinematics.length - 1]
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
    if (!yearData || !yearData.hasCinematics) return;

    setActiveYear(year);

    // When year changes, select the LAST season with cinematics in that year (will become leftmost tab when reversed)
    const seasonsWithCinematics = yearData.seasons.filter(
      (s) => s.cinematics.length > 0
    );
    const defaultSeason =
      seasonsWithCinematics.length > 0
        ? seasonsWithCinematics[seasonsWithCinematics.length - 1]
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
      if (seasonGroup && seasonGroup.cinematics.length > 0) {
        setActiveSeasonId(seasonId);
        updateUrl(activeYear, seasonId);
      }
    }
  };

  // Extract YouTube video ID from URL
  const extractYouTubeId = (url: string): string | null => {
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
      /youtube\.com\/watch\?v=([^&\n?#]+)/,
      /youtu\.be\/([^&\n?#]+)/,
      /youtube\.com\/embed\/([^&\n?#]+)/,
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match && match[1]) {
        return match[1];
      }
    }

    if (url.length === 11) {
      return url;
    }

    return null;
  };

  // Render YouTube video item with title on top
  const renderYouTubeVideo = (videoItem: {
    name: string;
    url: string;
    type?: string;
  }) => {
    const videoId = extractYouTubeId(videoItem.url);

    if (!videoId) {
      console.warn(`Invalid YouTube URL or ID: ${videoItem.url}`);
      return null;
    }

    const embedUrl = `https://www.youtube.com/embed/${videoId}`;

    return (
      <div
        key={`${videoItem.url}-${videoItem.name}`}
        className="video-item youtube-video"
      >
        {videoItem.name && <p className="video-caption">{videoItem.name}</p>}
        <div className="youtube-embed-container">
          <iframe
            src={embedUrl}
            title={videoItem.name}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="youtube-iframe"
          ></iframe>
        </div>
      </div>
    );
  };

  // Get display name for season
  const getSeasonDisplayName = (seasonGroup: SeasonGroup): string => {
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
  const getCurrentYearSeasons = (): SeasonGroup[] => {
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
              } ${!yearData.hasCinematics ? "disabled" : ""}`}
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
            const hasCinematics = season.cinematics.length > 0;
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
                } ${!hasCinematics ? "disabled" : ""}`}
                onClick={() =>
                  hasCinematics && handleSeasonSelect(season.seasonId)
                }
              >
                {displayName}
              </span>
            );
          })}
        </div>
      )}

      {/* Cinematics content */}
      {!currentSeasonGroup || currentSeasonGroup.cinematics.length === 0 ? (
        <div className="no-cinematics-message">
          {activeYear && activeSeasonId
            ? `No cinematics found for ${activeYear} ${
                currentSeasonGroup
                  ? getSeasonDisplayName(currentSeasonGroup)
                  : ""
              }`
            : activeYear
            ? `No cinematics found for ${activeYear}`
            : "Loading cinematics..."}
        </div>
      ) : (
        <div>
          <h1 className="subpagetitle">
            {getSeasonDisplayName(currentSeasonGroup)}
          </h1>
          <div className="video-gallery-container cinematics-gallery-container">
            {currentSeasonGroup.cinematics.map((cinematic) =>
              renderYouTubeVideo(cinematic)
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryCinematic;
