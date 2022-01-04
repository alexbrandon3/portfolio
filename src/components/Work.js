import React from "react";
import Fitness from "./images/fitness.jpg";
import Budget from "./images/budget.png";
import ECommerce from "./images/eCommerce.jpg";
import Employee from "./images/employees.jpg";
import Notes from "./images/notes.jpg";
import Weather from "./images/weather.jpg";

export default function Work() {
  const buttons = [
    {
      id: 1,
      name: "Workout Tracker",
      href: "https://still-chamber-55192.herokuapp.com/?id=61b9271823b6fd00165104e2",
      src: Fitness,
      alt: "Fitness",
    },
    {
      id: 2,
      name: "Budget Tracker",
      href: "https://infinite-cove-15007.herokuapp.com/",
      src: Budget,
      alt: "Budget",
    },
    {
      id: 3,
      name: "eCommerce Backend",
      href: "https://github.com/alexbrandon3/e-commerce_backend",
      src: ECommerce,
      alt: "eCommerce",
    },
    {
      id: 4,
      name: "Employee Tracker",
      href: "https://github.com/alexbrandon3/employee-tracker",
      src: Employee,
      alt: "Employees",
    },
    {
      id: 5,
      name: "Note Taker",
      href: "https://alex-brandon-note-taker.herokuapp.com/",
      src: Notes,
      alt: "Notes",
    },
    {
      id: 6,
      name: "Weather Dashboard",
      href: "https://alexbrandon3.github.io/weather-dashboard/",
      src: Weather,
      alt: "Weather",
    },
  ];

  return (
    <div className="container mx auto flex place-content-center flex-wrap">
      {buttons.map((item) => (
        <div
          className={`w-1/3 h-72 rounded m-2 hover:bg-gray-300 bg-cover bg-video z-50 items-center justify-center cursor-pointer`}
        >
          <div
            className={`w-1/3 h-72 rounded hover:bg-opacity-75 hover:bg-gray-300 bg-cover bg-video z-50 absolute flex my-auto`}
          >
            <div
              className={`w-full h-full rounded opacity-0 flex hover:opacity-100 items-center justify-center my-auto`}
            >
              <h1 className="items-center justify-center">{item.name}</h1>
            </div>
          </div>
          <a href={item.href}>
            <img
              src={item.src}
              alt={item.alt}
              className="min-w-full min-h-full max-h-full rounded"
            />
          </a>
        </div>
      ))}
    </div>
  );
}
