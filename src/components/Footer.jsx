import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      style={{
        background: "#2f3f36",
        color: "#fff8eb",
        marginTop: "0",
      }}
    >
      {/* MAIN FOOTER */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "60px 20px 40px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "40px",
        }}
      >
        {/* BRAND */}
        <div>
          <div
            style={{
              color: "#d2ae63",
              fontSize: "12px",
              letterSpacing: "3px",
              marginBottom: "12px",
              fontWeight: "600",
            }}
          >
            ✦ EST. WITH LOVE ✦
          </div>

          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "32px",
              fontWeight: "500",
              margin: "0 0 15px",
            }}
          >
            Zaika Express
          </h2>

          <p
            style={{
              color: "#d8d0c2",
              lineHeight: "1.8",
              fontSize: "14px",
              maxWidth: "300px",
            }}
          >
            Bringing the warmth of Indian kitchens to your table with
            traditional flavours, fresh ingredients and heartfelt hospitality.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3
            style={{
              color: "#d2ae63",
              fontFamily: "Georgia, serif",
              fontSize: "21px",
              fontWeight: "500",
              marginBottom: "18px",
            }}
          >
            Quick Links
          </h3>

          <FooterLink to="/" text="Home" />
          <FooterLink to="/menu" text="Our Menu" />
          <FooterLink to="/gallery" text="Gallery" />
          <FooterLink to="/booking" text="Book a Table" />
          <FooterLink to="/contact" text="Contact Us" />
        </div>

        {/* SERVICES */}
        <div>
          <h3
            style={{
              color: "#d2ae63",
              fontFamily: "Georgia, serif",
              fontSize: "21px",
              fontWeight: "500",
              marginBottom: "18px",
            }}
          >
            Services
          </h3>

          <FooterLink to="/menu" text="Online Ordering" />
          <FooterLink to="/booking" text="Table Booking" />
          <FooterLink to="/party-booking" text="Party & Events" />
          <FooterLink to="/reviews" text="Customer Reviews" />
          <FooterLink to="/profile" text="My Account" />
        </div>

        {/* CONTACT */}
        <div>
          <h3
            style={{
              color: "#d2ae63",
              fontFamily: "Georgia, serif",
              fontSize: "21px",
              fontWeight: "500",
              marginBottom: "18px",
            }}
          >
            Visit Us
          </h3>

          <p
            style={{
              color: "#d8d0c2",
              fontSize: "14px",
              lineHeight: "1.8",
              marginBottom: "12px",
            }}
          >
            24 Royal Food Street
            <br />
            New Delhi, India
          </p>

          <p
            style={{
              color: "#d8d0c2",
              fontSize: "14px",
              lineHeight: "1.8",
              marginBottom: "12px",
            }}
          >
            +91 98765 43210
            <br />
            hello@zaikaexpress.com
          </p>

          <p
            style={{
              color: "#d2ae63",
              fontSize: "13px",
              margin: 0,
            }}
          >
            Open daily: 11:00 AM – 11:00 PM
          </p>
        </div>
      </div>

      {/* DIVIDER */}
      <div
        style={{
          maxWidth: "1160px",
          margin: "0 auto",
          borderTop: "1px solid rgba(210, 174, 99, 0.25)",
        }}
      />

      {/* BOTTOM */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "15px",
          flexWrap: "wrap",
          fontSize: "12px",
          color: "#c8c0b3",
        }}
      >
        <div>
          © {new Date().getFullYear()} Zaika Express. All rights reserved.
        </div>

        <div
          style={{
            color: "#d2ae63",
            letterSpacing: "2px",
          }}
        >
          ✦ TRADITION • TASTE • TOGETHERNESS ✦
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ to, text }) {
  return (
    <Link
      to={to}
      style={{
        display: "block",
        color: "#d8d0c2",
        textDecoration: "none",
        fontSize: "14px",
        marginBottom: "11px",
      }}
    >
      {text}
    </Link>
  );
}

export default Footer;