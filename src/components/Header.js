import React, { useState } from "react";

function Header() {
  let [screenWidth, setWidth] = useState(window.innerWidth);

  const setScreenWidth = () => {
    setWidth((screenWidth = window.innerWidth));
  };

  window.addEventListener("resize", setScreenWidth);

  return (
    <header className="fixed top-0 z-10 w-full bg-slate-900 font-semibold border-b-2 border-sky-900">
      <div className="flex items-center justify-between max-w-8xl mx-auto px-6">
        <div className="text-2xl py-4">tomcodedthis</div>

        {screenWidth >= 640 ? <NormalNav /> : <SmallNav />}
      </div>

      <DropdownNav />
    </header>
  );
}

function PageNav(props) {
  return (
    <button
      key={props.name}
      onClick={() => {
        document
          .getElementById(`${props.cont}`)
          .scrollIntoView({ behavior: "smooth" });
      }}
      className={"h-full p-4 uppercase hover:text-sky-500 duration-300"}
    >
      {props.name}
    </button>
  );
}

function NormalNav() {
  return (
    <div className="h-full flex">
      <PageNav name="about" cont={"about-cont"} />
      <PageNav name="work" cont={"work-cont"} />
      <PageNav name="connect" cont={"connect-cont"} />
    </div>
  );
}

function SmallNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className=" flex">
      <button
        key={"nav-bars"}
        onClick={(e) => {
          const dropdown = document.querySelector("#dropdown-cont");
          const elem = e.currentTarget;
          elem.classList.add("animate-[spin_400ms_linear_1]");

          setTimeout(() => {
            setOpen(open ? false : true);
            elem.classList.remove("animate-[spin_400ms_linear_1]");

            open ? hideDropdown(dropdown) : showDropdown(dropdown);
          }, 300);
        }}
        className={"h-full p-4 uppercase hover:text-sky-500 duration-300"}
      >
        <i className={`fa-solid ${open ? "fa-x" : "fa-bars"} fa-lg`} />
      </button>
    </div>
  );
}

function DropdownNav() {
  return (
    <div id="dropdown-cont" className="h-full hidden flex-col">
      <PageNav name="about" cont={"about-cont"} />
      <PageNav name="work" cont={"work-cont"} />
      <PageNav name="connect" cont={"connect-cont"} />
    </div>
  );
}

function showDropdown(dropdown) {
  dropdown.classList.remove("hidden");
  dropdown.classList.add("flex");
}

function hideDropdown(dropdown) {
  dropdown.classList.add("hidden");
  dropdown.classList.remove("flex");
}

export default Header;
