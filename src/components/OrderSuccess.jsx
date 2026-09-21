import React from "react";
import { Link } from "react-router-dom";

function OrderSuccess({
  order = null,
  onContinueShopping = () => {},
}) {
  const orderId =
    order?.orderId ||
    `ZK${Math.floor(100000 + Math.random() * 900000)}`;

  const total =
    order?.grandTotal !== undefined
      ? order.grandTotal
      : 0;

  const items = order?.items || [];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f8f3e8",
        padding: "60px 20px",
        color: "#3d3027",
      }}
    >
      <div
        style={{
          maxWidth: "850px",
          margin: "0 auto",
          background: "#fffdf8",
          border: "1px solid #d9c59a",
          boxShadow: "0 12px 35px rgba(70, 45, 20, 0.10)",
          overflow: "hidden",
        }}
      >
        {/* TOP */}
        <div
          style={{
            background:
              "linear-gradient(135deg, #5b1726, #76283a)",
            color: "#fffaf0",
            textAlign: "center",
            padding: "45px 25px",
            borderBottom: "4px solid #c8a45d",
          }}
        >
          <div
            style={{
              width: "68px",
              height: "68px",
              borderRadius: "50%",
              border: "2px solid #d8bd78",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 18px",
              fontSize: "30px",
            }}
          >
            ✓
          </div>

          <p
            style={{
              color: "#d8bd78",
              fontSize: "11px",
              letterSpacing: "3px",
              marginBottom: "10px",
              fontWeight: "600",
            }}
          >
            ZAika EXPRESS
          </p>

          <h1
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "38px",
              fontWeight: "500",
              marginBottom: "12px",
            }}
          >
            Order Confirmed
          </h1>

          <p
            style={{
              color: "#f1e5cc",
              fontSize: "14px",
              lineHeight: "1.7",
              maxWidth: "520px",
              margin: "0 auto",
            }}
          >
            Thank you for choosing Zaika. Your order has been
            received and our kitchen will begin preparing it shortly.
          </p>
        </div>

        {/* CONTENT */}
        <div style={{ padding: "30px" }}>
          {/* ORDER INFO */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "15px",
              marginBottom: "30px",
            }}
          >
            <div
              style={{
                background: "#f7efdf",
                border: "1px solid #dfcda4",
                padding: "17px",
              }}
            >
              <p
                style={{
                  color: "#a08040",
                  fontSize: "10px",
                  letterSpacing: "1.5px",
                  marginBottom: "6px",
                  fontWeight: "600",
                }}
              >
                ORDER ID
              </p>

              <strong
                style={{
                  color: "#54202b",
                  fontFamily: "Georgia, serif",
                  fontSize: "18px",
                }}
              >
                #{orderId}
              </strong>
            </div>

            <div
              style={{
                background: "#f7efdf",
                border: "1px solid #dfcda4",
                padding: "17px",
              }}
            >
              <p
                style={{
                  color: "#a08040",
                  fontSize: "10px",
                  letterSpacing: "1.5px",
                  marginBottom: "6px",
                  fontWeight: "600",
                }}
              >
                ESTIMATED DELIVERY
              </p>

              <strong
                style={{
                  color: "#54202b",
                  fontFamily: "Georgia, serif",
                  fontSize: "18px",
                }}
              >
                30–45 Minutes
              </strong>
            </div>

            <div
              style={{
                background: "#f7efdf",
                border: "1px solid #dfcda4",
                padding: "17px",
              }}
            >
              <p
                style={{
                  color: "#a08040",
                  fontSize: "10px",
                  letterSpacing: "1.5px",
                  marginBottom: "6px",
                  fontWeight: "600",
                }}
              >
                TOTAL PAID
              </p>

              <strong
                style={{
                  color: "#691b2b",
                  fontFamily: "Georgia, serif",
                  fontSize: "18px",
                }}
              >
                ₹{total}
              </strong>
            </div>
          </div>

          {/* ITEMS */}
          {items.length > 0 && (
            <div>
              <p
                style={{
                  color: "#a08040",
                  fontSize: "11px",
                  letterSpacing: "2px",
                  marginBottom: "8px",
                  fontWeight: "600",
                }}
              >
                YOUR ORDER
              </p>

              <h2
                style={{
                  fontFamily: "Georgia, serif",
                  color: "#54202b",
                  fontSize: "25px",
                  fontWeight: "500",
                  marginBottom: "18px",
                }}
              >
                Items Ordered
              </h2>

              <div
                style={{
                  borderTop: "1px solid #dfcda4",
                }}
              >
                {items.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "14px",
                      padding: "13px 0",
                      borderBottom: "1px solid #eee3ce",
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{
                        width: "58px",
                        height: "58px",
                        objectFit: "cover",
                      }}
                    />

                    <div style={{ flex: 1 }}>
                      <h4
                        style={{
                          fontFamily: "Georgia, serif",
                          color: "#54202b",
                          fontSize: "16px",
                          marginBottom: "4px",
                        }}
                      >
                        {item.name}
                      </h4>

                      <p
                        style={{
                          color: "#806d5b",
                          fontSize: "12px",
                        }}
                      >
                        Quantity: {item.quantity}
                      </p>
                    </div>

                    <strong
                      style={{
                        color: "#691b2b",
                        fontFamily: "Georgia, serif",
                      }}
                    >
                      ₹{item.price * item.quantity}
                    </strong>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* MESSAGE */}
          <div
            style={{
              marginTop: "28px",
              padding: "18px",
              background: "#f5ead4",
              borderLeft: "4px solid #c8a45d",
              color: "#624e3d",
              fontSize: "13px",
              lineHeight: "1.7",
            }}
          >
            <strong style={{ color: "#54202b" }}>
              A little note from Zaika
            </strong>
            <br />
            Your food is being prepared with care. We hope every
            bite brings you a little closer to home.
          </div>

          {/* BUTTONS */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "12px",
              flexWrap: "wrap",
              marginTop: "30px",
            }}
          >
            <button
              onClick={onContinueShopping}
              style={{
                padding: "13px 24px",
                background: "#691b2b",
                color: "#fffaf0",
                border: "1px solid #691b2b",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              Order More
            </button>

            <Link
              to="/orders"
              style={{
                padding: "13px 24px",
                background: "#fffaf0",
                color: "#691b2b",
                border: "1px solid #c8a45d",
                textDecoration: "none",
                fontWeight: "600",
              }}
            >
              My Orders
            </Link>

            <Link
              to="/"
              style={{
                padding: "13px 24px",
                background: "#fffaf0",
                color: "#691b2b",
                border: "1px solid #c8a45d",
                textDecoration: "none",
                fontWeight: "600",
              }}
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderSuccess;