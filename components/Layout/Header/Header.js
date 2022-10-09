import { useState } from "react";

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
    <header className="bg-dark flex p-6 justify-between items-center gap-8 md:px-8">
      <div>
        <img src="/icons/logo.png" />
      </div>
      <div className="hidden relative w-full items-center md:flex">
        <label htmlFor="search" className="absolute top-2.9 left-4">
          <img src="/icons/search.png" className="" />
        </label>
        <input
          id="search"
          type="text"
          placeholder="Search"
          className="py-2 px-12 bg-dark w-full text-sm text-light"
        />
      </div>
      {/* <div className="flex flex-col gap-2 md:hidden superfly hamburger">
        <div className="bg-light w-6 h-0.5 rounded-full "></div>
        <div className="bg-light w-6 h-0.5 rounded-full "></div>
      </div> */}

      <div
        className="flex flex-col gap-2 md:hidden cursor-pointer"
        onClick={toggleSideMenu}
      >
        <div
          className={`bg-light w-7 h-0.5 rounded-full transition-transform ${transform1}`}
        ></div>
        <div
          className={`bg-light w-7 h-0.5 rounded-full transition-transform ${transform2}`}
        ></div>
      </div>
    </header>
  );
};

export default Header;
