import Sketch from "react-p5";
import Info from "./Info";

const Canvas = () => {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(750, 1000).parent(canvasParentRef);
  };

  const draw = (p5) => {
    p5.background(0, 0, 0);
  };

  return (
    <div className="mx-auto max-w-7xl flex justify-center mt-20">
      <Sketch className="" setup={setup} draw={draw} />
      <Info />
    </div>
  );
};

export default Canvas;
