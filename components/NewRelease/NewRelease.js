import ScrollBar from "../Scrollbar/Scrollbar";

const NewRelease = () => {
  const NEW_RELEASE_LIST = [
    {
      title: "Life in bubble",
      artist: "Sean swadder",
      coverArt: "/images/Rectangle 14.png",
    },
    {
      title: "Mountain",
      artist: "Krisx",
      coverArt: "/images/Rectangle 15.png",
    },
    {
      title: "Limits",
      artist: "John Dillion",
      coverArt: "/images/Rectangle 16.png",
    },
    {
      title: "Everything's black",
      artist: "Ameed",
      coverArt: "/images/Rectangle 17.png",
    },
    {
      title: "GTomorrow's tune",
      artist: "Obi Datti",
      coverArt: "/images/Rectangle 18.png",
    },
    {
      title: "Life in bubble",
      artist: "Sean swadder",
      coverArt: "/images/Rectangle 19.png",
    },
    {
      title: "Mountain",
      artist: "Krisx",
      coverArt: "/images/Rectangle 20.png",
    },
    {
      title: "Limits",
      artist: "John Dillion",
      coverArt: "/images/Rectangle 16.png",
    },
    {
      title: "Everything's black",
      artist: "Ameed",
      coverArt: "/images/Rectangle 17.png",
    },
    {
      title: "GTomorrow's tune",
      artist: "Obi Datti",
      coverArt: "/images/Rectangle 18.png",
    },
  ];
  return <ScrollBar title="New releases." scrollItems={NEW_RELEASE_LIST} />;
};

export default NewRelease;
