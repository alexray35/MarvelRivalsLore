import { useState, useEffect } from "react";
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
import CinematicsPage from "./pages/Cinematics";
import ImagesPage from "./pages/Images";
import TimelinePage from "./pages/Timeline";
import Footer from "./Footer";
import LoadingScreen from "./LoadingScreen";

import "./Style.css";
import "./StyleMobile.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div>
      <Router>
        <div className="navarea">
          <nav>
            <ul>
              {/* New Lore - Direct Link */}
              <li>
                <NavLink
                  to="/main"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  New
                </NavLink>
              </li>

              {/* Lore Dropdown */}
              <li className="dropdown-container">
                <span className="dropdown-toggle">Lore</span>
                <ul className="dropdown-menu">
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
                </ul>
              </li>

              {/* Heroes Dropdown */}
              <li className="dropdown-container">
                <span className="dropdown-toggle">Heroes</span>
                <ul className="dropdown-menu">
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
                      to="/skins"
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      Skins
                    </NavLink>
                  </li>
                </ul>
              </li>

              {/* Maps - Direct Link */}
              <li>
                <NavLink
                  to="/maps"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Maps
                </NavLink>
              </li>

              {/* Collectables - Direct Link */}
              <li>
                <NavLink
                  to="/collectables"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Collectables
                </NavLink>
              </li>

              {/* Media Dropdown */}
              <li className="dropdown-container">
                <span className="dropdown-toggle">Media</span>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink
                      to="/images"
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      Images
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/cinematics"
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      Cinematics
                    </NavLink>
                  </li>
                </ul>
              </li>

              {/* Timeline - Direct Link */}
              <li>
                <NavLink
                  to="/timeline"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Timeline
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <Routes>
          <Route path="/main" element={<MainPage />} />
          <Route path="/stories" element={<StoriesPage />} />
          <Route path="/serials" element={<MagazinesPage />} />
          <Route path="/story/:linkID?" element={<StoryPage />} />
          <Route path="/hero/:linkID?" element={<HeroPage />} />
          <Route path="/heroes" element={<HeroesPage />} />
          <Route path="/maps" element={<MapsPage />} />
          <Route path="/map/:linkID?" element={<MapPage />} />
          <Route path="/activity/:linkID?" element={<ActivityPage />} />
          <Route path="/activities" element={<ActivitiesPage />} />
          <Route path="/teamups" element={<TeamUpPage />} />
          <Route path="/timeline" element={<TimelinePage />} />
          <Route path="/collectables" element={<CollectablesPage />} />
          <Route path="/skins" element={<SkinsPage />} />
          <Route path="/images" element={<ImagesPage />} />
          <Route path="/cinematics" element={<CinematicsPage />} />
          <Route path="/" element={<Navigate to="/main" replace />} />
        </Routes>
      </Router>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
