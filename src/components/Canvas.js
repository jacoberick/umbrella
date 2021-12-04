import { useState } from "react";
import Sketch from "react-p5";
import Info from "./Info";

const Canvas = () => {
  let canvasWidth = window.innerWidth > 1500 ? window.innerWidth * 0.3 : 450;
  let canvasHeight = canvasWidth + canvasWidth * 0.4;

  // returns random number between min and max params
  const getRandNum = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  // state that holds types and quantities of shapes to be painted on canvas
  const [values] = useState([
    { type: "rectangle", count: 5000 },
    { type: "line", count: getRandNum(50, 250) },
    { type: "circle", count: getRandNum(50, 125) },
  ]);

  const setup = (p5, canvasParentRef) => {
    p5.pixelDensity(10);
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
        let towerXCord = getRandNum(0, canvasWidth);
        let rectWidth = getRandNum(5, 15);
        let rectHeight = getRandNum(20, 30);

        if (x.type === "rectangle") {
          p5.fill(
            getRandNum(0, 256),
            getRandNum(0, 256),
            getRandNum(0, 256)
          ).rect(xCord, yCord, rectWidth, rectHeight);
        } else if (x.type === "line") {
          p5.stroke("rgba(0, 0, 0, .75)")
            .strokeWeight(getRandNum(5, 10))
            .line(towerXCord, 0, towerXCord, getRandNum(0, canvasHeight));
        } else if (x.type === "circle") {
          p5.fill("rgba(255, 255, 255, .75)")
            .strokeWeight(0)
            .circle(
              getRandNum(0, canvasWidth),
              getRandNum(0, canvasHeight * 0.75),
              1.5
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
