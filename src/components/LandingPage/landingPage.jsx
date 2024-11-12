import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const LandingPage = () => {
  const [landingPage, setPage] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const LandingPageRef = ref(db, "LandingPage/");
    onValue(LandingPageRef, (snapshot) => {
      const data = snapshot.val();
      setPage(data);
    });
  }, []);

  return (
    <section className="landing-page-container" id="home">
      <div className="blob" />
      <div className="text-content">
        <article id="hello-friend">
          <p>{landingPage.hello}</p>
        </article>

        <article id="name">
          <p>{landingPage.name}</p>
        </article>

        <article id="work">
          <p>{landingPage.work}</p>
        </article>

        <p id="info-para">
          {landingPage.info1}

          <br />
          <br />
          {landingPage.info2}
        </p>

        <div className="contact-btn-div">
          <a href="mailto:jordansutart08@gmail.com">
            <button className="letsTalkBtn">
              <p className="letsTalkBtn-text">{landingPage.buttontalk}</p>
              <span className="letsTalkBtn-BG" />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
