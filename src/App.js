import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import Footer from "./components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUmbrella } from "@fortawesome/free-solid-svg-icons";
import {
  faCreativeCommons,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

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
      <Footer
        FontAwesomeIcon={FontAwesomeIcon}
        faCreativeCommons={faCreativeCommons}
      />
    </div>
  );
};

export default App;
