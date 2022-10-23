const Album = () => {
  return (
    <>
      <div className="fixed z-0 -top-60 background min-h-[100vh] w-full"></div>
      <section className="relative z-[2] text-white  px-6">
        <div className="flex flex-col gap-6 md:flex-row">
          <img src="/images/Lead-image.png" className="rounded-3xl" />
          <div className="self-end">
            <h3 className="text-[#a4c7c6] font-bold text-2xl">
              Tomorrow's tunes
            </h3>
            <p className="max-w-[35rem] text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis
            </p>
            <p className="text-sm">64 songs - 16 hr+</p>

            <div className="mt-8 flex gap-2">
              <button className="bg-[#ffffff12] py-2 px-4 text-sm rounded-full">
                Play all
              </button>
              <button className="bg-[#ffffff12] py-2 px-4 text-sm rounded-full">
                Add to collection
              </button>
              <button className="bg-[#ffffff12] py-2 px-4 text-sm rounded-full">
                Heart
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Album;
