import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Profile({ user = null, onLogout = () => {} }) {
  const navigate = useNavigate();

  const [profile, setProfile] = useState(user);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const savedUser = JSON.parse(
      localStorage.getItem("zaikaLoggedInUser") || "null"
    );

    if (savedUser) {
      setProfile(savedUser);
    } else if (user) {
      setProfile(user);
    }
  }, [user]);

  const [formData, setFormData] = useState({
    fullName: profile?.fullName || "",
    username: profile?.username || "",
    email: profile?.email || "",
    mobile: profile?.mobile || "",
  });

  useEffect(() => {
    if (profile) {
      setFormData({
        fullName: profile.fullName || "",
        username: profile.username || "",
        email: profile.email || "",
        mobile: profile.mobile || "",
      });
    }
  }, [profile]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = (e) => {
    e.preventDefault();

    const updatedUser = {
      ...profile,
      ...formData,
    };

    localStorage.setItem(
      "zaikaLoggedInUser",
      JSON.stringify(updatedUser)
    );

    localStorage.setItem("zaikaUser", JSON.stringify(updatedUser));

    setProfile(updatedUser);
    setIsEditing(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("zaikaLoggedInUser");
    onLogout();
    navigate("/");
  };

  if (!profile) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#f8f3ea",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "30px 20px",
        }}
      >
        <div
          style={{
            background: "#fffaf2",
            border: "1px solid #ddcba7",
            padding: "50px 30px",
            textAlign: "center",
            maxWidth: "500px",
            width: "100%",
            boxShadow: "0 10px 30px rgba(70, 48, 30, 0.08)",
          }}
        >
          <div
            style={{
              color: "#a88745",
              fontSize: "40px",
              marginBottom: "15px",
            }}
          >
            ✦
          </div>

          <h2
            style={{
              fontFamily: "Georgia, serif",
              color: "#542b2b",
              fontWeight: "500",
              marginBottom: "12px",
            }}
          >
            Please Login First
          </h2>

          <p
            style={{
              color: "#75675d",
              marginBottom: "25px",
            }}
          >
            Login to access your Zaika account.
          </p>

          <Link
            to="/login"
            style={{
              display: "inline-block",
              background: "#542b2b",
              color: "#fff8eb",
              padding: "13px 28px",
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
            Login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f8f3ea",
        color: "#3d3028",
      }}
    >
      {/* HERO */}
      <section
        style={{
          background:
            "linear-gradient(rgba(55,31,27,0.84), rgba(55,31,27,0.84)), url('/Paneerbutter.jpeg') center/cover",
          padding: "65px 20px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            color: "#d2ae63",
            fontSize: "13px",
            letterSpacing: "4px",
            fontWeight: "600",
            marginBottom: "12px",
          }}
        >
          ✦ ZAIKA ACCOUNT ✦
        </div>

        <h1
          style={{
            color: "#fff8eb",
            fontFamily: "Georgia, serif",
            fontSize: "clamp(38px, 6vw, 58px)",
            fontWeight: "500",
            margin: "0 0 12px",
          }}
        >
          My Profile
        </h1>

        <p
          style={{
            color: "#e8dccb",
            margin: 0,
          }}
        >
          Manage your account and Zaika experience.
        </p>
      </section>

      {/* MAIN */}
      <section
        style={{
          maxWidth: "1050px",
          margin: "0 auto",
          padding: "55px 20px 80px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(260px, 0.8fr) minmax(320px, 1.5fr)",
            gap: "25px",
          }}
        >
          {/* LEFT PROFILE CARD */}
          <div
            style={{
              background: "#542b2b",
              color: "#fff8eb",
              padding: "35px 25px",
              textAlign: "center",
              minHeight: "400px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "95px",
                height: "95px",
                borderRadius: "50%",
                background: "#c19a52",
                color: "#542b2b",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 20px",
                fontFamily: "Georgia, serif",
                fontSize: "40px",
                fontWeight: "600",
              }}
            >
              {(profile.fullName || profile.username || "U")
                .charAt(0)
                .toUpperCase()}
            </div>

            <h2
              style={{
                fontFamily: "Georgia, serif",
                fontWeight: "500",
                fontSize: "28px",
                marginBottom: "8px",
              }}
            >
              {profile.fullName || profile.username}
            </h2>

            <p
              style={{
                color: "#dfd0ba",
                marginBottom: "5px",
              }}
            >
              @{profile.username}
            </p>

            <p
              style={{
                color: "#dfd0ba",
                fontSize: "14px",
                marginBottom: "25px",
              }}
            >
              {profile.email}
            </p>

            <div
              style={{
                borderTop: "1px solid rgba(255,255,255,0.2)",
                paddingTop: "20px",
              }}
            >
              <div
                style={{
                  color: "#d2ae63",
                  fontSize: "11px",
                  letterSpacing: "2px",
                  marginBottom: "6px",
                }}
              >
                MEMBER
              </div>

              <div
                style={{
                  fontSize: "14px",
                  color: "#fff8eb",
                }}
              >
                Zaika Guest
              </div>
            </div>
          </div>

          {/* RIGHT DETAILS */}
          <div
            style={{
              background: "#fffaf2",
              border: "1px solid #ddcba7",
              padding: "30px",
              boxShadow: "0 8px 25px rgba(70, 48, 30, 0.07)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "15px",
                marginBottom: "25px",
                flexWrap: "wrap",
              }}
            >
              <div>
                <div
                  style={{
                    color: "#a88745",
                    fontSize: "11px",
                    letterSpacing: "2px",
                    marginBottom: "5px",
                  }}
                >
                  ACCOUNT DETAILS
                </div>

                <h2
                  style={{
                    fontFamily: "Georgia, serif",
                    color: "#542b2b",
                    fontWeight: "500",
                    margin: 0,
                    fontSize: "28px",
                  }}
                >
                  Personal Information
                </h2>
              </div>

              {!isEditing && (
                <button
                  onClick={() => setIsEditing(true)}
                  style={{
                    background: "#542b2b",
                    color: "#fff8eb",
                    border: "none",
                    padding: "10px 18px",
                    cursor: "pointer",
                    fontWeight: "600",
                  }}
                >
                  Edit Profile
                </button>
              )}
            </div>

            {isEditing ? (
              <form onSubmit={handleSave}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(auto-fit, minmax(220px, 1fr))",
                    gap: "18px",
                  }}
                >
                  <div>
                    <label style={labelStyle}>FULL NAME</label>

                    <input
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      style={inputStyle}
                    />
                  </div>

                  <div>
                    <label style={labelStyle}>USERNAME</label>

                    <input
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      style={inputStyle}
                      disabled
                    />
                  </div>

                  <div>
                    <label style={labelStyle}>EMAIL</label>

                    <input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      style={inputStyle}
                    />
                  </div>

                  <div>
                    <label style={labelStyle}>MOBILE</label>

                    <input
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "12px",
                    marginTop: "25px",
                    flexWrap: "wrap",
                  }}
                >
                  <button
                    type="submit"
                    style={{
                      background: "#542b2b",
                      color: "#fff8eb",
                      border: "none",
                      padding: "12px 25px",
                      cursor: "pointer",
                      fontWeight: "600",
                    }}
                  >
                    Save Changes
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    style={{
                      background: "transparent",
                      color: "#542b2b",
                      border: "1px solid #bca67c",
                      padding: "12px 25px",
                      cursor: "pointer",
                      fontWeight: "600",
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: "20px",
                }}
              >
                <InfoBox
                  label="FULL NAME"
                  value={profile.fullName || "Not added"}
                />

                <InfoBox
                  label="USERNAME"
                  value={profile.username || "Not added"}
                />

                <InfoBox
                  label="EMAIL"
                  value={profile.email || "Not added"}
                />

                <InfoBox
                  label="MOBILE"
                  value={profile.mobile || "Not added"}
                />
              </div>
            )}
          </div>
        </div>

        {/* QUICK LINKS */}
        <div
          style={{
            marginTop: "30px",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "15px",
          }}
        >
          <QuickLink
            to="/orders"
            title="My Orders"
            text="View your food orders"
          />

          <QuickLink
            to="/booking"
            title="Book a Table"
            text="Reserve your table"
          />

          <QuickLink
            to="/menu"
            title="Order Food"
            text="Explore our menu"
          />

          <QuickLink
            to="/reviews"
            title="Write a Review"
            text="Share your experience"
          />
        </div>

        {/* LOGOUT */}
        <div
          style={{
            textAlign: "center",
            marginTop: "35px",
          }}
        >
          <button
            onClick={handleLogout}
            style={{
              background: "transparent",
              color: "#8b3838",
              border: "1px solid #b97878",
              padding: "12px 30px",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            Logout
          </button>
        </div>
      </section>
    </div>
  );
}

