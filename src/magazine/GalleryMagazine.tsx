// GalleryMagazine.tsx
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  magazineSerials,
  magazineSpecials,
  getSeasonInfo,
  getSerialsSeasons,
  getSpecialsSeasons,
} from "./MagazineList";
import { SeasonInfoList } from "../0manual/SeasonsList";
import JsonValue from "../JsonValue";

interface GalleryMagazineProps {
  onMagazineSelect?: (linkID: string, overrideName: string) => void;
  showOnlyLastSeason?: boolean;
}

interface MagazineItem {
  id: string;
  season: string;
  imageName: string;
  overrideName: string;
  linkID: string;
}

interface YearData {
  year: string;
  hasSerials: boolean;
  hasSpecials: boolean;
}

const GalleryMagazine: React.FC<GalleryMagazineProps> = ({
  onMagazineSelect,
  showOnlyLastSeason = false,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeYear, setActiveYear] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"serials" | "specials">("serials");
  const [seasonGroups, setSeasonGroups] = useState<
    Record<number, MagazineItem[]>
  >({});
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [availableYears, setAvailableYears] = useState<YearData[]>([]);

  // Get the last season ID from SeasonsList
  const lastSeasonId = SeasonInfoList[SeasonInfoList.length - 1]?.id;
  // const lastSeasonNumber = lastSeasonId ? parseInt(lastSeasonId) : null;

  // Parse URL parameters on mount
  useEffect(() => {
    if (showOnlyLastSeason) return; // Skip URL parsing when showing only last season

    const params = new URLSearchParams(location.search);
    const yearParam = params.get("year");
    const tabParam = params.get("tab");

    if (yearParam) {
      setActiveYear(yearParam);
    }
    if (tabParam === "specials") {
      setActiveTab("specials");
    } else if (tabParam === "serials") {
      setActiveTab("serials");
    }
  }, [location.search, showOnlyLastSeason]);

  // Update URL when year or tab changes
  const updateUrl = (year: string, tab: "serials" | "specials") => {
    if (showOnlyLastSeason) return; // Skip URL updates when showing only last season

    const params = new URLSearchParams();
    params.set("year", year);
    params.set("tab", tab);
    navigate(`${location.pathname}?${params.toString()}`, { replace: true });
  };

  useEffect(() => {
    try {
      // Get all available seasons
      const serialsSeasons = getSerialsSeasons();
      const specialsSeasons = getSpecialsSeasons();
      const allSeasons = [...serialsSeasons, ...specialsSeasons];

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
        const seasonInfo = getSeasonInfo(item.season);
        if (seasonInfo?.year) {
          const yearData = yearMap.get(seasonInfo.year) || {
            year: seasonInfo.year,
            hasSerials: false,
            hasSpecials: false,
          };
          yearData.hasSerials = true;
          yearMap.set(seasonInfo.year, yearData);
        }
      });

      magazineSpecials.forEach((item) => {
        const seasonInfo = getSeasonInfo(item.season);
        if (seasonInfo?.year) {
          const yearData = yearMap.get(seasonInfo.year) || {
            year: seasonInfo.year,
            hasSerials: false,
            hasSpecials: false,
          };
          yearData.hasSpecials = true;
          yearMap.set(seasonInfo.year, yearData);
        }
      });

      // Convert to array and sort by year (descending)
      const years = Array.from(yearMap.values()).sort(
        (a, b) => parseInt(b.year) - parseInt(a.year)
      );

      setAvailableYears(years);

      // Set initial active year from URL or default to most recent year
      if (years.length > 0 && !activeYear) {
        if (!showOnlyLastSeason) {
          const params = new URLSearchParams(location.search);
          const yearParam = params.get("year");
          const tabParam = params.get("tab");

          if (yearParam && years.some((y) => y.year === yearParam)) {
            setActiveYear(yearParam);
            // Make sure the tab is valid for this year
            const yearData = years.find((y) => y.year === yearParam);
            if (yearData) {
              if (tabParam === "specials" && !yearData.hasSpecials) {
                setActiveTab("serials");
              } else if (tabParam === "serials" && !yearData.hasSerials) {
                setActiveTab("specials");
              }
            }
          } else {
            // Default to the most recent year that has serials, or fallback to first year
            const defaultYear =
              years.find((y) => y.hasSerials)?.year || years[0].year;
            const defaultTab = years.find((y) => y.year === defaultYear)
              ?.hasSerials
              ? "serials"
              : "specials";
            setActiveYear(defaultYear);
            setActiveTab(defaultTab as "serials" | "specials");
            updateUrl(defaultYear, defaultTab as "serials" | "specials");
          }
        } else {
          // When showOnlyLastSeason is true, just set the active year/tab without updating URL
          const defaultYear =
            years.find((y) => y.hasSerials)?.year || years[0].year;
          const defaultTab = years.find((y) => y.year === defaultYear)
            ?.hasSerials
            ? "serials"
            : "specials";
          setActiveYear(defaultYear);
          setActiveTab(defaultTab as "serials" | "specials");
          // No URL update when showOnlyLastSeason is true
        }
      }
    } catch (err) {
      console.error("Error processing year data:", err);
    }
  }, [showOnlyLastSeason]); // Added showOnlyLastSeason to dependencies

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
        activeTab === "serials" ? getSerialsSeasons() : getSpecialsSeasons()
      )
        .filter((season) => season.year === activeYear)
        .map((season) => season.number);

      // Filter items by season and year
      const filteredItems = items.filter((item) => {
        // First filter by showOnlyLastSeason if applicable
        if (showOnlyLastSeason && activeTab === "serials") {
          // Check if the item's season matches the last season from SeasonsList
          return item.season === lastSeasonId;
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
  }, [activeTab, activeYear, showOnlyLastSeason, lastSeasonId]);

  const getSeasonImage = (seasonNumber: number): string => {
    const seasonInfo = getSeasonInfo(seasonNumber.toString());
    const imageName = seasonInfo?.image;
    return imageName
      ? `/textures/gallerycovers/${imageName}`
      : "/textures/gallerycovers/default_magazine_cover.png";
  };

  const getSeasonName = (seasonNumber: number): string => {
    const seasonInfo = getSeasonInfo(seasonNumber.toString());
    return seasonInfo?.name ? seasonInfo.name : "Season Name Missing";
  };

  const handleYearSelect = (year: string) => {
    const yearData = availableYears.find((y) => y.year === year);
    if (!yearData) return;

    // Determine which tab to use for the selected year
    let newTab = activeTab;

    // If the current tab isn't available for this year, switch to the available one
    if (
      activeTab === "serials" &&
      !yearData.hasSerials &&
      yearData.hasSpecials
    ) {
      newTab = "specials";
    } else if (
      activeTab === "specials" &&
      !yearData.hasSpecials &&
      yearData.hasSerials
    ) {
      newTab = "serials";
    } else if (!yearData.hasSerials && !yearData.hasSpecials) {
      // This shouldn't happen as we only show years with at least one type
      return;
    }

    setActiveYear(year);
    setActiveTab(newTab);
    updateUrl(year, newTab);
  };

  const handleTabSelect = (tab: "serials" | "specials") => {
    setActiveTab(tab);

    if (activeYear) {
      updateUrl(activeYear, tab);
    }
  };

  const renderGroup = (group: MagazineItem[], season: number) => {
    return group.map((item, index) => {
      return (
        <div
          key={`${season}-${index}`}
          className="magazine-item"
          onClick={() => onMagazineSelect?.(item.linkID, item.overrideName)}
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
            {availableYears.map((yearData) => {
              // All years are clickable - no disabled class
              return (
                <span
                  key={yearData.year}
                  className={`tab-selector year-selector ${
                    activeYear === yearData.year ? "active" : ""
                  }`}
                  onClick={() => handleYearSelect(yearData.year)}
                >
                  {yearData.year}
                </span>
              );
            })}
          </div>

          <div className="tab-selector-container">
            {/* Only show Main tab if there's at least one serial for the current year */}
            {activeYear &&
              availableYears.find((y) => y.year === activeYear)?.hasSerials && (
                <span
                  className={`tab-selector ${
                    activeTab === "serials" ? "active" : ""
                  }`}
                  onClick={() => handleTabSelect("serials")}
                >
                  Main
                </span>
              )}

            {/* Only show Special Edition tab if there's at least one special for the current year */}
            {activeYear &&
              availableYears.find((y) => y.year === activeYear)
                ?.hasSpecials && (
                <span
                  className={`tab-selector ${
                    activeTab === "specials" ? "active" : ""
                  }`}
                  onClick={() => handleTabSelect("specials")}
                >
                  Special Edition
                </span>
              )}
          </div>
        </>
      )}

      {[...Object.entries(seasonGroups)].map(([seasonStr, group]) => {
        const season = parseInt(seasonStr);
        // Only show season title if not in "only last season" mode
        const shouldShowTitle = !showOnlyLastSeason;

        return (
          <React.Fragment key={`season-${season}`}>
            {shouldShowTitle && (
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
