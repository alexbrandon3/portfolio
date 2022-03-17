import React from "react";
import photo from "./images/photo.jpg";
export default function About() {
  return (
    <div className="container mx auto flex place-items-center flex-col">
      <a
        href="https://alexander-brandon.herokuapp.com/"
        className="flex p-4 border-2 h-48 justify-center items-center rounded-xl bg-blue-600"
      >
        Please click here to navigate to my updated portfolio!
      </a>
    </div>
  );
}
