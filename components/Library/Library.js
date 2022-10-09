import MusicPlayer from "../Collections/MusicPlayer";
import Header from "../Layout/Header/Header";
import Menu from "../Layout/Menu/Menu";

const Library = () => {
  return (
    <section className="bg-dark min-h-screen">
      <Menu />
      <Header />
      <MusicPlayer />
    </section>
  );
};

export default Library;
