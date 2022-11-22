import React from "react";
import AvatarImg from "../images/avatar-560.png";
import LogoCont from "./Logos";

function About() {
  return (
    <div id="about-cont" className="bg-prim-sec">
      <div className="flex flex-col items-center pt-24 md:pt-32 px-6 md:px-16 max-w-8xl mx-auto gap-8 lg:gap-16 duration-500">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          <Avatar src={AvatarImg} alt="Avatar" />
          <AboutText />
        </div>
        <div
          id="logo-scroll-cont"
          className="w-[calc(100vw-1rem)] 2xl:w-full h-fit overflow-hidden"
        >
          <div className="flex gap-12 lg:gap-14 p-4 w-[calc(50px*16)] lg:w-[calc(100px*16)] animate animate-revolve-small lg:animate-revolve-large">
            <LogoCont />
            <LogoCont />
          </div>
        </div>
      </div>
    </div>
  );
}

function Avatar(props) {
  return (
    <img
      src={props.src}
      alt={props.alt}
      className="max-w-[60%] sm:max-w-xs lg:max-w-sm duration-500"
    />
  );
}

function AboutText() {
  return (
    <div className="flex flex-col gap-6 md:gap-12 xl:gap-14 text-center text-2xl md:text-3xl xl:text-4xl">
      <div className="leading-normal sm:text-left">
        <strong>Hi, i'm Tom.</strong> I develop modern, powerful and responsive
        websites.
      </div>

      <div className="w-full text-xl md:text-3xl xl:text-3xl sm:text-right">
        <i>"Learning never exhausts the mind."</i>
      </div>
    </div>
  );
}

export default About;
