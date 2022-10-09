const MusicPlayer = () => {
  return (
    <section className="absolute bottom-0 left-0 w-full py-4">
      <div className="container mx-auto flex justify-between item-center">
        <div>
          <img src="images/playing.png" />
          <div>
            <p>Seasons in</p>
            <p>James</p>
          </div>
        </div>
        <div>{/* <img src="/icons/shuffle.svg" className="" /> */}</div>
        <div></div>
      </div>
    </section>
  );
};

export default MusicPlayer;
