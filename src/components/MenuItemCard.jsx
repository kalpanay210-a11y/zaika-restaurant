import React from 'react';

function MenuItemCard({ item, onAddToCart }) {
  return (
    <div style={styles.card}>
      <div style={styles.imgContainer}>
        <img src={`/${item.image}`} alt={item.name} style={styles.image} />
        <span style={styles.badge}>🔥 Delicious</span>
      </div>

      <div style={styles.details}>
        <h3 style={styles.title}>{item.name}</h3>
        <p style={styles.description}>Mouth-watering, freshly cooked with premium ingredients.</p>
        
        <div style={styles.footer}>
          <span style={styles.price}>₹{item.price}</span>
          <button onClick={() => onAddToCart(item)} style={styles.addBtn}>
            + Add to Order
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: '16px',
    margin: '20px',
    width: '260px',
    boxShadow: '0 8px 24px rgba(229, 41, 62, 0.12)', // Subtle Reddish Shadow
    overflow: 'hidden',
    border: '1px solid #FFEBEB',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  imgContainer: {
    position: 'relative',
    height: '175px',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  badge: {
    position: 'absolute',
    top: '12px',
    left: '12px',
    backgroundColor: '#FFB703', // Golden Accent
    color: '#2B0910',
    fontSize: '11px',
    fontWeight: '800',
    padding: '4px 10px',
    borderRadius: '12px',
  },
  details: {
    padding: '16px',
    textAlign: 'left',
  },
  title: {
    margin: '0 0 6px 0',
    fontSize: '18px',
    color: '#2B0910',
    fontWeight: '800',
  },
  description: {
    margin: '0 0 16px 0',
    fontSize: '13px',
    color: '#665A5C',
    lineHeight: '1.4',
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: '20px',
    fontWeight: '800',
    color: '#E5293E', // Craving Red Price
  },
  addBtn: {
    backgroundColor: '#E5293E',
    color: '#FFFFFF',
    border: 'none',
    padding: '9px 16px',
    borderRadius: '20px',
    fontWeight: 'bold',
    fontSize: '13px',
    cursor: 'pointer',
    boxShadow: '0 4px 10px rgba(229, 41, 62, 0.3)',
  },
};

export default MenuItemCard;