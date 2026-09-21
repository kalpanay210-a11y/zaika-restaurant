import React from "react";
import { Link } from "react-router-dom";

function MyOrders({ orders = [] }) {
  const savedOrders = JSON.parse(
    localStorage.getItem("zaikaOrders") || "[]"
  );

  const finalOrders = orders.length > 0 ? orders : savedOrders;

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
            "linear-gradient(rgba(55,31,27,0.82), rgba(55,31,27,0.82)), url('/Paneerbutter.jpeg') center/cover",
          padding: "70px 20px",
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
          ✦ YOUR ZAIKA ✦
        </div>

        <h1
          style={{
            color: "#fff8eb",
            fontFamily: "Georgia, serif",
            fontSize: "clamp(38px, 6vw, 58px)",
            fontWeight: "500",
            margin: "0 0 15px",
          }}
        >
          My Orders
        </h1>

        <p
          style={{
            color: "#e8dccb",
            margin: 0,
            lineHeight: "1.7",
          }}
        >
          View your recent Zaika Express orders.
        </p>
      </section>

      {/* ORDERS */}
      <section
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "55px 20px 80px",
        }}
      >
        {finalOrders.length === 0 ? (
          <div
            style={{
              background: "#fffaf2",
              border: "1px solid #ddcba7",
              textAlign: "center",
              padding: "60px 25px",
              boxShadow: "0 8px 25px rgba(70, 48, 30, 0.07)",
            }}
          >
            <div
              style={{
                fontSize: "42px",
                color: "#a88745",
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
                fontSize: "30px",
                marginBottom: "12px",
              }}
            >
              No Orders Yet
            </h2>

            <p
              style={{
                color: "#75675d",
                marginBottom: "25px",
              }}
            >
              Your delicious Zaika journey starts with your first order.
            </p>

            <Link
              to="/menu"
              style={{
                display: "inline-block",
                background: "#542b2b",
                color: "#fff8eb",
                padding: "13px 28px",
                textDecoration: "none",
                fontWeight: "600",
              }}
            >
              Explore Menu
            </Link>
          </div>
        ) : (
          <>
            <div
              style={{
                marginBottom: "25px",
                color: "#75675d",
                fontSize: "14px",
              }}
            >
              Showing <strong>{finalOrders.length}</strong>{" "}
              {finalOrders.length === 1 ? "order" : "orders"}
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "22px",
              }}
            >
              {finalOrders.map((order, index) => (
                <div
                  key={order.id || order.orderId || index}
                  style={{
                    background: "#fffaf2",
                    border: "1px solid #ddcba7",
                    padding: "25px",
                    boxShadow: "0 8px 25px rgba(70, 48, 30, 0.07)",
                  }}
                >
                  {/* ORDER HEADER */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "15px",
                      flexWrap: "wrap",
                      borderBottom: "1px solid #eadfc9",
                      paddingBottom: "18px",
                      marginBottom: "20px",
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
                        ORDER ID
                      </div>

                      <strong
                        style={{
                          color: "#542b2b",
                          fontSize: "16px",
                        }}
                      >
                        #{order.id || order.orderId || `ZAIKA${index + 1001}`}
                      </strong>
                    </div>

                    <div
                      style={{
                        background: "#e7f0e7",
                        color: "#36533f",
                        padding: "8px 14px",
                        fontSize: "12px",
                        fontWeight: "700",
                      }}
                    >
                      {order.status || "Confirmed"}
                    </div>
                  </div>

                  {/* ORDER DATE */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns:
                        "repeat(auto-fit, minmax(180px, 1fr))",
                      gap: "15px",
                      marginBottom: "22px",
                    }}
                  >
                    <div>
                      <span
                        style={{
                          color: "#a88745",
                          fontSize: "11px",
                          letterSpacing: "1.5px",
                        }}
                      >
                        ORDER DATE
                      </span>

                      <div
                        style={{
                          color: "#542b2b",
                          marginTop: "5px",
                          fontWeight: "600",
                        }}
                      >
                        {order.date || new Date().toLocaleDateString()}
                      </div>
                    </div>

                    <div>
                      <span
                        style={{
                          color: "#a88745",
                          fontSize: "11px",
                          letterSpacing: "1.5px",
                        }}
                      >
                        PAYMENT
                      </span>

                      <div
                        style={{
                          color: "#542b2b",
                          marginTop: "5px",
                          fontWeight: "600",
                        }}
                      >
                        {order.paymentMethod || "Cash on Delivery"}
                      </div>
                    </div>

                    <div>
                      <span
                        style={{
                          color: "#a88745",
                          fontSize: "11px",
                          letterSpacing: "1.5px",
                        }}
                      >
                        TOTAL
                      </span>

                      <div
                        style={{
                          color: "#542b2b",
                          marginTop: "5px",
                          fontWeight: "700",
                          fontSize: "18px",
                        }}
                      >
                        ₹
                        {Number(
                          order.grandTotal || order.total || 0
                        ).toFixed(2)}
                      </div>
                    </div>
                  </div>

                  {/* ITEMS */}
                  <div>
                    <div
                      style={{
                        color: "#542b2b",
                        fontFamily: "Georgia, serif",
                        fontSize: "20px",
                        marginBottom: "12px",
                      }}
                    >
                      Ordered Items
                    </div>

                    {(order.items || []).length === 0 ? (
                      <p
                        style={{
                          color: "#75675d",
                          fontSize: "14px",
                        }}
                      >
                        Order item details will appear here.
                      </p>
                    ) : (
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "10px",
                        }}
                      >
                        {order.items.map((item, itemIndex) => (
                          <div
                            key={item.id || itemIndex}
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              gap: "15px",
                              background: "#f5eee2",
                              padding: "12px 15px",
                              flexWrap: "wrap",
                            }}
                          >
                            <div>
                              <strong
                                style={{
                                  color: "#542b2b",
                                }}
                              >
                                {item.name || "Food Item"}
                              </strong>

                              <div
                                style={{
                                  color: "#75675d",
                                  fontSize: "13px",
                                  marginTop: "3px",
                                }}
                              >
                                Quantity: {item.quantity || 1}
                              </div>
                            </div>

                            <div
                              style={{
                                color: "#542b2b",
                                fontWeight: "700",
                              }}
                            >
                              ₹
                              {(
                                Number(item.price || 0) *
                                Number(item.quantity || 1)
                              ).toFixed(2)}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* DELIVERY */}
                  {order.customer && (
                    <div
                      style={{
                        marginTop: "22px",
                        paddingTop: "20px",
                        borderTop: "1px solid #eadfc9",
                      }}
                    >
                      <div
                        style={{
                          color: "#542b2b",
                          fontFamily: "Georgia, serif",
                          fontSize: "19px",
                          marginBottom: "8px",
                        }}
                      >
                        Delivery Details
                      </div>

                      <p
                        style={{
                          color: "#75675d",
                          lineHeight: "1.7",
                          margin: 0,
                          fontSize: "14px",
                        }}
                      >
                        {order.customer.name || ""}
                        <br />
                        {order.customer.mobile || ""}
                        <br />
                        {order.customer.address || ""}
                        {order.customer.city
                          ? `, ${order.customer.city}`
                          : ""}
                        {order.customer.pincode
                          ? ` - ${order.customer.pincode}`
                          : ""}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CONTINUE SHOPPING */}
            <div
              style={{
                textAlign: "center",
                marginTop: "35px",
              }}
            >
              <Link
                to="/menu"
                style={{
                  display: "inline-block",
                  background: "#542b2b",
                  color: "#fff8eb",
                  padding: "14px 30px",
                  textDecoration: "none",
                  fontWeight: "600",
                }}
              >
                Order More Food
              </Link>
            </div>
          </>
        )}
      </section>
    </div>
  );
}

export default MyOrders;