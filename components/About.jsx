import "./About.css";

export default function About() {
  return (
    <section className="about" id="about">

      <div className="about-decor about-decor-one"></div>
      <div className="about-decor about-decor-two"></div>
      <div className="about-decor about-decor-three"></div>

      <div className="about-container">

        {/* LEFT VISUAL */}

        <div className="about-visual">

          <div className="about-image-frame"></div>

          <div className="about-image-main">
            <img
              src="/bride.jpg"
              alt="Pakistani bride with bridal makeup at Arjumand's PTV Salon"
            />

            <div className="about-image-overlay"></div>
          </div>

          <div className="about-image-small">
            <img
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=90"
              alt="Beauty styling"
            />
          </div>

          <div className="about-est">
            <span>EST.</span>
            <strong>2026</strong>
          </div>

          <div className="about-star">✦</div>

          <div className="about-vertical-text">
            ARJUMAND'S PTV SALON
          </div>

        </div>


        {/* RIGHT CONTENT */}

        <div className="about-content">

          <div className="about-heading-row">

            <span className="about-eyebrow">
              ABOUT OUR SALON
            </span>

            <span className="about-number">
              01 / 04
            </span>

          </div>

          <h2>
            Beauty that
            <br />
            feels <em>personal.</em>
          </h2>

          <div className="about-line">
            <span></span>
          </div>

          <p className="about-lead">
            A beauty experience created to make
            you feel confident, beautiful and
            completely yourself.
          </p>

          <p className="about-description">
            At Arjumand's PTV Salon, every appointment
            is more than a beauty service. From bridal
            makeup and elegant hair styling to skin care
            and everyday beauty, we combine professional
            techniques with personal attention to create
            results that feel uniquely yours.
          </p>


          {/* FEATURES */}

          <div className="about-points">

            <div className="about-point">
              <span>01</span>

              <div>
                <strong>Personal Attention</strong>
                <p>Beauty services designed around you.</p>
              </div>
            </div>

            <div className="about-point">
              <span>02</span>

              <div>
                <strong>Professional Expertise</strong>
                <p>Experienced hands and modern techniques.</p>
              </div>
            </div>

            <div className="about-point">
              <span>03</span>

              <div>
                <strong>Beautiful Results</strong>
                <p>Elegant looks for every occasion.</p>
              </div>
            </div>

          </div>


          {/* BUTTON */}

          <a href="#appointment" className="about-button">
            <span>BOOK YOUR EXPERIENCE</span>
            <b>↗</b>
          </a>

        </div>

      </div>

    </section>
  );
}