const labelStyle = {
  display: "block",
  color: "#a88745",
  fontSize: "11px",
  letterSpacing: "1.5px",
  fontWeight: "600",
  marginBottom: "7px",
};

const inputStyle = {
  width: "100%",
  padding: "12px 13px",
  border: "1px solid #d8c6a4",
  background: "#fffdf8",
  color: "#3d3028",
  outline: "none",
  fontFamily: "inherit",
  fontSize: "14px",
};

function InfoBox({ label, value }) {
  return (
    <div
      style={{
        background: "#f5eee2",
        padding: "17px",
        minHeight: "82px",
      }}
    >
      <div
        style={{
          color: "#a88745",
          fontSize: "10px",
          letterSpacing: "1.5px",
          fontWeight: "600",
          marginBottom: "7px",
        }}
      >
        {label}
      </div>

      <div
        style={{
          color: "#542b2b",
          fontWeight: "600",
          wordBreak: "break-word",
        }}
      >
        {value}
      </div>
    </div>
  );
}

function QuickLink({ to, title, text }) {
  return (
    <Link
      to={to}
      style={{
        background: "#fffaf2",
        border: "1px solid #ddcba7",
        padding: "20px",
        textDecoration: "none",
        color: "#542b2b",
        boxShadow: "0 5px 18px rgba(70, 48, 30, 0.05)",
      }}
    >
      <div
        style={{
          color: "#a88745",
          fontSize: "20px",
          marginBottom: "8px",
        }}
      >
        ✦
      </div>

      <div
        style={{
          fontFamily: "Georgia, serif",
          fontSize: "19px",
          marginBottom: "5px",
        }}
      >
        {title}
      </div>

      <div
        style={{
          color: "#75675d",
          fontSize: "13px",
        }}
      >
        {text}
      </div>
    </Link>
  );
}

export default Profile;