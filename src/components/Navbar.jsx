import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ cartCount, onOpenCart }) {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        <Link to="/" style={styles.logoLink}>
          🌶️ <span style={{ color: '#FFB703' }}>Zaika</span> Express
        </Link>
      </div>

      <ul style={styles.navLinks}>
        <li><Link to="/" style={styles.link}>Home</Link></li>
        <li><Link to="/menu" style={styles.link}>Menu</Link></li>
        <li><Link to="/contact" style={styles.link}>Contact</Link></li>
        <li><Link to="/feedback" style={styles.link}>Feedback</Link></li>
      </ul>

      <div style={styles.rightSection}>
        <Link to="/login" style={styles.loginBtn}>Login</Link>
        <button onClick={onOpenCart} style={styles.cartBtn}>
          🛒 Cart <span style={styles.badge}>{cartCount}</span>
        </button>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 50px',
    backgroundColor: '#2B0910', // Deep Rich Burgundy
    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  logoLink: {
    color: '#FFFFFF',
    fontSize: '26px',
    fontWeight: '800',
    textDecoration: 'none',
    letterSpacing: '0.5px',
  },
  navLinks: {
    display: 'flex',
    listStyle: 'none',
    gap: '30px',
    margin: 0,
    padding: 0,
  },
  link: {
    color: '#FFF3E0',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: '600',
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  loginBtn: {
    color: '#FFB703',
    textDecoration: 'none',
    padding: '8px 20px',
    border: '2px solid #FFB703',
    borderRadius: '25px',
    fontWeight: 'bold',
    fontSize: '14px',
  },
  cartBtn: {
    backgroundColor: '#E5293E', // Craving Red
    color: '#FFFFFF',
    border: 'none',
    padding: '9px 20px',
    borderRadius: '25px',
    fontWeight: 'bold',
    fontSize: '14px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    boxShadow: '0 4px 12px rgba(229, 41, 62, 0.4)',
  },
  badge: {
    backgroundColor: '#FFB703', // Golden Yellow
    color: '#2B0910',
    borderRadius: '50%',
    padding: '2px 8px',
    fontSize: '12px',
    fontWeight: 'bold',
  },
};

export default Navbar;