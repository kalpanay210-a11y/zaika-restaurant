import React from "react";

function MenuItemCard({ item, onAddToCart }) {
  return (
    <div style={styles.card} className="zaika-menu-card">

      {/* FOOD IMAGE */}
      <div style={styles.imgContainer}>
        <img
          src={item.image}
          alt={item.name}
          style={styles.image}
        />

        {/* Soft image overlay */}
        <div style={styles.imageOverlay}></div>

        {/* Category / Veg Indicator */}
        <span style={styles.badge}>
          ✦ Chef's Selection
        </span>
      </div>

      {/* DETAILS */}
      <div style={styles.details}>

        <h3 style={styles.title}>
          {item.name}
        </h3>

        <div style={styles.goldLine}>
          <span>✦</span>
        </div>

        <p style={styles.description}>
          Freshly prepared with carefully selected ingredients
          and the signature taste of Zaika.
        </p>

        {/* BOTTOM */}
        <div style={styles.footer}>

          <div>
            <span style={styles.priceLabel}>
              PRICE
            </span>

            <div style={styles.price}>
              ₹{item.price}
            </div>
          </div>

          <button
            type="button"
            onClick={() => onAddToCart(item)}
            style={styles.addBtn}
            className="zaika-add-btn"
          >
            <span style={styles.plus}>+</span>
            Add to Order
          </button>

        </div>
      </div>

      {/* CARD STYLES */}
      <style>
        {`
          .zaika-menu-card {
            transition: transform 0.3s ease,
                        box-shadow 0.3s ease,
                        border-color 0.3s ease;
          }

          .zaika-menu-card:hover {
            transform: translateY(-7px);
            box-shadow: 0 18px 38px rgba(59, 23, 28, 0.16) !important;
            border-color: rgba(201, 168, 93, 0.55) !important;
          }

          .zaika-menu-card:hover img {
            transform: scale(1.045);
          }

          .zaika-menu-card:hover .zaika-add-btn {
            background: #C9A85D !important;
            color: #3B171C !important;
          }

          .zaika-add-btn {
            transition: all 0.25s ease;
          }
        `}
      </style>

    </div>
  );
}

const styles = {
  card: {
    backgroundColor: "#FFFDF8",
    borderRadius: "5px",
    width: "100%",
    maxWidth: "330px",
    overflow: "hidden",
    border: "1px solid rgba(201, 168, 93, 0.25)",
    boxShadow: "0 8px 25px rgba(59, 23, 28, 0.08)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    position: "relative",
  },

  /* IMAGE */
  imgContainer: {
    position: "relative",
    height: "205px",
    overflow: "hidden",
    backgroundColor: "#EEE6D8",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    transition: "transform 0.5s ease",
  },

  imageOverlay: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "45%",
    background:
      "linear-gradient(to top, rgba(30,12,15,0.35), transparent)",
    pointerEvents: "none",
  },

  /* BADGE */
  badge: {
    position: "absolute",
    top: "12px",
    left: "12px",
    backgroundColor: "rgba(59, 23, 28, 0.92)",
    color: "#C9A85D",
    border: "1px solid rgba(201, 168, 93, 0.7)",
    fontSize: "10px",
    fontWeight: "700",
    letterSpacing: "0.5px",
    padding: "6px 10px",
    borderRadius: "2px",
  },

  /* DETAILS */
  details: {
    padding: "18px 18px 17px",
    textAlign: "left",
  },

  title: {
    margin: "0",
    fontFamily: "Georgia, 'Times New Roman', serif",
    fontSize: "20px",
    lineHeight: "1.25",
    color: "#3B171C",
    fontWeight: "700",
  },

  goldLine: {
    marginTop: "8px",
    marginBottom: "8px",
    color: "#C9A85D",
    fontSize: "10px",
    letterSpacing: "4px",
  },

  description: {
    margin: "0 0 17px",
    fontSize: "12px",
    color: "#6C5A58",
    lineHeight: "1.6",
    minHeight: "39px",
  },

  /* FOOTER */
  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    gap: "10px",
    paddingTop: "13px",
    borderTop: "1px solid rgba(201, 168, 93, 0.22)",
  },

  priceLabel: {
    display: "block",
    color: "#8B817C",
    fontSize: "9px",
    fontWeight: "700",
    letterSpacing: "1.2px",
    marginBottom: "2px",
  },

  price: {
    fontFamily: "Georgia, 'Times New Roman', serif",
    fontSize: "21px",
    fontWeight: "700",
    color: "#8F2738",
  },

  addBtn: {
    backgroundColor: "#8F2738",
    color: "#FFF9F0",
    border: "1px solid #8F2738",
    padding: "9px 13px",
    borderRadius: "3px",
    fontWeight: "700",
    fontSize: "11px",
    letterSpacing: "0.2px",
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(143, 39, 56, 0.18)",
    whiteSpace: "nowrap",
  },

  plus: {
    fontSize: "15px",
    marginRight: "4px",
    verticalAlign: "-1px",
    color: "#C9A85D",
  },
};

export default MenuItemCard;