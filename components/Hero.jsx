import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home">

      {/* BACKGROUND */}

      <div className="hero-bg">
        <div className="hero-orbit hero-orbit-one"></div>
        <div className="hero-orbit hero-orbit-two"></div>

        <div className="hero-bg-word">
          BEAUTY
        </div>

        <div className="hero-grid-lines">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="hero-dots"></div>

        <div className="hero-glow hero-glow-one"></div>
        <div className="hero-glow hero-glow-two"></div>
      </div>


      {/* MAIN */}

      <div className="hero-container">

        {/* CONTENT */}

        <div className="hero-content">

          <div className="hero-overline">
            <span></span>
            ARJUMAND&apos;S PTV SALON
          </div>


          <h1 className="hero-title">
            <span className="hero-title-main">
              Beauty
            </span>

            <span className="hero-title-small">
              is an
            </span>

            <em>
              Experience.
            </em>
          </h1>


          <p className="hero-description">
            Where beauty meets confidence. From
            sophisticated bridal makeup to elegant
            everyday styling, every service is crafted
            to make you feel beautifully you.
          </p>


          {/* ACTIONS */}

          <div className="hero-actions">

            <a
              href="#appointment"
              className="hero-primary"
            >
              <span>BOOK</span>
              APPOINTMENT
              <b>↗</b>
            </a>

            <a
              href="#services"
              className="hero-secondary"
            >
              EXPLORE SERVICES
              <i></i>
            </a>

          </div>


          {/* STATS */}

          <div className="hero-meta">

            <div className="hero-meta-item">
              <strong>10+</strong>
              <span>Years of Beauty</span>
            </div>

            <div className="hero-meta-line"></div>

            <div className="hero-meta-item">
              <strong>5K+</strong>
              <span>Happy Clients</span>
            </div>

            <div className="hero-meta-line"></div>

            <div className="hero-meta-item">
              <strong>01</strong>
              <span>Signature Salon</span>
            </div>

          </div>

        </div>


        {/* VISUAL */}

        <div className="hero-visual">

          <div className="hero-frame-back"></div>


          <div className="hero-photo">

            <img
              src="/bride.jpg"
              alt="Pakistani Bride - Arjumand's PTV Salon"
            />

            <div className="hero-photo-shade"></div>

          </div>


          {/* IMAGE NUMBER */}

          <div className="hero-image-number">
            01
          </div>


          {/* FLOATING CARD */}

          <div className="hero-card">

            <div className="hero-card-icon">
              ✦
            </div>

            <div className="hero-card-content">
              <span>
                THE ART OF BEAUTY
              </span>

              <strong>
                Made For You
              </strong>
            </div>

          </div>


          {/* ROUND BADGE */}

          <div className="hero-badge">

            <div className="hero-badge-inner">

              <span>
                BRIDAL
              </span>

              <b>✦</b>

              <span>
                BEAUTY
              </span>

            </div>

          </div>

        </div>

      </div>


      {/* BOTTOM INFORMATION */}

      <div className="hero-bottom">

        <div className="hero-est">
          <span>EST.</span>
          <strong>PTV</strong>
        </div>


        <div className="hero-scroll">
          <span>SCROLL TO DISCOVER</span>
          <i></i>
        </div>


        <div className="hero-categories">
          <span>BRIDAL</span>
          <b>•</b>
          <span>MAKEUP</span>
          <b>•</b>
          <span>HAIR</span>
        </div>

      </div>

    </section>
  );
}