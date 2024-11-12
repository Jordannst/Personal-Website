import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const About = () => {
  const [about, setAbout] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const AboutRef = ref(db, "AboutSection/");
    onValue(AboutRef, (snapshot) => {
      const data = snapshot.val();
      setAbout(data);
    });
  }, []);

  return (
    <section className="about-section-container" id="about">
      <div className="about-section">
        <div className="section-heading">
          <h2 className="section-heading-article" aria-label="About me heading">
            &lt;{about.headingAbout}&gt;
          </h2>
          <p className="sectionHeadingP" />
        </div>
        <div className="info-dp-section">
          <div className="about-info">
            <p>{about.personInfo1}</p>
            <br />
            <p>{about.personInfo2}</p>
            <br />
            <p>{about.personInfo3}</p>

            {/* Resume button */}
            <button className="resume-btn" id="resume-btn">
              <div className="sign">
                <svg viewBox="0 0 640 512">
                  <path d={about.resumeSVG} />
                </svg>
              </div>
              <div className="text">{about.resume}</div>
            </button>
          </div>
          <div className="dp">
            <img src="#" alt="Jordan Sutarto" aria-label="jordanphoto" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
