import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import useAOS from "../../hooks/useAOS";

const SkillSection = () => {
  const [Skill, setSkill] = useState({});
  const [loading, setLoading] = useState(true);

  useAOS(loading, Skill);

  useEffect(() => {
    const db = getDatabase();
    const SkillRef = ref(db, "SkillSection/");
    onValue(SkillRef, (snapshot) => {
      const data = snapshot.val();
      setSkill(data);
      setLoading(false);
    });
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="skills-section-container" id="skills">
      <div className="skills-section">
        <div className="section-heading" data-aos="fade-up">
          <h2 className="section-heading-article" aria-label="skills heading">
            &lt;{Skill.header}&gt;
          </h2>
          <p className="sectionHeadingP" />
        </div>
        <div className="frontend-dev-section">
          <h3
            className="frontend-dev-heading"
            data-aos="fade-up"
            aria-label="SKill saya"
          >
            {Skill.subheader}
          </h3>
          <ul className="tech-stack-wrapper">
            <li className="tech-stack-box" data-aos="fade-up">
              <img
                src={Skill.htmlLogo}
                alt="Html skill"
                className="tech-stack-logo"
              />
              <span className="tooltip">{Skill.html}</span>
            </li>
            <li className="tech-stack-box" data-aos="fade-up">
              <img
                src={Skill.cssLogo}
                alt="css skill"
                className="tech-stack-logo"
              />
              <span className="tooltip">{Skill.css}</span>
            </li>
            <li className="tech-stack-box" data-aos="fade-up">
              <img
                src={Skill.jsLogo}
                alt="js skill"
                className="tech-stack-logo"
              />
              <span className="tooltip">{Skill.js}</span>
            </li>
            <li className="tech-stack-box" data-aos="fade-up">
              <img
                src={Skill.reactLogo}
                alt="react skill"
                className="tech-stack-logo"
              />
              <span className="tooltip">{Skill.react}</span>
            </li>

            <li className="tech-stack-box" data-aos="fade-up">
              <img
                src={Skill.csharpLogo}
                alt="C# Skill"
                className="tech-stack-logo"
              />
              <span className="tooltip">{Skill.csharp}</span>
            </li>

            <li className="tech-stack-box" data-aos="fade-up">
              <img
                src={Skill.githubLogo}
                alt="github skill"
                className="tech-stack-logo needtobeinvert"
              />
              <span className="tooltip">{Skill.github}</span>
            </li>
            <li className="tech-stack-box" data-aos="fade-up">
              <img
                src={Skill.gitLogo}
                alt="git skill"
                className="tech-stack-logo"
              />
              <span className="tooltip">{Skill.git}</span>
            </li>
            <li className="tech-stack-box" data-aos="fade-up">
              <img
                src={Skill.figmaLogo}
                alt="figma skill"
                className="tech-stack-logo"
              />
              <span className="tooltip">{Skill.figma}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
