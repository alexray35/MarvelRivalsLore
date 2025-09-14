import React, { useState, useEffect } from "react";
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
import LoadingScreen from "./LoadingScreen"; // Import the loading screen

import "./Style.css";
import "./StyleMobile.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate loading time (you can replace this with actual loading logic)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 2.5 seconds

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
          <Route path="/story/:linkID?" element={<StoryPage />} />{" "}
          {/* Add parameter */}
          <Route path="/hero/:linkID?" element={<HeroPage />} />{" "}
          {/* Add parameter */}
          <Route path="/heroes" element={<HeroesPage />} />
          <Route path="/maps" element={<MapsPage />} />
          <Route path="/map/:linkID?" element={<MapPage />} />{" "}
          {/* Add parameter */}
          <Route path="/activity/:linkID?" element={<ActivityPage />} />{" "}
          {/* Add parameter */}
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
    </div>
  );
}

export default App;
