import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";

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
import TeamUpPage from "./pages/TeamUps";
import SkinsPage from "./pages/Skins";
import Footer from "./Footer";

import "./Style.css";
import "./StyleMobile.css";

function App() {
  return (
    <body>
      <div className="polka-bg" />
      <Router>
        <div className="navarea">
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/main"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  New Lore
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/stories"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Stories
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/serials"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Serials
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/activities"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Events
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/heroes"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Heroes
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/teamups"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Team Ups
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/maps"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Maps
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/collectables"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Collectables
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/skins"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Skins
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  About
                </NavLink>
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
          <Route path="/skins" element={<SkinsPage />} />
          <Route path="/" element={<Navigate to="/main" replace />} />
        </Routes>
      </Router>
      <footer>
        <Footer />
      </footer>
    </body>
  );
}

export default App;
