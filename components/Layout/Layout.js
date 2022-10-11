import MusicPlayer from "../Collections/MusicPlayer";
import Header from "./Header/Header";
import Menu from "./Menu/Menu";

const Layout = (props) => {
  return (
    <div className="bg-dark min-h-screen">
      <Header />
      <Menu />
      <main className="md:pl-20">{props.children}</main>
      <MusicPlayer />
    </div>
  );
};

export default Layout;
