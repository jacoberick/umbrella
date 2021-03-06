const Info = () => {
  const umbrellaTag = (
    <span className="uppercase font-maven animate-rainbowFlash">umbrella</span>
  );

  const buttonStyles =
    "w-full mb-8 border-2 py-2 hover:shadow-hardline transition rounded-sm duration-200 border-gray-900 text-gray-900";

  const buttonPTags =
    "b850:text-sm b750:text-xs font-rbto uppercase text-base ";

  const descriptionStyle = "b850:text-sm b750:text-xs";

  const linkStyle = "text-blue-800 hover:underline";

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
    <div className="ml-10 b675:pl-0 text-gray-900 font-source max-w-xl b675:mt-6 b675:ml-0">
      <div className="">
        <h1 className="b1000:text-5xl b850:text-3xl b750:text-xl mb-8 b1000:mb-4">
          Welcome to {umbrellaTag}.
        </h1>
        <p className={descriptionStyle}>
          An experiment in generative art created by{" "}
          <a
            rel="noreferrer"
            className={`${linkStyle} uppercase`}
            href="https://gulaganthem.com"
            target="_blank"
          >
            gulag anthem
          </a>
          .
        </p>
        <p className={descriptionStyle}>
          Press the <span className="uppercase font-rbto">Generate</span> button
          to create an art piece through the {umbrellaTag} algorithm. No two
          generations are the same. Enjoy.
        </p>

        <p className={`${descriptionStyle} mt-4`}>
          Share your generations with{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/search?q=umbrellaNFT"
            className={`font-maven ${linkStyle}`}
          >
            #umbrellaNFT
          </a>
          .
        </p>
        <a href="https://opensea.io/collection/umbrella-code" target="_blank">
          <p
            className={`${descriptionStyle} ${linkStyle} inline-block mt-4 mb-8 b1000:mb-4`}
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
