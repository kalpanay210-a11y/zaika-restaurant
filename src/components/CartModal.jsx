import React from 'react';

function CartModal({
  isOpen,
  onClose,
  cartItems,
  onIncrease,
  onDecrease,
  onRemove,
  onProceedToCheckout,
}) {
  if (!isOpen) return null;

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <button style={styles.closeBtn} onClick={onClose}>
          ✕
        </button>
        <h2 style={styles.title}>Your Cart 🛒</h2>

        {cartItems.length === 0 ? (
          <p style={styles.emptyText}>Your cart is currently empty.</p>
        ) : (
          <>
            <div style={styles.itemList}>
              {cartItems.map((item) => (
                <div key={item.id} style={styles.itemRow}>
                  <div style={styles.itemInfo}>
                    <h4 style={styles.itemName}>{item.name}</h4>
                    <p style={styles.itemPrice}>₹{item.price}</p>
                  </div>

                  <div style={styles.quantityControls}>
                    <button
                      style={styles.qtyBtn}
                      onClick={() => onDecrease(item.id)}
                    >
                      -
                    </button>
                    <span style={styles.qtyText}>{item.quantity}</span>
                    <button
                      style={styles.qtyBtn}
                      onClick={() => onIncrease(item.id)}
                    >
                      +
                    </button>
                  </div>

                  <button
                    style={styles.removeBtn}
                    onClick={() => onRemove(item.id)}
                  >
                    🗑️
                  </button>
                </div>
              ))}
            </div>

            <div style={styles.footer}>
              <div style={styles.totalRow}>
                <span>Total Amount:</span>
                <strong>₹{totalAmount}</strong>
              </div>
              <button style={styles.checkoutBtn} onClick={onProceedToCheckout}>
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modal: {
    backgroundColor: '#FFFFFF',
    borderRadius: '16px',
    padding: '24px',
    width: '90%',
    maxWidth: '450px',
    maxHeight: '80vh',
    overflowY: 'auto',
    position: 'relative',
    boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
  },
  closeBtn: {
    position: 'absolute',
    top: '16px',
    right: '16px',
    background: 'none',
    border: 'none',
    fontSize: '18px',
    cursor: 'pointer',
  },
  title: { marginTop: 0, color: '#2B0910', fontSize: '22px' },
  emptyText: { color: '#888', textAlign: 'center', margin: '30px 0' },
  itemList: { margin: '20px 0' },
  itemRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 0',
    borderBottom: '1px solid #F0F0F0',
  },
  itemInfo: { flex: 1 },
  itemName: { margin: '0 0 4px 0', fontSize: '15px', color: '#2D3436' },
  itemPrice: { margin: 0, fontSize: '13px', color: '#E5293E', fontWeight: 'bold' },
  quantityControls: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginRight: '15px',
  },
  qtyBtn: {
    backgroundColor: '#FFEBEB',
    color: '#E5293E',
    border: 'none',
    width: '26px',
    height: '26px',
    borderRadius: '50%',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  qtyText: { fontSize: '14px', fontWeight: 'bold' },
  removeBtn: { background: 'none', border: 'none', cursor: 'pointer' },
  footer: { marginTop: '20px', borderTop: '1px solid #E2E8F0', paddingTop: '15px' },
  totalRow: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '16px',
    marginBottom: '15px',
    color: '#2D3436',
  },
  checkoutBtn: {
    width: '100%',
    backgroundColor: '#E5293E',
    color: '#FFF',
    border: 'none',
    padding: '12px',
    borderRadius: '25px',
    fontSize: '15px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
};

export default CartModal;