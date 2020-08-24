import React from "react";
// import "./SampleWallpaper.css";
// import "./GlobalSummary.css";

const WallpaperOne = (props) => {
  return (
    <div>
      <article className="wallpaper">
        <img src={props.imgUrl} alt={props.alt} className="wallpaper" />
      </article>
    </div>
  );
};

export default WallpaperOne;
