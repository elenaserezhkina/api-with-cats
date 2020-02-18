import React from "react";
import "./Gif.css";

function Gif({ gifs }) {
  console.log(gifs.img);
  const styles = {
    backgroundImage: `url("${gifs.images.downsized_large.url}")`
  };
  return <div style={styles} className="gif-image"></div>;
}

export default Gif;
