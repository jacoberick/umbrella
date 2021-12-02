import { useState } from "react";
import Sketch from "react-p5";
import Info from "./Info";

const Canvas = () => {
  // returns random number between min and max params
  const getRandNum = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  // state that holds types and quantities of shapes to be painted on canvas
  const [values, setValues] = useState([
    { type: "circle", count: getRandNum(0, 10) },
    { type: "rectangle", count: getRandNum(0, 10) },
    { type: "line", count: getRandNum(0, 10) },
  ]);

  let width = window.innerWidth * 0.3;
  let height = window.innerHeight * 0.75;

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(width, height).parent(canvasParentRef);
    p5.noLoop();
    p5.noStroke();

    function windowResized() {
      p5.resizeCanvas(width, height);
    }

    window.addEventListener("resize", () => windowResized());
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
        let xCord = getRandNum(0, width);
        let yCord = getRandNum(0, height);
        let aCol = getRandCol();
        let bCol = getRandCol();
        let cCol = getRandCol();
        let dia = getRandNum(1, 25);
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
              getRandNum(0, 750),
              getRandNum(0, 1000),
              getRandNum(0, 750),
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
