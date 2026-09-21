import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={styles.page}>

      {/* ================= HERO SECTION ================= */}
      <section style={styles.hero}>

        <div style={styles.heroContent}>

          <p style={styles.heroSmallText}>
            ✦ WELCOME TO ZAIKA EXPRESS ✦
          </p>

          <h1 style={styles.heroTitle}>
            A Taste of
            <br />
            <span style={styles.heroGoldText}>
              Tradition & Royalty
            </span>
          </h1>

          <p style={styles.heroDescription}>
            Authentic Indian flavours, timeless recipes and warm
            hospitality — served with love at your table.
          </p>

          <div style={styles.heroButtons}>

            <Link to="/menu" style={styles.primaryButton}>
              Explore Menu
            </Link>

            <Link to="/booking" style={styles.secondaryButton}>
              Book a Table
            </Link>

          </div>

        </div>

        <div style={styles.heroBottomText}>
          ✦ Traditional Indian Cuisine ✦
        </div>

      </section>


      {/* ================= INTRODUCTION ================= */}
      <section style={styles.introSection}>

        <p style={styles.sectionLabel}>
          OUR STORY
        </p>

        <h2 style={styles.sectionTitle}>
          Where Every Dish Tells a Story
        </h2>

        <div style={styles.decorativeLine}>
          ✦
        </div>

        <p style={styles.introText}>
          At Zaika Express, we bring the warmth of traditional Indian
          kitchens to your table. From aromatic spices to carefully
          prepared recipes, every dish is made to give you a memorable
          dining experience.
        </p>

      </section>


      {/* ================= FOOD CATEGORIES ================= */}
      <section style={styles.categorySection}>

        <p style={styles.sectionLabel}>
          FROM OUR KITCHEN
        </p>

        <h2 style={styles.sectionTitle}>
          Explore Our Flavours
        </h2>

        <div style={styles.categoryGrid}>

          <CategoryCard
            icon="🥘"
            title="North Indian"
            text="Rich curries, paneer dishes and traditional breads."
          />

          <CategoryCard
            icon="🥞"
            title="South Indian"
            text="Crispy dosas, idli and authentic South Indian flavours."
          />

          <CategoryCard
            icon="🍚"
            title="Rice & Biryani"
            text="Aromatic rice dishes prepared with special spices."
          />

          <CategoryCard
            icon="🍜"
            title="Chinese"
            text="Popular Indo-Chinese favourites with a Zaika twist."
          />

          <CategoryCard
            icon="🍰"
            title="Desserts"
            text="Traditional Indian sweets for a perfect ending."
          />

          <CategoryCard
            icon="🥤"
            title="Beverages"
            text="Refreshing drinks, lassi and chilled beverages."
          />

        </div>

      </section>


      {/* ================= CHEF SPECIAL ================= */}
      <section style={styles.specialSection}>

        <div style={styles.specialHeader}>

          <div>
            <p style={styles.sectionLabel}>
              CHEF'S SELECTION
            </p>

            <h2 style={styles.sectionTitleLeft}>
              Signature Dishes
            </h2>
          </div>

          <Link to="/menu" style={styles.viewMenuLink}>
            View Full Menu →
          </Link>

        </div>


        <div style={styles.dishGrid}>

          <DishCard
            image="/Paneerbutter.jpeg"
            title="Paneer Butter Masala"
            description="Soft paneer cooked in a rich tomato and butter gravy."
            price="₹220"
          />

          <DishCard
            image="/dosa.jpeg"
            title="Masala Dosa"
            description="Crispy dosa served with delicious traditional masala."
            price="₹120"
          />

          <DishCard
            image="/Chickentikka.jpeg"
            title="Chicken Tikka"
            description="Tender chicken marinated with aromatic Indian spices."
            price="₹280"
          />

        </div>

      </section>


      {/* ================= WHY CHOOSE US ================= */}
      <section style={styles.whySection}>

        <div style={styles.whyContent}>

          <p style={styles.sectionLabel}>
            WHY ZAIKA EXPRESS
          </p>

          <h2 style={styles.sectionTitleLeft}>
            More Than Just a Meal
          </h2>

          <p style={styles.whyDescription}>
            We believe dining is about more than food. It is about
            memories, conversations, celebrations and the feeling
            of being welcomed.
          </p>

          <div style={styles.featureGrid}>

            <Feature
              icon="✦"
              title="Authentic Flavours"
              text="Traditional recipes prepared with carefully selected ingredients."
            />

            <Feature
              icon="✦"
              title="Fresh Ingredients"
              text="Fresh ingredients and thoughtfully prepared dishes."
            />

            <Feature
              icon="✦"
              title="Warm Hospitality"
              text="A comfortable dining experience for family and friends."
            />

            <Feature
              icon="✦"
              title="Made With Love"
              text="Every plate is prepared with care and attention."
            />

          </div>

        </div>


        <div style={styles.quoteBox}>

          <div style={styles.quoteMark}>
            “
          </div>

          <p style={styles.quoteText}>
            Good food brings people together,
            but great food creates memories.
          </p>

          <div style={styles.quoteLine}></div>

          <p style={styles.quoteAuthor}>
            — The Zaika Kitchen
          </p>

        </div>

      </section>


      {/* ================= CELEBRATION SECTION ================= */}
      <section style={styles.celebrationSection}>

        <div style={styles.celebrationBox}>

          <p style={styles.celebrationLabel}>
            CELEBRATE WITH US
          </p>

          <h2 style={styles.celebrationTitle}>
            Make Your Special Moments Delicious
          </h2>

          <p style={styles.celebrationText}>
            Planning a birthday, anniversary, family gathering or
            special celebration?
          </p>

          <Link
            to="/party-booking"
            style={styles.goldButton}
          >
            Plan Your Celebration
          </Link>

        </div>

      </section>


      {/* ================= GALLERY PREVIEW ================= */}
      <section style={styles.gallerySection}>

        <p style={styles.sectionLabel}>
          A GLIMPSE OF ZAIKA
        </p>

        <h2 style={styles.sectionTitle}>
          From Our Kitchen to Your Table
        </h2>

        <div style={styles.galleryGrid}>

          <GalleryCard
            image="/Paneerbutter.jpeg"
            title="Royal Paneer"
          />

          <GalleryCard
            image="/dosa.jpeg"
            title="South Indian Special"
          />

          <GalleryCard
            image="/Chickentikka.jpeg"
            title="Tandoori Selection"
          />

          <GalleryCard
            image="/Jalebi.jpeg"
            title="Traditional Sweets"
          />

          <GalleryCard
            image="/Gajarhalwa.jpeg"
            title="Gajar Halwa"
          />

        </div>

        <Link
          to="/gallery"
          style={styles.galleryButton}
        >
          Explore Full Gallery
        </Link>

      </section>


      {/* ================= REVIEWS ================= */}
      <section style={styles.reviewSection}>

        <p style={styles.sectionLabel}>
          GUEST EXPERIENCES
        </p>

        <h2 style={styles.sectionTitle}>
          What Our Guests Say
        </h2>

        <div style={styles.reviewGrid}>

          <ReviewCard
            text="The food felt homemade and the flavours were wonderful. A very warm dining experience."
            name="Priya"
          />

          <ReviewCard
            text="Loved the traditional touch and the presentation. Perfect place for a family dinner."
            name="Rahul"
          />

          <ReviewCard
            text="The desserts were delicious and the overall experience was beautiful."
            name="Ananya"
          />

        </div>

      </section>


      {/* ================= FINAL BOOKING CTA ================= */}
      <section style={styles.bookingSection}>

        <p style={styles.bookingLabel}>
          YOUR TABLE AWAITS
        </p>

        <h2 style={styles.bookingTitle}>
          Come, Sit & Share a Meal
        </h2>

        <p style={styles.bookingDescription}>
          Whether it is a quiet dinner or a joyful celebration,
          we would love to welcome you.
        </p>

        <div style={styles.bookingButtons}>

          <Link
            to="/booking"
            style={styles.primaryButton}
          >
            Book a Table
          </Link>

          <Link
            to="/party-booking"
            style={styles.secondaryButton}
          >
            Plan a Party
          </Link>

        </div>

      </section>

    </div>
  );
}


