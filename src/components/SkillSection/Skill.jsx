const SkillSection = () => {
  return (
    <section className="skills-section-container" id="skills">
      <div className="skills-section">
        <div className="section-heading">
          <h2 className="section-heading-article" aria-label="skills heading">
            &lt;/Skills&gt;
          </h2>
          <p className="sectionHeadingP" />
        </div>
        <div className="frontend-dev-section">
          <h3 className="frontend-dev-heading" aria-label="SKill saya">
            Tech Stack
          </h3>
          <ul className="tech-stack-wrapper">
            <li className="tech-stack-box">
              <img
                src="images/htmllogo.png"
                alt="Html skill"
                className="tech-stack-logo"
              />
              <span className="tooltip">HTML</span>
            </li>
            <li className="tech-stack-box">
              <img src="#" alt="css skill" className="tech-stack-logo" />
              <span className="tooltip">CSS</span>
            </li>
            <li className="tech-stack-box">
              <img src="#" alt="js skill" className="tech-stack-logo" />
              <span className="tooltip">JS</span>
            </li>
            <li className="tech-stack-box">
              <img src="#" alt="react skill" className="tech-stack-logo" />
              <span className="tooltip">REACT</span>
            </li>
            <li className="tech-stack-box">
              <img
                src="#"
                alt="github skill"
                className="tech-stack-logo needtobeinvert"
              />
              <span className="tooltip">GITHUB</span>
            </li>
            <li className="tech-stack-box">
              <img src="#" alt="git skill" className="tech-stack-logo" />
              <span className="tooltip">GIT</span>
            </li>
            <li className="tech-stack-box">
              <img src="#" alt="figma skill" className="tech-stack-logo" />
              <span className="tooltip">FIGMA</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
