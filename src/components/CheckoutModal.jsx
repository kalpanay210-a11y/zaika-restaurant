import React, { useState } from "react";

function CheckoutModal({
  cartItems = [],
  onClose = () => {},
  onPlaceOrder = () => {},
  isLoggedIn = false,
  onLogin = () => {},
}) {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    address: "",
    city: "",
    pincode: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [errors, setErrors] = useState({});

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const deliveryCharge = subtotal > 0 ? 40 : 0;
  const tax = Math.round(subtotal * 0.05);
  const grandTotal = subtotal + deliveryCharge + tax;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Please enter your mobile number.";
    } else if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
      newErrors.mobile = "Enter a valid 10-digit mobile number.";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Please enter your delivery address.";
    }

    if (!formData.city.trim()) {
      newErrors.city = "Please enter your city.";
    }

    if (!formData.pincode.trim()) {
      newErrors.pincode = "Please enter your pincode.";
    } else if (!/^\d{6}$/.test(formData.pincode)) {
      newErrors.pincode = "Enter a valid 6-digit pincode.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isLoggedIn) {
      onLogin();
      return;
    }

    if (!validateForm()) {
      return;
    }

    onPlaceOrder({
      customer: formData,
      paymentMethod,
      subtotal,
      deliveryCharge,
      tax,
      grandTotal,
      items: cartItems,
    });
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 13px",
    border: "1px solid #d2c09b",
    background: "#fffdf8",
    color: "#40332a",
    fontSize: "14px",
    outline: "none",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "6px",
    color: "#5c4635",
    fontSize: "13px",
    fontWeight: "600",
  };

  const errorStyle = {
    color: "#9a2638",
    fontSize: "11px",
    marginTop: "5px",
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 2500,
        background: "rgba(35, 20, 15, 0.65)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        overflowY: "auto",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1000px",
          maxHeight: "92vh",
          overflowY: "auto",
          background: "#fffaf0",
          boxShadow: "0 15px 45px rgba(0,0,0,0.3)",
          border: "1px solid #c8a45d",
        }}
      >
        {/* HEADER */}
        <div
          style={{
            background: "#691b2b",
            color: "#fffaf0",
            padding: "22px 25px",
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
              COMPLETE YOUR ORDER
            </p>

            <h2
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "28px",
                fontWeight: "500",
              }}
            >
              Checkout
            </h2>
          </div>

          <button
            onClick={onClose}
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

        {/* LOGIN MESSAGE */}
        {!isLoggedIn && (
          <div
            style={{
              margin: "20px 25px 0",
              padding: "15px 17px",
              background: "#f5ead4",
              borderLeft: "4px solid #c8a45d",
              color: "#5c4635",
              fontSize: "14px",
              lineHeight: "1.6",
            }}
          >
            <strong>Login required</strong>
            <br />
            Please login or create an account before placing your order.
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 1.5fr) minmax(280px, 0.8fr)",
              gap: "25px",
              padding: "25px",
            }}
          >
            {/* LEFT SIDE */}
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
                DELIVERY DETAILS
              </p>

              <h3
                style={{
                  fontFamily: "Georgia, serif",
                  color: "#54202b",
                  fontSize: "24px",
                  marginBottom: "20px",
                  fontWeight: "500",
                }}
              >
                Where should we deliver?
              </h3>

              {/* NAME */}
              <div style={{ marginBottom: "15px" }}>
                <label style={labelStyle}>Full Name</label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  style={inputStyle}
                />

                {errors.name && (
                  <p style={errorStyle}>{errors.name}</p>
                )}
              </div>

              {/* MOBILE */}
              <div style={{ marginBottom: "15px" }}>
                <label style={labelStyle}>Mobile Number</label>

                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="10-digit mobile number"
                  maxLength="10"
                  style={inputStyle}
                />

                {errors.mobile && (
                  <p style={errorStyle}>{errors.mobile}</p>
                )}
              </div>

              {/* ADDRESS */}
              <div style={{ marginBottom: "15px" }}>
                <label style={labelStyle}>Delivery Address</label>

                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="House no., street, area..."
                  rows="4"
                  style={{
                    ...inputStyle,
                    resize: "vertical",
                  }}
                />

                {errors.address && (
                  <p style={errorStyle}>{errors.address}</p>
                )}
              </div>

              {/* CITY + PINCODE */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "15px",
                }}
              >
                <div>
                  <label style={labelStyle}>City</label>

                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Your city"
                    style={inputStyle}
                  />

                  {errors.city && (
                    <p style={errorStyle}>{errors.city}</p>
                  )}
                </div>

                <div>
                  <label style={labelStyle}>Pincode</label>

                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    placeholder="6-digit pincode"
                    maxLength="6"
                    style={inputStyle}
                  />

                  {errors.pincode && (
                    <p style={errorStyle}>{errors.pincode}</p>
                  )}
                </div>
              </div>

              {/* PAYMENT */}
              <div style={{ marginTop: "28px" }}>
                <p
                  style={{
                    color: "#a08040",
                    fontSize: "11px",
                    letterSpacing: "2px",
                    marginBottom: "8px",
                    fontWeight: "600",
                  }}
                >
                  PAYMENT METHOD
                </p>

                <h3
                  style={{
                    fontFamily: "Georgia, serif",
                    color: "#54202b",
                    fontSize: "22px",
                    marginBottom: "15px",
                    fontWeight: "500",
                  }}
                >
                  Choose payment
                </h3>

                {/* COD */}
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    border: "1px solid #d2c09b",
                    background:
                      paymentMethod === "COD"
                        ? "#f5ead4"
                        : "#fffdf8",
                    padding: "14px",
                    cursor: "pointer",
                    marginBottom: "10px",
                  }}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="COD"
                    checked={paymentMethod === "COD"}
                    onChange={(e) =>
                      setPaymentMethod(e.target.value)
                    }
                  />

                  <div>
                    <strong
                      style={{
                        display: "block",
                        color: "#54202b",
                        fontSize: "14px",
                      }}
                    >
                      Cash on Delivery
                    </strong>

                    <span
                      style={{
                        color: "#806d5b",
                        fontSize: "12px",
                      }}
                    >
                      Pay when your order arrives.
                    </span>
                  </div>
                </label>

                {/* ONLINE */}
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    border: "1px solid #d2c09b",
                    background:
                      paymentMethod === "ONLINE"
                        ? "#f5ead4"
                        : "#fffdf8",
                    padding: "14px",
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="ONLINE"
                    checked={paymentMethod === "ONLINE"}
                    onChange={(e) =>
                      setPaymentMethod(e.target.value)
                    }
                  />

                  <div>
                    <strong
                      style={{
                        display: "block",
                        color: "#54202b",
                        fontSize: "14px",
                      }}
                    >
                      Online Payment
                    </strong>

                    <span
                      style={{
                        color: "#806d5b",
                        fontSize: "12px",
                      }}
                    >
                      UPI, card or net banking.
                    </span>
                  </div>
                </label>
              </div>
            </div>

            {/* RIGHT SIDE — ORDER SUMMARY */}
            <div>
              <div
                style={{
                  background: "#fffdf8",
                  border: "1px solid #dfcda4",
                  padding: "20px",
                  position: "sticky",
                  top: "0",
                }}
              >
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

                <h3
                  style={{
                    fontFamily: "Georgia, serif",
                    color: "#54202b",
                    fontSize: "23px",
                    marginBottom: "18px",
                    fontWeight: "500",
                  }}
                >
                  Order Summary
                </h3>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    maxHeight: "300px",
                    overflowY: "auto",
                    marginBottom: "18px",
                  }}
                >
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      style={{
                        display: "flex",
                        gap: "10px",
                        alignItems: "center",
                        borderBottom: "1px solid #eee3ce",
                        paddingBottom: "11px",
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{
                          width: "52px",
                          height: "52px",
                          objectFit: "cover",
                        }}
                      />

                      <div style={{ flex: 1 }}>
                        <p
                          style={{
                            color: "#54202b",
                            fontFamily: "Georgia, serif",
                            fontSize: "14px",
                            marginBottom: "3px",
                          }}
                        >
                          {item.name}
                        </p>

                        <p
                          style={{
                            color: "#806d5b",
                            fontSize: "11px",
                          }}
                        >
                          Qty: {item.quantity}
                        </p>
                      </div>

                      <strong
                        style={{
                          color: "#691b2b",
                          fontSize: "13px",
                        }}
                      >
                        ₹{item.price * item.quantity}
                      </strong>
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    borderTop: "1px solid #d8c6a0",
                    paddingTop: "15px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "9px",
                      color: "#655546",
                      fontSize: "13px",
                    }}
                  >
                    <span>Subtotal</span>
                    <span>₹{subtotal}</span>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "9px",
                      color: "#655546",
                      fontSize: "13px",
                    }}
                  >
                    <span>Delivery</span>
                    <span>₹{deliveryCharge}</span>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "14px",
                      color: "#655546",
                      fontSize: "13px",
                    }}
                  >
                    <span>Tax</span>
                    <span>₹{tax}</span>
                  </div>

                  <div
                    style={{
                      borderTop: "1px solid #d8c6a0",
                      paddingTop: "14px",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <strong
                      style={{
                        fontFamily: "Georgia, serif",
                        color: "#54202b",
                        fontSize: "18px",
                      }}
                    >
                      Total
                    </strong>

                    <strong
                      style={{
                        fontFamily: "Georgia, serif",
                        color: "#691b2b",
                        fontSize: "20px",
                      }}
                    >
                      ₹{grandTotal}
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM BUTTON */}
          <div
            style={{
              padding: "0 25px 25px",
              display: "flex",
              justifyContent: "flex-end",
              gap: "12px",
            }}
          >
            <button
              type="button"
              onClick={onClose}
              style={{
                padding: "13px 22px",
                background: "#fffaf0",
                border: "1px solid #cdbb91",
                color: "#54202b",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              Back
            </button>

            <button
              type="submit"
              style={{
                padding: "13px 28px",
                background: "#691b2b",
                border: "1px solid #691b2b",
                color: "#fffaf0",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              {isLoggedIn
                ? `Place Order • ₹${grandTotal}`
                : "Login to Continue →"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CheckoutModal;