import React, { useEffect, useState } from "react";

function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const cookieChoice = localStorage.getItem("zaikaCookieConsent");

    if (!cookieChoice) {
      setVisible(true);
    }
  }, []);

  const handleChoice = (choice) => {
    localStorage.setItem("zaikaCookieConsent", choice);
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <div
      style={{
        position: "fixed",
        left: "20px",
        right: "20px",
        bottom: "20px",
        zIndex: "9998",
        background: "#fffaf2",
        border: "1px solid #c9b58c",
        boxShadow: "0 12px 35px rgba(45, 30, 20, 0.18)",
        padding: "22px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "25px",
          flexWrap: "wrap",
        }}
      >
        {/* TEXT */}
        <div style={{ flex: "1", minWidth: "260px" }}>
          <div
            style={{
              color: "#a88745",
              fontSize: "11px",
              letterSpacing: "2px",
              fontWeight: "700",
              marginBottom: "7px",
            }}
          >
            ✦ YOUR PRIVACY MATTERS
          </div>

          <h3
            style={{
              color: "#542b2b",
              fontFamily: "Georgia, serif",
              fontSize: "21px",
              fontWeight: "500",
              margin: "0 0 7px",
            }}
          >
            We use cookies
          </h3>

          <p
            style={{
              color: "#75675d",
              fontSize: "13px",
              lineHeight: "1.6",
              margin: 0,
            }}
          >
            Zaika Express uses cookies and local storage to remember
            preferences and improve your website experience. This demo
            website does not use cookies for real payment or banking
            information.
          </p>
        </div>

        {/* BUTTONS */}
        <div
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={() => handleChoice("declined")}
            style={{
              background: "transparent",
              border: "1px solid #bca67c",
              color: "#542b2b",
              padding: "11px 20px",
              cursor: "pointer",
              fontWeight: "600",
              fontSize: "13px",
            }}
          >
            Decline
          </button>

          <button
            onClick={() => handleChoice("accepted")}
            style={{
              background: "#542b2b",
              border: "1px solid #542b2b",
              color: "#fff8eb",
              padding: "11px 22px",
              cursor: "pointer",
              fontWeight: "600",
              fontSize: "13px",
            }}
          >
            Accept Cookies
          </button>
        </div>
      </div>
    </div>
  );
}

export default CookieConsent;