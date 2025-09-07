// GalleryMagazine.tsx
import React, { useState, useEffect } from "react";
import {
  serials as magazineSerials,
  specials as magazineSpecials,
} from "./MagazineList";
import {
  serials as seasonSerials,
  specials as seasonSpecials,
} from "./SeasonList";
import JsonValue from "./JsonValue";

interface GalleryMagazineProps {
  onMagazineSelect?: (id: string, overrideName: string) => void;
}

interface MagazineItem {
  id: string;
  season: string;
  imageName: string;
  overrideName: string;
}

const GalleryMagazine: React.FC<GalleryMagazineProps> = ({
  onMagazineSelect,
}) => {
  const [activeTab, setActiveTab] = useState<"serials" | "specials">("serials");
  const [seasonGroups, setSeasonGroups] = useState<
    Record<number, MagazineItem[]>
  >({});
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const groups: Record<number, MagazineItem[]> = {};
      let hasData = false;

      // Load data based on active tab
      const items =
        activeTab === "serials" ? magazineSerials : magazineSpecials;

      // Group items by season
      items.forEach((item) => {
        const seasonNum = parseInt(item.season);
        if (!groups[seasonNum]) {
          groups[seasonNum] = [];
        }
        groups[seasonNum].push(item);
        hasData = true;
      });

      if (!hasData) {
        throw new Error(`No ${activeTab} magazine data found`);
      }

      setSeasonGroups(groups);
      setIsLoading(false);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to load magazine data"
      );
      setIsLoading(false);
    }
  }, [activeTab]);

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

  const renderGroup = (group: MagazineItem[], season: number) => {
    return group.map((item, index) => {
      return (
        <div
          key={`${season}-${index}`}
          className="magazine-item"
          onClick={() => onMagazineSelect?.(item.id, item.overrideName)}
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
    return <div>No magazine images found.</div>;
  }

  return (
    <div className="gallery-magazine">
      <div className="tab-selector-container">
        <span
          className={`tab-selector ${activeTab === "serials" ? "active" : ""}`}
          onClick={() => setActiveTab("serials")}
        >
          Main
        </span>
        <span
          className={`tab-selector ${activeTab === "specials" ? "active" : ""}`}
          onClick={() => setActiveTab("specials")}
        >
          Special Edition
        </span>
      </div>

      {[...Object.entries(seasonGroups)]
        .sort(([a], [b]) =>
          activeTab === "serials"
            ? parseInt(b) - parseInt(a)
            : parseInt(a) - parseInt(b)
        )
        .map(([seasonStr, group]) => {
          const season = parseInt(seasonStr);
          return (
            <React.Fragment key={`season-${season}`}>
              <h1 className="subpagetitle">
                {activeTab === "serials"
                  ? `Season ${season}: ${getSeasonName(season)}`
                  : getSeasonName(season)}
              </h1>
              <div className={`gallery-group group-${season}`}>
                <div className="gallery-cover">
                  <img
                    src={getSeasonImage(season)}
                    alt={`Season ${season} cover`}
                    loading="lazy"
                  />
                </div>
                <div className="magazine-grid">
                  {renderGroup(group, season)}
                </div>
              </div>
            </React.Fragment>
          );
        })}
    </div>
  );
};

export default GalleryMagazine;
