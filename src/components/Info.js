const Info = () => {
  const umbrellaTag = (
    <span className="uppercase font-maven animate-rainbowFlash">umbrella</span>
  );

  const buttonStyles =
    "w-full mb-8 border-2 py-2 hover:shadow-hardline transition rounded-sm duration-200 border-black text-black";

  const descriptionStyle = "b850:text-sm b750:text-xs";

  const buttonPTags = "b850:text-sm b750:text-xs font-source uppercase";

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
    <div className="ml-10 b675:pl-0 text-black font-source max-w-xl b675:mt-6">
      <div className="">
        <h1 className="b1000:text-2xl b750:text-xl mb-8">
          Welcome to {umbrellaTag}.
        </h1>
        <p className={descriptionStyle}>
          An experiment in generative art created by{" "}
          <a
            className="text-blue-800 hover:underline uppercase"
            href="https://gulaganthem.com"
            target="_blank"
          >
            gulag anthem
          </a>
          .
        </p>
        <p className={descriptionStyle}>
          Press the <span className="uppercase">Generate</span> button to create
          an art piece through the {umbrellaTag} algorithm. No two generations
          are the same. Enjoy.
        </p>
        <a href="/" target="_blank">
          <p
            className={`${descriptionStyle} text-blue-800 hover:underline inline-block my-8`}
          >
            10 piece NFT collection available on OpenSea.
          </p>
        </a>
      </div>

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
