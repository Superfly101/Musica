import MusicPlayer from "../Collections/MusicPlayer";
import Header from "../Layout/Header/Header";
import Menu from "../Layout/Menu/Menu";

const HomePage = () => {
  return (
    <section className="bg-dark min-h-screen">
      <Header />
      <Menu />
      <MusicPlayer />
    </section>
  );
};

export default HomePage;
