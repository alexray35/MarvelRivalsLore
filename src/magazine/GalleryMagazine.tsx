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
import { SeasonInfoList, SeasonSpecialsInfoList } from "../0manual/SeasonsList";
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

interface GalleryGroup {
  seasonNumber: number;
  gallerycardIndex: number;
  items: MagazineItem[];
}

const GalleryMagazine: React.FC<GalleryMagazineProps> = ({
  onMagazineSelect,
  showOnlyLastSeason = false,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeYear, setActiveYear] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"serials" | "specials">("serials");
  const [galleryGroups, setGalleryGroups] = useState<GalleryGroup[]>([]);
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
        const seasonInfos = getSeasonInfo(item.season);
        if (seasonInfos && seasonInfos.length > 0) {
          // Use the first season info's year (all infos for the same season should have the same year)
          const seasonInfo = seasonInfos[0];
          if (seasonInfo?.year) {
            const yearData = yearMap.get(seasonInfo.year) || {
              year: seasonInfo.year,
              hasSerials: false,
              hasSpecials: false,
            };
            yearData.hasSerials = true;
            yearMap.set(seasonInfo.year, yearData);
          }
        }
      });

      magazineSpecials.forEach((item) => {
        const seasonInfos = getSeasonInfo(item.season);
        if (seasonInfos && seasonInfos.length > 0) {
          const seasonInfo = seasonInfos[0];
          if (seasonInfo?.year) {
            const yearData = yearMap.get(seasonInfo.year) || {
              year: seasonInfo.year,
              hasSerials: false,
              hasSpecials: false,
            };
            yearData.hasSpecials = true;
            yearMap.set(seasonInfo.year, yearData);
          }
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
      const groups: GalleryGroup[] = [];
      let hasData = false;

      // Load data based on active tab
      const items =
        activeTab === "serials" ? magazineSerials : magazineSpecials;

      // Get all season infos for the active tab and year
      const seasonInfosForYear = (
        activeTab === "serials" ? getSerialsSeasons() : getSpecialsSeasons()
      ).filter((season) => season.year === activeYear);

      // Group items by season and gallerycard index
      // We need to track which gallerycard each magazine item belongs to
      // Since magazine items don't have gallerycard index, we need to infer it from the order

      // First, get all magazine items for the active year
      const allItemsForYear = items.filter((item) =>
        seasonInfosForYear.some((season) => season.number === item.season)
      );

      if (showOnlyLastSeason && activeTab === "serials") {
        // Filter to only last season
        const filteredItems = allItemsForYear.filter(
          (item) => item.season === lastSeasonId
        );
        if (filteredItems.length > 0) {
          // Group by season and gallerycard
          const itemsBySeason: Map<string, MagazineItem[]> = new Map();
          filteredItems.forEach((item) => {
            if (!itemsBySeason.has(item.season)) {
              itemsBySeason.set(item.season, []);
            }
            itemsBySeason.get(item.season)!.push(item);
          });

          // For each season, group items by gallerycard
          itemsBySeason.forEach((seasonItems, seasonId) => {
            const seasonNum = parseInt(seasonId);
            const seasonInfosForId = seasonInfosForYear.filter(
              (s) => s.number === seasonId
            );

            // Group items by gallerycard based on the items array
            // We need to know which items belong to which gallerycard
            // Since magazine items don't have gallerycard index, we need to match them with the gallerycard's items
            seasonInfosForId.forEach((seasonInfo, gallerycardIndex) => {
              // Get the gallerycard's items from SeasonInfoList or SeasonSpecialsInfoList
              let gallerycardItems: {
                id: string;
                image: string;
                altName: string;
              }[] = [];

              if (activeTab === "serials") {
                const seasonData = SeasonInfoList.find(
                  (s) => s.id === seasonId
                );
                if (
                  seasonData &&
                  seasonData.gallerycard &&
                  seasonData.gallerycard[gallerycardIndex]
                ) {
                  gallerycardItems =
                    seasonData.gallerycard[gallerycardIndex].items;
                }
              } else {
                const specialData = SeasonSpecialsInfoList.find(
                  (s) => s.id === seasonId
                );
                if (
                  specialData &&
                  specialData.gallerycard &&
                  specialData.gallerycard[gallerycardIndex]
                ) {
                  gallerycardItems =
                    specialData.gallerycard[gallerycardIndex].items;
                }
              }

              // Match magazine items to this gallerycard
              const matchedItems = seasonItems.filter((item) =>
                gallerycardItems.some((gcItem) => gcItem.id === item.id)
              );

              if (matchedItems.length > 0) {
                groups.push({
                  seasonNumber: seasonNum,
                  gallerycardIndex: gallerycardIndex,
                  items: matchedItems,
                });
                hasData = true;
              }
            });
          });
        }
      } else {
        // Normal filtering by year
        const itemsBySeasonAndGallerycard: Map<
          string,
          Map<number, MagazineItem[]>
        > = new Map();

        // For each season in the current year, process its gallerycards
        for (const seasonInfo of seasonInfosForYear) {
          const seasonId = seasonInfo.number;
          const seasonNum = parseInt(seasonId);

          // Get the gallerycard items from the source data
          let gallerycards: {
            cover: string;
            title: string;
            numberSufix?: string;
            items: { id: string; image: string; altName: string }[];
          }[] = [];

          if (activeTab === "serials") {
            const seasonData = SeasonInfoList.find((s) => s.id === seasonId);
            if (seasonData && seasonData.gallerycard) {
              gallerycards = seasonData.gallerycard;
            }
          } else {
            const specialData = SeasonSpecialsInfoList.find(
              (s) => s.id === seasonId
            );
            if (specialData && specialData.gallerycard) {
              gallerycards = specialData.gallerycard;
            }
          }

          // For each gallerycard, collect the magazine items
          gallerycards.forEach((gallerycard, gallerycardIndex) => {
            const gallerycardItemIds = gallerycard.items.map((item) => item.id);
            const matchedItems = allItemsForYear.filter(
              (item) =>
                item.season === seasonId && gallerycardItemIds.includes(item.id)
            );

            if (matchedItems.length > 0) {
              if (!itemsBySeasonAndGallerycard.has(seasonId)) {
                itemsBySeasonAndGallerycard.set(seasonId, new Map());
              }
              itemsBySeasonAndGallerycard
                .get(seasonId)!
                .set(gallerycardIndex, matchedItems);
              hasData = true;
            }
          });
        }

        // Convert to groups array
        for (const [seasonId, gallerycardMap] of itemsBySeasonAndGallerycard) {
          const seasonNum = parseInt(seasonId);
          for (const [gallerycardIndex, items] of gallerycardMap) {
            groups.push({
              seasonNumber: seasonNum,
              gallerycardIndex,
              items,
            });
          }
        }

        // Sort groups by season number and then by gallerycard index
        groups.sort((a, b) => {
          const aIsSpecial = a.seasonNumber < 0;
          const bIsSpecial = b.seasonNumber < 0;

          if (aIsSpecial && bIsSpecial) {
            // Specials: higher number (closer to 0) first? No — you want -8 before -1
            // So sort descending (more negative first)
            return b.seasonNumber - a.seasonNumber;
          }
          if (a.seasonNumber !== b.seasonNumber) {
            return a.seasonNumber - b.seasonNumber;
          }
          return a.gallerycardIndex - b.gallerycardIndex;
        });
      }

      if (!hasData) {
        throw new Error(
          `No ${activeTab} magazine data found for ${activeYear}`
        );
      }

      setGalleryGroups(groups);
      setIsLoading(false);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to load magazine data"
      );
      setIsLoading(false);
    }
  }, [activeTab, activeYear, showOnlyLastSeason, lastSeasonId]);

  const getSeasonImage = (
    seasonNumber: number,
    gallerycardIndex: number
  ): string => {
    const seasonInfos = getSeasonInfo(seasonNumber.toString());
    if (!seasonInfos || seasonInfos.length === 0) {
      return "/textures/gallerycovers/default_magazine_cover.png";
    }

    // Get the specific gallerycard info
    const seasonInfo = seasonInfos[gallerycardIndex];
    if (!seasonInfo) {
      return "/textures/gallerycovers/default_magazine_cover.png";
    }

    const imageName = seasonInfo.image;
    return imageName
      ? `/textures/gallerycovers/${imageName}`
      : "/textures/gallerycovers/default_magazine_cover.png";
  };

  const getSeasonName = (
    seasonNumber: number,
    gallerycardIndex: number
  ): string => {
    const seasonInfos = getSeasonInfo(seasonNumber.toString());
    if (!seasonInfos || seasonInfos.length === 0) {
      return "Season Name Missing";
    }

    // Get the specific gallerycard info
    const seasonInfo = seasonInfos[gallerycardIndex];
    if (!seasonInfo) {
      return "Season Name Missing";
    }

    return seasonInfo.name ? seasonInfo.name : "Season Name Missing";
  };

  const getSeasonNumberSuffix = (
    seasonNumber: number,
    gallerycardIndex: number
  ): string => {
    const seasonInfos = getSeasonInfo(seasonNumber.toString());
    if (!seasonInfos || seasonInfos.length === 0) {
      return "";
    }

    const seasonInfo = seasonInfos[gallerycardIndex];
    if (!seasonInfo) {
      return "";
    }

    return seasonInfo.numberSufix || "";
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

  const renderGroup = (group: GalleryGroup) => {
    return group.items.map((item, index) => {
      return (
        <div
          key={`${group.seasonNumber}-${group.gallerycardIndex}-${index}`}
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

  if (galleryGroups.length === 0) {
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

      {galleryGroups.map((group, groupIndex) => {
        const numberSuffix = getSeasonNumberSuffix(
          group.seasonNumber,
          group.gallerycardIndex
        );
        // Only show season title if not in "only last season" mode
        const shouldShowTitle = !showOnlyLastSeason;

        return (
          <React.Fragment
            key={`season-${group.seasonNumber}-${group.gallerycardIndex}`}
          >
            {shouldShowTitle && (
              <h1 className="subpagetitle">
                {activeTab === "serials"
                  ? `Season ${
                      group.seasonNumber
                    }${numberSuffix}: ${getSeasonName(
                      group.seasonNumber,
                      group.gallerycardIndex
                    )}`
                  : getSeasonName(group.seasonNumber, group.gallerycardIndex)}
              </h1>
            )}
            <div
              className={`gallery-group group-${group.seasonNumber}-${group.gallerycardIndex}`}
            >
              <div className="gallery-cover">
                <img
                  src={getSeasonImage(
                    group.seasonNumber,
                    group.gallerycardIndex
                  )}
                  alt={`Season ${group.seasonNumber}${numberSuffix} cover`}
                  loading="lazy"
                />
              </div>
              <div className="magazine-grid">{renderGroup(group)}</div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default GalleryMagazine;
