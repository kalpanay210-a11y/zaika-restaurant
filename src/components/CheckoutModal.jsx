import React, { useState } from 'react';

function CheckoutModal({ isOpen, onClose, cartItems, onOrderSuccess }) {
  const [address, setAddress] = useState({
    street: '',
    city: '',
    pincode: '',
    phone: '',
  });
  const [paymentMethod, setPaymentMethod] = useState('UPI');

  if (!isOpen) return null;

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    onOrderSuccess({ address, paymentMethod, totalAmount });
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <button style={styles.closeBtn} onClick={onClose}>✕</button>
        
        <h2 style={styles.title}>Checkout Details 🚚</h2>

        {/* Order Summary */}
        <div style={styles.summaryBox}>
          <p style={styles.summaryText}>
            <strong>Total Items:</strong> {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
          </p>
          <p style={styles.summaryText}>
            <strong>Total Payable:</strong> ₹{totalAmount}
          </p>
        </div>

        <form onSubmit={handleSubmitOrder} style={styles.form}>
          <h3 style={styles.sectionTitle}>Delivery Address</h3>
          
          <div style={styles.inputGroup}>
            <input
              type="text"
              placeholder="Street Address / House No."
              value={address.street}
              onChange={(e) => setAddress({ ...address, street: e.target.value })}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.row}>
            <input
              type="text"
              placeholder="City"
              value={address.city}
              onChange={(e) => setAddress({ ...address, city: e.target.value })}
              required
              style={{ ...styles.input, flex: 1 }}
            />
            <input
              type="text"
              placeholder="Pincode"
              value={address.pincode}
              onChange={(e) => setAddress({ ...address, pincode: e.target.value })}
              required
              style={{ ...styles.input, flex: 1 }}
            />
          </div>

          <div style={styles.inputGroup}>
            <input
              type="tel"
              placeholder="Phone Number"
              value={address.phone}
              onChange={(e) => setAddress({ ...address, phone: e.target.value })}
              required
              style={styles.input}
            />
          </div>

          <h3 style={styles.sectionTitle}>Payment Method</h3>
          <div style={styles.paymentOptions}>
            {['UPI', 'Card', 'Cash on Delivery'].map((method) => (
              <label key={method} style={styles.radioLabel}>
                <input
                  type="radio"
                  name="payment"
                  value={method}
                  checked={paymentMethod === method}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <span style={{ marginLeft: '8px' }}>{method}</span>
              </label>
            ))}
          </div>

          <button type="submit" style={styles.placeOrderBtn}>
            Place Order (₹{totalAmount})
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1100,
  },
  modal: {
    backgroundColor: '#FFFFFF',
    borderRadius: '20px',
    padding: '30px',
    width: '90%',
    maxWidth: '480px',
    position: 'relative',
    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
  },
  closeBtn: {
    position: 'absolute',
    top: '18px',
    right: '20px',
    background: 'none',
    border: 'none',
    fontSize: '20px',
    cursor: 'pointer',
    color: '#888',
  },
  title: { margin: '0 0 15px 0', color: '#2B0910', fontSize: '22px' },
  summaryBox: {
    backgroundColor: '#FFF8E7',
    padding: '12px 16px',
    borderRadius: '12px',
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  summaryText: { margin: 0, fontSize: '14px', color: '#2B0910' },
  form: { display: 'flex', flexDirection: 'column', gap: '12px' },
  sectionTitle: { fontSize: '15px', color: '#2B0910', margin: '8px 0 4px 0' },
  inputGroup: { width: '100%' },
  row: { display: 'flex', gap: '10px' },
  input: {
    width: '100%',
    padding: '10px 14px',
    borderRadius: '8px',
    border: '1px solid #E2E8F0',
    fontSize: '14px',
    outline: 'none',
  },
  paymentOptions: { display: 'flex', gap: '15px', marginBottom: '10px' },
  radioLabel: { fontSize: '14px', cursor: 'pointer', color: '#2D3436' },
  placeOrderBtn: {
    backgroundColor: '#27AE60',
    color: '#FFF',
    border: 'none',
    padding: '14px',
    borderRadius: '25px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '10px',
  },
};

export default CheckoutModal;