import Sketch from "react-p5";
import { useState } from "react";

const Canvas = () => {
  let canvasWidth =
    window.innerWidth > 675 ? window.innerWidth * 0.3 : window.innerWidth * 0.9;
  let canvasHeight = canvasWidth + canvasWidth * 0.4;

  // returns random number between min and max params
  const getRandNum = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  // state that holds types and quantities of shapes to be painted on canvas
  const [values] = useState([
    { type: "glitch", count: 100000 },
    { type: "tower", count: getRandNum(50, 500) },
    { type: "star", count: getRandNum(50, 125) },
  ]);

  const setup = (p5, canvasParentRef) => {
    p5.pixelDensity(10);
    p5.createCanvas(canvasWidth, canvasHeight).parent(canvasParentRef);
    p5.noLoop();
    p5.noStroke();

    const windowResized = () => {
      p5.resizeCanvas(canvasWidth, canvasHeight);
      p5.noStroke();
    };

    window.addEventListener("resize", () => {
      if (canvasWidth !== window.innerWidth * 0.3) {
        canvasWidth =
          window.innerWidth > 675
            ? window.innerWidth * 0.3
            : window.innerWidth * 0.9;
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
        let towerStrokeStart = canvasWidth * 0.01157;
        let towerStrokeEnd = towerStrokeStart * 2;
        let rectWidth = 2;
        let rectHeight = 4;

        if (x.type === "glitch") {
          p5.fill(
            getRandNum(0, 256),
            getRandNum(0, 256),
            getRandNum(0, 256)
          ).rect(xCord, yCord, rectWidth, rectHeight);
        } else if (x.type === "tower") {
          p5.stroke("rgba(0, 0, 0, .8)")
            .strokeWeight(getRandNum(towerStrokeStart, towerStrokeEnd))
            .line(towerXCord, 0, towerXCord, getRandNum(0, canvasHeight));
        } else if (x.type === "star") {
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

  return <Sketch className="pr-10 b675:pr-0" setup={setup} draw={draw} />;
};

export default Canvas;
