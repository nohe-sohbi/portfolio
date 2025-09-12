import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import { Portfolio } from "./components/Portfolio";
import ProjectsData from "./projects/ProjectsData";
import ImageWithFallback from "./components/ImageWithFallback";
import SEO from "./components/SEO";
import { useParallax } from "./hooks/useAnimations";
function App() {
  const { ref: topImageRef, offset: topOffset } = useParallax(0.3);
  const { ref: bottomImageRef, offset: bottomOffset } = useParallax(-0.2);
  // Animation hooks for components
  // const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <>
      <SEO />
      <div id="main-app">
        <div className="smooth-scroll">
          <div 
            ref={topImageRef as React.RefObject<HTMLDivElement>}
            style={{ transform: `translateY(${topOffset}px)` }}
          >
            <ImageWithFallback
              src="/pc.png"
              alt="Decorative computer illustration"
              className="image-top-right floating"
              showSkeleton={false}
              lazy={false}
            />
          </div>
          
          <Header />
          
          <Intro />
          <Portfolio projects={ProjectsData} />
          
          <div 
            ref={bottomImageRef as React.RefObject<HTMLDivElement>}
            style={{ transform: `translateY(${bottomOffset}px)` }}
          >
            <ImageWithFallback
              src="/clavier.png"
              alt="Decorative keyboard illustration"
              className="image-bottom-left floating-alt"
              showSkeleton={false}
              lazy={false}
            />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
