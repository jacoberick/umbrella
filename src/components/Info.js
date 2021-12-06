const Info = () => {
  const umbrellaTag = (
    <span className="uppercase font-varela animate-rainbowFlash">umbrella</span>
  );

  const buttonStyles =
    "w-full mt-8 border-black border-2 py-2 rounded hover:bg-black hover:text-white transition";

  const descriptionStyle = "mt-4 b850:text-sm b750:text-xs";

  const buttonPTags = "b850:text-sm b750:text-xs";

  // better way to reset canvas needs to be made here
  const newCanvas = () => {
    window.location.reload();
  };

  const saveUmbrella = () => {
    const dlLink = document.getElementById("downloadLink");
    let cnv = document.getElementById("defaultCanvas0");
    dlLink.href = cnv.toDataURL("image/png");
  };

  return (
    <div className="pl-10 b675:pl-0 text-black font-noto max-w-xl b675:mt-12">
      <h1 className="b1000:text-2xl b750:text-xl">Welcome to {umbrellaTag}.</h1>
      <p className={descriptionStyle}>An experiment in generative art.</p>
      <p className={descriptionStyle}>
        Press the Generate button to create an art piece through the{" "}
        {umbrellaTag} algorithm.
      </p>
      <p className={`${descriptionStyle}`}>
        No two generations are the same. Enjoy.
      </p>
      <a href="/" target="_blank">
        <p
          className={`${descriptionStyle} text-blue-800 hover:underline inline-block`}
        >
          10 piece collection available on OpenSea.
        </p>
      </a>
      <button onClick={newCanvas} className={buttonStyles}>
        <p className={buttonPTags}>Generate</p>
      </button>
      <a id="downloadLink" href="/" onClick={saveUmbrella} download="umbrella">
        <button className={buttonStyles}>
          <p className={buttonPTags}>Download Image</p>
        </button>
      </a>
    </div>
  );
};

export default Info;
