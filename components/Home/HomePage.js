import MusicPlayer from "../Collections/MusicPlayer";
import Header from "../Layout/Header/Header";
import Menu from "../Layout/Menu/Menu";

const HomePage = () => {
  return (
    <section className="bg-dark min-h-screen">
      <Header />
      <Menu />
      <section className="px-6">
        <div className="bg-blue flex justify-between rounded-3xl w-full h-[20rem] text-white relative overflow-hidden">
          <img
            className="absolute w-7/12 -top-2 rotate-12 left-[68%] -scale-x-100 md:hidden"
            src="/icons/spiral.svg"
          />
          <img
            className="hidden w-[27rem] absolute top-0 right-0 md:block"
            src="/icons/spiral.svg"
          />
          <div className="flex flex-col p-6 justify-between h-full">
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
          </div>
          <div className="hidden relative md:block">
            <img src="/images/demo.png" className="relative h-full -bottom-4" />
          </div>
        </div>
      </section>
      <MusicPlayer />
    </section>
  );
};

export default HomePage;
