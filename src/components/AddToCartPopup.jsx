import React from "react";
import { Link } from "react-router-dom";

function AddToCartPopup({
  item = null,
  onClose = () => {},
  onViewCart = () => {},
}) {
  if (!item) {
    return null;
  }

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: "0",
        background: "rgba(35, 22, 18, 0.55)",
        zIndex: "9997",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: "470px",
          background: "#fffaf2",
          border: "1px solid #c9b58c",
          boxShadow: "0 20px 55px rgba(35, 22, 18, 0.25)",
          position: "relative",
          padding: "10px",
        }}
      >
        {/* CLOSE */}
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: "absolute",
            top: "13px",
            right: "15px",
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            border: "none",
            background: "rgba(84, 43, 43, 0.9)",
            color: "#fff8eb",
            fontSize: "22px",
            lineHeight: "1",
            cursor: "pointer",
            zIndex: "2",
          }}
        >
          ×
        </button>

        {/* IMAGE */}
        <div
          style={{
            height: "210px",
            overflow: "hidden",
          }}
        >
          <img
            src={item.image || "/Paneerbutter.jpeg"}
            alt={item.name || "Food item"}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>

        {/* CONTENT */}
        <div
          style={{
            textAlign: "center",
            padding: "25px 20px 22px",
          }}
        >
          <div
            style={{
              color: "#a88745",
              fontSize: "12px",
              letterSpacing: "3px",
              fontWeight: "700",
              marginBottom: "8px",
            }}
          >
            ✦ ADDED TO CART ✦
          </div>

          <h2
            style={{
              color: "#542b2b",
              fontFamily: "Georgia, serif",
              fontSize: "28px",
              fontWeight: "500",
              margin: "0 0 8px",
            }}
          >
            {item.name}
          </h2>

          {item.description && (
            <p
              style={{
                color: "#75675d",
                fontSize: "13px",
                lineHeight: "1.6",
                margin: "0 auto 12px",
                maxWidth: "360px",
              }}
            >
              {item.description}
            </p>
          )}

          <div
            style={{
              color: "#542b2b",
              fontWeight: "700",
              fontSize: "20px",
              marginBottom: "22px",
            }}
          >
            ₹{Number(item.price || 0).toFixed(2)}
          </div>

          {/* BUTTONS */}
          <div
            style={{
              display: "flex",
              gap: "10px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={onViewCart}
              style={{
                background: "#542b2b",
                color: "#fff8eb",
                border: "1px solid #542b2b",
                padding: "12px 23px",
                cursor: "pointer",
                fontWeight: "600",
                fontSize: "13px",
              }}
            >
              🛒 View Cart
            </button>

            <Link
              to="/menu"
              onClick={onClose}
              style={{
                background: "transparent",
                color: "#542b2b",
                border: "1px solid #bca67c",
                padding: "12px 23px",
                textDecoration: "none",
                fontWeight: "600",
                fontSize: "13px",
              }}
            >
              Continue Shopping
            </Link>
          </div>
        </div>

        {/* DECORATION */}
        <div
          style={{
            textAlign: "center",
            color: "#c19a52",
            fontSize: "12px",
            paddingBottom: "5px",
          }}
        >
          ✦ ✦ ✦
        </div>
      </div>
    </div>
  );
}

export default AddToCartPopup;