import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import { Portfolio } from "./components/Portfolio";
import ProjectsData from "./projects/ProjectsData";
import ImageWithFallback from "./components/ImageWithFallback";
import SEO from "./components/SEO";
function App() {
  return (
    <>
      <SEO />
      <div id="main-app">
        <div className="smooth-scroll">
          <ImageWithFallback
            src="/pc.png"
            alt="Decorative computer illustration"
            className="image-top-right"
            showSkeleton={false}
            lazy={false}
          />
          <Header />
          <Intro />
          <Portfolio projects={ProjectsData} />
          <ImageWithFallback
            src="/clavier.png"
            alt="Decorative keyboard illustration"
            className="image-bottom-left"
            showSkeleton={false}
            lazy={false}
          />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
