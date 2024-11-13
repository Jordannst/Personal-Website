import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const ProjectSection = () => {
  const [project, setProject] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const ProjectRef = ref(db, "ProjectSection/");
    onValue(ProjectRef, (snapshot) => {
      const data = snapshot.val();
      setProject(data);
    });
  }, []);

  return (
    <section className="projects-section-container" id="projects">
      <div className="projects-section-div">
        <div className="section-heading">
          <h2
            className="section-heading-article"
            aria-label="My projects starts from here"
          >
            &lt;{project.projectheader}&gt;
          </h2>
          <p className="sectionHeadingP" />
        </div>
        <div className="project-boxes-div">
          <div className="project-box-wrapper">
            <div className="project-box project-box5" id="project-box5">
              <div className="info-div">
                <img
                  src={project.netflixlogo}
                  alt="logo for Project"
                  className="iconforproject"
                />
                <article className="ProjectHeading">
                  {project.projectheading1}
                </article>
                <p className="ProjectDescription">{project.project1desc}</p>
                <div className="project-buttons">
                  <a
                    href={project.linknetflix}
                    target="_blank"
                    className="cta"
                    aria-label="Visit Project 2"
                  >
                    <span>{project.view}</span>
                    <svg viewBox="0 0 13 10" height="10px" width="15px">
                      <path d="M1,5 L11,5" />
                      <polyline points="8 1 12 5 8 9" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="image-div">
                <img
                  src={project.project1view}
                  alt="netflix website Preview Image"
                />
              </div>
            </div>
            <div className="project-box-wrapper">
              <div className="project-box project-box5" id="project-box5">
                <div className="info-div">
                  <img
                    src={project.project2view}
                    alt="cat head"
                    className="iconforproject"
                  />
                  <article className="ProjectHeading">
                    {project.projectheading2}
                  </article>
                  <p className="ProjectDescription">{project.project2desc}</p>
                  <div className="project-buttons">
                    <a
                      href={project.project2view}
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
                  <img
                    src={project.project2view}
                    alt="cat head preview image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
