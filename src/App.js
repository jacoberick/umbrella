import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUmbrella } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  return (
    <div className="pb-28 bg-gray-200 ">
      <Header FontAwesomeIcon={FontAwesomeIcon} faUmbrella={faUmbrella} />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
