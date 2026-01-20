// GalleryMagazine.tsx
import React, { useState, useEffect } from "react";
import {
  serials as magazineSerials,
  specials as magazineSpecials,
  magazineMaxSerialSeason,
} from "./MagazineList";
import {
  serials as seasonSerials,
  specials as seasonSpecials,
} from "./SeasonList";
import JsonValue from "./JsonValue";

interface GalleryMagazineProps {
  onMagazineSelect?: (linkID: string, overrideName: string) => void; // Updated to include overrideName
  showOnlyLastSeason?: boolean;
}

interface MagazineItem {
  id: string;
  season: string;
  imageName: string;
  overrideName: string;
  linkID: string; // Added linkID
}

interface YearData {
  year: string;
  hasSerials: boolean;
  hasSpecials: boolean;
}

const GalleryMagazine: React.FC<GalleryMagazineProps> = ({
  onMagazineSelect,
  showOnlyLastSeason = false, // Default to false for backward compatibility
}) => {
  const [activeYear, setActiveYear] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"serials" | "specials">("serials");
  const [seasonGroups, setSeasonGroups] = useState<
    Record<number, MagazineItem[]>
  >({});
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [availableYears, setAvailableYears] = useState<YearData[]>([]);

  useEffect(() => {
    try {
      // Get all available years from season data
      const allSeasons = [...seasonSerials, ...seasonSpecials];
      const yearMap = new Map<string, YearData>();

      // Initialize with all years from seasons
      allSeasons.forEach((season) => {
        if (season.year) {
          yearMap.set(season.year, {
            year: season.year,
            hasSerials: false,
            hasSpecials: false,
          });
        }
      });

      // Check which years have magazine serials and specials
      magazineSerials.forEach((item) => {
        const season = seasonSerials.find((s) => s.number === item.season);
        if (season?.year) {
          const yearData = yearMap.get(season.year) || {
            year: season.year,
            hasSerials: false,
            hasSpecials: false,
          };
          yearData.hasSerials = true;
          yearMap.set(season.year, yearData);
        }
      });

      magazineSpecials.forEach((item) => {
        const season = seasonSpecials.find((s) => s.number === item.season);
        if (season?.year) {
          const yearData = yearMap.get(season.year) || {
            year: season.year,
            hasSerials: false,
            hasSpecials: false,
          };
          yearData.hasSpecials = true;
          yearMap.set(season.year, yearData);
        }
      });

      // Convert to array and sort by year (descending)
      const years = Array.from(yearMap.values()).sort(
        (a, b) => parseInt(b.year) - parseInt(a.year)
      );

      setAvailableYears(years);

      // Set initial active year to the most recent year that has data for the current tab
      if (years.length > 0 && !activeYear) {
        const initialYear =
          activeTab === "serials"
            ? years.find((y) => y.hasSerials)?.year
            : years.find((y) => y.hasSpecials)?.year;

        if (initialYear) {
          setActiveYear(initialYear);
        }
      }
    } catch (err) {
      console.error("Error processing year data:", err);
    }
  }, []); // Run once on mount

  useEffect(() => {
    if (!activeYear) return;

    try {
      const groups: Record<number, MagazineItem[]> = {};
      let hasData = false;

      // Load data based on active tab
      const items =
        activeTab === "serials" ? magazineSerials : magazineSpecials;

      // Get seasons for the active year
      const seasonsForYear = (
        activeTab === "serials" ? seasonSerials : seasonSpecials
      )
        .filter((season) => season.year === activeYear)
        .map((season) => season.number);

      // Filter items by season and year
      const filteredItems = items.filter((item) => {
        // First filter by showOnlyLastSeason if applicable
        if (showOnlyLastSeason && activeTab === "serials") {
          return parseInt(item.season) === magazineMaxSerialSeason;
        }
        // Then filter by active year
        return seasonsForYear.includes(item.season);
      });

      // Group items by season
      filteredItems.forEach((item) => {
        const seasonNum = parseInt(item.season);
        if (!groups[seasonNum]) {
          groups[seasonNum] = [];
        }
        groups[seasonNum].push(item);
        hasData = true;
      });

      if (!hasData) {
        throw new Error(
          `No ${activeTab} magazine data found for ${activeYear}`
        );
      }

      setSeasonGroups(groups);
      setIsLoading(false);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to load magazine data"
      );
      setIsLoading(false);
    }
  }, [activeTab, activeYear, showOnlyLastSeason]); // Add activeYear to dependency array

  const getSeasonImage = (seasonNumber: number): string => {
    const allSeasons = [...seasonSerials, ...seasonSpecials];
    const season = allSeasons.find((s) => s.number === seasonNumber.toString());
    const imageName = season?.image;
    return imageName
      ? `/textures/gallerycovers/${imageName}`
      : "/textures/gallerycovers/default_magazine_cover.png";
  };

  const getSeasonName = (seasonNumber: number): string => {
    const allSeasons = [...seasonSerials, ...seasonSpecials];
    const season = allSeasons.find((s) => s.number === seasonNumber.toString());
    const seasonName = season?.name;
    return seasonName ? seasonName : "Season Name Missing";
  };

  const handleYearSelect = (year: string) => {
    setActiveYear(year);

    // If the selected tab isn't available for this year, switch to the available one
    const yearData = availableYears.find((y) => y.year === year);
    if (yearData) {
      if (
        activeTab === "serials" &&
        !yearData.hasSerials &&
        yearData.hasSpecials
      ) {
        setActiveTab("specials");
      } else if (
        activeTab === "specials" &&
        !yearData.hasSpecials &&
        yearData.hasSerials
      ) {
        setActiveTab("serials");
      }
    }
  };

  const handleTabSelect = (tab: "serials" | "specials") => {
    setActiveTab(tab);

    // If the current year doesn't have data for the selected tab, find one that does
    const currentYearData = availableYears.find((y) => y.year === activeYear);
    if (currentYearData) {
      const hasDataForTab =
        tab === "serials"
          ? currentYearData.hasSerials
          : currentYearData.hasSpecials;

      if (!hasDataForTab) {
        const newYear = availableYears.find((y) =>
          tab === "serials" ? y.hasSerials : y.hasSpecials
        )?.year;

        if (newYear) {
          setActiveYear(newYear);
        }
      }
    }
  };

  const renderGroup = (group: MagazineItem[], season: number) => {
    return group.map((item, index) => {
      return (
        <div
          key={`${season}-${index}`}
          className="magazine-item"
          onClick={() => onMagazineSelect?.(item.linkID, item.overrideName)} // Pass both values
          style={{ cursor: onMagazineSelect ? "pointer" : "default" }}
        >
          <img
            src={`/textures/gallerycards_lq/${item.imageName}`}
            alt={item.imageName}
            loading="lazy"
          />

          <div className="image-caption">
            {item.overrideName ? (
              <span>{item.overrideName}</span>
            ) : (
              <JsonValue
                path={`UIGalleryTable_${item.id}_CardCaption_CaptionTitle`}
              />
            )}
          </div>
        </div>
      );
    });
  };

  if (isLoading) {
    return <div>Loading magazines...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (Object.keys(seasonGroups).length === 0) {
    return <div>No magazine images found for {activeYear}.</div>;
  }

  return (
    <div className="gallery-magazine">
      {!showOnlyLastSeason && (
        <>
          <div className="tab-selector-container year-tab">
            {availableYears.map((yearData) => (
              <span
                key={yearData.year}
                className={`tab-selector year-selector ${
                  activeYear === yearData.year ? "active" : ""
                } ${
                  (activeTab === "serials" && !yearData.hasSerials) ||
                  (activeTab === "specials" && !yearData.hasSpecials)
                    ? "disabled"
                    : ""
                }`}
                onClick={() => {
                  if (
                    (activeTab === "serials" && yearData.hasSerials) ||
                    (activeTab === "specials" && yearData.hasSpecials)
                  ) {
                    handleYearSelect(yearData.year);
                  }
                }}
              >
                {yearData.year}
              </span>
            ))}
          </div>

          <div className="tab-selector-container">
            <span
              className={`tab-selector ${
                activeTab === "serials" ? "active" : ""
              } ${
                activeYear &&
                !availableYears.find((y) => y.year === activeYear)?.hasSerials
                  ? "disabled"
                  : ""
              }`}
              onClick={() => {
                const currentYearData = availableYears.find(
                  (y) => y.year === activeYear
                );
                if (currentYearData?.hasSerials) {
                  handleTabSelect("serials");
                }
              }}
            >
              Main
            </span>
            <span
              className={`tab-selector ${
                activeTab === "specials" ? "active" : ""
              } ${
                activeYear &&
                !availableYears.find((y) => y.year === activeYear)?.hasSpecials
                  ? "disabled"
                  : ""
              }`}
              onClick={() => {
                const currentYearData = availableYears.find(
                  (y) => y.year === activeYear
                );
                if (currentYearData?.hasSpecials) {
                  handleTabSelect("specials");
                }
              }}
            >
              Special Edition
            </span>
          </div>
        </>
      )}

      {[...Object.entries(seasonGroups)].map(([seasonStr, group]) => {
        const season = parseInt(seasonStr);
        return (
          <React.Fragment key={`season-${season}`}>
            {!showOnlyLastSeason && (
              <h1 className="subpagetitle">
                {activeTab === "serials"
                  ? `Season ${season}: ${getSeasonName(season)}`
                  : getSeasonName(season)}
              </h1>
            )}
            <div className={`gallery-group group-${season}`}>
              <div className="gallery-cover">
                <img
                  src={getSeasonImage(season)}
                  alt={`Season ${season} cover`}
                  loading="lazy"
                />
              </div>
              <div className="magazine-grid">{renderGroup(group, season)}</div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default GalleryMagazine;
