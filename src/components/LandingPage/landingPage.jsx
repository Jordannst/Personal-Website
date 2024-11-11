const LandingPage = () => {
  return (
    <section className="landing-page-container" id="home">
      <div className="blob" />
      <div className="text-content">
        <article id="hello-friend">
          <p>Hello I&apos;m,</p>
        </article>

        <article id="name">
          <p>Jordan Sutarto</p>
        </article>

        <article id="work">
          <p>I Design &amp; Code For Web</p>
        </article>

        <p id="info-para">
          Second year student interested in Digital Concept Art, Frontend Web
          Design. I love fun Web UIs, collaboration, and creating products.
          <br />
          <br />I value simple content structure, clean design patterns, and
          thoughtful interactions.
        </p>

        <div className="contact-btn-div">
          <a href="mailto:jordansutart08@gmail.com">
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
