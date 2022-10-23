const MusicPlayer = () => {
  return (
    <section className="fixed z-20 bottom-0 left-0 w-full py-4 md:py-6 px-4 md:px-12 drop-shadow-3xl backdrop-blur-lg bg-backdrop border border-fadedGray">
      <div className="flex justify-between items-center gap-8 fill-light">
        <div className="flex text-light items-center gap-4">
          <img src="/images/playing.png" className="w-14 h-14 rounded-lg" />
          <div className="flex flex-col justify-around min-w-max">
            <p className="font-bold">Seasons in</p>
            <small className="font-bold opacity-50">James</small>
          </div>
        </div>
        <div className="flex flex-col gap-7 md:w-4/6">
          <div className="flex justify-center items-center gap-4 sm:gap-8">
            <svg
              className="hidden w-5 h-5 md:block"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Shuffle</title>
              <path d="M14.5 12.7593C14.5 12.746 14.4933 12.7327 14.4933 12.7193C14.4867 12.666 14.48 12.6127 14.46 12.566C14.4333 12.506 14.4 12.4593 14.36 12.4127C14.36 12.4127 14.36 12.406 14.3533 12.406C14.3067 12.3593 14.2533 12.326 14.1933 12.2993C14.1333 12.2727 14.0667 12.2593 14 12.2593L10.8867 12.2727C10.8867 12.2727 10.8867 12.2727 10.88 12.2727C10.48 12.2727 10.0933 12.086 9.85332 11.766L9.03999 10.7193C8.87332 10.4993 8.55998 10.4593 8.33998 10.6327C8.11998 10.806 8.07999 11.1127 8.25332 11.3327L9.06665 12.3793C9.49999 12.9393 10.18 13.2727 10.8867 13.2727H10.8933L12.7933 13.266L12.32 13.7393C12.1267 13.9327 12.1267 14.2527 12.32 14.446C12.42 14.546 12.5467 14.5927 12.6733 14.5927C12.8 14.5927 12.9267 14.546 13.0267 14.446L14.36 13.1127C14.4067 13.066 14.44 13.0127 14.4667 12.9527C14.4867 12.886 14.5 12.8193 14.5 12.7593Z" />
              <path d="M5.61333 5.23265C5.18 4.63265 4.48667 4.27932 3.74667 4.27932C3.74 4.27932 3.74 4.27932 3.73333 4.27932L2 4.28598C1.72667 4.28598 1.5 4.51265 1.5 4.78598C1.5 5.05932 1.72667 5.28598 2 5.28598L3.74 5.27932H3.74667C4.16667 5.27932 4.56 5.47932 4.8 5.81932L5.52 6.81932C5.62 6.95265 5.77333 7.02598 5.92667 7.02598C6.02667 7.02598 6.13333 6.99265 6.22 6.93265C6.44667 6.76598 6.49333 6.45265 6.33333 6.23265L5.61333 5.23265Z" />
              <path d="M14.4933 4.82598C14.4933 4.81264 14.5 4.79931 14.5 4.79264C14.5 4.72598 14.4867 4.65931 14.46 4.59931C14.4333 4.53931 14.4 4.48598 14.3533 4.43931L13.02 3.10598C12.8267 2.91264 12.5067 2.91264 12.3133 3.10598C12.12 3.29931 12.12 3.61931 12.3133 3.81264L12.7867 4.28598L10.9667 4.27931C10.96 4.27931 10.96 4.27931 10.9533 4.27931C10.1867 4.27931 9.46667 4.65931 9.04 5.30598L4.78 11.6926C4.54 12.0526 4.13333 12.2726 3.7 12.2726H3.69333L2 12.2593C1.72667 12.2593 1.5 12.4793 1.5 12.7593C1.5 13.0326 1.72 13.2593 2 13.2593L3.7 13.266C3.70667 13.266 3.70667 13.266 3.71333 13.266C4.48667 13.266 5.2 12.886 5.62667 12.2393L9.88667 5.85264C10.1267 5.49264 10.5333 5.27264 10.9667 5.27264H10.9733L14 5.28598C14.0667 5.28598 14.1267 5.27264 14.1933 5.24598C14.2533 5.21931 14.3067 5.18598 14.3533 5.13931C14.3533 5.13931 14.3533 5.13264 14.36 5.13264C14.4 5.08598 14.44 5.03931 14.46 4.97931C14.48 4.93264 14.4867 4.87931 14.4933 4.82598Z" />
            </svg>

            <svg
              className="hidden w-5 h-5 md:block"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill=""
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Previous</title>
              <path d="M13.4933 5.58598V11.966C13.4933 13.2726 12.0733 14.0926 10.94 13.4393L8.17333 11.846L5.40666 10.246C4.27333 9.59264 4.27333 7.95931 5.40666 7.30598L8.17333 5.70598L10.94 4.11264C12.0733 3.45931 13.4933 4.27264 13.4933 5.58598Z" />
              <path d="M2.50667 13.3926C2.23334 13.3926 2.00667 13.166 2.00667 12.8926V4.65265C2.00667 4.37932 2.23334 4.15265 2.50667 4.15265C2.78001 4.15265 3.00667 4.37932 3.00667 4.65265V12.8926C3.00667 13.166 2.78001 13.3926 2.50667 13.3926Z" />
            </svg>

            <div className="py-[10px] px-[12px] flex items-center bg-secondary rounded-full shadow-[0px_0px_18px_rgba(255,255,255,0.3)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="w-2 fill-white"
              >
                <title>Play</title>
                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
              </svg>
            </div>

            <svg
              className="w-5 h-5"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill=""
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Next</title>
              <path d="M2.50666 5.58598V11.966C2.50666 13.2726 3.92666 14.0926 5.06 13.4393L7.82666 11.846L10.5933 10.246C11.7267 9.59264 11.7267 7.95931 10.5933 7.30598L7.82666 5.70598L5.06 4.11264C3.92666 3.45931 2.50666 4.27264 2.50666 5.58598Z" />
              <path d="M13.4933 13.3926C13.22 13.3926 12.9933 13.166 12.9933 12.8926V4.65265C12.9933 4.37932 13.22 4.15265 13.4933 4.15265C13.7667 4.15265 13.9933 4.37932 13.9933 4.65265V12.8926C13.9933 13.166 13.7733 13.3926 13.4933 13.3926Z" />
            </svg>

            <svg
              className="hidden w-5 h-5 md:block"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill=""
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Repeat</title>
              <path d="M2.60667 12.226C2.48 12.226 2.35333 12.1793 2.25333 12.0793C1.34 11.1593 0.833333 9.94597 0.833333 8.6593C0.833333 5.98597 3 3.81264 5.66667 3.81264L9.71333 3.82597L8.98667 3.13264C8.78667 2.9393 8.78 2.62597 8.97333 2.42597C9.16667 2.22597 9.48 2.2193 9.68 2.41264L11.3067 3.97264C11.4533 4.11264 11.5 4.33264 11.4267 4.5193C11.3533 4.70597 11.1667 4.83264 10.96 4.83264L5.66667 4.8193C3.55333 4.8193 1.83333 6.54597 1.83333 8.66597C1.83333 9.68597 2.23333 10.6526 2.96 11.3793C3.15333 11.5726 3.15333 11.8926 2.96 12.086C2.86 12.1793 2.73333 12.226 2.60667 12.226Z" />
              <path d="M6.66667 15.2726C6.54 15.2726 6.42 15.226 6.32 15.1326L4.69333 13.5726C4.54667 13.4326 4.5 13.2126 4.57333 13.026C4.65333 12.8393 4.84 12.7393 5.04 12.7126L10.34 12.726C12.4533 12.726 14.1733 10.9993 14.1733 8.87931C14.1733 7.85931 13.7733 6.89264 13.0467 6.16598C12.8533 5.97264 12.8533 5.65264 13.0467 5.45931C13.24 5.26598 13.56 5.26598 13.7533 5.45931C14.6667 6.37931 15.1733 7.59264 15.1733 8.87931C15.1733 11.5526 13.0067 13.726 10.34 13.726L6.29333 13.7126L7.02 14.406C7.22 14.5993 7.22667 14.9126 7.03333 15.1126C6.92667 15.2193 6.8 15.2726 6.66667 15.2726Z" />
              <path d="M8.16667 11.0527C7.89333 11.0527 7.66667 10.826 7.66667 10.5527V8.29265L7.54 8.43265C7.35333 8.63932 7.04 8.65265 6.83333 8.47265C6.62667 8.29265 6.61333 7.97265 6.79333 7.76598L7.79333 6.65265C7.93333 6.49932 8.15333 6.44598 8.34667 6.51932C8.54 6.59932 8.66667 6.77932 8.66667 6.99265V10.5593C8.66667 10.8326 8.44 11.0527 8.16667 11.0527Z" />
            </svg>
          </div>
          <div className="hidden relative md:block">
            <div className="bg-fadedGray rounded-full overflow-hidden">
              <div
                className="bg-secondary w-1/2 h-1"
                role="progressbar"
                aria-label="music progress"
                aria-valuenow="1456"
                aria-valuemin="0"
                aria-valuemax="4550"
              ></div>
            </div>
            <div className="ring-white ring-2 absolute left-1/2 top-1/2 w-4 h-4 -mt-2 -ml-2 flex items-center justify-center bg-transparent rounded-full shadow">
              <div className="w-3 h-3 bg-secondary rounded-full ring-1 ring-inset ring-slate-900/5"></div>
            </div>
          </div>
        </div>
        <div className="hidden items-center gap-2 md:flex">
          <svg
            className="w-5 h-5"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill=""
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Volume</title>
            <path d="M13.5 12.5625C13.38 12.5625 13.2675 12.525 13.1625 12.45C12.915 12.2625 12.8625 11.91 13.05 11.6625C14.2275 10.095 14.2275 7.90499 13.05 6.33749C12.8625 6.08999 12.915 5.73749 13.1625 5.54999C13.41 5.36249 13.7625 5.41499 13.95 5.66249C15.42 7.62749 15.42 10.3725 13.95 12.3375C13.8375 12.4875 13.6725 12.5625 13.5 12.5625Z" />
            <path d="M14.8725 14.4375C14.7525 14.4375 14.64 14.4 14.535 14.325C14.2875 14.1375 14.235 13.785 14.4225 13.5375C16.425 10.8675 16.425 7.13249 14.4225 4.46249C14.235 4.21499 14.2875 3.86249 14.535 3.67499C14.7825 3.48749 15.135 3.53999 15.3225 3.78749C17.625 6.85499 17.625 11.145 15.3225 14.2125C15.2175 14.3625 15.045 14.4375 14.8725 14.4375Z" />
            <path d="M10.515 2.83501C9.675 2.37001 8.6025 2.49001 7.5075 3.17251L5.3175 4.54501C5.1675 4.63501 4.995 4.68751 4.8225 4.68751H4.125H3.75C1.935 4.68751 0.9375 5.68501 0.9375 7.50001V10.5C0.9375 12.315 1.935 13.3125 3.75 13.3125H4.125H4.8225C4.995 13.3125 5.1675 13.365 5.3175 13.455L7.5075 14.8275C8.1675 15.24 8.8125 15.4425 9.4125 15.4425C9.8025 15.4425 10.1775 15.3525 10.515 15.165C11.3475 14.7 11.8125 13.7325 11.8125 12.4425V5.55751C11.8125 4.26751 11.3475 3.30001 10.515 2.83501Z" />
          </svg>
          <div className="w-32 bg-fadedGray rounded-full truncate">
            <div className="h-[3px] w-2/5 bg-secondary"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicPlayer;