/* =========================================================
   CATEGORY CARD
========================================================= */

function CategoryCard({ icon, title, text }) {
  return (
    <div style={styles.categoryCard}>

      <div style={styles.categoryIcon}>
        {icon}
      </div>

      <h3 style={styles.cardTitle}>
        {title}
      </h3>

      <p style={styles.cardText}>
        {text}
      </p>

    </div>
  );
}


/* =========================================================
   DISH CARD
========================================================= */

function DishCard({
  image,
  title,
  description,
  price,
}) {
  return (
    <div style={styles.dishCard}>

      <div style={styles.dishImageWrapper}>

        <img
          src={image}
          alt={title}
          style={styles.dishImage}
        />

        <span style={styles.chefBadge}>
          Chef's Pick
        </span>

      </div>

      <div style={styles.dishContent}>

        <h3 style={styles.dishTitle}>
          {title}
        </h3>

        <p style={styles.dishDescription}>
          {description}
        </p>

        <div style={styles.dishBottom}>

          <span style={styles.price}>
            {price}
          </span>

          <span style={styles.mustTry}>
            MUST TRY
          </span>

        </div>

      </div>

    </div>
  );
}


/* =========================================================
   FEATURE
========================================================= */

function Feature({ icon, title, text }) {
  return (
    <div style={styles.feature}>

      <div style={styles.featureIcon}>
        {icon}
      </div>

      <div>

        <h3 style={styles.featureTitle}>
          {title}
        </h3>

        <p style={styles.featureText}>
          {text}
        </p>

      </div>

    </div>
  );
}


