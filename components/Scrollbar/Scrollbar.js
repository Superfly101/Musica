const ScrollBar = ({ title, scrollItems }) => {
  return (
    <div className="text-white p-6">
      <h3 className="text-xl font-bold">{title}</h3>
      <div className="mt-4 overflow-x-auto whitespace-nowrap no-scrollbar">
        {scrollItems.map((item, index) => (
          <div key={index} className="inline-flex flex-col mr-6">
            <img src={item.coverArt} className="w-36 rounded-2xl mb-2" />
            <p>{item.title}</p>
            <small className="opacity-50">{item.artist}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollBar;
