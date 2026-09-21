import React, { useState } from "react";
import { Link } from "react-router-dom";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      mobile: "",
      subject: "",
      message: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  const contactCards = [
    {
      icon: "✦",
      title: "Visit Us",
      text: "Zaika Express Restaurant",
      subtext: "Ghaziabad, Uttar Pradesh, India",
    },
    {
      icon: "☎",
      title: "Call Us",
      text: "+91 98765 43210",
      subtext: "Daily: 11:00 AM – 11:00 PM",
    },
    {
      icon: "✉",
      title: "Email Us",
      text: "hello@zaikaexpress.com",
      subtext: "We usually reply within 24 hours",
    },
    {
      icon: "◷",
      title: "Opening Hours",
      text: "Monday – Sunday",
      subtext: "11:00 AM – 11:00 PM",
    },
  ];

  return (
    <div
      style={{
        background: "#f8f3e8",
        color: "#40332a",
        minHeight: "100vh",
      }}
    >
      {/* HERO */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #5a1726, #762c3d)",
          padding: "75px 20px",
          textAlign: "center",
          color: "#fffaf0",
          borderBottom: "1px solid #b99957",
        }}
      >
        <p
          style={{
            color: "#d7bb78",
            letterSpacing: "4px",
            fontSize: "11px",
            marginBottom: "14px",
            fontWeight: "600",
          }}
        >
          WE WOULD LOVE TO HEAR FROM YOU
        </p>

        <h1
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "48px",
            fontWeight: "500",
            marginBottom: "15px",
          }}
        >
          Contact Zaika
        </h1>

        <div
          style={{
            width: "65px",
            borderTop: "2px solid #c9a45d",
            margin: "0 auto 20px",
          }}
        />

        <p
          style={{
            maxWidth: "650px",
            margin: "0 auto",
            color: "#f0e2c8",
            lineHeight: "1.8",
            fontSize: "14px",
          }}
        >
          Have a question, suggestion or special request?
          Our team is always happy to help you.
        </p>
      </section>

      {/* CONTACT CARDS */}
      <section
        style={{
          maxWidth: "1150px",
          margin: "0 auto",
          padding: "55px 20px 25px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "18px",
          }}
        >
          {contactCards.map((card, index) => (
            <div
              key={index}
              style={{
                background: "#fffdf8",
                border: "1px solid #d8c79f",
                padding: "28px 20px",
                textAlign: "center",
                boxShadow:
                  "0 7px 20px rgba(70, 45, 20, 0.07)",
              }}
            >
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  margin: "0 auto 14px",
                  border:
                    "1px solid #b99957",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#8b6b35",
                  fontSize: "18px",
                }}
              >
                {card.icon}
              </div>

              <h3
                style={{
                  fontFamily: "Georgia, serif",
                  color: "#641e2d",
                  fontSize: "18px",
                  fontWeight: "500",
                  marginBottom: "9px",
                }}
              >
                {card.title}
              </h3>

              <p
                style={{
                  fontSize: "13px",
                  fontWeight: "600",
                  color: "#554238",
                  marginBottom: "5px",
                }}
              >
                {card.text}
              </p>

              <p
                style={{
                  fontSize: "11px",
                  color: "#8a7664",
                  lineHeight: "1.6",
                }}
              >
                {card.subtext}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT FORM + LOCATION */}
      <section
        style={{
          maxWidth: "1150px",
          margin: "0 auto",
          padding: "35px 20px 70px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "1.15fr 0.85fr",
            gap: "25px",
          }}
        >
          {/* FORM */}
          <div
            style={{
              background: "#fffdf8",
              border: "1px solid #d8c79f",
              padding: "35px",
              boxShadow:
                "0 8px 25px rgba(70, 45, 20, 0.07)",
            }}
          >
            <p
              style={{
                color: "#9b7940",
                letterSpacing: "2px",
                fontSize: "10px",
                fontWeight: "600",
                marginBottom: "8px",
              }}
            >
              SEND A MESSAGE
            </p>

            <h2
              style={{
                fontFamily: "Georgia, serif",
                color: "#5b1b2a",
                fontSize: "30px",
                fontWeight: "500",
                marginBottom: "10px",
              }}
            >
              Get In Touch
            </h2>

            <p
              style={{
                color: "#806d5b",
                fontSize: "12px",
                lineHeight: "1.7",
                marginBottom: "25px",
              }}
            >
              Whether you want to ask about our menu,
              bookings or celebrations, send us a message.
            </p>

            {submitted && (
              <div
                style={{
                  background: "#e8f1e5",
                  borderLeft: "4px solid #667b54",
                  padding: "12px",
                  color: "#526644",
                  fontSize: "12px",
                  marginBottom: "20px",
                }}
              >
                Thank you! Your message has been received.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "1fr 1fr",
                  gap: "15px",
                }}
              >
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "11px",
                      fontWeight: "600",
                      color: "#604a3a",
                      marginBottom: "6px",
                    }}
                  >
                    Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    style={{
                      width: "100%",
                      padding: "12px",
                      border:
                        "1px solid #d5c49c",
                      background: "#fffdf8",
                      outline: "none",
                      fontSize: "12px",
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "11px",
                      fontWeight: "600",
                      color: "#604a3a",
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
                    placeholder="Your email"
                    required
                    style={{
                      width: "100%",
                      padding: "12px",
                      border:
                        "1px solid #d5c49c",
                      background: "#fffdf8",
                      outline: "none",
                      fontSize: "12px",
                    }}
                  />
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "1fr 1fr",
                  gap: "15px",
                  marginTop: "15px",
                }}
              >
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "11px",
                      fontWeight: "600",
                      color: "#604a3a",
                      marginBottom: "6px",
                    }}
                  >
                    Mobile
                  </label>

                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Your mobile number"
                    style={{
                      width: "100%",
                      padding: "12px",
                      border:
                        "1px solid #d5c49c",
                      background: "#fffdf8",
                      outline: "none",
                      fontSize: "12px",
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "11px",
                      fontWeight: "600",
                      color: "#604a3a",
                      marginBottom: "6px",
                    }}
                  >
                    Subject
                  </label>

                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    required
                    style={{
                      width: "100%",
                      padding: "12px",
                      border:
                        "1px solid #d5c49c",
                      background: "#fffdf8",
                      outline: "none",
                      fontSize: "12px",
                    }}
                  />
                </div>
              </div>

              <div style={{ marginTop: "15px" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "11px",
                    fontWeight: "600",
                    color: "#604a3a",
                    marginBottom: "6px",
                  }}
                >
                  Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  required
                  rows="5"
                  style={{
                    width: "100%",
                    padding: "12px",
                    border:
                      "1px solid #d5c49c",
                    background: "#fffdf8",
                    outline: "none",
                    fontSize: "12px",
                    resize: "vertical",
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  marginTop: "20px",
                  padding: "13px 28px",
                  background: "#691b2b",
                  color: "#fffaf0",
                  border: "1px solid #691b2b",
                  cursor: "pointer",
                  fontSize: "12px",
                  fontWeight: "600",
                }}
              >
                Send Message →
              </button>
            </form>
          </div>

          {/* LOCATION */}
          <div>
            <div
              style={{
                background:
                  "linear-gradient(145deg, #5d6d57, #465543)",
                minHeight: "300px",
                padding: "35px",
                color: "#fffaf0",
                border:
                  "1px solid #8a9a78",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  color: "#d8c383",
                  letterSpacing: "2px",
                  fontSize: "10px",
                  fontWeight: "600",
                  marginBottom: "10px",
                }}
              >
                FIND US
              </p>

              <h2
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "30px",
                  fontWeight: "500",
                  marginBottom: "18px",
                }}
              >
                Come Visit Us
              </h2>

              <div
                style={{
                  borderTop:
                    "1px solid rgba(255,255,255,0.25)",
                  marginBottom: "20px",
                }}
              />

              <p
                style={{
                  color: "#edf0e7",
                  fontSize: "13px",
                  lineHeight: "1.8",
                }}
              >
                Zaika Express Restaurant
                <br />
                Ghaziabad, Uttar Pradesh
                <br />
                India
              </p>

              <p
                style={{
                  color: "#d7dfcf",
                  fontSize: "11px",
                  lineHeight: "1.8",
                  marginTop: "18px",
                }}
              >
                Open every day
                <br />
                11:00 AM – 11:00 PM
              </p>
            </div>

            {/* BOOKING CTA */}
            <div
              style={{
                background: "#f0e6d0",
                border:
                  "1px solid #d2bc8b",
                padding: "25px",
                marginTop: "20px",
                textAlign: "center",
              }}
            >
              <h3
                style={{
                  fontFamily: "Georgia, serif",
                  color: "#5b1b2a",
                  fontSize: "21px",
                  fontWeight: "500",
                  marginBottom: "8px",
                }}
              >
                Planning a Visit?
              </h3>

              <p
                style={{
                  color: "#806d5b",
                  fontSize: "11px",
                  lineHeight: "1.6",
                  marginBottom: "15px",
                }}
              >
                Reserve your table and enjoy a memorable
                dining experience.
              </p>

              <Link
                to="/booking"
                style={{
                  display: "inline-block",
                  background: "#691b2b",
                  color: "#fffaf0",
                  padding: "11px 23px",
                  textDecoration: "none",
                  fontSize: "11px",
                  fontWeight: "600",
                }}
              >
                Book a Table
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM QUOTE */}
      <section
        style={{
          background: "#5a1726",
          color: "#fffaf0",
          padding: "45px 20px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#d5ba76",
            fontSize: "22px",
            marginBottom: "12px",
          }}
        >
          ✦
        </p>

        <p
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "21px",
            fontStyle: "italic",
            color: "#f1e3ca",
            maxWidth: "650px",
            margin: "0 auto 15px",
            lineHeight: "1.6",
          }}
        >
          "Good food brings people together,
          and every gathering deserves a little Zaika."
        </p>

        <p
          style={{
            color: "#d5ba76",
            fontSize: "10px",
            letterSpacing: "2px",
          }}
        >
          ZAika EXPRESS
        </p>
      </section>
    </div>
  );
}

export default Contact;