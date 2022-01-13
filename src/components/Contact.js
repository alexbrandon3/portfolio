import React from "react";
import githubIcon from "./images/githubIcon.png"
import linkedInIcon from "./images/linkedIn.png"
export default function Contact() {

    const emailClick = (e) => {
        e.preventDefault();
        let link = 'mailto:alexlbrandon@gmail.com'
        window.location.href = link

    }
    const githubClick = () => {
        window.location = 'https://github.com/alexbrandon3'
    }
    const linkedInClick = () => {
        window.location = 'https://linkedin.com/in/alex-brandon-ab6045214'
    }

  return (
    <div className="container auto flex place-items-center items-left flex-col my-14">
      <div className="flex items-center my-4 p-2 rounded-lg bg-gray-300 justify-start w-1/4 hover:bg-gray-700 hover:text-white">
        <img className='h-10 w-10' src="https://img.icons8.com/color/48/000000/apple-phone.png" alt="phone icon"/>
        <p>704.699.1667</p>
      </div>
      <div className="flex items-center my-4 p-2 rounded-lg bg-gray-300 cursor-pointer mailto w-1/4 hover:bg-gray-700 hover:text-white" onClick={emailClick}>
        <button><img className='h-10 w-10' src="https://img.icons8.com/ios/50/000000/email-open.png" alt="email icon"/></button>
        <p className="ml-1">alexlbrandon@gmail.com</p>
      </div>
      <div className="flex items-center my-4 p-2 rounded-lg bg-gray-300 cursor-pointer w-1/4 hover:bg-gray-700 hover:text-white" onClick={githubClick}>
        <button className="" href="https://github.com/alexbrandon3"> <img className='h-10 w-10' src={githubIcon} alt="github icon"></img></button>
        <p className="ml-1">GitHub</p>
      </div>
      <div className="flex items-center my-4 p-2 rounded-lg bg-gray-300 cursor-pointer w-1/4 hover:bg-gray-700 hover:text-white" onClick={linkedInClick}>
        <button className="" href="https://linkedin.com/in/alex-brandon-ab6045214"> <img className='h-10 w-10' src={linkedInIcon} alt="github icon"></img></button>
        <p className="ml-1">LinkedIn</p>
      </div>

    </div>
  );
}