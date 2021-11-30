import "./App.css";
import Header from "./components/Header";
import Canvas from "./components/Canvas";

const App = () => {
  return (
    <div className="h-screen bg-gray-300">
      <Header />
      <Canvas />
    </div>
  );
};

export default App;
