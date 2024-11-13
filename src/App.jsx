import { useEffect, useState } from "react";
import Header from "./components/Header/header";
import LandingPage from "./components/LandingPage/landingPage";
import About from "./components/AboutSection/about";
import SkillSection from "./components/SkillSection/Skill";
import ProjectSection from "./components/ProjectSection/project";
import Footer from "./components/Footer/footer";
import { InfinitySpin } from "react-loader-spinner";
import "./assets/styles.css";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

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

const styles = {
  blurOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backdropFilter: "blur(15px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    zIndex: 9999,
  },
};

export default App;
