import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import MenuItemCard from './components/MenuItemCard';
import CartModal from './components/CartModal';
import CheckoutModal from './components/CheckoutModal';
import OrderSuccess from './components/OrderSuccess';
import Home from './components/Home';
import Login from './components/Login';
import Contact from './components/Contact';
import Feedback from './components/Feedback';

function MenuPage({ menuList, onAddToCart }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Veg', 'Non-Veg', 'Sweets'];

  const filteredItems = menuList.filter((item) => {
    const matchesCategory =
      selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div style={styles.menuContainer}>
      <h1 style={styles.title}>Explore Our Menu 😋</h1>

      <div style={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search for your favorite dish..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={styles.searchInput}
        />
      </div>

      <div style={styles.categoryContainer}>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            style={{
              ...styles.categoryBtn,
              backgroundColor:
                selectedCategory === category ? '#E5293E' : '#FFFFFF',
              color: selectedCategory === category ? '#FFFFFF' : '#2D3436',
              border:
                selectedCategory === category
                  ? '2px solid #E5293E'
                  : '2px solid #E2E8F0',
            }}
          >
            {category}
          </button>
        ))}
      </div>

      <div style={styles.grid}>
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <MenuItemCard key={item.id} item={item} onAddToCart={onAddToCart} />
          ))
        ) : (
          <p style={styles.noResults}>No dishes found matching your search!</p>
        )}
      </div>
    </div>
  );
}

const styles = {
  menuContainer: { maxWidth: '1100px', margin: '30px auto', padding: '0 20px', textAlign: 'center' },
  title: { fontSize: '28px', color: '#2B0910', marginBottom: '20px' },
  searchContainer: { marginBottom: '20px' },
  searchInput: { width: '100%', maxWidth: '500px', padding: '12px 20px', borderRadius: '25px', border: '2px solid #FFEBEB', fontSize: '15px', outline: 'none' },
  categoryContainer: { display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '30px', flexWrap: 'wrap' },
  categoryBtn: { padding: '8px 22px', borderRadius: '20px', fontWeight: '600', fontSize: '14px', cursor: 'pointer' },
  grid: { display: 'flex', justifyContent: 'center', flexWrap: 'wrap' },
  noResults: { fontSize: '16px', color: '#888888', marginTop: '30px' },
};

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [lastOrderDetails, setLastOrderDetails] = useState(null);

  const navigate = useNavigate();

  const menuList = [
    { id: 1, name: 'Dosa', price: 120, image: 'dosa.jpeg', category: 'Veg' },
    { id: 2, name: 'Paneer Butter Masala', price: 250, image: 'Paneerbutter.jpeg', category: 'Veg' },
    { id: 3, name: 'Jalebi', price: 80, image: 'Jalebi.jpeg', category: 'Sweets' },
    { id: 4, name: 'Chicken Tikka', price: 320, image: 'Chickentikka.jpeg', category: 'Non-Veg' },
    { id: 5, name: 'Gajar Halwa', price: 100, image: 'Gajarhalwa.jpeg', category: 'Sweets' },
  ];

  const handleAddToCart = (item) => {
    const existingIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);
    if (existingIndex !== -1) {
      const updatedCart = [...cartItems];
      updatedCart[existingIndex].quantity += 1;
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const handleIncreaseQuantity = (id) => {
    setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item)));
  };

  const handleDecreaseQuantity = (id) => {
    setCartItems(
      cartItems
        .map((item) => (item.id === id ? { ...item, quantity: item.quantity - 1 } : item))
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleOrderSuccess = (orderDetails) => {
    setLastOrderDetails(orderDetails);
    setIsCheckoutOpen(false);
    setCartItems([]); // Clear cart
    navigate('/order-success');
  };

  return (
    <div>
      <Navbar
        cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onIncrease={handleIncreaseQuantity}
        onDecrease={handleDecreaseQuantity}
        onRemove={handleRemoveItem}
        onProceedToCheckout={handleProceedToCheckout}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cartItems}
        onOrderSuccess={handleOrderSuccess}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/menu"
          element={<MenuPage menuList={menuList} onAddToCart={handleAddToCart} />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/order-success"
          element={<OrderSuccess orderDetails={lastOrderDetails} onReset={() => setLastOrderDetails(null)} />}
        />
      </Routes>
    </div>
  );
}

export default App;