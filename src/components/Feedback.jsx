import React, { useState } from "react";

function Feedback() {
  const [rating, setRating] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    review: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const reviews = [
    {
      name: "Aarav Sharma",
      rating: 5,
      text: "Amazing food and beautiful ambience. The Paneer Butter Masala was delicious!",
      date: "Recently",
    },
    {
      name: "Priya Verma",
      rating: 5,
      text: "Loved the traditional touch and the service was very welcoming.",
      date: "Recently",
    },
    {
      name: "Rahul Singh",
      rating: 4,
      text: "Good food, generous portions and a lovely place for family dinner.",
      date: "Recently",
    },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (rating === 0) {
      return;
    }

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      review: "",
    });

    setRating(0);

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f8f3e8",
        color: "#40332a",
      }}
    >
      {/* HERO */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #5a1726, #762c3d)",
          color: "#fffaf0",
          padding: "70px 20px",
          textAlign: "center",
          borderBottom: "1px solid #b99957",
        }}
      >
        <p
          style={{
            color: "#d7bb78",
            letterSpacing: "4px",
            fontSize: "10px",
            fontWeight: "600",
            marginBottom: "13px",
          }}
        >
          YOUR EXPERIENCE MATTERS
        </p>

        <h1
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "46px",
            fontWeight: "500",
            marginBottom: "14px",
          }}
        >
          Share Your Experience
        </h1>

        <div
          style={{
            width: "60px",
            borderTop: "2px solid #c9a45d",
            margin: "0 auto 18px",
          }}
        />

        <p
          style={{
            maxWidth: "620px",
            margin: "0 auto",
            color: "#f0e2c8",
            fontSize: "13px",
            lineHeight: "1.8",
          }}
        >
          Your feedback helps us improve our food, service
          and overall dining experience.
        </p>
      </section>

      {/* MAIN */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "55px 20px 75px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.1fr",
            gap: "28px",
            alignItems: "start",
          }}
        >
          {/* FORM */}
          <div
            style={{
              background: "#fffdf8",
              border: "1px solid #d8c79f",
              padding: "32px",
              boxShadow:
                "0 8px 25px rgba(70, 45, 20, 0.07)",
            }}
          >
            <p
              style={{
                color: "#9b7940",
                fontSize: "10px",
                letterSpacing: "2px",
                fontWeight: "600",
                marginBottom: "8px",
              }}
            >
              WRITE A REVIEW
            </p>

            <h2
              style={{
                fontFamily: "Georgia, serif",
                color: "#5b1b2a",
                fontSize: "29px",
                fontWeight: "500",
                marginBottom: "8px",
              }}
            >
              Tell Us About It
            </h2>

            <p
              style={{
                color: "#806d5b",
                fontSize: "11px",
                lineHeight: "1.7",
                marginBottom: "22px",
              }}
            >
              How was your experience at Zaika Express?
            </p>

            {submitted && (
              <div
                style={{
                  background: "#e8f1e5",
                  borderLeft: "4px solid #667b54",
                  padding: "12px",
                  color: "#526644",
                  fontSize: "12px",
                  marginBottom: "18px",
                }}
              >
                Thank you for sharing your feedback with us!
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {/* RATING */}
              <div style={{ marginBottom: "20px" }}>
                <label
                  style={{
                    display: "block",
                    color: "#604a3a",
                    fontSize: "11px",
                    fontWeight: "600",
                    marginBottom: "9px",
                  }}
                >
                  Your Rating
                </label>

                <div
                  style={{
                    display: "flex",
                    gap: "7px",
                  }}
                >
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      aria-label={`Rate ${star} out of 5`}
                      style={{
                        border: "none",
                        background: "transparent",
                        cursor: "pointer",
                        fontSize: "29px",
                        color:
                          star <= rating
                            ? "#b28a42"
                            : "#d8cdb8",
                        padding: "0",
                      }}
                    >
                      ★
                    </button>
                  ))}
                </div>

                {rating > 0 && (
                  <p
                    style={{
                      color: "#8b6b35",
                      fontSize: "10px",
                      marginTop: "5px",
                    }}
                  >
                    {rating === 5
                      ? "Excellent!"
                      : rating === 4
                      ? "Very Good!"
                      : rating === 3
                      ? "Good"
                      : rating === 2
                      ? "Could be better"
                      : "We will try to improve"}
                  </p>
                )}
              </div>

              {/* NAME */}
              <div style={{ marginBottom: "14px" }}>
                <label
                  style={{
                    display: "block",
                    color: "#604a3a",
                    fontSize: "11px",
                    fontWeight: "600",
                    marginBottom: "6px",
                  }}
                >
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "1px solid #d5c49c",
                    background: "#fffdf8",
                    outline: "none",
                    fontSize: "12px",
                  }}
                />
              </div>

              {/* EMAIL */}
              <div style={{ marginBottom: "14px" }}>
                <label
                  style={{
                    display: "block",
                    color: "#604a3a",
                    fontSize: "11px",
                    fontWeight: "600",
                    marginBottom: "6px",
                  }}
                >
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "1px solid #d5c49c",
                    background: "#fffdf8",
                    outline: "none",
                    fontSize: "12px",
                  }}
                />
              </div>

              {/* REVIEW */}
              <div style={{ marginBottom: "18px" }}>
                <label
                  style={{
                    display: "block",
                    color: "#604a3a",
                    fontSize: "11px",
                    fontWeight: "600",
                    marginBottom: "6px",
                  }}
                >
                  Your Review
                </label>

                <textarea
                  name="review"
                  value={formData.review}
                  onChange={handleChange}
                  placeholder="Tell us about your food and dining experience..."
                  rows="5"
                  required
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "1px solid #d5c49c",
                    background: "#fffdf8",
                    outline: "none",
                    fontSize: "12px",
                    resize: "vertical",
                  }}
                />
              </div>

              {rating === 0 && (
                <p
                  style={{
                    color: "#9a2638",
                    fontSize: "10px",
                    marginBottom: "10px",
                  }}
                >
                  Please select a rating before submitting.
                </p>
              )}

              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "13px",
                  background: "#691b2b",
                  color: "#fffaf0",
                  border: "1px solid #691b2b",
                  cursor: "pointer",
                  fontSize: "12px",
                  fontWeight: "600",
                }}
              >
                Submit Review →
              </button>
            </form>
          </div>

          {/* REVIEWS */}
          <div>
            <p
              style={{
                color: "#9b7940",
                fontSize: "10px",
                letterSpacing: "2px",
                fontWeight: "600",
                marginBottom: "8px",
              }}
            >
              GUEST STORIES
            </p>

            <h2
              style={{
                fontFamily: "Georgia, serif",
                color: "#5b1b2a",
                fontSize: "31px",
                fontWeight: "500",
                marginBottom: "10px",
              }}
            >
              What Our Guests Say
            </h2>

            <p
              style={{
                color: "#806d5b",
                fontSize: "12px",
                lineHeight: "1.7",
                marginBottom: "22px",
              }}
            >
              A few words from people who have enjoyed
              their Zaika experience.
            </p>

            {reviews.map((review, index) => (
              <div
                key={index}
                style={{
                  background: "#fffdf8",
                  border: "1px solid #d8c79f",
                  padding: "22px",
                  marginBottom: "15px",
                  boxShadow:
                    "0 5px 15px rgba(70, 45, 20, 0.05)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "10px",
                  }}
                >
                  <div>
                    <h3
                      style={{
                        color: "#5b1b2a",
                        fontFamily: "Georgia, serif",
                        fontSize: "17px",
                        fontWeight: "500",
                        marginBottom: "5px",
                      }}
                    >
                      {review.name}
                    </h3>

                    <div
                      style={{
                        color: "#b28a42",
                        fontSize: "13px",
                        letterSpacing: "1px",
                      }}
                    >
                      {"★".repeat(review.rating)}
                      <span
                        style={{
                          color: "#d8cdb8",
                        }}
                      >
                        {"★".repeat(5 - review.rating)}
                      </span>
                    </div>
                  </div>

                  <span
                    style={{
                      color: "#9a8876",
                      fontSize: "9px",
                    }}
                  >
                    {review.date}
                  </span>
                </div>

                <p
                  style={{
                    color: "#695849",
                    fontSize: "12px",
                    lineHeight: "1.7",
                  }}
                >
                  “{review.text}”
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM SECTION */}
      <section
        style={{
          background: "#5d6d57",
          color: "#fffaf0",
          padding: "42px 20px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#d8c383",
            fontSize: "20px",
            marginBottom: "10px",
          }}
        >
          ✦
        </p>

        <h2
          style={{
            fontFamily: "Georgia, serif",
            fontWeight: "500",
            fontSize: "25px",
            marginBottom: "8px",
          }}
        >
          Every Review Helps Us Grow
        </h2>

        <p
          style={{
            color: "#e4eadc",
            fontSize: "12px",
          }}
        >
          Thank you for being a part of the Zaika family.
        </p>
      </section>
    </div>
  );
}

export default Feedback;