import { useNavigate } from "react-router-dom";
import GalleryStory from "../GalleryStory";
import { useEffect } from "react";
import GalleryMagazine from "../GalleryMagazine";
import GalleryActivity from "../GalleryActivity";

function MainPage() {
  const navigate = useNavigate();

  const handleStorySelect = (titlePath: string, contentPath: string) => {
    navigate("/story", { state: { titlePath, contentPath } });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleMagazineSelect = (id: string, overrideName: string) => {
    const titlePath = `UIGalleryTable_${id}_CardCaption_CaptionTitle`;
    const contentPath = `UIGalleryTable_${id}_CardCaption_CaptionContent`;
    navigate("/story", {
      state: {
        titlePath,
        contentPath,
        titleOverride: overrideName,
      },
    });
  };

  const handleActivitySelect = (name: string, season: number) => {
    navigate("/activity", { state: { name, season } });
  };

  return (
    <div className="page mainpage">
      <h1 className="mainpagetitle">Season 4: Heart of the Dragon</h1>

      <h1 className="pagetitle">Stories</h1>
      <div className="mainPageStories">
        <GalleryStory
          togglesON={false}
          showOnlyHighlighted={true}
          onStorySelect={handleStorySelect}
        />
      </div>
      <h1 className="pagetitle">Serial</h1>
      <br></br>
      <GalleryMagazine
        showOnlyLastSeason={true}
        onMagazineSelect={handleMagazineSelect}
      />
      <h1 className="pagetitle">Events</h1>
      <div className="mainPageActivities">
        <GalleryActivity
          showOnlyLatestSeason={true}
          onActivitySelect={handleActivitySelect}
        />
      </div>
      <div className="mainpagebackground"></div>
    </div>
  );
}

export default MainPage;
