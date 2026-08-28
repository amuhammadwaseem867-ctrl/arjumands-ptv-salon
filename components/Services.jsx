"use client";

import "./Services.css";

const services = [
  {
    number: "01",
    title: "Bridal Makeup",
    category: "BRIDAL BEAUTY",
    description:
      "Your wedding day deserves a look that feels completely yours. Our bridal makeup experience is designed around your features, outfit and personal style — from soft elegance to timeless glamour.",
    detail: "Bridal consultations • HD Makeup • Eye styling",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=90",
    position: "left",
  },
  {
    number: "02",
    title: "Party Makeup",
    category: "MAKEUP ARTISTRY",
    description:
      "Polished, glamorous and beautifully balanced. Our party makeup looks are created to complement your occasion while keeping your natural beauty at the centre.",
    detail: "Soft Glam • Full Glam • Event Makeup",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=90",
    position: "right",
  },
  {
    number: "03",
    title: "Facial",
    category: "SKIN & GLOW",
    description:
      "A moment to pause, refresh and care for your skin. Our facial treatments leave your complexion feeling clean, nourished and naturally radiant.",
    detail: "Deep cleansing • Glow treatment • Relaxation",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=90",
    position: "left",
  },
  {
    number: "04",
    title: "Mehndi",
    category: "TRADITIONAL ART",
    description:
      "Beautiful traditional artistry with delicate details and graceful patterns, created especially for weddings and celebrations.",
    detail: "Bridal Mehndi • Party Mehndi • Custom Designs",
    image:
      "/mehndi.jpg",
    position: "right",
  },
  {
    number: "05",
    title: "Hair Cutting",
    category: "HAIR STYLING",
    description:
      "A great haircut should feel effortless. We create personalised cuts that work with your features, lifestyle and individual sense of style.",
    detail: "Women’s Cuts • Styling • Finishing",
    image:
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&q=90",
    position: "left",
  },
  {
    number: "06",
    title: "Hair Straightening",
    category: "HAIR TREATMENT",
    description:
      "For smooth, sleek and manageable hair with a beautifully polished finish. Professional treatment with attention to the health and texture of your hair.",
    detail: "Smooth finish • Sleek styling • Hair care",
    image:
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=90",
    position: "right",
  },
  {
    number: "07",
    title: "Hair Rebonding",
    category: "HAIR TRANSFORMATION",
    description:
      "Transform your hair with a sleek, straight finish designed to create a smooth and refined everyday look.",
    detail: "Straight finish • Hair transformation • Styling",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=90",
    position: "left",
  },
];

export default function Services() {
  return (
    <section className="services" id="services">

      {/* Decorative background shapes */}

      <div className="services-bg-shape services-bg-one"></div>
      <div className="services-bg-shape services-bg-two"></div>
      <div className="services-bg-circle"></div>


      <div className="services-container">

        {/* =====================================
            HEADER
        ===================================== */}

        <header className="services-header">

          <div className="services-title">

            <span className="services-eyebrow">
              ARJUMAND'S PTV SALON
            </span>

            <h2>
              Our
              <em>Services</em>
            </h2>

          </div>

          <div className="services-introduction">

            <span className="intro-label">
              THE BEAUTY EDIT
            </span>

            <p>
              Discover our carefully curated beauty
              experiences, created to make every visit
              feel special.
            </p>

            <div className="intro-line"></div>

          </div>

        </header>


        {/* =====================================
            SERVICES
        ===================================== */}

        <div className="services-content">

          {services.map((service, index) => (

            <article
              className={`service-card ${service.position}`}
              key={service.number}
            >

              {/* =================================
                  VISUAL SIDE
              ================================= */}

              <div className="service-visual">

                <div className="visual-pink-shape"></div>

                <div className="visual-small-circle"></div>

                <div className="visual-number">
                  {service.number}
                </div>

                <div className="service-image-frame">

                  <img
                    src={service.image}
                    alt={service.title}
                  />

                </div>

                <div className="visual-caption">
                  {service.category}
                </div>

              </div>


              {/* =================================
                  INFORMATION SIDE
              ================================= */}

              <div className="service-information">

                <span className="service-category">
                  {service.category}
                </span>

                <h3>
                  {service.title}
                </h3>

                <div className="service-divider"></div>

                <p className="service-description">
                  {service.description}
                </p>

                <p className="service-detail">
                  {service.detail}
                </p>

                <a
                  href="#appointment"
                  className="service-button"
                >
                  <span>
                    BOOK THIS SERVICE
                  </span>

                  <b>
                    ↗
                  </b>
                </a>

              </div>

            </article>

          ))}

        </div>


        {/* =====================================
            BOTTOM CTA
        ===================================== */}

        <div className="services-cta">

          <div className="cta-shape"></div>

          <div className="cta-content">

            <span>
              YOUR BEAUTY, YOUR MOMENT
            </span>

            <h3>
              Ready for your
              <em>next look?</em>
            </h3>

          </div>

          <a href="#appointment">
            MAKE AN APPOINTMENT
            <span>↗</span>
          </a>

        </div>

      </div>

    </section>
  );
}