import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register({
  onRegisterSuccess = () => {},
  onSwitchToLogin = () => {},
}) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
    setSuccess("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      fullName,
      username,
      email,
      mobile,
      password,
      confirmPassword,
    } = formData;

    if (
      !fullName ||
      !username ||
      !email ||
      !mobile ||
      !password ||
      !confirmPassword
    ) {
      setError("Please fill all fields.");
      return;
    }

    if (username.length < 3) {
      setError("Username must contain at least 3 characters.");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    if (mobile.length !== 10) {
      setError("Mobile number must contain 10 digits.");
      return;
    }

    if (password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Password and Confirm Password do not match.");
      return;
    }

    const existingUser = JSON.parse(
      localStorage.getItem("zaikaUser") || "null"
    );

    if (
      existingUser &&
      existingUser.username.toLowerCase() === username.toLowerCase()
    ) {
      setError("Username already exists. Please choose another username.");
      return;
    }

    const newUser = {
      fullName,
      username,
      email,
      mobile,
      password,
    };

    localStorage.setItem(
      "zaikaUser",
      JSON.stringify(newUser)
    );

    localStorage.setItem(
      "zaikaLoggedInUser",
      JSON.stringify(newUser)
    );

    setSuccess("Registration successful!");

    onRegisterSuccess(newUser);

    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  return (
    <div
      style={{
        minHeight: "85vh",
        background: "#f8f1e5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "50px 20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1000px",
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr",
          background: "#fffdf8",
          boxShadow: "0 15px 45px rgba(75, 45, 30, 0.15)",
          border: "1px solid #c6a15b",
        }}
      >
        {/* LEFT SIDE */}
        <div
          style={{
            background:
              "linear-gradient(145deg, #4d1f2a, #6b2938)",
            color: "#fff8e7",
            padding: "55px 35px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              fontSize: "28px",
              color: "#d6b36a",
              marginBottom: "15px",
            }}
          >
            ✦ Zaika Express
          </div>

          <h1
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "38px",
              lineHeight: "1.2",
              marginBottom: "20px",
            }}
          >
            Join Our Family
          </h1>

          <p
            style={{
              color: "#f5e7ca",
              lineHeight: "1.8",
              fontSize: "15px",
            }}
          >
            Create your Zaika Express account and enjoy
            delicious food, easy ordering, table bookings
            and special offers.
          </p>

          <div
            style={{
              marginTop: "35px",
              borderTop: "1px solid rgba(214,179,106,0.5)",
              paddingTop: "25px",
            }}
          >
            <p style={{ marginBottom: "12px" }}>
              ✦ Easy Online Ordering
            </p>

            <p style={{ marginBottom: "12px" }}>
              ✦ Table & Party Booking
            </p>

            <p>
              ✦ Track Your Orders
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div style={{ padding: "45px 40px" }}>
          <h2
            style={{
              fontFamily: "Georgia, serif",
              color: "#4d1f2a",
              fontSize: "30px",
              marginBottom: "8px",
            }}
          >
            Create Account
          </h2>

          <p
            style={{
              color: "#777",
              marginBottom: "25px",
            }}
          >
            Register to continue with Zaika Express.
          </p>

          {error && (
            <div
              style={{
                background: "#fbeaea",
                color: "#a52a2a",
                padding: "12px",
                marginBottom: "18px",
                border: "1px solid #e5bcbc",
                fontSize: "14px",
              }}
            >
              {error}
            </div>
          )}

          {success && (
            <div
              style={{
                background: "#e9f5e9",
                color: "#28743c",
                padding: "12px",
                marginBottom: "18px",
                border: "1px solid #b7d9b7",
                fontSize: "14px",
              }}
            >
              {success}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* FULL NAME */}
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              style={inputStyle}
            />

            {/* USERNAME */}
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              style={inputStyle}
            />

            {/* EMAIL */}
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              style={inputStyle}
            />

            {/* MOBILE */}
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              maxLength="10"
              style={inputStyle}
            />

            {/* PASSWORD */}
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              style={inputStyle}
            />

            {/* CONFIRM PASSWORD */}
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              style={inputStyle}
            />

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "14px",
                border: "none",
                background: "#5b2332",
                color: "#fff",
                fontSize: "15px",
                fontWeight: "600",
                cursor: "pointer",
                marginTop: "8px",
              }}
            >
              Create Account
            </button>
          </form>

          <p
            style={{
              textAlign: "center",
              marginTop: "22px",
              color: "#666",
            }}
          >
            Already have an account?{" "}
            <button
              onClick={onSwitchToLogin}
              style={{
                border: "none",
                background: "transparent",
                color: "#8b641f",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              Login
            </button>
          </p>

          <div
            style={{
              textAlign: "center",
              marginTop: "15px",
            }}
          >
            <Link
              to="/"
              style={{
                color: "#777",
                textDecoration: "none",
                fontSize: "14px",
              }}
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "13px 14px",
  marginBottom: "14px",
  border: "1px solid #d8c9ae",
  background: "#fff",
  outline: "none",
  fontSize: "14px",
  fontFamily: "Poppins, sans-serif",
};

export default Register;