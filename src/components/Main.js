import Info from "./Info";
import Canvas from "./Canvas";

const Main = () => {
  return (
    <div
      id="mainContainer"
      className="mx-auto flex justify-center mt-14 px-20 b675:flex-col b675:items-center b675:px-6 b675:mt-8"
    >
      <Canvas />
      <Info />
    </div>
  );
};

export default Main;
