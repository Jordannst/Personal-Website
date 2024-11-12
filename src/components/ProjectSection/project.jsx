const ProjectSection = () => {
  return (
    <section className="projects-section-container" id="projects">
      <div className="projects-section-div">
        <div className="section-heading">
          <h2
            className="section-heading-article"
            aria-label="My projects starts from here"
          >
            &lt;/Projects&gt;
          </h2>
          <p className="sectionHeadingP" />
        </div>
        <div className="project-boxes-div">
          <div className="project-box-wrapper">
            <div className="project-box project-box5" id="project-box5">
              <div className="info-div">
                <img
                  src="htmllogo.png"
                  alt="cat head"
                  className="iconforproject"
                />
                <article className="ProjectHeading">Cat Head</article>
                <p className="ProjectDescription">
                  Create a minimalist design of a cat&apos;s head using only
                  HTML and CSS. This design should focus on simplicity and use
                  basic shapes to represent key features of the cat&apos;s face,
                  such as the ears, eyes, nose, and whiskers.
                </p>
                <div className="project-buttons">
                  <a
                    href="#"
                    target="_blank"
                    className="cta"
                    aria-label="Visit"
                  >
                    <span>View</span>
                    <svg viewBox="0 0 13 10" height="10px" width="15px">
                      <path d="M1,5 L11,5" />
                      <polyline points="8 1 12 5 8 9" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="image-div">
                <img src="catHead.png" alt="cat head preview image" />
              </div>
            </div>
          </div>
          <div className="project-box-wrapper">
            <div className="project-box project-box5" id="project-box5">
              <div className="info-div">
                <img
                  src="htmllogo.png"
                  alt="Image for Project"
                  className="iconforproject"
                />
                <article className="ProjectHeading">Project2</article>
                <p className="ProjectDescription">Deskripsi Project 2</p>
                <div className="project-buttons">
                  <a
                    href="#"
                    target="_blank"
                    className="cta"
                    aria-label="Visit Project 2"
                  >
                    <span>View</span>
                    <svg viewBox="0 0 13 10" height="10px" width="15px">
                      <path d="M1,5 L11,5" />
                      <polyline points="8 1 12 5 8 9" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="image-div">
                <img src="#" alt="Project 2 Preview Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
