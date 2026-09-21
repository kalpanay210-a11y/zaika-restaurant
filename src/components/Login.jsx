import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login({
  onLoginSuccess = () => {},
  onSwitchToRegister = () => {},
}) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
      general: "",
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = "Please enter your username.";
    }

    if (!formData.password) {
      newErrors.password = "Please enter your password.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // Temporary frontend login.
    // Real authentication will be connected with Spring Boot + MySQL later.
    const savedUser = JSON.parse(
      localStorage.getItem("zaikaUser") || "null"
    );

    if (
      savedUser &&
      savedUser.username === formData.username &&
      savedUser.password === formData.password
    ) {
      localStorage.setItem(
        "zaikaLoggedInUser",
        JSON.stringify(savedUser)
      );

      onLoginSuccess(savedUser);
      navigate("/");
      return;
    }

    // Demo login for testing the UI before backend integration.
    if (
      formData.username === "demo" &&
      formData.password === "demo123"
    ) {
      const demoUser = {
        fullName: "Zaika Guest",
        username: "demo",
        email: "demo@zaika.com",
        mobile: "9999999999",
      };

      localStorage.setItem(
        "zaikaLoggedInUser",
        JSON.stringify(demoUser)
      );

      onLoginSuccess(demoUser);
      navigate("/");
      return;
    }

    setErrors({
      general:
        "Invalid username or password. Please register first or check your details.",
    });
  };

  const inputStyle = {
    width: "100%",
    padding: "13px 14px",
    border: "1px solid #d2c09b",
    background: "#fffdf8",
    color: "#40332a",
    fontSize: "14px",
    outline: "none",
  };

  return (
    <div
      style={{
        minHeight: "calc(100vh - 70px)",
        background: "#f8f3e8",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "45px 20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "950px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          background: "#fffdf8",
          border: "1px solid #d9c59a",
          boxShadow: "0 12px 35px rgba(70, 45, 20, 0.12)",
        }}
      >
        {/* LEFT */}
        <div
          style={{
            background:
              "linear-gradient(145deg, #5b1726, #76283a)",
            color: "#fffaf0",
            padding: "50px 35px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              color: "#d8bd78",
              letterSpacing: "3px",
              fontSize: "11px",
              marginBottom: "12px",
            }}
          >
            WELCOME TO
          </p>

          <h1
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "42px",
              fontWeight: "500",
              marginBottom: "18px",
            }}
          >
            Zaika
          </h1>

          <div
            style={{
              width: "55px",
              borderTop: "2px solid #c8a45d",
              marginBottom: "20px",
            }}
          />

          <p
            style={{
              color: "#f0e3ca",
              lineHeight: "1.8",
              fontSize: "14px",
              maxWidth: "350px",
            }}
          >
            Sign in to continue your culinary journey with Zaika.
            Manage your orders, bookings and favourite experiences
            from one place.
          </p>

          <p
            style={{
              color: "#d8bd78",
              marginTop: "25px",
              fontFamily: "Georgia, serif",
              fontSize: "17px",
            }}
          >
            “Good food brings people together.”
          </p>
        </div>

        {/* RIGHT */}
        <div
          style={{
            padding: "45px 35px",
          }}
        >
          <p
            style={{
              color: "#a08040",
              fontSize: "11px",
              letterSpacing: "2px",
              marginBottom: "7px",
              fontWeight: "600",
            }}
          >
            YOUR ACCOUNT
          </p>

          <h2
            style={{
              fontFamily: "Georgia, serif",
              color: "#54202b",
              fontSize: "30px",
              fontWeight: "500",
              marginBottom: "8px",
            }}
          >
            Welcome Back
          </h2>

          <p
            style={{
              color: "#806d5b",
              fontSize: "13px",
              marginBottom: "25px",
            }}
          >
            Login to your Zaika account.
          </p>

          {errors.general && (
            <div
              style={{
                background: "#f8e5e7",
                borderLeft: "4px solid #9a2638",
                padding: "12px",
                color: "#7b2635",
                fontSize: "12px",
                lineHeight: "1.5",
                marginBottom: "18px",
              }}
            >
              {errors.general}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* USERNAME */}
            <div style={{ marginBottom: "17px" }}>
              <label
                style={{
                  display: "block",
                  color: "#5c4635",
                  fontSize: "13px",
                  fontWeight: "600",
                  marginBottom: "7px",
                }}
              >
                Username
              </label>

              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter username"
                style={inputStyle}
              />

              {errors.username && (
                <p
                  style={{
                    color: "#9a2638",
                    fontSize: "11px",
                    marginTop: "5px",
                  }}
                >
                  {errors.username}
                </p>
              )}
            </div>

            {/* PASSWORD */}
            <div style={{ marginBottom: "22px" }}>
              <label
                style={{
                  display: "block",
                  color: "#5c4635",
                  fontSize: "13px",
                  fontWeight: "600",
                  marginBottom: "7px",
                }}
              >
                Password
              </label>

              <div
                style={{
                  position: "relative",
                }}
              >
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  style={{
                    ...inputStyle,
                    paddingRight: "75px",
                  }}
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  style={{
                    position: "absolute",
                    right: "8px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    border: "none",
                    background: "transparent",
                    color: "#691b2b",
                    cursor: "pointer",
                    fontSize: "11px",
                    fontWeight: "600",
                  }}
                >
                  {showPassword ? "HIDE" : "SHOW"}
                </button>
              </div>

              {errors.password && (
                <p
                  style={{
                    color: "#9a2638",
                    fontSize: "11px",
                    marginTop: "5px",
                  }}
                >
                  {errors.password}
                </p>
              )}
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
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
              Login →
            </button>
          </form>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              margin: "25px 0",
              color: "#b7a78e",
              fontSize: "11px",
            }}
          >
            <span
              style={{
                flex: 1,
                borderTop: "1px solid #dfcda4",
              }}
            />

            OR

            <span
              style={{
                flex: 1,
                borderTop: "1px solid #dfcda4",
              }}
            />
          </div>

          <p
            style={{
              textAlign: "center",
              color: "#806d5b",
              fontSize: "13px",
            }}
          >
            Don't have an account?{" "}
            <button
              type="button"
              onClick={onSwitchToRegister}
              style={{
                border: "none",
                background: "transparent",
                color: "#691b2b",
                cursor: "pointer",
                fontWeight: "700",
                padding: 0,
              }}
            >
              Create Account
            </button>
          </p>

          <div
            style={{
              marginTop: "22px",
              textAlign: "center",
            }}
          >
            <Link
              to="/"
              style={{
                color: "#8a704f",
                fontSize: "12px",
                textDecoration: "none",
              }}
            >
              ← Back to Home
            </Link>
          </div>

          {/* TEMPORARY TEST ACCOUNT */}
          <div
            style={{
              marginTop: "25px",
              padding: "12px",
              background: "#f7efdf",
              border: "1px solid #dfcda4",
              fontSize: "11px",
              color: "#806d5b",
              lineHeight: "1.6",
            }}
          >
            <strong style={{ color: "#54202b" }}>
              Testing account
            </strong>
            <br />
            Username: demo
            <br />
            Password: demo123
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;