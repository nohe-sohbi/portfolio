import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import { Portfolio } from "./components/Portfolio";
import ProjectsData from "./projects/ProjectsData";
import { useEffect, useRef } from "react";

function App() {
  const scrollSpeed = useRef(0);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Adjust speed based on scroll direction
      if (e.deltaY < 0) {
        // Scrolling up
        scrollSpeed.current = e.deltaY * 0.225; // Faster scroll up
      } else {
        // Scrolling down
        scrollSpeed.current = e.deltaY * 0.19; // Very gentle initial speed
      }
      e.preventDefault();
    };

    const slowDownScroll = () => {
      // More gradual deceleration
      scrollSpeed.current *= 0.95; // Higher value = slower deceleration

      window.scrollBy(0, scrollSpeed.current);
      requestAnimationFrame(slowDownScroll);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    const animationId = requestAnimationFrame(slowDownScroll);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      <div id="main-app">
        <div className="smooth-scroll">
          <Header />
          <Intro />
          <Portfolio projects={ProjectsData} />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
