import { useEffect, useState } from "react";
import Header from "./components/Header/header";
import LandingPage from "./components/LandingPage/landingPage";
import About from "./components/AboutSection/about";
import SkillSection from "./components/SkillSection/Skill";
import ProjectSection from "./components/ProjectSection/project";
import Footer from "./components/Footer/footer";
import { InfinitySpin } from "react-loader-spinner";
import "./assets/styles.css";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init();

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    if (!loading) {
      window.scrollTo(0, 0);
    }
  }, [loading]);

  return (
    <>
      {loading && (
        <div style={styles.blurOverlay}>
          <InfinitySpin width="200" color="#007bff" />
        </div>
      )}

      <main>
        <Header />
        <LandingPage />
        <About />
        <SkillSection />
        <ProjectSection />
      </main>

      <Footer />
    </>
  );
};

// stlye loading
const styles = {
  blurOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backdropFilter: "blur(10px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    zIndex: 9999,
  },
};

export default App;
