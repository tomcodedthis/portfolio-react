import React from "react";

function Header() {
  return (
    <header className="fixed top-0 z-10 w-full bg-slate-900 font-semibold border-b-2 border-sky-900">
      <div className="flex items-end justify-between max-w-8xl mx-auto px-6">
        <div className="text-2xl py-4">tomcodedthis</div>

        <div className="h-full flex">
          <PageNav name="about" link="./about" />
          <PageNav name="work" link="./work" />
          <PageNav name="connect" link="./connect" />
        </div>
      </div>
    </header>
  );
}

function PageNav(props) {
  return (
    <button
      key={props.name}
      onClick={() => console.log(props.link)}
      className={"h-full p-4 uppercase hover:text-sky-500"}
    >
      {props.name}
    </button>
  );
}

export default Header;
