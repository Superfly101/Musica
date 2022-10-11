import Layout from "../Layout/Layout";

const HomePage = () => {
  const TOP_CHARTS = [
    {
      title: "Golden age of 80s",
      artist: "Sean swadder",
      duration: "2:34:45",
      coverArt: "/images/cover-art.png",
    },
    {
      title: 'Reggae "ng" blues',
      artist: "Dj Yk mule",
      duration: "1:02:42",
      coverArt: "/images/cover-art.png",
    },
    {
      title: "GTomorrow's tune",
      artist: "Obi Datti",
      duration: "2:01:25",
      coverArt: "/images/cover-art.png",
    },
  ];

  return (
    <section className="px-6 flex justify-between gap-8">
      <div className="bg-blue flex justify-between rounded-3xl w-full h-[20rem] text-white relative overflow-hidden max-w-2xl">
        <img
          className="absolute w-7/12 -top-2 rotate-12 left-[68%] -scale-x-100 md:hidden"
          src="/icons/spiral.svg"
        />
        <img
          className="hidden w-[27rem] absolute top-0 right-0 md:block"
          src="/icons/spiral.svg"
        />
        <section className="flex flex-col p-6 justify-between h-full">
          <p className="text-sm">Currated playlist</p>
          <div>
            <div>
              <h2 className="text-4xl font-bold">R & B Hits</h2>
              <p className="text-sm">
                All mine, Lie again, Petty call me everyday, <br />
                Out of time, No love, Bad habit, <br />
                and so much more
              </p>
            </div>
            <div className="flex items-center gap-8 mt-8">
              <div className="flex -space-x-3">
                <img
                  src="/images/people.jpg"
                  className="w-8 rounded-full shadow-[-3.4px_0px_3.4px_rgba(0,0,0,0.1)]"
                />
                <img
                  src="/images/people.jpg"
                  className="w-8 rounded-full shadow-[-3.4px_0px_3.4px_rgba(0,0,0,0.1)]"
                />
                <img
                  src="/images/people.jpg"
                  className="w-8 rounded-full shadow-[-3.4px_0px_3.4px_rgba(0,0,0,0.1)]"
                />
                <img
                  src="/images/people.jpg"
                  className="w-8 rounded-full shadow-[-3.4px_0px_3.4px_rgba(0,0,0,0.1)]"
                />
              </div>

              <div>
                <p className="text-xl">33k Likes</p>
              </div>
            </div>
          </div>
        </section>
        <section className="hidden relative md:block">
          <img src="/images/demo.png" className="relative h-full -bottom-4" />
        </section>
      </div>
      <aside className="hidden w-full lg:block">
        <h3 className="text-white font-bold text-3xl">Top charts</h3>
        <div>
          {TOP_CHARTS.map((song) => (
            <article className="p-4 rounded-xl flex bg-darkAlt my-3 rounded-2xl">
              <img src={song.coverArt} />
              <div className="text-white ml-6">
                <h3 className="text-md">{song.title}</h3>
                <p className="opacity-50">{song.artist}</p>
                <p className="">{song.duration}</p>
              </div>
            </article>
          ))}
        </div>
      </aside>
    </section>
  );
};

export default HomePage;
