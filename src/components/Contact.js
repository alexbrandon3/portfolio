import React from "react";
import githubIcon from "./images/githubIcon.png"
export default function Contact() {

    const emailClick = (e) => {
        e.preventDefault();
        let link = 'mailto:alexlbrandon@gmail.com'
        window.location.href = link

    }
    const githubClick = () => {
        window.location = "https://github.com/alexbrandon3"
    }

  return (
    <div className="container auto flex place-items-center items-left flex-col">
      <div className="flex items-center my-10 justify-start w-1/4">
        <img src="https://img.icons8.com/color/48/000000/apple-phone.png" alt="phone icon"/>
        <p>704.699.1667</p>
      </div>
      <div className="flex items-center my-10 cursor-pointer mailto w-1/4" onClick={emailClick}>
        <button><img src="https://img.icons8.com/ios/50/000000/email-open.png" alt="email icon"/></button>
        <p className="ml-1">alexlbrandon@gmail.com</p>
      </div>
      <div className="flex items-center my-10 cursor-pointer w-1/4" onClick={githubClick}>
        <button className="" href="https://github.com/alexbrandon3"> <img src={githubIcon} alt="github icon"></img></button>
        <p className="ml-1">https://github.com/alexbrandon3</p>
      </div>

    </div>
  );
}
