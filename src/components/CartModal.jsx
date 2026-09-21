import React from "react";

function CartModal({
  cartItems = [],
  onClose = () => {},
  onIncrease = () => {},
  onDecrease = () => {},
  onRemove = () => {},
  onCheckout = () => {},
}) {
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const deliveryCharge = subtotal > 0 ? 40 : 0;
  const tax = Math.round(subtotal * 0.05);
  const grandTotal = subtotal + deliveryCharge + tax;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(35, 20, 15, 0.58)",
        zIndex: 2000,
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "480px",
          height: "100%",
          background: "#fffaf0",
          boxShadow: "-8px 0 30px rgba(0,0,0,0.2)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* HEADER */}
        <div
          style={{
            background: "#691b2b",
            color: "#fffaf0",
            padding: "22px 24px",
            borderBottom: "3px solid #c8a45d",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <p
              style={{
                color: "#d8bd78",
                fontSize: "11px",
                letterSpacing: "2px",
                marginBottom: "5px",
              }}
            >
              YOUR SELECTION
            </p>

            <h2
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "27px",
                fontWeight: "500",
              }}
            >
              Your Cart
            </h2>
          </div>

          <button
            onClick={onClose}
            aria-label="Close cart"
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              border: "1px solid #d8bd78",
              background: "transparent",
              color: "#fffaf0",
              cursor: "pointer",
              fontSize: "20px",
            }}
          >
            ×
          </button>
        </div>

        {/* CART CONTENT */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "20px",
          }}
        >
          {cartItems.length === 0 ? (
            <div
              style={{
                minHeight: "60%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                padding: "30px",
              }}
            >
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  border: "1px solid #c8a45d",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                  color: "#691b2b",
                  fontSize: "28px",
                }}
              >
                🛒
              </div>

              <h3
                style={{
                  fontFamily: "Georgia, serif",
                  color: "#54202b",
                  fontSize: "24px",
                  marginBottom: "10px",
                }}
              >
                Your cart is empty
              </h3>

              <p
                style={{
                  color: "#766657",
                  fontSize: "14px",
                  lineHeight: "1.7",
                  maxWidth: "300px",
                }}
              >
                Your favourite dishes are waiting for you. Explore our menu
                and add something delicious.
              </p>

              <button
                onClick={onClose}
                style={{
                  marginTop: "22px",
                  padding: "12px 24px",
                  background: "#691b2b",
                  color: "#fffaf0",
                  border: "1px solid #691b2b",
                  cursor: "pointer",
                  fontWeight: "600",
                }}
              >
                Explore Menu
              </button>
            </div>
          ) : (
            <>
              {/* ITEMS */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                }}
              >
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      background: "#fffdf8",
                      border: "1px solid #dfcda4",
                      padding: "12px",
                      display: "flex",
                      gap: "12px",
                    }}
                  >
                    {/* IMAGE */}
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{
                        width: "75px",
                        height: "75px",
                        objectFit: "cover",
                        flexShrink: 0,
                      }}
                    />

                    {/* DETAILS */}
                    <div
                      style={{
                        flex: 1,
                        minWidth: 0,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          gap: "8px",
                        }}
                      >
                        <h4
                          style={{
                            fontFamily: "Georgia, serif",
                            color: "#54202b",
                            fontSize: "17px",
                            marginBottom: "5px",
                          }}
                        >
                          {item.name}
                        </h4>

                        <button
                          onClick={() => onRemove(item.id)}
                          style={{
                            border: "none",
                            background: "transparent",
                            color: "#8a2638",
                            cursor: "pointer",
                            fontSize: "18px",
                            padding: "0",
                            height: "22px",
                          }}
                          aria-label={`Remove ${item.name}`}
                        >
                          ×
                        </button>
                      </div>

                      <p
                        style={{
                          color: "#806d5b",
                          fontSize: "12px",
                          marginBottom: "10px",
                        }}
                      >
                        ₹{item.price} each
                      </p>

                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        {/* QUANTITY */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            border: "1px solid #cdbb91",
                          }}
                        >
                          <button
                            onClick={() => onDecrease(item.id)}
                            style={{
                              width: "30px",
                              height: "28px",
                              border: "none",
                              background: "#f4ecdc",
                              color: "#54202b",
                              cursor: "pointer",
                              fontSize: "17px",
                            }}
                          >
                            −
                          </button>

                          <span
                            style={{
                              width: "34px",
                              textAlign: "center",
                              fontSize: "13px",
                              fontWeight: "600",
                            }}
                          >
                            {item.quantity}
                          </span>

                          <button
                            onClick={() => onIncrease(item.id)}
                            style={{
                              width: "30px",
                              height: "28px",
                              border: "none",
                              background: "#f4ecdc",
                              color: "#54202b",
                              cursor: "pointer",
                              fontSize: "17px",
                            }}
                          >
                            +
                          </button>
                        </div>

                        {/* ITEM TOTAL */}
                        <strong
                          style={{
                            color: "#691b2b",
                            fontFamily: "Georgia, serif",
                            fontSize: "16px",
                          }}
                        >
                          ₹{item.price * item.quantity}
                        </strong>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* BILL */}
              <div
                style={{
                  marginTop: "25px",
                  borderTop: "1px solid #d8c6a0",
                  paddingTop: "20px",
                }}
              >
                <p
                  style={{
                    color: "#a08040",
                    fontSize: "11px",
                    letterSpacing: "2px",
                    marginBottom: "14px",
                    fontWeight: "600",
                  }}
                >
                  ORDER SUMMARY
                </p>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "10px",
                    color: "#655546",
                    fontSize: "14px",
                  }}
                >
                  <span>Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "10px",
                    color: "#655546",
                    fontSize: "14px",
                  }}
                >
                  <span>Delivery</span>
                  <span>₹{deliveryCharge}</span>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "15px",
                    color: "#655546",
                    fontSize: "14px",
                  }}
                >
                  <span>Tax (5%)</span>
                  <span>₹{tax}</span>
                </div>

                <div
                  style={{
                    borderTop: "1px solid #d8c6a0",
                    paddingTop: "15px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <strong
                    style={{
                      fontFamily: "Georgia, serif",
                      fontSize: "20px",
                      color: "#54202b",
                    }}
                  >
                    Grand Total
                  </strong>

                  <strong
                    style={{
                      fontFamily: "Georgia, serif",
                      fontSize: "22px",
                      color: "#691b2b",
                    }}
                  >
                    ₹{grandTotal}
                  </strong>
                </div>
              </div>
            </>
          )}
        </div>

        {/* FOOTER */}
        {cartItems.length > 0 && (
          <div
            style={{
              padding: "18px 20px",
              borderTop: "1px solid #dfcda4",
              background: "#fffdf8",
            }}
          >
            <button
              onClick={onCheckout}
              style={{
                width: "100%",
                padding: "15px",
                background: "#691b2b",
                color: "#fffaf0",
                border: "1px solid #691b2b",
                cursor: "pointer",
                fontSize: "15px",
                fontWeight: "600",
                letterSpacing: "0.3px",
              }}
            >
              Proceed to Checkout →
            </button>

            <p
              style={{
                textAlign: "center",
                marginTop: "10px",
                color: "#806d5b",
                fontSize: "11px",
              }}
            >
              Secure checkout • Freshly prepared • Zaika Express
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartModal;