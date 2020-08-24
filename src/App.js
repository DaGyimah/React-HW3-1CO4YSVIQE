import React from "react";
import Navbar from "./components/Navbar";
import IntContent from "./components/IntContent";
import WallpaperOne from "./components/WallpaperOne";
import "./components/GlobalSummary.css";
import "./components/ComponentsSummary.css";
import "./components/LayoutSummary.css";
import "./components/SampleWallpaper.css";

// import logo from './logo.svg';
// import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <header className="header">
        <div className="container">
          <IntContent />
          <div className="sample-wallpaper">
            <WallpaperOne imgUrl="./assets/venom-1.jpg" alt="Wallpaper #1" />
            <WallpaperOne imgUrl="./assets/hulk-1.jpg" alt="Wallpaper #1" />
            <WallpaperOne imgUrl="./assets/venom-2.jpg" alt="Wallpaper #1" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
