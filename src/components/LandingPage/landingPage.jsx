import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import useAOS from "../../hooks/useAOS";

const LandingPage = () => {
  const [landingPage, setPage] = useState({});
  const [loading, setLoading] = useState(true);

  useAOS(loading, landingPage);

  useEffect(() => {
    const db = getDatabase();
    const LandingPageRef = ref(db, "LandingPage/");
    onValue(LandingPageRef, (snapshot) => {
      const data = snapshot.val();
      setPage(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="landing-page-container" id="home">
      <div className="blob" />
      <div className="text-content">
        <article id="hello-friend" data-aos="fade-up" data-aos-delay="0">
          <p>{landingPage.hello}</p>
        </article>

        <article id="name" data-aos="fade-up" data-aos-delay="200">
          <p>{landingPage.name}</p>
        </article>

        <article id="work" data-aos="fade-up" data-aos-delay="400">
          <p>{landingPage.work}</p>
        </article>

        <p id="info-para" data-aos="fade-up" data-aos-delay="600">
          {landingPage.info1}

          <br />
          <br />
          {landingPage.info2}
        </p>

        <div
          className="contact-btn-div"
          data-aos="fade-up"
          data-aos-delay="800"
        >
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
