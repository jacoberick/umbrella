import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import Footer from "./components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUmbrella } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

const App = () => {
  return (
    <div className=" bg-gray-200 ">
      <Header FontAwesomeIcon={FontAwesomeIcon} faUmbrella={faUmbrella} />
      <Main />
      <About
        FontAwesomeIcon={FontAwesomeIcon}
        faInstagram={faInstagram}
        faTwitter={faTwitter}
      />
      <Footer />
    </div>
  );
};

export default App;
