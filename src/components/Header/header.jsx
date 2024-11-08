const Header = () => {
  return (
    <header>
      <div className="navbar" id="navbar">
        <div className="logo" tabIndex={0} aria-label="name">
          <div className="name-top">
            <p>Jordannst</p>
          </div>
        </div>
        <div className="navbar-tabs" id="navbar-tabs">
          <ul className="navbar-tabs-ul">
            <li className="home activeThistab navbar-tabs-li">
              <a href="#home" tabIndex={0} aria-label="Home menu button">
                &lt;/Home&gt;
              </a>
            </li>
            <li className="about navbar-tabs-li">
              <a href="#about" aria-label="about menu button">
                &lt;/AboutMe&gt;
              </a>
            </li>
            <li className="skills navbar-tabs-li">
              <a href="#skills" aria-label="skills menu button">
                &lt;/Skills&gt;
              </a>
            </li>
            <li className="projects navbar-tabs-li">
              <a href="#projects" aria-label="projects menu button">
                &lt;/Projects&gt;
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
