const Header = () => {
  return (
    <header className="bg-dark flex p-4 items-center gap-8 md:px-8">
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
    </header>
  );
};

export default Header;
