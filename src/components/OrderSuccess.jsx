import React from 'react';
import { Link } from 'react-router-dom';

function OrderSuccess({ orderDetails, onReset }) {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.icon}>🎉</div>
        <h1 style={styles.title}>Order Placed Successfully!</h1>
        <p style={styles.subtitle}>
          Thank you for ordering with Zaika Express. Your food is being prepared!
        </p>

        {orderDetails && (
          <div style={styles.detailsBox}>
            <p style={styles.detailText}>
              <strong>Amount Paid:</strong> ₹{orderDetails.totalAmount}
            </p>
            <p style={styles.detailText}>
              <strong>Payment Method:</strong> {orderDetails.paymentMethod}
            </p>
            <p style={styles.detailText}>
              <strong>Delivery To:</strong> {orderDetails.address.street},{' '}
              {orderDetails.address.city} ({orderDetails.address.pincode})
            </p>
          </div>
        )}

        <Link to="/menu" onClick={onReset} style={styles.btn}>
          Order More Food
        </Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '75vh',
    padding: '20px',
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: '40px 30px',
    borderRadius: '20px',
    textAlign: 'center',
    boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
    maxWidth: '450px',
    width: '100%',
  },
  icon: { fontSize: '50px', marginBottom: '15px' },
  title: { color: '#27AE60', fontSize: '24px', margin: '0 0 10px 0' },
  subtitle: { color: '#665A5C', fontSize: '14px', marginBottom: '25px' },
  detailsBox: {
    backgroundColor: '#FAFAFA',
    padding: '15px',
    borderRadius: '12px',
    textAlign: 'left',
    marginBottom: '25px',
    border: '1px solid #E2E8F0',
  },
  detailText: { margin: '6px 0', fontSize: '13px', color: '#2D3436' },
  btn: {
    backgroundColor: '#E5293E',
    color: '#FFF',
    padding: '12px 28px',
    borderRadius: '25px',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '15px',
    display: 'inline-block',
  },
};

export default OrderSuccess;