import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Header = () => {
  const [header, setHeader] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const headerRef = ref(db, "header/");
    onValue(headerRef, (snapshot) => {
      const data = snapshot.val();
      setHeader(data);
    });
  }, []);

  return (
    <header>
      <div className="navbar" id="navbar">
        <div className="logo" aria-label="name">
          <div className="name-top">
            <p>{header.name}</p>
          </div>
        </div>
        <div className="navbar-tabs" id="navbar-tabs">
          <ul className="navbar-tabs-ul">
            <li className="home activeThistab navbar-tabs-li">
              <a href="#home" aria-label="Home menu button">
                &lt;{header.home}&gt;
              </a>
            </li>
            <li className="about navbar-tabs-li">
              <a href="#about" aria-label="about menu button">
                &lt;{header.aboutme}&gt;
              </a>
            </li>
            <li className="skills navbar-tabs-li">
              <a href="#skills" aria-label="skills menu button">
                &lt;{header.skills}&gt;
              </a>
            </li>
            <li className="projects navbar-tabs-li">
              <a href="#projects" aria-label="projects menu button">
                &lt;{header.project}&gt;
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
