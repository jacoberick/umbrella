import Sketch from "react-p5";

const Info = () => {
  const umbrellaTag = <span className="uppercase font-varela">umbrella</span>;

  const buttonStyles =
    "w-full mt-8 border-black border-2 py-2 rounded hover:border-white hover:text-white transition";

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
    <div className="ml-10 px-10 text-black font-noto max-w-xl">
      <h1>Welcome to {umbrellaTag}.</h1>
      <p className="mt-8">An experiment in generative art.</p>
      <p className="mt-4">
        Press the Generate button to create an art piece through the{" "}
        {umbrellaTag} algorithm.
      </p>
      <p className="mt-4">No two generations are the same. Enjoy.</p>
      <button onClick={newCanvas} className={buttonStyles}>
        <p className="text-base">Generate</p>
      </button>
      <a id="downloadLink" href="" onClick={saveUmbrella} download="umbrella">
        <button className={buttonStyles}>Download Image</button>
      </a>
    </div>
  );
};

export default Info;
