import React from "react";
import JavaScript from "../images/logos/JS-Logo.png";
import CSS from "../images/logos/CSS-Logo.png";
import HTML from "../images/logos/HTML-Logo.png";
import ReactLogo from "../images/logos/React-Logo.png";
import Tailwind from "../images/logos/Tailwind-Logo.png";
import Bootstrap from "../images/logos/Bootstrap-Logo.png";
import Python from "../images/logos/Python-Logo.png";
import SQLite from "../images/logos/SQLite-Logo.png";

function LogoCont() {
  return (
    <>
      <Logo src={JavaScript} alt="JavaScript" rating={4} />
      <Logo src={CSS} alt="CSS" rating={4} />
      <Logo src={HTML} alt="HTML" rating={5} />
      <Logo src={ReactLogo} alt="React" rating={3} />
      <Logo src={Tailwind} alt="Tailwind" rating={4} />
      <Logo src={Bootstrap} alt="Bootstrap" rating={4} />
      <Logo src={Python} alt="Python" rating={3} />
      <Logo src={SQLite} alt="SQLite" rating={3} />
    </>
  );
}

function Logo(props) {
  const handleEnter = (e) => {
    e.target.classList.replace("opacity-50", "opaciity-90");
    e.target.classList.add("scale-110");

    e.target.nextElementSibling.classList.replace("opacity-0", "opacity-100");
  };
  const handleLeave = (e) => {
    e.target.classList.replace("opaciity-90", "opacity-50");
    e.target.classList.remove("scale-110");

    e.target.nextElementSibling.classList.replace("opacity-100", "opacity-0");
  };

  const stars = [];
  for (let i = 0; i < 5; i++) {
    i < props.rating
      ? stars.push(
          <i
            key={props.alt + "star" + i}
            className="fa-solid fa-star fa-xs text-white"
          ></i>
        )
      : stars.push(
          <i
            key={props.alt + "star" + i}
            className="fa-solid fa-star fa-xs text-gray-600"
          ></i>
        );
  }

  return (
    <div className="w-[50px] lg:w-[100px] flex flex-col items-center gap-4 md:gap-6 lg:gap-8 font-bold text-sm md:text-lg lg:text-xl xl:text-2xl text-center">
      <img
        src={props.src}
        alt={props.alt}
        className={`opacity-50 duration-500`}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      ></img>
      <div
        key={"rating-cont"}
        className="flex flex-col gap-2 md:gap-4 opacity-0 duration-500"
      >
        <div>{props.alt}</div>
        <div className="flex gap-[2px] md:gap-2">{stars}</div>
      </div>
    </div>
  );
}

export default LogoCont;
