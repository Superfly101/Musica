const TopCharts = () => {
  const TOP_CHARTS = [
    {
      id: "1",
      title: "Golden age of 80s",
      artist: "Sean swadder",
      duration: "2:34:45",
      coverArt: "/images/cover-art.png",
    },
    {
      id: "2",
      title: 'Reggae "ng" blues',
      artist: "Dj Yk mule",
      duration: "1:02:42",
      coverArt: "/images/cover-art.png",
    },
    {
      id: "3",
      title: "GTomorrow's tune",
      artist: "Obi Datti",
      duration: "2:01:25",
      coverArt: "/images/cover-art.png",
    },
  ];

  return (
    <aside className=" w-full lg:max-w-[30rem]">
      <h3 className="text-white font-bold text-xl">Top charts</h3>
      <div className="overflow-x-auto whitespace-nowrap no-scrollbar">
        {TOP_CHARTS.map((song) => (
          <article
            className="my-3 mr-4 py-4 px-6 w-[85%] rounded-xl inline-flex justify-between bg-darkAlt text-white rounded-2xl md:w-full lx:flex md:items-center"
            key={song.id}
          >
            <div className="md:flex md:gap-4">
              <img src={song.coverArt} className="w-28 md:w-20" />
              <div className="flex flex-col justify-between gap-3 md:gap-0">
                <div>
                  <h3 className="text-md mt-3 md:mt-0">{song.title}</h3>
                  <p className="opacity-50 text-sm">{song.artist}</p>
                </div>
                <p className="text-sm">{song.duration}</p>
              </div>
            </div>
            <div>
              <div className="w-12 p-3 rounded-full border border-[#ffffff1c]">
                <img src="/icons/heart-icon.svg" className="w-full" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </aside>
  );
};

export default TopCharts;
