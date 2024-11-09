const About = () => {
  return (
    <section className="about-section-container" id="about">
      <div className="about-section">
        <div className="section-heading">
          <h2
            className="section-heading-article"
            tabIndex={0}
            aria-label="About me heading"
          >
            &lt;/AboutMe&gt;
          </h2>
          <p className="sectionHeadingP" />
        </div>
        <div className="info-dp-section">
          <div className="about-info">
            <p tabIndex={0}>
              Hi! My name is Jordan Sutarto. I&apos;m a second year student at
              Klabat University. I am interested in web design, and Programming.
              My interest in this field started in 2023 when I tried to learn
              about web development.
            </p>
            <br />
            <p tabIndex={0}>
              i started enjoying web development. Creating custom things for web
              taught me a lot about design &amp; development!
            </p>
            <br />
            <p tabIndex={0}>
              My main focus these days is on web design and learning more about
              web development.
            </p>
            {/* Resume button */}
            <button className="resume-btn" id="resume-btn">
              <div className="sign">
                <svg viewBox="0 0 640 512">
                  <path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z" />
                </svg>
              </div>
              <div className="text">Resume</div>
            </button>
          </div>
          <div className="dp">
            <img
              src="#"
              alt="Jordan Sutarto"
              tabIndex={0}
              aria-label="jordanphoto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
