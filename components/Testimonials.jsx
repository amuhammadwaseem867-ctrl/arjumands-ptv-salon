import "./Testimonials.css";

const testimonials = [
  {
    name: "Hasnain Khan",
    reviewCount: "1 review",
    time: "a month ago",
    text: "Got my fiance here yesterday, I was sick of her complaining about salons💔 but yesterdays experience changed our life 😭 she loved it so so so much everything was at perfection and the polite staff just stole her heart 💓 loved the experience she’s so happy thanks to u guys 🫶 100% recommend 🙌",
  },
  {
    name: "moon light",
    reviewCount: "1 review",
    time: "a month ago",
    text: "Me and my sister visited today for the haircut and protein treatment the services was very nice staff very friendly really amazing services highly recommended",
  },
  {
    name: "Hajira Niaz",
    reviewCount: "3 reviews",
    time: "4 weeks ago",
    text: "I just had Hair streaks, and my experience was awesome, madam kanwal and madam Sobia has done the complete procedure. I highly recommend this beauty parlour.",
  },
  {
    name: "Kainat Khan",
    reviewCount: "2 reviews · 1 photo",
    time: "3 weeks ago",
    text: "Absolutely loved my keratin treatment and haircut My hair feels so soft, smooth, and healthy. Thank you for the amazing service! 💇‍♀️✨",
  },
  {
    name: "Uzee Khan",
    reviewCount: "1 review",
    time: "a month ago",
    text: "Amazing work amazing staff really loved my experience just need a little improvement in the sitting area but still not noticeable would love to see yall again ❤️",
  },
  {
    name: "Ukhan G",
    reviewCount: "1 review · 1 photo",
    time: "a month ago",
    text: "My wife had a greatttttt experience here! The staff was super friendly, professional, and the service was absolutely on point. She loved the results, and the whole experience was amazing. Definitely recommended! ✨",
  },
  {
    name: "Najeeb",
    reviewCount: "1 review",
    time: "a month ago",
    text: "I had come recently and I wanted to get a haircut done, but he gave me a haircut and did not even take any money, I enjoyed it yayyyy you also come and this was not done by me, review is real hs 👍🏻",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">

      <div className="testimonials-container">

        {/* HEADER */}

        <div className="testimonials-header">

          <div>
            <span className="testimonials-eyebrow">
              GOOGLE REVIEWS
            </span>

            <h2>
              Loved by
              <em>our clients.</em>
            </h2>
          </div>

          <div className="google-summary">

            <div className="google-logo">
              G
            </div>

            <div>
              <strong>Google</strong>

              <div className="google-stars">
                ★ ★ ★ ★ ★
              </div>

              <span>
                What our clients say
              </span>
            </div>

          </div>

        </div>


        {/* FEATURE REVIEW */}

        <div className="featured-review">

          <div className="quote-mark">
            “
          </div>

          <div className="featured-review-content">

            <span className="review-label">
              CLIENT EXPERIENCE
            </span>

            <p>
              “My wife had a greatttttt experience here!
              The staff was super friendly, professional,
              and the service was absolutely on point.
              She loved the results, and the whole
              experience was amazing.”
            </p>

            <div className="review-author">

              <div className="author-circle">
                U
              </div>

              <div>
                <strong>
                  Ukhan G
                </strong>

                <span>
                  Google Review · a month ago
                </span>
              </div>

            </div>

          </div>

          <div className="featured-star">
            ★
          </div>

        </div>


        {/* REVIEW GRID */}

        <div className="reviews-grid">

          {testimonials.slice(0, 6).map((review, index) => (

            <article
              className={`review-card ${
                index === 0 ? "highlight" : ""
              }`}
              key={review.name}
            >

              <div className="review-top">

                <div className="review-avatar">
                  {review.name.charAt(0).toUpperCase()}
                </div>

                <div className="review-person">

                  <strong>
                    {review.name}
                  </strong>

                  <span>
                    {review.reviewCount}
                  </span>

                </div>

                <div className="google-mini">
                  G
                </div>

              </div>


              <div className="review-stars">
                ★★★★★
              </div>


              <p>
                {review.text}
              </p>


              <div className="review-bottom">

                <span>
                  {review.time}
                </span>

                <span>
                  Google
                </span>

              </div>

            </article>

          ))}

        </div>


        {/* CTA */}

        <div className="reviews-footer">

          <div>
            <span>
              REAL EXPERIENCES.
            </span>

            <h3>
              Your next review
              <em>could be here.</em>
            </h3>
          </div>

          <a
            href="#appointment"
            className="review-button"
          >
            BOOK YOUR VISIT
            <span>↗</span>
          </a>

        </div>

      </div>

    </section>
  );
}