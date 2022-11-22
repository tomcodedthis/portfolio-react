import React from "react";
import MTImg1 from "../images/site-previews/moneytools/MT-Img1.png";
import MTImg2 from "../images/site-previews/moneytools/MT-Img2.png";
import MTImg3 from "../images/site-previews/moneytools/MT-Img3.png";
import ToDoImg1 from "../images/site-previews/todo/ToDo-Img1.png";
import ToDoImg2 from "../images/site-previews/todo/ToDo-Img2.png";
import ToDoImg3 from "../images/site-previews/todo/ToDo-Img3.png";
import ChessImg1 from "../images/site-previews/chess/Chess-Img1.png";
import ChessImg2 from "../images/site-previews/chess/Chess-Img2.png";
import ChessImg3 from "../images/site-previews/chess/Chess-Img3.png";
import Project from "./Project";

function Work() {
  return (
    <div id="work-cont" className="bg-sec-prim-sec">
      <div className="flex flex-col items-center pt-12 md:pt-28 px-4 max-w-8xl mx-auto gap-8 sm:gap-12 lg:gap-14 xl:gap-32 duration-500">
        <Project
          title="Money Tools"
          description="Web-app for tracking investments, utilising APIs and storing data in a postgreSQL database."
          tags={["Python", "Flask", "PostgreSQL", "Jinja", "Bootstrap", "APIs"]}
          src1={MTImg1}
          src2={MTImg2}
          src3={MTImg3}
          site={"https://toolsformoney.herokuapp.com/"}
          code={"https://github.com/tomcodedthis/toolsformoney"}
          left={true}
        />

        <Project
          title="To-Do List"
          description="Web-app that stores To-Do tasks, utilising local storage with features including grouping, sorting and lock/unlock."
          tags={["JavaScript", "Local Storage", "Dark Mode", "CSS"]}
          src1={ToDoImg1}
          src2={ToDoImg2}
          src3={ToDoImg3}
          site={"https://tomcodedthis.github.io/odin-todolist/"}
          code={"https://github.com/tomcodedthis/odin-todolist"}
          left={false}
        />

        <Project
          title="Chess"
          description="Chess board that finds the fastest path from one square to another, utilising a Binary Search Tree algorithm."
          tags={["React", "Algorithms", "Tailwind", "CSS"]}
          src1={ChessImg1}
          src2={ChessImg2}
          src3={ChessImg3}
          site={"https://tomcodedthis.github.io/odin-knights-travail/"}
          code={"https://github.com/tomcodedthis/odin-knights-travail"}
          left={true}
        />
      </div>
    </div>
  );
}

export default Work;
