import React, { useState } from "react";
import { Link } from "react-router-dom";

const galleryItems = [
  {
    id: 1,
    title: "The Zaika Dining Hall",
    category: "Ambience",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 2,
    title: "An Evening at Zaika",
    category: "Ambience",
    image:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 3,
    title: "Elegant Table Setting",
    category: "Ambience",
    image:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 4,
    title: "Birthday Celebrations",
    category: "Celebrations",
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 5,
    title: "Special Moments",
    category: "Celebrations",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 6,
    title: "Family Gathering",
    category: "Celebrations",
    image: "/celebration.jpeg",
  },
  {
    id: 7,
    title: "Behind the Kitchen",
    category: "Our Kitchen",
    image:
      "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 8,
    title: "Crafting the Zaika Experience",
    category: "Our Kitchen",
    image:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 9,
    title: "A Place to Gather",
    category: "Zaika Moments",
    image:
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=85",
  },
];

const categories = [
  "All",
  "Ambience",
  "Celebrations",
  "Our Kitchen",
  "Zaika Moments",
];

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div style={styles.page}>
      {/* ================= HERO ================= */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay}></div>

        <div style={styles.heroContent}>
          <div style={styles.eyebrow}>✦ THE ZAIKA EXPERIENCE ✦</div>

          <h1 style={styles.heroTitle}>Our Gallery</h1>

          <div style={styles.ornament}>
            <span>◆</span>
            <span style={styles.ornamentLine}></span>
            <span>◆</span>
          </div>

          <p style={styles.heroText}>
            Step inside Zaika and discover the ambience, celebrations and
            moments that make every visit special.
          </p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section style={styles.intro}>
        <div style={styles.sectionLabel}>A GLIMPSE OF ZAIKA</div>

        <h2 style={styles.sectionTitle}>More Than Just a Restaurant</h2>

        <div style={styles.goldDivider}>
          <span>✦</span>
        </div>

        <p style={styles.introText}>
          From warm family dinners to beautifully decorated celebrations,
          Zaika is designed to make every occasion feel memorable. Explore
          the spaces, people and moments behind the Zaika experience.
        </p>
      </section>

      {/* ================= FILTER ================= */}
      <section style={styles.gallerySection}>
        <div style={styles.filters}>
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              style={{
                ...styles.filterButton,
                ...(activeCategory === category
                  ? styles.activeFilter
                  : styles.inactiveFilter),
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* ================= GALLERY GRID ================= */}
        <div style={styles.galleryGrid}>
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`gallery-card gallery-card-${index}`}
              onClick={() => setSelectedImage(item)}
              style={styles.galleryCard}
            >
              <div style={styles.imageWrapper}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={styles.image}
                />

                <div className="gallery-hover">
                  <div style={styles.viewButton}>VIEW PHOTO</div>
                </div>
              </div>

              <div style={styles.cardInfo}>
                <div style={styles.cardCategory}>{item.category}</div>

                <h3 style={styles.cardTitle}>{item.title}</h3>

                <div style={styles.cardLine}>
                  <span></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}
      <section style={styles.experience}>
        <div style={styles.experienceInner}>
          <div style={styles.sectionLabelLight}>CELEBRATE WITH US</div>

          <h2 style={styles.experienceTitle}>
            Your Special Moments,
            <br />
            Our Royal Hospitality
          </h2>

          <div style={styles.goldDivider}>
            <span>✦</span>
          </div>

          <p style={styles.experienceText}>
            Birthday, anniversary, family gathering or corporate celebration —
            let Zaika create an elegant setting for your special occasion.
          </p>

          <Link to="/party-booking" style={styles.primaryButton}>
            Plan Your Celebration
          </Link>
        </div>
      </section>

      {/* ================= BOOKING CTA ================= */}
      <section style={styles.bookingCta}>
        <div style={styles.bookingInner}>
          <div>
            <div style={styles.sectionLabel}>YOUR TABLE AWAITS</div>

            <h2 style={styles.bookingTitle}>
              Make Your Next Visit Memorable
            </h2>

            <p style={styles.bookingText}>
              Reserve your table and experience the warmth of Zaika.
            </p>
          </div>

          <Link to="/booking" style={styles.outlineButton}>
            Book a Table
          </Link>
        </div>
      </section>

      {/* ================= LIGHTBOX ================= */}
      {selectedImage && (
        <div
          style={styles.lightbox}
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            style={styles.closeButton}
          >
            ×
          </button>

          <div
            style={styles.lightboxContent}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              style={styles.lightboxImage}
            />

            <div style={styles.lightboxInfo}>
              <div style={styles.cardCategory}>
                {selectedImage.category}
              </div>

              <h3 style={styles.lightboxTitle}>
                {selectedImage.title}
              </h3>
            </div>
          </div>
        </div>
      )}

      {/* ================= CSS ================= */}
      <style>
        {`
          .gallery-card {
            transition:
              transform 0.35s ease,
              box-shadow 0.35s ease,
              border-color 0.35s ease;
          }

          .gallery-card:hover {
            transform: translateY(-7px);
            box-shadow: 0 20px 45px rgba(59, 23, 28, 0.15) !important;
            border-color: rgba(201, 168, 93, 0.65) !important;
          }

          .gallery-card img {
            transition: transform 0.6s ease;
          }

          .gallery-card:hover img {
            transform: scale(1.06);
          }

          .gallery-hover {
            position: absolute;
            inset: 0;
            background: rgba(45, 20, 24, 0.48);
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 0.3s ease;
          }

          .gallery-card:hover .gallery-hover {
            opacity: 1;
          }

          @media (max-width: 700px) {
            .gallery-card-0,
            .gallery-card-5 {
              grid-column: span 1 !important;
            }
          }
        `}
      </style>
    </div>
  );
}

