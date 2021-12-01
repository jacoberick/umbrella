import { useEffect, useState } from "react";
import Sketch from "react-p5";
import Info from "./Info";

const Canvas = () => {
  let windowWidth = window.innerWidth;
  window.addEventListener("resize", () => (windowWidth = window.innerWidth));
  console.log(windowWidth);
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

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(750, 1000).parent(canvasParentRef);
    p5.noLoop();
    p5.noStroke();
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
        let xCord = getRandNum(0, 750);
        let yCord = getRandNum(0, 1000);
        let aCol = getRandCol();
        let bCol = getRandCol();
        let cCol = getRandCol();
        let dia = getRandNum(1, 100);
        if (x.type === "circle") {
          p5.fill(aCol, bCol, cCol).circle(xCord, yCord, dia);
        }
        if (x.type === "rectangle") {
          p5.fill(aCol, bCol, cCol).rect(xCord, yCord, dia);
        }
        if (x.type === "line") {
          p5.stroke("#fefefe")
            .strokeWeight(getRandNum(1, 50))
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
    <div className="mx-auto max-w-7xl flex justify-center mt-20">
      <Sketch className="px-10" setup={setup} draw={draw} />
      <Info />
    </div>
  );
};

export default Canvas;
