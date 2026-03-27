// GalleryCinematics.tsx
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { seasonGroups } from "./CinematicList";

interface YearData {
  year: string;
  hasCinematics: boolean;
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
}

const GalleryCinematic: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeYear, setActiveYear] = useState<string | null>(null);
  const [availableYears, setAvailableYears] = useState<YearData[]>([]);
  const [filteredSeasonGroups, setFilteredSeasonGroups] = useState<
    SeasonGroup[]
  >([]);

  // Parse URL parameter on mount and when URL changes
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const yearParam = params.get("year");

    if (yearParam) {
      setActiveYear(yearParam);
    }
  }, [location.search]);

  // Update URL when year changes
  const updateUrl = (year: string) => {
    const params = new URLSearchParams();
    params.set("year", year);
    navigate(`${location.pathname}?${params.toString()}`, { replace: true });
  };

  // Process available years from season groups
  useEffect(() => {
    try {
      // Group seasons by year
      const yearMap = new Map<string, YearData>();

      seasonGroups.forEach((group) => {
        const year = group.seasonYear;
        if (year) {
          const yearData = yearMap.get(year) || {
            year: year,
            hasCinematics: false,
          };
          yearData.hasCinematics = true;
          yearMap.set(year, yearData);
        }
      });

      // Convert to array and sort by year (descending)
      const years = Array.from(yearMap.values()).sort(
        (a, b) => parseInt(b.year) - parseInt(a.year)
      );

      setAvailableYears(years);

      // Set initial active year from URL or default to most recent year
      if (years.length > 0 && !activeYear) {
        const params = new URLSearchParams(location.search);
        const yearParam = params.get("year");

        // Check if the year from URL exists and has cinematics
        if (yearParam && years.some((y) => y.year === yearParam)) {
          const yearData = years.find((y) => y.year === yearParam);
          if (yearData && yearData.hasCinematics) {
            setActiveYear(yearParam);
          } else {
            // If year exists but has no cinematics, fall back to default
            const defaultYear = years.find((y) => y.hasCinematics)?.year;
            if (defaultYear) {
              setActiveYear(defaultYear);
              updateUrl(defaultYear);
            }
          }
        } else {
          // No year in URL, use default
          const defaultYear = years.find((y) => y.hasCinematics)?.year;
          if (defaultYear) {
            setActiveYear(defaultYear);
            updateUrl(defaultYear);
          } else if (years.length > 0) {
            setActiveYear(years[0].year);
            updateUrl(years[0].year);
          }
        }
      }
    } catch (err) {
      console.error("Error processing year data:", err);
    }
  }, []); // Run once on mount

  // Filter season groups by active year
  useEffect(() => {
    if (!activeYear) {
      setFilteredSeasonGroups([]);
      return;
    }

    try {
      // Filter season groups that belong to the active year
      const filtered = seasonGroups.filter(
        (group) => group.seasonYear === activeYear
      );

      setFilteredSeasonGroups(filtered);
    } catch (err) {
      console.error("Error filtering season groups by year:", err);
      setFilteredSeasonGroups([]);
    }
  }, [activeYear]);

  // Handle year selection
  const handleYearSelect = (year: string) => {
    const yearData = availableYears.find((y) => y.year === year);
    if (!yearData || !yearData.hasCinematics) return;

    setActiveYear(year);
    updateUrl(year);
  };

  // Extract YouTube video ID from URL (same logic as MapDetail)
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
        {/* Title on top like MapDetail */}
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

    // Use altName if available, otherwise use seasonName
    const seasonName = seasonGroup.seasonAltName || seasonGroup.seasonName;

    if (!isNaN(seasonNumber) && seasonNumber > 0) {
      return `Season ${seasonGroup.seasonId}: ${seasonName}`;
    } else if (seasonNumber === 0) {
      return seasonName;
    } else {
      // Special seasons (negative numbers)
      return seasonName;
    }
  };

  return (
    <div className="gallery-cinematic">
      {/* Year tab selector - identical to GalleryMagazine */}
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

      {filteredSeasonGroups.length === 0 ? (
        <div className="no-cinematics-message">
          {activeYear
            ? `No cinematics found for ${activeYear}`
            : "Loading cinematics..."}
        </div>
      ) : (
        filteredSeasonGroups.map((seasonGroup) => (
          <div key={seasonGroup.seasonId}>
            <h1 className="subpagetitle">
              {getSeasonDisplayName(seasonGroup)}
            </h1>
            <div className="video-gallery-container cinematics-gallery-container">
              {seasonGroup.cinematics.map((cinematic) =>
                renderYouTubeVideo(cinematic)
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default GalleryCinematic;
