import { useState } from "react";
import Sketch from "react-p5";
import Info from "./Info";

const Canvas = () => {
  let canvasWidth = window.innerWidth * 0.3;
  let canvasHeight = canvasWidth + canvasWidth * 0.4;

  // returns random number between min and max params
  const getRandNum = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  // state that holds types and quantities of shapes to be painted on canvas
  const [values, setValues] = useState([
    { type: "circle", count: getRandNum(0, 25) },
    { type: "rectangle", count: getRandNum(0, 25) },
    { type: "line", count: getRandNum(0, 25) },
  ]);

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(canvasWidth, canvasHeight).parent(canvasParentRef);
    p5.noLoop();
    p5.noStroke();

    function windowResized() {
      p5.resizeCanvas(canvasWidth, canvasHeight);
      p5.noStroke();
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth > 1500 && canvasWidth !== window.innerWidth * 0.3) {
        canvasWidth = window.innerWidth * 0.3;
        canvasHeight = canvasWidth + canvasWidth * 0.4;
        windowResized();
      }
    });
  };

  // returns random number between 0 and 256
  const getRandCol = () => {
    return getRandNum(0, 256);
  };

  const draw = (p5) => {
    p5.background("#121212");

    //circles
    values.forEach((x) => {
      for (let i = 0; i <= x.count; i++) {
        let xCord = getRandNum(0, canvasWidth);
        let yCord = getRandNum(0, canvasHeight);
        let aCol = getRandCol();
        let bCol = getRandCol();
        let cCol = getRandCol();
        let dia = getRandNum(1, 55);
        if (x.type === "circle") {
          p5.fill(aCol, bCol, cCol).circle(xCord, yCord, dia);
        }
        if (x.type === "rectangle") {
          p5.fill(aCol, bCol, cCol).rect(xCord, yCord, dia);
        }
        if (x.type === "line") {
          p5.stroke("#fefefe")
            .strokeWeight(getRandNum(1, 10))
            .line(
              getRandNum(0, canvasWidth),
              getRandNum(0, canvasHeight),
              getRandNum(0, canvasWidth),
              getRandNum(0, 1000)
            );
        }
      }
    });
  };

  return (
    <div className="mx-auto max-w-7xl flex justify-center mt-14">
      <Sketch className="px-10" setup={setup} draw={draw} />
      <Info />
    </div>
  );
};

export default Canvas;
