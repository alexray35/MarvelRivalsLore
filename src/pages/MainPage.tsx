import { useNavigate } from "react-router-dom";
import GalleryStory from "../stories/GalleryStory";
import { useEffect } from "react";
import GalleryMagazine from "../magazine/GalleryMagazine";
import { SeasonInfoList } from "../0manual/SeasonsList";
//import GalleryActivity from "../GalleryActivity";

function MainPage() {
  const navigate = useNavigate();

  const handleStorySelect = (linkID: string) => {
    navigate(`/story/${linkID}`); // Use URL parameter instead of state
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleMagazineSelect = (linkID: string, overrideName: string) => {
    navigate(`/story/${linkID}`, {
      state: {
        titleOverride: overrideName, // Keep titleOverride via state
      },
    });
  };
  //const handleActivitySelect = (linkID: string) => {
  //// Changed to accept linkID
  //  navigate(`/activity/${linkID}`); // Use URL parameter
  //};

  return (
    <div className="page mainpage">
      <h1 className="mainpagetitle">
        Season {SeasonInfoList[SeasonInfoList.length - 1].id}:{" "}
        {SeasonInfoList[SeasonInfoList.length - 1].name}
      </h1>

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
      <div className="mainpagebackground"></div>
    </div>
  );
}

export default MainPage;
