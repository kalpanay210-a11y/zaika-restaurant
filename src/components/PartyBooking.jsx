import React, { useState } from "react";
import { Link } from "react-router-dom";

function PartyBooking() {
  const [formData, setFormData] = useState({
    eventType: "Birthday",
    name: "",
    mobile: "",
    email: "",
    date: "",
    time: "",
    guests: "10-20",
    budget: "₹10,000 – ₹20,000",
    foodPreference: "Both",
    requirements: "",
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

  const eventTypes = [
    "Birthday",
    "Anniversary",
    "Family Gathering",
    "Corporate Event",
    "Kitty Party",
    "Friends Gathering",
    "Other",
  ];

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
          padding: "75px 20px",
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
          CELEBRATE WITH ZAIKA
        </p>

        <h1
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "47px",
            fontWeight: "500",
            marginBottom: "14px",
          }}
        >
          Plan Your Celebration
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
            maxWidth: "670px",
            margin: "0 auto",
            color: "#f0e2c8",
            fontSize: "13px",
            lineHeight: "1.8",
          }}
        >
          From intimate family gatherings to memorable
          celebrations, let Zaika help make your occasion
          special.
        </p>
      </section>

      {/* EVENT HIGHLIGHTS */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "50px 20px 20px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(190px, 1fr))",
            gap: "15px",
          }}
        >
          {[
            ["✦", "Beautiful Ambience", "A comfortable setting for every occasion."],
            ["◆", "Custom Menus", "Food options planned around your event."],
            ["◇", "Family Friendly", "A welcoming space for guests of all ages."],
            ["★", "Special Moments", "Celebrate birthdays, anniversaries and more."],
          ].map(([icon, title, text]) => (
            <div
              key={title}
              style={{
                background: "#fffdf8",
                border: "1px solid #d8c79f",
                padding: "23px 18px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  color: "#b28a42",
                  fontSize: "20px",
                  marginBottom: "9px",
                }}
              >
                {icon}
              </div>

              <h3
                style={{
                  fontFamily: "Georgia, serif",
                  color: "#5b1b2a",
                  fontSize: "17px",
                  fontWeight: "500",
                  marginBottom: "7px",
                }}
              >
                {title}
              </h3>

              <p
                style={{
                  color: "#806d5b",
                  fontSize: "10px",
                  lineHeight: "1.6",
                }}
              >
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FORM SECTION */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "35px 20px 75px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: "28px",
            alignItems: "start",
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
                fontSize: "10px",
                letterSpacing: "2px",
                fontWeight: "600",
                marginBottom: "8px",
              }}
            >
              EVENT ENQUIRY
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
              Tell Us About Your Event
            </h2>

            <p
              style={{
                color: "#806d5b",
                fontSize: "11px",
                lineHeight: "1.7",
                marginBottom: "25px",
              }}
            >
              Share your requirements and our team can
              plan the details with you.
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
                <strong>Event Enquiry Received!</strong>
                <br />
                Thank you. Our team will contact you to
                discuss your celebration details.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {/* EVENT TYPE */}
              <div style={{ marginBottom: "16px" }}>
                <label style={labelStyle}>
                  Event Type
                </label>

                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  style={inputStyle}
                >
                  {eventTypes.map((event) => (
                    <option key={event} value={event}>
                      {event}
                    </option>
                  ))}
                </select>
              </div>

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

              {/* EMAIL */}
              <div style={{ marginBottom: "16px" }}>
                <label style={labelStyle}>
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  style={inputStyle}
                />
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
                    Event Date
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

              {/* GUESTS + BUDGET */}
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
                    <option value="10-20">
                      10 – 20 Guests
                    </option>
                    <option value="20-40">
                      20 – 40 Guests
                    </option>
                    <option value="40-60">
                      40 – 60 Guests
                    </option>
                    <option value="60-100">
                      60 – 100 Guests
                    </option>
                    <option value="100+">
                      100+ Guests
                    </option>
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>
                    Approx. Budget
                  </label>

                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    style={inputStyle}
                  >
                    <option value="₹5,000 – ₹10,000">
                      ₹5,000 – ₹10,000
                    </option>
                    <option value="₹10,000 – ₹20,000">
                      ₹10,000 – ₹20,000
                    </option>
                    <option value="₹20,000 – ₹40,000">
                      ₹20,000 – ₹40,000
                    </option>
                    <option value="₹40,000 – ₹60,000">
                      ₹40,000 – ₹60,000
                    </option>
                    <option value="₹60,000+">
                      ₹60,000+
                    </option>
                  </select>
                </div>
              </div>

              {/* FOOD */}
              <div style={{ marginBottom: "16px" }}>
                <label style={labelStyle}>
                  Food Preference
                </label>

                <select
                  name="foodPreference"
                  value={formData.foodPreference}
                  onChange={handleChange}
                  style={inputStyle}
                >
                  <option value="Both">
                    Vegetarian & Non-Vegetarian
                  </option>
                  <option value="Vegetarian">
                    Vegetarian Only
                  </option>
                  <option value="Non-Vegetarian">
                    Non-Vegetarian
                  </option>
                </select>
              </div>

              {/* REQUIREMENTS */}
              <div style={{ marginBottom: "20px" }}>
                <label style={labelStyle}>
                  Special Requirements
                </label>

                <textarea
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  placeholder="Decoration, cake, special menu, music, seating arrangement, etc."
                  rows="5"
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
                Send Event Enquiry →
              </button>
            </form>
          </div>

          {/* SIDE PANEL */}
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
                YOUR OCCASION
              </p>

              <h2
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "29px",
                  fontWeight: "500",
                  marginBottom: "18px",
                }}
              >
                Make It Memorable
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
                Tell us what you have in mind and we will
                help you create a comfortable and enjoyable
                dining experience for your guests.
              </p>

              <div
                style={{
                  marginTop: "24px",
                  fontSize: "11px",
                  color: "#dce3d5",
                  lineHeight: "2",
                }}
              >
                <div>✦ Birthday celebrations</div>
                <div>✦ Anniversary dinners</div>
                <div>✦ Family gatherings</div>
                <div>✦ Corporate events</div>
                <div>✦ Friends & kitty parties</div>
              </div>
            </div>

            {/* EVENT PROCESS */}
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
                  marginBottom: "17px",
                }}
              >
                How It Works
              </h3>

              {[
                [
                  "01",
                  "Send Enquiry",
                  "Share your event details.",
                ],
                [
                  "02",
                  "Plan Together",
                  "Discuss menu and arrangements.",
                ],
                [
                  "03",
                  "Celebrate",
                  "Enjoy your special day with Zaika.",
                ],
              ].map(([number, title, text]) => (
                <div
                  key={number}
                  style={{
                    display: "flex",
                    gap: "13px",
                    marginBottom: "17px",
                  }}
                >
                  <div
                    style={{
                      minWidth: "34px",
                      height: "34px",
                      border:
                        "1px solid #b99957",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#8b6b35",
                      fontSize: "10px",
                      fontWeight: "700",
                    }}
                  >
                    {number}
                  </div>

                  <div>
                    <h4
                      style={{
                        color: "#5b1b2a",
                        fontSize: "12px",
                        marginBottom: "4px",
                      }}
                    >
                      {title}
                    </h4>

                    <p
                      style={{
                        color: "#806d5b",
                        fontSize: "10px",
                        lineHeight: "1.5",
                      }}
                    >
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* TABLE BOOKING */}
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
                JUST DINING?
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
                Book a Regular Table
              </h3>

              <p
                style={{
                  color: "#806d5b",
                  fontSize: "11px",
                  lineHeight: "1.6",
                  marginBottom: "15px",
                }}
              >
                For everyday dining reservations, use our
                regular table booking.
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

      {/* BOTTOM */}
      <section
        style={{
          background: "#5a1726",
          color: "#fffaf0",
          textAlign: "center",
          padding: "42px 20px",
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
            fontSize: "25px",
            fontWeight: "500",
            marginBottom: "8px",
          }}
        >
          Every Celebration Deserves Good Food
        </h2>

        <p
          style={{
            color: "#e8dcc4",
            fontSize: "11px",
          }}
        >
          Let Zaika be a part of your special moments.
        </p>
      </section>
    </div>
  );
}

export default PartyBooking;