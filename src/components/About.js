import React from "react";
import photo from "./images/photo.jpg"
export default function About() {
  return (
    <div className="container mx auto flex items-start">
      <img className="image inline h-60 rounded-lg" src={photo} alt="Me in Alaska" />
      <p>My name is Alexander Brandon and I'm a full-stack developer out of North Carolina.</p>
    </div>
  );
}
