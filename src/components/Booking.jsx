import React, { useState } from "react";
import { Link } from "react-router-dom";

function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    date: "",
    time: "",
    guests: "2",
    seating: "Indoor",
    request: "",
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

    setTimeout(() => {
      setSubmitted(false);
    }, 6000);
  };

  const today = new Date().toISOString().split("T")[0];

  const inputStyle = {
    width: "100%",
    padding: "13px",
    border: "1px solid #d5c49c",
    background: "#fffdf8",
    color: "#40332a",
    outline: "none",
    fontSize: "12px",
  };

  const labelStyle = {
    display: "block",
    color: "#604a3a",
    fontSize: "11px",
    fontWeight: "600",
    marginBottom: "7px",
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
          RESERVE YOUR EXPERIENCE
        </p>

        <h1
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "47px",
            fontWeight: "500",
            marginBottom: "14px",
          }}
        >
          Book a Table
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
            maxWidth: "650px",
            margin: "0 auto",
            color: "#f0e2c8",
            fontSize: "13px",
            lineHeight: "1.8",
          }}
        >
          Reserve your table at Zaika Express and make
          your next meal a memorable experience.
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
            gridTemplateColumns: "1.15fr 0.85fr",
            gap: "28px",
            alignItems: "start",
          }}
        >
          {/* BOOKING FORM */}
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
                fontSize: "10px",
                letterSpacing: "2px",
                fontWeight: "600",
                marginBottom: "8px",
              }}
            >
              TABLE RESERVATION
            </p>

            <h2
              style={{
                fontFamily: "Georgia, serif",
                color: "#5b1b2a",
                fontSize: "30px",
                fontWeight: "500",
                marginBottom: "9px",
              }}
            >
              Reserve Your Table
            </h2>

            <p
              style={{
                color: "#806d5b",
                fontSize: "11px",
                lineHeight: "1.7",
                marginBottom: "25px",
              }}
            >
              Please provide your details and preferred
              dining time.
            </p>

            {submitted && (
              <div
                style={{
                  background: "#e8f1e5",
                  borderLeft: "4px solid #667b54",
                  padding: "14px",
                  color: "#526644",
                  fontSize: "12px",
                  lineHeight: "1.6",
                  marginBottom: "20px",
                }}
              >
                <strong>Reservation Request Received!</strong>
                <br />
                Your table request has been submitted.
                Our team will confirm the booking shortly.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {/* NAME + MOBILE */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "15px",
                  marginBottom: "16px",
                }}
              >
                <div>
                  <label style={labelStyle}>
                    Guest Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label style={labelStyle}>
                    Mobile Number
                  </label>

                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="10-digit mobile"
                    maxLength="10"
                    pattern="[6-9][0-9]{9}"
                    required
                    style={inputStyle}
                  />
                </div>
              </div>

              {/* DATE + TIME */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "15px",
                  marginBottom: "16px",
                }}
              >
                <div>
                  <label style={labelStyle}>
                    Date
                  </label>

                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    min={today}
                    required
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label style={labelStyle}>
                    Preferred Time
                  </label>

                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                  >
                    <option value="">
                      Select time
                    </option>
                    <option value="11:00 AM">
                      11:00 AM
                    </option>
                    <option value="12:00 PM">
                      12:00 PM
                    </option>
                    <option value="1:00 PM">
                      1:00 PM
                    </option>
                    <option value="2:00 PM">
                      2:00 PM
                    </option>
                    <option value="5:00 PM">
                      5:00 PM
                    </option>
                    <option value="6:00 PM">
                      6:00 PM
                    </option>
                    <option value="7:00 PM">
                      7:00 PM
                    </option>
                    <option value="8:00 PM">
                      8:00 PM
                    </option>
                    <option value="9:00 PM">
                      9:00 PM
                    </option>
                    <option value="10:00 PM">
                      10:00 PM
                    </option>
                  </select>
                </div>
              </div>

              {/* GUESTS + SEATING */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "15px",
                  marginBottom: "16px",
                }}
              >
                <div>
                  <label style={labelStyle}>
                    Number of Guests
                  </label>

                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    style={inputStyle}
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5">5 Guests</option>
                    <option value="6">6 Guests</option>
                    <option value="7">7 Guests</option>
                    <option value="8">8 Guests</option>
                    <option value="9">9 Guests</option>
                    <option value="10">10 Guests</option>
                    <option value="10+">10+ Guests</option>
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>
                    Seating Preference
                  </label>

                  <select
                    name="seating"
                    value={formData.seating}
                    onChange={handleChange}
                    style={inputStyle}
                  >
                    <option value="Indoor">
                      Indoor
                    </option>
                    <option value="Outdoor">
                      Outdoor
                    </option>
                    <option value="Family Area">
                      Family Area
                    </option>
                    <option value="Quiet Corner">
                      Quiet Corner
                    </option>
                  </select>
                </div>
              </div>

              {/* SPECIAL REQUEST */}
              <div style={{ marginBottom: "20px" }}>
                <label style={labelStyle}>
                  Special Request
                </label>

                <textarea
                  name="request"
                  value={formData.request}
                  onChange={handleChange}
                  placeholder="Birthday decoration, special seating, dietary request, etc."
                  rows="4"
                  style={{
                    ...inputStyle,
                    resize: "vertical",
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "14px",
                  background: "#691b2b",
                  color: "#fffaf0",
                  border: "1px solid #691b2b",
                  cursor: "pointer",
                  fontSize: "12px",
                  fontWeight: "600",
                }}
              >
                Request Reservation →
              </button>
            </form>
          </div>

          {/* SIDE INFORMATION */}
          <div>
            <div
              style={{
                background:
                  "linear-gradient(145deg, #5d6d57, #465543)",
                color: "#fffaf0",
                padding: "35px",
                border: "1px solid #89977a",
                marginBottom: "20px",
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
                DINING AT ZAIKA
              </p>

              <h2
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "29px",
                  fontWeight: "500",
                  marginBottom: "18px",
                }}
              >
                A Table Awaits You
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
                  color: "#e7ebdf",
                  fontSize: "12px",
                  lineHeight: "1.8",
                }}
              >
                Come together over authentic flavours,
                warm hospitality and memorable moments.
              </p>

              <div
                style={{
                  marginTop: "24px",
                  fontSize: "11px",
                  color: "#dce3d5",
                  lineHeight: "2",
                }}
              >
                <div>✦ Freshly prepared dishes</div>
                <div>✦ Comfortable family seating</div>
                <div>✦ Vegetarian & non-vegetarian options</div>
                <div>✦ Special celebrations welcome</div>
              </div>
            </div>

            {/* HOURS */}
            <div
              style={{
                background: "#fffdf8",
                border: "1px solid #d8c79f",
                padding: "28px",
                marginBottom: "20px",
              }}
            >
              <h3
                style={{
                  fontFamily: "Georgia, serif",
                  color: "#5b1b2a",
                  fontSize: "21px",
                  fontWeight: "500",
                  marginBottom: "15px",
                }}
              >
                Opening Hours
              </h3>

              {[
                ["Monday – Friday", "11:00 AM – 11:00 PM"],
                ["Saturday", "11:00 AM – 11:30 PM"],
                ["Sunday", "11:00 AM – 11:30 PM"],
              ].map(([day, time]) => (
                <div
                  key={day}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "15px",
                    borderBottom:
                      "1px solid #eadfc9",
                    padding: "10px 0",
                    fontSize: "11px",
                  }}
                >
                  <span style={{ color: "#604a3a" }}>
                    {day}
                  </span>

                  <span
                    style={{
                      color: "#8b6b35",
                      fontWeight: "600",
                    }}
                  >
                    {time}
                  </span>
                </div>
              ))}
            </div>

            {/* PARTY CTA */}
            <div
              style={{
                background: "#f0e6d0",
                border: "1px solid #d2bc8b",
                padding: "25px",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  color: "#9b7940",
                  fontSize: "10px",
                  letterSpacing: "1.5px",
                  fontWeight: "600",
                  marginBottom: "7px",
                }}
              >
                PLANNING SOMETHING SPECIAL?
              </p>

              <h3
                style={{
                  fontFamily: "Georgia, serif",
                  color: "#5b1b2a",
                  fontSize: "21px",
                  fontWeight: "500",
                  marginBottom: "8px",
                }}
              >
                Celebrate With Us
              </h3>

              <p
                style={{
                  color: "#806d5b",
                  fontSize: "11px",
                  lineHeight: "1.6",
                  marginBottom: "15px",
                }}
              >
                Birthday, anniversary, family gathering or
                corporate event — we can help.
              </p>

              <Link
                to="/party-booking"
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
                Plan Your Celebration
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER STRIP */}
      <section
        style={{
          background: "#5a1726",
          color: "#fffaf0",
          textAlign: "center",
          padding: "40px 20px",
        }}
      >
        <p
          style={{
            color: "#d5ba76",
            fontSize: "20px",
            marginBottom: "10px",
          }}
        >
          ✦
        </p>

        <h2
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "24px",
            fontWeight: "500",
            marginBottom: "8px",
          }}
        >
          Good Food. Great Company. Memorable Moments.
        </h2>

        <p
          style={{
            color: "#e8dcc4",
            fontSize: "11px",
          }}
        >
          We look forward to welcoming you at Zaika Express.
        </p>
      </section>
    </div>
  );
}

export default Booking;