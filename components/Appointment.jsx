"use client";

import "./Appointment.css";

export default function Appointment() {
  return (
    <section className="appointment" id="appointment">

      {/* Background Decoration */}
      <div className="appointment-orb appointment-orb-one"></div>
      <div className="appointment-orb appointment-orb-two"></div>
      <div className="appointment-curve"></div>

      <div className="appointment-container">

        {/* =====================================================
            LEFT CONTENT
        ===================================================== */}

        <div className="appointment-left">

          <div className="appointment-heading">
            <span className="appointment-heading-line"></span>

            <span className="appointment-eyebrow">
              PRIVATE BEAUTY EXPERIENCE
            </span>
          </div>


          <h2 className="appointment-title">
            <span>Make</span>
            <em>Time</em>
            <span>For You.</span>
          </h2>


          <p className="appointment-description">
            Your beauty deserves time, attention and a little
            luxury. Reserve your appointment with Arjumand's
            PTV Salon and let our team create an experience
            designed especially for you.
          </p>


          {/* Information */}

          <div className="appointment-info">

            <div className="appointment-info-item">

              <span className="appointment-number-small">
                01
              </span>

              <div>
                <span className="appointment-info-label">
                  CALL US
                </span>

                <a href="tel:03117018419">
                  0311 7018419
                </a>
              </div>

            </div>


            <div className="appointment-info-item">

              <span className="appointment-number-small">
                02
              </span>

              <div>
                <span className="appointment-info-label">
                  EMAIL
                </span>

                <a href="mailto:arjumandsaloon@gmail.com">
                  arjumandsaloon@gmail.com
                </a>
              </div>

            </div>

          </div>

        </div>


        {/* =====================================================
            APPOINTMENT CARD
        ===================================================== */}

        <div className="appointment-card">

          {/* Decorative Rings */}

          <div className="appointment-ring appointment-ring-one"></div>
          <div className="appointment-ring appointment-ring-two"></div>


          {/* Card Header */}

          <div className="appointment-card-header">

            <div className="appointment-brand">

              <span className="appointment-brand-name">
                Arjumand's
              </span>

              <span className="appointment-brand-sub">
                PTV SALON
              </span>

            </div>


            <div className="appointment-card-number">
              01
            </div>

          </div>


          {/* Card Content */}

          <div className="appointment-card-content">

            <span className="appointment-card-label">
              YOUR NEXT BEAUTY MOMENT
            </span>


            <h3>
              Let's make
              <br />
              it <em>beautiful.</em>
            </h3>


            <p>
              From bridal glamour to everyday elegance,
              choose your service and reserve your time
              directly with us on WhatsApp.
            </p>


            <a
              className="appointment-whatsapp"
              href="https://wa.me/923117018419"
              target="_blank"
              rel="noopener noreferrer"
            >

              <span className="whatsapp-copy">

                <small>
                  QUICK & EASY
                </small>

                <strong>
                  BOOK VIA WHATSAPP
                </strong>

              </span>


              <span className="whatsapp-arrow">
                →
              </span>

            </a>

          </div>


          {/* Centered Footer */}

          <div className="appointment-card-footer">
            <span>
              APPOINTMENTS RECOMMENDED
            </span>
          </div>

        </div>

      </div>


      {/* =====================================================
          BOTTOM DECORATIVE LINE
      ===================================================== */}

      <div className="appointment-bottom">

        <span>
          BEAUTY
        </span>

        <div></div>

        <p>
          Your beauty,
          <em>your moment.</em>
        </p>

        <div></div>

        <span>
          EST. PTV
        </span>

      </div>

    </section>
  );
}