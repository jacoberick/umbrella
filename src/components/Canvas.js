import Sketch from "react-p5";

const Canvas = () => {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(750, 1000).parent(canvasParentRef);
  };

  const draw = (p5) => {
    p5.background(0, 0, 0);
  };

  const umbrellaTag = (
    <span className="uppercase font-varela text-yellow-300">umbrella</span>
  );

  return (
    <div className="mx-auto max-w-7xl flex justify-center mt-20">
      <Sketch className="" setup={setup} draw={draw} />
      <div className="ml-20 text-white font-noto">
        <h1>Welcome to {umbrellaTag}.</h1>
        <p className="mt-8">An experiment in generative art.</p>
        <p className="mt-4">
          Press the Generate button to create an art piece through the{" "}
          {umbrellaTag} algorithm.
        </p>
        <p className="mt-4">No two generations are the same. Enjoy.</p>
        <button className="w-full mt-8 border-white border-2 py-2 rounded hover:border-yellow-300 hover:text-yellow-300 transition">
          <p className="text-base">Generate</p>
        </button>
      </div>
    </div>
  );
};

export default Canvas;
