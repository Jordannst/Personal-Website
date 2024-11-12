import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Footer = () => {
  const [Footer, setFooter] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const footerRef = ref(db, "Footer/");
    onValue(footerRef, (snapshot) => {
      const data = snapshot.val();
      setFooter(data);
    });
  }, []);

  return (
    <footer id="footer">
      <button className="fas" id="backtotopbutton" />
      <div className="footer-background">
        <div className="footer-blob" />
      </div>
      <div className="footer-foreground">
        <div className="footercontainer">
          <div className="two-words">
            <article aria-label="quote"> {Footer.quote} </article>
          </div>
          <div className="social-media-container">
            <div className="getintouch-heading">
              <article> {Footer.contactme} </article>
            </div>
            <div className="logos">
              <a
                href={Footer.instagramURL}
                target="_blank"
                aria-label="My instagram"
              >
                <svg viewBox="0 0 448 512" className="SocialHandle">
                  <path d={Footer.instagramSVG} />
                </svg>
              </a>
              <a href="#" target="_blank" aria-label="My Linkdin">
                <svg className="SocialHandle" viewBox="0 0 448 512">
                  <path d={Footer.linkdinSVG} />
                </svg>
              </a>
              <a href={Footer.githubURL} target="_blank" aria-label="My github">
                <svg viewBox="0 0 496 512" className="SocialHandle">
                  <path d={Footer.githubSVG} />
                </svg>
              </a>
              <a href={Footer.mailto} target="_blank" aria-label="My G mail">
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
