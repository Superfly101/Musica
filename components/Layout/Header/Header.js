import { useState } from "react";
import SideMenu from "../Menu/SideMenu";

const Header = () => {
  const [showSideMenu, setShowSideMenu] = useState(false);

  const transform1 = showSideMenu
    ? "rotate-45 translate-x-1.48 translate-y-1.5"
    : "";
  const transform2 = showSideMenu
    ? "-rotate-45 translate-x-0.8 -translate-y-1"
    : "";
  const toggleSideMenu = () => {
    setShowSideMenu((prev) => !prev);
  };

  return (
    <>
      <header className="relative bg-transparent flex p-6 justify-between items-center gap-8 md:px-8">
        <div
          className="flex flex-col gap-2 md:hidden cursor-pointer relative z-50"
          onClick={toggleSideMenu}
        >
          <div
            className={`bg-light w-7 h-0.5 rounded-full transition-transform ${transform1}`}
          ></div>
          <div
            className={`bg-light w-7 h-0.5 rounded-full transition-transform ${transform2}`}
          ></div>
        </div>
        <div className="w-8">
          <img src="/icons/logo.png" className="w-full" />
        </div>
        <div className="hidden relative w-full items-center md:flex">
          <label htmlFor="search" className="absolute top-2.9 left-4">
            <img src="/icons/search.png" className="" />
          </label>
          <input
            id="search"
            type="text"
            placeholder="Search"
            className="py-2 px-12 bg-transparent w-full text-sm text-light"
          />
        </div>
        <div>
          {/* <img src="/icons/search.svg" className="w-6  md:hidden" /> */}
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="transparent"
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-light opacity-25 cursor-pointer hover:stroke-secondary hover:opacity-100 md:hidden"
          >
            <path
              d="M24.5 24.25L19.0625 18.8125M22 11.75C22 17.2728 17.5228 21.75 12 21.75C6.47715 21.75 2 17.2728 2 11.75C2 6.22715 6.47715 1.75 12 1.75C17.5228 1.75 22 6.22715 22 11.75Z"
              stroke=""
              strokeOpacity=""
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </header>
      <SideMenu className={showSideMenu ? "-translate-x-0" : null} />
    </>
  );
};

export default Header;
