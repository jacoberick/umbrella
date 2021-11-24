import { useState } from "react";
import Sketch from "react-p5";
import Info from "./Info";

const Canvas = () => {
  const getRandNum = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const [values, setValues] = useState([
    { type: "circle", count: getRandNum(0, 10) },
    { type: "rectangle", count: getRandNum(0, 10) },
    { type: "line", count: getRandNum(0, 10) },
  ]);

  const createUmbrella = () => {
    window.location.reload();
  };

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(750, 1000).parent(canvasParentRef);
    p5.noLoop();
    p5.noStroke();
  };

  const getRandCol = () => {
    return getRandNum(0, 256);
  };

  const draw = (p5) => {
    p5.background("#fefefe");

    //circles
    values.forEach((x) => {
      for (let i = 0; i <= x.count; i++) {
        console.log(i);
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
          p5.stroke("#121212")
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
      <Sketch setup={setup} draw={draw} />
      <Info createUmbrella={createUmbrella} />
    </div>
  );
};

export default Canvas;
