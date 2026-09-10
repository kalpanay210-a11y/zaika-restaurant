import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const categories = [
    { id: 1, name: 'North Indian', icon: '🍲', count: '12+ Items' },
    { id: 2, name: 'South Indian', icon: '🫓', count: '8+ Items' },
    { id: 3, name: 'Chinese', icon: '🍜', count: '15+ Items' },
    { id: 4, name: 'Desserts', icon: '🍩', count: '10+ Items' },
  ];

  const offers = [
    { id: 1, title: '50% OFF on First Order', code: 'ZAIKA50', tag: 'Welcome Offer', bg: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)' },
    { id: 2, title: 'Free Delivery above ₹299', code: 'FREEDEL', tag: 'Limited Time', bg: 'linear-gradient(135deg, #4FACFE 0%, #00F2FE 100%)' },
  ];

  return (
    <div style={styles.container}>
      {/* Hero Banner */}
      <div style={styles.hero}>
        <div style={styles.heroContent}>
          <span style={styles.heroTag}>🔥 Fast & Fresh Delivery</span>
          <h1 style={styles.heroTitle}>Delicious Food, Delivered Fast 🍕</h1>
          <p style={styles.heroSubtitle}>
            Satisfy your cravings with authentic recipes prepared by top chefs.
          </p>
          <Link to="/menu" className="hover-btn" style={styles.orderBtn}>
            Explore Menu & Order Now →
          </Link>
        </div>
      </div>

      {/* Offers Section */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Exclusive Offers 🎉</h2>
        <div style={styles.offerGrid}>
          {offers.map((offer) => (
            <div key={offer.id} className="hover-card" style={{ ...styles.offerCard, background: offer.bg }}>
              <span style={styles.offerBadge}>{offer.tag}</span>
              <h3 style={styles.offerTitle}>{offer.title}</h3>
              <p style={styles.offerCode}>Use Code: <strong>{offer.code}</strong></p>
            </div>
          ))}
        </div>
      </div>

      {/* Categories Section */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Popular Categories 🍴</h2>
        <div style={styles.categoryGrid}>
          {categories.map((cat) => (
            <Link to="/menu" key={cat.id} className="hover-card" style={styles.categoryCard}>
              <div style={styles.categoryIcon}>{cat.icon}</div>
              <p style={styles.categoryName}>{cat.name}</p>
              <span style={styles.categoryCount}>{cat.count}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '1100px',
    margin: '0 auto 60px auto',
    padding: '0 20px',
  },
  hero: {
    padding: '70px 40px',
    background: 'linear-gradient(135deg, #2B0910 0%, #51121E 100%)',
    color: '#FFFFFF',
    borderRadius: '24px',
    marginTop: '30px',
    boxShadow: '0 15px 35px rgba(43, 9, 16, 0.25)',
    textAlign: 'center',
  },
  heroContent: {
    maxWidth: '650px',
    margin: '0 auto',
  },
  heroTag: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    color: '#FFB703',
    padding: '6px 16px',
    borderRadius: '20px',
    fontSize: '13px',
    fontWeight: '600',
    display: 'inline-block',
    marginBottom: '15px',
  },
  heroTitle: {
    fontSize: '40px',
    fontWeight: '800',
    lineHeight: '1.2',
    marginBottom: '15px',
  },
  heroSubtitle: {
    fontSize: '16px',
    color: '#E0E0E0',
    marginBottom: '30px',
    fontWeight: '400',
  },
  orderBtn: {
    backgroundColor: '#E5293E',
    color: '#FFFFFF',
    textDecoration: 'none',
    padding: '14px 32px',
    borderRadius: '30px',
    fontWeight: '700',
    fontSize: '16px',
    display: 'inline-block',
    boxShadow: '0 8px 20px rgba(229, 41, 62, 0.4)',
  },
  section: {
    marginTop: '50px',
  },
  sectionTitle: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#2D3436',
    marginBottom: '20px',
  },
  offerGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
  },
  offerCard: {
    padding: '25px',
    borderRadius: '20px',
    color: '#FFFFFF',
    position: 'relative',
    boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
  },
  offerBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    padding: '4px 12px',
    borderRadius: '12px',
    fontSize: '12px',
    fontWeight: '600',
  },
  offerTitle: {
    margin: '12px 0 6px 0',
    fontSize: '20px',
    fontWeight: '700',
  },
  offerCode: {
    margin: 0,
    fontSize: '14px',
    opacity: 0.9,
  },
  categoryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
  },
  categoryCard: {
    backgroundColor: '#FFFFFF',
    padding: '28px 20px',
    borderRadius: '20px',
    textAlign: 'center',
    textDecoration: 'none',
    boxShadow: '0 6px 18px rgba(0, 0, 0, 0.04)',
    border: '1px solid #F0F0F0',
  },
  categoryIcon: {
    fontSize: '42px',
    marginBottom: '10px',
  },
  categoryName: {
    margin: '5px 0 2px 0',
    color: '#2D3436',
    fontWeight: '700',
    fontSize: '17px',
  },
  categoryCount: {
    fontSize: '12px',
    color: '#888888',
    fontWeight: '500',
  },
};

export default Home;