/* =========================================================
   GALLERY CARD
========================================================= */

function GalleryCard({ image, title }) {
  return (
    <div style={styles.galleryCard}>

      <img
        src={image}
        alt={title}
        style={styles.galleryImage}
      />

      <div style={styles.galleryOverlay}>
        {title}
      </div>

    </div>
  );
}


/* =========================================================
   REVIEW CARD
========================================================= */

function ReviewCard({ text, name }) {
  return (
    <div style={styles.reviewCard}>

      <div style={styles.stars}>
        ★ ★ ★ ★ ★
      </div>

      <p style={styles.reviewText}>
        "{text}"
      </p>

      <p style={styles.reviewer}>
        — {name}
      </p>

    </div>
  );
}


/* =========================================================
   STYLES
========================================================= */

const styles = {

  page: {
    backgroundColor: "#FAF6EF",
    color: "#382B27",
    minHeight: "100vh",
  },


  /* ---------- HERO ---------- */

  hero: {
    minHeight: "620px",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    background:
      "linear-gradient(rgba(55,22,27,0.76), rgba(55,22,27,0.84)), url('/Paneerbutter.jpeg') center/cover",
    borderBottom: "4px solid #C9A85D",
  },

  heroContent: {
    maxWidth: "850px",
    padding: "70px 25px",
  },

  heroSmallText: {
    color: "#D8BA72",
    fontSize: "13px",
    fontWeight: "700",
    letterSpacing: "3px",
    marginBottom: "22px",
  },

  heroTitle: {
    fontFamily: "Georgia, serif",
    color: "#FFF8ED",
    fontSize: "58px",
    lineHeight: "1.12",
    fontWeight: "500",
    marginBottom: "22px",
  },

  heroGoldText: {
    color: "#D8BA72",
  },

  heroDescription: {
    maxWidth: "650px",
    margin: "0 auto 32px",
    color: "#F6EDE1",
    fontSize: "16px",
    lineHeight: "1.8",
  },

  heroButtons: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    flexWrap: "wrap",
  },

  primaryButton: {
    display: "inline-block",
    textDecoration: "none",
    backgroundColor: "#8F2738",
    color: "#FFFFFF",
    padding: "13px 27px",
    border: "1px solid #8F2738",
    borderRadius: "4px",
    fontSize: "14px",
    fontWeight: "700",
  },

  secondaryButton: {
    display: "inline-block",
    textDecoration: "none",
    backgroundColor: "transparent",
    color: "#FFF8ED",
    padding: "13px 27px",
    border: "1px solid #D8BA72",
    borderRadius: "4px",
    fontSize: "14px",
    fontWeight: "700",
  },

  heroBottomText: {
    position: "absolute",
    bottom: "22px",
    left: 0,
    right: 0,
    color: "#D8BA72",
    fontSize: "12px",
    letterSpacing: "2px",
  },


  /* ---------- INTRO ---------- */

  introSection: {
    padding: "85px 8%",
    textAlign: "center",
    backgroundColor: "#FFFDF8",
  },

  sectionLabel: {
    color: "#9A7230",
    fontSize: "12px",
    fontWeight: "800",
    letterSpacing: "3px",
    marginBottom: "12px",
  },

  sectionTitle: {
    fontFamily: "Georgia, serif",
    color: "#4A2025",
    fontSize: "36px",
    fontWeight: "500",
    marginBottom: "15px",
  },

  decorativeLine: {
    color: "#C9A85D",
    fontSize: "22px",
    marginBottom: "20px",
  },

  introText: {
    maxWidth: "760px",
    margin: "0 auto",
    color: "#6B5A53",
    fontSize: "15px",
    lineHeight: "1.9",
  },


  /* ---------- CATEGORIES ---------- */

  categorySection: {
    padding: "80px 7%",
    textAlign: "center",
    backgroundColor: "#F4EBDD",
  },

  categoryGrid: {
    maxWidth: "1150px",
    margin: "40px auto 0",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
  },

  categoryCard: {
    backgroundColor: "#FFFDF8",
    padding: "30px 20px",
    border: "1px solid #E4D5B9",
    boxShadow: "0 8px 22px rgba(71,42,25,0.07)",
  },

  categoryIcon: {
    fontSize: "34px",
    marginBottom: "14px",
  },

  cardTitle: {
    fontFamily: "Georgia, serif",
    color: "#4A2025",
    fontSize: "21px",
    marginBottom: "9px",
  },

  cardText: {
    color: "#75645C",
    fontSize: "13px",
    lineHeight: "1.6",
  },


  /* ---------- CHEF SPECIAL ---------- */

  specialSection: {
    padding: "85px 7%",
    backgroundColor: "#FFFDF8",
  },

  specialHeader: {
    maxWidth: "1150px",
    margin: "0 auto 35px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "end",
    gap: "20px",
  },

  sectionTitleLeft: {
    fontFamily: "Georgia, serif",
    color: "#4A2025",
    fontSize: "36px",
    fontWeight: "500",
    marginBottom: "18px",
  },

  viewMenuLink: {
    textDecoration: "none",
    color: "#8F2738",
    borderBottom: "1px solid #C9A85D",
    paddingBottom: "5px",
    fontSize: "13px",
    fontWeight: "700",
  },

  dishGrid: {
    maxWidth: "1150px",
    margin: "auto",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "25px",
  },

  dishCard: {
    backgroundColor: "#FFFFFF",
    border: "1px solid #E8DCC8",
    boxShadow: "0 10px 25px rgba(64,40,25,0.08)",
    overflow: "hidden",
  },

  dishImageWrapper: {
    height: "230px",
    position: "relative",
    overflow: "hidden",
  },

  dishImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  chefBadge: {
    position: "absolute",
    top: "14px",
    left: "14px",
    backgroundColor: "#C9A85D",
    color: "#3B171C",
    padding: "6px 10px",
    fontSize: "10px",
    fontWeight: "800",
    letterSpacing: "1px",
  },

  dishContent: {
    padding: "20px",
  },

  dishTitle: {
    fontFamily: "Georgia, serif",
    color: "#4A2025",
    fontSize: "21px",
    marginBottom: "9px",
  },

  dishDescription: {
    color: "#75645C",
    fontSize: "13px",
    lineHeight: "1.6",
    minHeight: "42px",
  },

  dishBottom: {
    marginTop: "18px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  price: {
    color: "#8F2738",
    fontSize: "18px",
    fontWeight: "800",
  },

  mustTry: {
    color: "#9A7230",
    fontSize: "11px",
    fontWeight: "700",
    letterSpacing: "1px",
  },


  /* ---------- WHY CHOOSE US ---------- */

  whySection: {
    padding: "85px 8%",
    display: "grid",
    gridTemplateColumns: "1.2fr 0.8fr",
    gap: "70px",
    alignItems: "center",
    backgroundColor: "#EDE5D7",
  },

  whyDescription: {
    color: "#66564E",
    fontSize: "14px",
    lineHeight: "1.8",
    maxWidth: "600px",
    marginBottom: "30px",
  },

  featureGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "25px",
  },

  feature: {
    display: "flex",
    gap: "13px",
  },

  featureIcon: {
    color: "#A67B2D",
    fontSize: "20px",
    paddingTop: "2px",
  },

  featureTitle: {
    color: "#4A2025",
    fontSize: "15px",
    marginBottom: "5px",
  },

  featureText: {
    color: "#75645C",
    fontSize: "12px",
    lineHeight: "1.6",
  },

  quoteBox: {
    backgroundColor: "#4A2025",
    padding: "55px 40px",
    textAlign: "center",
    border: "1px solid #C9A85D",
    boxShadow: "0 12px 30px rgba(55,22,27,0.16)",
  },

  quoteMark: {
    color: "#C9A85D",
    fontFamily: "Georgia, serif",
    fontSize: "55px",
    lineHeight: "0.7",
  },

  quoteText: {
    color: "#FFF8ED",
    fontFamily: "Georgia, serif",
    fontSize: "23px",
    lineHeight: "1.6",
    margin: "20px 0",
  },

  quoteLine: {
    width: "50px",
    height: "1px",
    backgroundColor: "#C9A85D",
    margin: "20px auto",
  },

  quoteAuthor: {
    color: "#D8BA72",
    fontSize: "12px",
    letterSpacing: "1px",
  },


  /* ---------- CELEBRATION ---------- */

  celebrationSection: {
    padding: "75px 7%",
    backgroundColor: "#FFFDF8",
  },

  celebrationBox: {
    maxWidth: "1000px",
    margin: "auto",
    padding: "55px 35px",
    textAlign: "center",
    backgroundColor: "#5A2029",
    border: "1px solid #C9A85D",
  },

  celebrationLabel: {
    color: "#D8BA72",
    fontSize: "12px",
    fontWeight: "800",
    letterSpacing: "3px",
    marginBottom: "13px",
  },

  celebrationTitle: {
    color: "#FFF8ED",
    fontFamily: "Georgia, serif",
    fontSize: "34px",
    fontWeight: "500",
    marginBottom: "14px",
  },

  celebrationText: {
    color: "#F3E8DA",
    fontSize: "14px",
    marginBottom: "25px",
  },

  goldButton: {
    display: "inline-block",
    textDecoration: "none",
    color: "#4A2025",
    backgroundColor: "#D8BA72",
    padding: "12px 23px",
    fontSize: "13px",
    fontWeight: "800",
  },


  /* ---------- GALLERY ---------- */

  gallerySection: {
    padding: "85px 7%",
    textAlign: "center",
    backgroundColor: "#F4EBDD",
  },

  galleryGrid: {
    maxWidth: "1150px",
    margin: "40px auto 30px",
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: "12px",
  },

  galleryCard: {
    height: "230px",
    position: "relative",
    overflow: "hidden",
    border: "3px solid #FFFDF8",
    boxShadow: "0 7px 18px rgba(50,30,20,0.10)",
  },

  galleryImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  galleryOverlay: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    padding: "30px 8px 10px",
    background:
      "linear-gradient(transparent, rgba(45,20,20,0.85))",
    color: "#FFFFFF",
    fontSize: "12px",
    fontWeight: "700",
  },

  galleryButton: {
    display: "inline-block",
    textDecoration: "none",
    color: "#8F2738",
    border: "1px solid #8F2738",
    padding: "11px 22px",
    fontSize: "13px",
    fontWeight: "700",
  },


  /* ---------- REVIEWS ---------- */

  reviewSection: {
    padding: "85px 7%",
    textAlign: "center",
    backgroundColor: "#FFFDF8",
  },

  reviewGrid: {
    maxWidth: "1100px",
    margin: "40px auto 0",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "22px",
  },

  reviewCard: {
    padding: "30px 25px",
    backgroundColor: "#F8F1E6",
    border: "1px solid #E4D5B9",
  },

  stars: {
    color: "#B78A35",
    fontSize: "14px",
    letterSpacing: "2px",
    marginBottom: "18px",
  },

  reviewText: {
    color: "#66564E",
    fontSize: "13px",
    lineHeight: "1.8",
    fontStyle: "italic",
  },

  reviewer: {
    color: "#4A2025",
    fontSize: "12px",
    fontWeight: "700",
    marginTop: "15px",
  },


  /* ---------- FINAL BOOKING ---------- */

  bookingSection: {
    padding: "90px 7%",
    textAlign: "center",
    backgroundColor: "#3B171C",
    borderTop: "1px solid #C9A85D",
  },

  bookingLabel: {
    color: "#D8BA72",
    fontSize: "12px",
    fontWeight: "800",
    letterSpacing: "3px",
    marginBottom: "13px",
  },

  bookingTitle: {
    color: "#FFF8ED",
    fontFamily: "Georgia, serif",
    fontSize: "40px",
    fontWeight: "500",
    marginBottom: "15px",
  },

  bookingDescription: {
    color: "#EADFD2",
    fontSize: "14px",
    lineHeight: "1.7",
    marginBottom: "28px",
  },

  bookingButtons: {
    display: "flex",
    justifyContent: "center",
    gap: "14px",
    flexWrap: "wrap",
  },
};

export default Home;