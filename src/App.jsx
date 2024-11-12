import Header from "./components/Header/header";
import LandingPage from "./components/LandingPage/landingPage";
import About from "./components/AboutSection/about";
import SkillSection from "./components/SkillSection/Skill";
import ProjectSection from "./components/ProjectSection/project";

const App = () => {
  return (
    <>
      <main>
        <Header />
        <LandingPage />
        <About />
        <SkillSection />
        <ProjectSection />
      </main>
    </>
  );
};

export default App;
