import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";

const Home = () => {
  return (
    <div className="m-0 p-0 w-screen min-h-[100vh]">
      <Hero />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
