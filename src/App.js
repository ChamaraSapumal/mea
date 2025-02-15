import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Expertise from "./components/Expertise";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import AnimatedCursor from "react-animated-cursor";
import ScrollToTop from "./components/ScrollToTop";
import RateMyWork from "./components/RateMyWork";
import Technologies from "./components/Technologies";
import GotoWeb from "./components/GotoWeb";
import What from "./components/What";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Loading screen timer
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 200);
    }, 3000);

    // Add scroll padding to account for fixed navbar
    document.documentElement.style.scrollPaddingTop = "100px";

    return () => {
      clearTimeout(timer);
      // Cleanup scroll padding
      document.documentElement.style.scrollPaddingTop = "0";
    };
  }, []);

  return (
    <div className="App">
      {loading ? (
        <LoadingScreen fadeOut={fadeOut} />
      ) : (
        <>
          <div className="navbar-container visible">
            <Navbar />
          </div>
          <div id="hero-section">
            <Hero />
          </div>
          <What />
          <section id="about">
            <About />
          </section>
          <section id="expertise">
            <Expertise />
          </section>
          <Technologies />
          <section id="projects">
            <Projects />
          </section>
          <RateMyWork />
          <section id="contact">
            <Contact />
          </section>
          <Footer />
        </>
      )}
      {/* <ScrollToTop /> */}
      <ThemeToggle />
      <GotoWeb />
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0.5}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "rgba(255, 255, 255, 0.9)",
        }}
        outerStyle={{
          border: "3px solid rgba(255, 255, 255, 0.5)",
          mixBlendMode: "difference",
        }}
      />
    </div>
  );
}

export default App;
