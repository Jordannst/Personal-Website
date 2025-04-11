import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import useAOS from "../../hooks/useAOS";

const Footer = () => {
  const [Footer, setFooter] = useState({});
  const [loading, setLoading] = useState(true);
  useAOS(loading, Footer);

  useEffect(() => {
    const db = getDatabase();
    const footerRef = ref(db, "Footer/");
    onValue(footerRef, (snapshot) => {
      const data = snapshot.val();
      setFooter(data);
      setLoading(false);
    });
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <footer id="footer">
      <button className="fas" id="backtotopbutton" />
      <div className="footer-background">
        <div className="footer-blob" />
      </div>
      <div className="footer-foreground">
        <div className="footercontainer">
          <div className="two-words" data-aos="fade-up">
            <article aria-label="quote"> {Footer.quote} </article>
          </div>
          <div className="social-media-container">
            <div className="getintouch-heading" data-aos="fade-up">
              <article> {Footer.contactme} </article>
            </div>
            <div className="logos">
              <a
                href={Footer.instagramURL}
                target="_blank"
                aria-label="My instagram"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <svg viewBox="0 0 448 512" className="SocialHandle">
                  <path d={Footer.instagramSVG} />
                </svg>
              </a>
              <a
                href={Footer.linkdinURL}
                target="_blank"
                aria-label="My LinkedIn"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                <svg className="SocialHandle" viewBox="0 0 448 512">
                  <path d={Footer.linkdinSVG} />
                </svg>
              </a>
              <a
                href={Footer.githubURL}
                target="_blank"
                aria-label="My github"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <svg viewBox="0 0 496 512" className="SocialHandle">
                  <path d={Footer.githubSVG} />
                </svg>
              </a>
              <a
                href={Footer.mailto}
                target="_blank"
                aria-label="My Gmail"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                <svg id="GmailLogo" viewBox="0 0 512 512">
                  <path d={Footer.gmailSVG} />
                </svg>
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <article>{Footer.footerbottom}</article>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
