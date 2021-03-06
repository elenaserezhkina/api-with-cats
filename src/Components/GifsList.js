import React from "react";
import Gif from "./Gif";

function GifsList({ gifs }) {
  console.log(gifs);
  return (
    <div>
      <h1>Эти котики для тебя</h1>
      {gifs.map((element, idx) => (
        <Gif key={idx} gifs={element} />
      ))}
    </div>
  );
}
export default GifsList;
