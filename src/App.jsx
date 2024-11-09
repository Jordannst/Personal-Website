import Header from "./components/Header/header";
import LandingPage from "./components/LandingPage/landingPage";
import About from "./components/AboutSection/about";
import SkillSection from "./components/SkillSection/Skill";

const App = () => {
  return (
    <>
      <main>
        <Header />
        <LandingPage />
        <About />
        <SkillSection />
      </main>
    </>
  );
};

export default App;
