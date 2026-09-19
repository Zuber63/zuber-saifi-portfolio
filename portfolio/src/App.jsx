import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skill from "./components/Skill";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Skill/>
    <Services />
    <Projects />
    <Education />
    <Contact />
    <Footer />
    </>
  );
}



export default App;