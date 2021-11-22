import { useState } from "react";
import Sketch from "react-p5";
import Info from "./Info";

const Canvas = () => {
  const [values, setValues] = useState({
    circle: {
      count: 5000,
    },
  });
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(750, 1000).parent(canvasParentRef);
  };

  const getRandNum = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const getRandCol = () => {
    return getRandNum(0, 256);
  };

  const draw = (p5) => {
    p5.background(0, 0, 0);

    //circles
    for (let i = 0; i <= values.circle.count; i++) {
      console.log(i);
      let xCord = getRandNum(0, 750);
      let yCord = getRandNum(0, 1000);
      let aCol = getRandCol();
      let bCol = getRandCol();
      let cCol = getRandCol();
      p5.fill(aCol, bCol, cCol).circle(xCord, yCord, 50);
    }
  };

  return (
    <div className="mx-auto max-w-7xl flex justify-center mt-20">
      <Sketch setup={setup} draw={draw} />
      <Info createUmbrella="" />
    </div>
  );
};

export default Canvas;
