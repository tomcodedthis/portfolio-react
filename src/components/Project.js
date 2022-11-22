import React from "react";
import ImageCarousel from "./Image-Carousel";

function Project(props) {
  const tags = props.tags.map((name, index) => {
    return <Tag name={name} index={index} key={name + index} />;
  });

  return (
    <div
      className={`w-[90%] h-full grid ${
        props.left ? "lg:grid-cols-[40%_60%]" : "lg:grid-cols-[60%_40%]"
      } items-center gap-4 sm:gap-12 lg:gap-12`}
    >
      <div
        className={`order-1 ${
          props.left ? "lg:order-1" : "lg:order-2"
        } flex flex-col items-center lg:items-start text-center lg:text-left gap-4 xl:gap-6 text-2xl md:text-4xl xl:text-5xl font-bold`}
      >
        <div className="flex whitespace-nowrap justify-between items-center gap-4">
          <div>{props.title}</div>
        </div>

        <div className="text-lg md:text-2xl xl:text-3xl font-medium">
          {props.description}
        </div>

        <div className="w-full flex flex-col sm:flex-row flex-nowrap md:flex-wrap justify-center xl:justify-end items-center gap-4 md:gap-8">
          <div className="flex flex-wrap 2xl:flex-nowrap justify-center gap-2">
            {tags}
          </div>
          <div className="flex gap-4">
            <LinkBtn title={props.title} name="Site" link={props.site} />
            <LinkBtn title={props.title} name="Code" link={props.code} />
          </div>
        </div>
      </div>

      <ImageCarousel
        title={props.title}
        src1={props.src1}
        src2={props.src2}
        src3={props.src3}
        left={props.left}
      />
    </div>
  );
}

function Tag(props) {
  return (
    <div className="h-fit text-xs lg:text-sm py-2 px-4 rounded-2xl bg-slate-700">
      {props.name}
    </div>
  );
}

function LinkBtn(props) {
  return (
    <a
      href={props.link}
      key={props.title + props.name}
      target={"_blank"}
      rel="noreferrer"
    >
      <button className="flex items-center gap-2 py-2 px-4 text-xs md:text-sm lg:text-lg rounded-lg text-black select-none bg-slate-200 hover:bg-slate-300 duration-500">
        {props.name}
        <i
          className={`fa-solid fa-${
            props.name === "Site" ? "window-maximize" : "code"
          }`}
        ></i>
      </button>
    </a>
  );
}

export default Project;
