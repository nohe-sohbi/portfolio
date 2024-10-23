import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import { Portfolio } from "./components/Portfolio";
import ProjectsData from "./projects/ProjectsData";

function App() {
  return (
    <>
      <Header />
      <Intro />
      <Portfolio projects={ProjectsData} />
      <Footer />
    </>
  );
}

export default App;
