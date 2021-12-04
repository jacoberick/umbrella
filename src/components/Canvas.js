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
    { type: "rectangle", count: 5000 },
    { type: "circle", count: getRandNum(0, 25) },
    { type: "line", count: getRandNum(0, 200) },
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

  const draw = (p5) => {
    p5.background("#121212");

    //circles
    values.forEach((x) => {
      for (let i = 0; i <= x.count; i++) {
        let xCord = getRandNum(0, canvasWidth);
        let yCord = getRandNum(0, canvasHeight);
        let wormXCord = getRandNum(0, canvasWidth);
        let rectWidth = getRandNum(5, 15);
        let rectHeight = getRandNum(20, 30);

        if (x.type === "rectangle") {
          p5.fill(
            getRandNum(0, 256),
            getRandNum(0, 256),
            getRandNum(0, 256)
          ).rect(xCord, yCord, rectWidth, rectHeight);
        } else if (x.type === "circle") {
          p5.fill("#fefefe").circle(
            getRandNum(0, canvasWidth),
            getRandNum(0, canvasHeight),
            getRandNum(30, 75)
          );
        } else if (x.type === "line") {
          p5.stroke("#121212")
            .strokeWeight(getRandNum(5, 10))
            .line(
              wormXCord,
              canvasHeight,
              wormXCord,
              getRandNum(0, canvasHeight)
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
