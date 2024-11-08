const LandingPage = () => {
  return (
    <section className="landing-page-container" id="home">
      <div className="blob" />
      <div className="text-content">
        <article id="hello-friend">
          <p>Hello Saya,</p>
        </article>
        <article id="name">
          <p>Jordan Sutarto</p>
        </article>
        <article id="work">
          <p>I Design &amp; Code For Web</p>
        </article>
        <p id="info-para">
          Web Developer with experience of Digital Concept Arts, Frontend Web
          Designs. I Love fun Web UI, collaboration and making products.
          <br />
          <br />I value simple content structure, clean design patterns, and
          thoughtful interactions.
        </p>
        <div className="contact-btn-div">
          <a href="mailto:jordansutart08@gmail.com" tabIndex={-1}>
            <button className="letsTalkBtn">
              <p className="letsTalkBtn-text">Let&apos;s Talk!</p>
              <span className="letsTalkBtn-BG" />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