/* =====================================================
   STYLES
===================================================== */

const styles = {
  page: {
    minHeight: "100vh",
    background: "#F8F3EA",
    color: "#3B171C",
  },

  /* HERO */
  hero: {
    minHeight: "430px",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "70px 20px",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=90')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  heroOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(rgba(47, 20, 24, 0.82), rgba(47, 20, 24, 0.76))",
  },

  heroContent: {
    position: "relative",
    zIndex: 2,
    maxWidth: "750px",
  },

  eyebrow: {
    color: "#C9A85D",
    fontSize: "12px",
    fontWeight: "700",
    letterSpacing: "4px",
    marginBottom: "18px",
  },

  heroTitle: {
    margin: 0,
    color: "#FFF9F0",
    fontFamily: "Georgia, 'Times New Roman', serif",
    fontSize: "clamp(44px, 8vw, 76px)",
    fontWeight: "500",
    lineHeight: "1.05",
  },

  ornament: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    color: "#C9A85D",
    margin: "23px 0",
    fontSize: "9px",
  },

  ornamentLine: {
    width: "70px",
    height: "1px",
    background: "#C9A85D",
    display: "block",
  },

  heroText: {
    color: "#E9DDCC",
    fontSize: "15px",
    lineHeight: "1.8",
    margin: 0,
  },

  /* INTRO */
  intro: {
    maxWidth: "850px",
    margin: "0 auto",
    padding: "78px 20px 45px",
    textAlign: "center",
  },

  sectionLabel: {
    color: "#A88745",
    fontSize: "11px",
    fontWeight: "700",
    letterSpacing: "3px",
    marginBottom: "13px",
  },

  sectionLabelLight: {
    color: "#C9A85D",
    fontSize: "11px",
    fontWeight: "700",
    letterSpacing: "3px",
    marginBottom: "13px",
  },

  sectionTitle: {
    margin: 0,
    color: "#3B171C",
    fontFamily: "Georgia, 'Times New Roman', serif",
    fontSize: "clamp(30px, 5vw, 46px)",
    fontWeight: "500",
  },

  goldDivider: {
    color: "#C9A85D",
    margin: "16px 0",
    fontSize: "12px",
  },

  introText: {
    color: "#75675D",
    fontSize: "14px",
    lineHeight: "1.9",
    maxWidth: "720px",
    margin: "0 auto",
  },

  /* GALLERY */
  gallerySection: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "10px 20px 80px",
  },

  filters: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "9px",
    marginBottom: "42px",
  },

  filterButton: {
    padding: "10px 19px",
    fontSize: "11px",
    fontWeight: "700",
    letterSpacing: "0.7px",
    cursor: "pointer",
    borderRadius: "2px",
    transition: "all 0.25s ease",
  },

  activeFilter: {
    background: "#3B171C",
    color: "#FFF9F0",
    border: "1px solid #3B171C",
  },

  inactiveFilter: {
    background: "#FFFDF8",
    color: "#542B2B",
    border: "1px solid rgba(201, 168, 93, 0.5)",
  },

  galleryGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "22px",
  },

  galleryCard: {
    background: "#FFFDF8",
    border: "1px solid rgba(201, 168, 93, 0.25)",
    padding: "8px",
    cursor: "pointer",
    boxShadow: "0 8px 25px rgba(59, 23, 28, 0.07)",
  },

  imageWrapper: {
    position: "relative",
    height: "285px",
    overflow: "hidden",
    background: "#E9DFD0",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },

  cardInfo: {
    padding: "16px 8px 12px",
  },

  cardCategory: {
    color: "#A88745",
    fontSize: "9px",
    fontWeight: "700",
    letterSpacing: "2px",
    textTransform: "uppercase",
    marginBottom: "7px",
  },

  cardTitle: {
    margin: 0,
    color: "#3B171C",
    fontFamily: "Georgia, 'Times New Roman', serif",
    fontSize: "20px",
    fontWeight: "500",
  },

  cardLine: {
    marginTop: "10px",
  },

  viewButton: {
    color: "#3B171C",
    background: "#FFF9F0",
    padding: "10px 17px",
    fontSize: "10px",
    fontWeight: "700",
    letterSpacing: "1.5px",
  },

  /* EXPERIENCE */
  experience: {
    background:
      "linear-gradient(135deg, #30483D 0%, #263B32 100%)",
    padding: "85px 20px",
    textAlign: "center",
    color: "#FFF9F0",
  },

  experienceInner: {
    maxWidth: "800px",
    margin: "0 auto",
  },

  experienceTitle: {
    margin: 0,
    fontFamily: "Georgia, 'Times New Roman', serif",
    fontSize: "clamp(30px, 5vw, 48px)",
    fontWeight: "500",
    lineHeight: "1.25",
  },

  experienceText: {
    maxWidth: "650px",
    margin: "0 auto 30px",
    color: "#DED8CC",
    fontSize: "14px",
    lineHeight: "1.9",
  },

  primaryButton: {
    display: "inline-block",
    background: "#C9A85D",
    color: "#3B171C",
    padding: "14px 27px",
    textDecoration: "none",
    fontSize: "12px",
    fontWeight: "700",
    letterSpacing: "0.5px",
    border: "1px solid #C9A85D",
  },

  /* BOOKING CTA */
  bookingCta: {
    background: "#FFFDF8",
    borderTop: "1px solid rgba(201, 168, 93, 0.25)",
    padding: "55px 20px",
  },

  bookingInner: {
    maxWidth: "1100px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "30px",
    flexWrap: "wrap",
  },

  bookingTitle: {
    margin: "0 0 8px",
    color: "#3B171C",
    fontFamily: "Georgia, 'Times New Roman', serif",
    fontSize: "30px",
    fontWeight: "500",
  },

  bookingText: {
    margin: 0,
    color: "#75675D",
    fontSize: "13px",
  },

  outlineButton: {
    display: "inline-block",
    border: "1px solid #8F2738",
    color: "#8F2738",
    background: "#FFFDF8",
    padding: "13px 26px",
    textDecoration: "none",
    fontSize: "12px",
    fontWeight: "700",
    whiteSpace: "nowrap",
  },

  /* LIGHTBOX */
  lightbox: {
    position: "fixed",
    inset: 0,
    background: "rgba(25, 15, 16, 0.92)",
    zIndex: 9999,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "25px",
  },

  closeButton: {
    position: "fixed",
    top: "18px",
    right: "25px",
    background: "transparent",
    border: "none",
    color: "#FFF",
    fontSize: "38px",
    cursor: "pointer",
    zIndex: 10000,
    lineHeight: 1,
  },

  lightboxContent: {
    width: "100%",
    maxWidth: "950px",
    background: "#FFFDF8",
    padding: "10px",
  },

  lightboxImage: {
    width: "100%",
    maxHeight: "72vh",
    objectFit: "contain",
    display: "block",
    background: "#EEE5D7",
  },

  lightboxInfo: {
    textAlign: "center",
    padding: "17px 10px 10px",
  },

  lightboxTitle: {
    margin: 0,
    color: "#3B171C",
    fontFamily: "Georgia, 'Times New Roman', serif",
    fontSize: "25px",
    fontWeight: "500",
  },
};

export default Gallery;