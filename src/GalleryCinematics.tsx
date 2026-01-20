import React, { useState, useEffect } from "react";
import { cinematics } from "./CinematicList";
import {
  serials as seasonSerials,
  specials as seasonSpecials,
} from "./SeasonList";

interface YearData {
  year: string;
  hasCinematics: boolean;
}

const GalleryCinematic: React.FC = () => {
  const [activeYear, setActiveYear] = useState<string | null>(null);
  const [availableYears, setAvailableYears] = useState<YearData[]>([]);
  const [filteredCinematics, setFilteredCinematics] = useState<
    typeof cinematics
  >([]);

  // Process available years from season data
  useEffect(() => {
    try {
      // Combine all seasons
      const allSeasons = [...seasonSerials, ...seasonSpecials];

      // Create a map of season numbers to years
      const seasonToYearMap = new Map<string, string>();
      allSeasons.forEach((season) => {
        if (season.number && season.year) {
          seasonToYearMap.set(season.number.trim(), season.year.trim());
        }
      });

      // Group cinematics by year
      const yearMap = new Map<string, YearData>();

      // Process each cinematic to determine its year
      cinematics.forEach((cinematic) => {
        const seasonYear = seasonToYearMap.get(cinematic.season);

        if (seasonYear) {
          const yearData = yearMap.get(seasonYear) || {
            year: seasonYear,
            hasCinematics: false,
          };
          yearData.hasCinematics = true;
          yearMap.set(seasonYear, yearData);
        }
      });

      // Convert to array and sort by year (descending)
      const years = Array.from(yearMap.values()).sort(
        (a, b) => parseInt(b.year) - parseInt(a.year)
      );

      setAvailableYears(years);

      // Set initial active year to the most recent year that has cinematics
      if (years.length > 0 && !activeYear) {
        const initialYear = years.find((y) => y.hasCinematics)?.year;
        if (initialYear) {
          setActiveYear(initialYear);
        } else if (years.length > 0) {
          setActiveYear(years[0].year);
        }
      }
    } catch (err) {
      console.error("Error processing year data:", err);
    }
  }, []); // Run once on mount

  // Filter cinematics by active year
  useEffect(() => {
    if (!activeYear) {
      setFilteredCinematics([]);
      return;
    }

    try {
      // Combine all seasons
      const allSeasons = [...seasonSerials, ...seasonSpecials];

      // Get seasons that belong to the active year
      const seasonsForYear = allSeasons
        .filter((season) => season.year === activeYear)
        .map((season) => season.number);

      // Filter cinematics by season, preserving original order
      const filtered = cinematics.filter((cinematic) =>
        seasonsForYear.includes(cinematic.season)
      );

      setFilteredCinematics(filtered);
    } catch (err) {
      console.error("Error filtering cinematics by year:", err);
      setFilteredCinematics([]);
    }
  }, [activeYear]);

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
  const renderYouTubeVideo = (videoItem: (typeof cinematics)[0]) => {
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

  // Get season name from season number
  const getSeasonName = (seasonNumber: string): string => {
    const allSeasons = [...seasonSerials, ...seasonSpecials];
    const season = allSeasons.find((s) => s.number === seasonNumber);

    // Use altname if available, otherwise use name, otherwise fallback
    return season?.altname || season?.name || `Season ${seasonNumber}`;
  };

  // NEW: Group cinematics by season while preserving original API order
  const getGroupedCinematicsInOrder = () => {
    const groups: Array<{
      seasonNumber: string;
      cinematics: typeof cinematics;
    }> = [];
    const seenSeasons = new Set<string>();

    // Iterate through filtered cinematics in original order
    filteredCinematics.forEach((cinematic) => {
      const seasonNumber = cinematic.season;

      if (!seenSeasons.has(seasonNumber)) {
        seenSeasons.add(seasonNumber);
        // Get all cinematics for this season (maintaining their relative order)
        const seasonCinematics = filteredCinematics.filter(
          (c) => c.season === seasonNumber
        );
        groups.push({
          seasonNumber,
          cinematics: seasonCinematics,
        });
      }
    });

    return groups;
  };

  const groupedCinematics = getGroupedCinematicsInOrder();

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
              onClick={() => {
                if (yearData.hasCinematics) {
                  setActiveYear(yearData.year);
                }
              }}
            >
              {yearData.year}
            </span>
          ))}
        </div>
      )}

      {filteredCinematics.length === 0 ? (
        <div className="no-cinematics-message">
          {activeYear
            ? `No cinematics found for ${activeYear}`
            : "Loading cinematics..."}
        </div>
      ) : (
        groupedCinematics.map(
          ({ seasonNumber, cinematics: seasonCinematics }) => (
            <div key={seasonNumber}>
              <h1 className="subpagetitle">
                {parseInt(seasonNumber) > 0
                  ? `Season ${seasonNumber}: ${getSeasonName(seasonNumber)}`
                  : getSeasonName(seasonNumber)}
              </h1>
              <div className="video-gallery-container cinematics-gallery-container">
                {seasonCinematics.map((cinematic) =>
                  renderYouTubeVideo(cinematic)
                )}
              </div>
            </div>
          )
        )
      )}
    </div>
  );
};

export default GalleryCinematic;
