import React from "react";
import photo from "./images/photo.jpg"
export default function About() {
  return (
    <div className="container mx auto flex place-items-center flex-col">
      <img className="image inline h-60 rounded-lg" src={photo} alt="Me in Alaska" />
      <p className="w-1/3">My name is Alexander Brandon and I'm a full-stack developer out of North Carolina. My professional interests include building exciting applications which will make life simpler for people. When I am not coding, I enjoy outdoor activities like fishing and boating. I am also in the process of recovering from four strokes of unknown origin which were originally projected to leave me as a quadriplegic for life.</p>
    </div>
  );
}
