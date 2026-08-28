import "./Footer.css";

export default function Footer() {
  return (
    <footer className="salon-footer">

      <div className="footer-orbit footer-orbit-one"></div>
      <div className="footer-orbit footer-orbit-two"></div>

      <div className="footer-container">

        {/* TOP */}

        <div className="footer-top">

          {/* BRAND */}

          <div className="footer-brand">

            <span className="footer-brand-name">
              Arjumand&apos;s
            </span>

            <span className="footer-brand-sub">
              PTV SALON
            </span>

            <p>
              Where beauty meets confidence.
              <br />
              Every visit, a moment for you.
            </p>

          </div>


          {/* EXPLORE */}

          <div className="footer-column">

            <span className="footer-label">
              EXPLORE
            </span>

            <nav className="footer-links">

              <a href="#home">Home</a>

              <a href="#about">About</a>

              <a href="#services">Services</a>

              <a href="#gallery">Gallery</a>

              <a href="#appointment">
                Appointments
              </a>

            </nav>

          </div>


          {/* SERVICES */}

          <div className="footer-column">

            <span className="footer-label">
              SERVICES
            </span>

            <nav className="footer-links">

              <a href="#services">
                Bridal Makeup
              </a>

              <a href="#services">
                Party Makeup
              </a>

              <a href="#services">
                Hair Styling
              </a>

              <a href="#services">
                Facial
              </a>

              <a href="#services">
                Mehndi
              </a>

            </nav>

          </div>


          {/* CONTACT */}

          <div className="footer-column footer-contact">

            <span className="footer-label">
              GET IN TOUCH
            </span>

            <a
              href="tel:03117018419"
              className="footer-phone"
            >
              0311 7018419
            </a>

            <a
              href="mailto:arjumandsaloon@gmail.com"
              className="footer-email"
            >
              arjumandsaloon@gmail.com
            </a>

            <a
              href="https://wa.me/923117018419"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-whatsapp"
            >
              BOOK ON WHATSAPP
              <span>↗</span>
            </a>

          </div>

        </div>


        {/* LARGE BRAND */}

        <div className="footer-big-brand">

          <span>
            ARJUMAND&apos;S
          </span>

          <em>
            PTV
          </em>

        </div>


        {/* BOTTOM */}

        <div className="footer-bottom">

          <span>
            © 2026 ARJUMAND&apos;S PTV SALON
          </span>

          <span className="footer-center-text">
            BEAUTY · ELEGANCE · CONFIDENCE
          </span>

          <a href="#home">
            BACK TO TOP ↑
          </a>

        </div>

      </div>

    </footer>
  );
}