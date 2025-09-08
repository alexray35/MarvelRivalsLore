import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MainPage from "./pages/MainPage";
import StoriesPage from "./pages/Stories";
import StoryPage from "./pages/Story";
import MagazinesPage from "./pages/Magazines";
import HeroPage from "./pages/Hero";
import HeroesPage from "./pages/Heroes";
import MapPage from "./pages/Map";
import MapsPage from "./pages/Maps";
import ActivityPage from "./pages/Activity";
import ActivitiesPage from "./pages/Activities";
import CollectablesPage from "./pages/Collectables";
import AccesoriesPage from "./pages/Accessories";
import TeamUpPage from "./pages/TeamUps";

import "./Style.css";
import "./StyleMobile.css";

function App() {
  return (
    <Router>
      <div className="navarea">
        <nav>
          <ul>
            <li>
              <Link to="/main">New</Link>
            </li>
            <li>
              <Link to="/stories">Stories</Link>
            </li>
            <li>
              <Link to="/serials">Serials</Link>
            </li>
            <li>
              <Link to="/activities">Events</Link>
            </li>
            <li>
              <Link to="/heroes">Heroes</Link>
            </li>
            <li>
              <Link to="/teamups">Team Ups</Link>
            </li>

            <li>
              <Link to="/maps">Maps</Link>
            </li>
            <li>
              <Link to="/collectables">Collectables</Link>
            </li>
            <li>
              <Link to="/accessories">Accessories</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/stories" element={<StoriesPage />} />
        <Route path="/serials" element={<MagazinesPage />} />
        <Route path="/story" element={<StoryPage />} />
        <Route path="/hero" element={<HeroPage />} />
        <Route path="/heroes" element={<HeroesPage />} />
        <Route path="/maps" element={<MapsPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/activity" element={<ActivityPage />} />
        <Route path="/activities" element={<ActivitiesPage />} />
        <Route path="/teamups" element={<TeamUpPage />} />
        <Route path="/collectables" element={<CollectablesPage />} />
        <Route path="/accessories" element={<AccesoriesPage />} />
        <Route path="/" element={<StoriesPage />} /> {/* Default route */}
      </Routes>
    </Router>
  );
}

export default App;
