import "./Gallery.css";

const galleryItems = [
  {
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=90",
    title: "The Salon",
    category: "OUR SPACE",
    size: "large",
  },
  {
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=90",
    title: "Makeup",
    category: "BEAUTY",
    size: "small",
  },
  {
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=90",
    title: "Skin Care",
    category: "GLOW",
    size: "small",
  },
  {
    image:
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&q=90",
    title: "Hair Styling",
    category: "HAIR",
    size: "medium",
  },
  {
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=90",
    title: "Beauty Details",
    category: "DETAILS",
    size: "medium",
  },
];

export default function Gallery() {
  return (
    <section className="gallery" id="gallery">

      <div className="gallery-circle"></div>
      <div className="gallery-shape"></div>

      <div className="gallery-container">

        {/* HEADER */}

        <div className="gallery-header">

          <div>
            <span className="gallery-eyebrow">
              A GLIMPSE INTO OUR WORLD
            </span>

            <h2>
              Beauty in
              <em>every detail.</em>
            </h2>
          </div>

          <div className="gallery-intro">
            <p>
              A collection of moments, looks and details
              that reflect the Arjumand's PTV Salon
              experience.
            </p>

            <span>
              SCROLL TO EXPLORE
            </span>
          </div>

        </div>


        {/* GALLERY */}

        <div className="gallery-grid">

          {galleryItems.map((item, index) => (

            <article
              className={`gallery-item ${item.size}`}
              key={index}
            >

              <div className="gallery-image">

                <img
                  src={item.image}
                  alt={item.title}
                />

                <div className="gallery-overlay"></div>

                <div className="gallery-caption">

                  <div>
                    <span>{item.category}</span>
                    <h3>{item.title}</h3>
                  </div>

                  <b>↗</b>

                </div>

              </div>

            </article>

          ))}

        </div>


        {/* FOOTER */}

        <div className="gallery-footer">

          <span>
            ARJUMAND'S PTV SALON
          </span>

          <p>
            WHERE BEAUTY
            <em>MEETS CONFIDENCE.</em>
          </p>

          <span>
            01 — 05
          </span>

        </div>

      </div>

    </section>
  );
}