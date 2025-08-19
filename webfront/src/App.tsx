import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import { Portfolio } from "./components/Portfolio";
import ProjectsData from "./projects/ProjectsData";

function App() {
  return (
    <>
      <div id="main-app">
        <div className="smooth-scroll">
          <img
            src="/pc.png"
            alt="Top Right Image"
            className="image-top-right"
          />
          <Header />
          <Intro />
          <Portfolio projects={ProjectsData} />
          <img
            src="/clavier.png"
            alt="Bottom Left Image"
            className="image-bottom-left"
          />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
