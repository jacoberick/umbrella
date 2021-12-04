import "./App.css";
import Header from "./components/Header";
import Canvas from "./components/Canvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUmbrella } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  return (
    <div className="pb-28 bg-gray-200">
      <Header FontAwesomeIcon={FontAwesomeIcon} faUmbrella={faUmbrella} />
      <Canvas />
    </div>
  );
};

export default App;
