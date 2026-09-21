import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Menu from "./components/Menu.jsx";
import Gallery from "./components/Gallery.jsx";
import Contact from "./components/Contact.jsx";
import Feedback from "./components/Feedback.jsx";
import Booking from "./components/Booking.jsx";
import PartyBooking from "./components/PartyBooking.jsx";

import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Profile from "./components/Profile.jsx";
import MyOrders from "./components/MyOrders.jsx";

import CartModal from "./components/CartModal.jsx";
import CheckoutModal from "./components/CheckoutModal.jsx";
import OrderSuccess from "./components/OrderSuccess.jsx";
import AddToCartPopup from "./components/AddToCartPopup.jsx";
import CookieConsent from "./components/CookieConsent.jsx";
import Footer from "./components/Footer.jsx";

import "./App.css";


function App() {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [showOrderSuccess, setShowOrderSuccess] = useState(false);

  const [selectedItem, setSelectedItem] = useState(null);
  const [showAddPopup, setShowAddPopup] = useState(false);

  const [orders, setOrders] = useState(() => {
    try {
      const savedOrders = localStorage.getItem("zaikaOrders");
      return savedOrders ? JSON.parse(savedOrders) : [];
    } catch (error) {
      return [];
    }
  });

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("zaikaLoggedInUser") !== null;
  });

  const [lastOrder, setLastOrder] = useState(null);


  /* =========================
     LOGIN STATUS
  ========================= */

  useEffect(() => {
    const checkLogin = () => {
      setIsLoggedIn(
        localStorage.getItem("zaikaLoggedInUser") !== null
      );
    };

    checkLogin();

    window.addEventListener("storage", checkLogin);

    return () => {
      window.removeEventListener("storage", checkLogin);
    };
  }, []);


  /* =========================
     CART - ADD ITEM
  ========================= */

  const handleAddToCart = (item) => {
    setCartItems((previousItems) => {
      const existingItem = previousItems.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        return previousItems.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1,
              }
            : cartItem
        );
      }

      return [
        ...previousItems,
        {
          ...item,
          quantity: 1,
        },
      ];
    });

    setSelectedItem(item);
    setShowAddPopup(true);
  };


  /* =========================
     INCREASE QUANTITY
  ========================= */

  const handleIncrease = (id) => {
    setCartItems((previousItems) =>
      previousItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };


  /* =========================
     DECREASE QUANTITY
  ========================= */

  const handleDecrease = (id) => {
    setCartItems((previousItems) =>
      previousItems
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };


  /* =========================
     REMOVE ITEM
  ========================= */

  const handleRemove = (id) => {
    setCartItems((previousItems) =>
      previousItems.filter((item) => item.id !== id)
    );
  };


  /* =========================
     OPEN CART
  ========================= */

  const handleOpenCart = () => {
    setShowCart(true);
  };


  /* =========================
     CHECKOUT
  ========================= */

  const handleCheckout = () => {
    setShowCart(false);

    if (!isLoggedIn) {
      navigate("/login");
      return;
    }

    setShowCheckout(true);
  };


  /* =========================
     LOGIN
  ========================= */

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    navigate("/");
  };


  /* =========================
     REGISTER
  ========================= */

  const handleRegisterSuccess = () => {
    navigate("/login");
  };


  /* =========================
     PLACE ORDER
  ========================= */

  const handlePlaceOrder = (orderDetails) => {
    const newOrder = {
      id:
        "ZAIKA-" +
        Date.now().toString().slice(-6),

      date: new Date().toLocaleDateString(),

      status: "Confirmed",

      ...orderDetails,
    };

    const updatedOrders = [
      newOrder,
      ...orders,
    ];

    setOrders(updatedOrders);

    localStorage.setItem(
      "zaikaOrders",
      JSON.stringify(updatedOrders)
    );

    setLastOrder(newOrder);

    setCartItems([]);

    setShowCheckout(false);

    setShowOrderSuccess(true);

    navigate("/order-success");
  };


  /* =========================
     CONTINUE SHOPPING
  ========================= */

  const handleContinueShopping = () => {
    setShowOrderSuccess(false);
    navigate("/menu");
  };


  /* =========================
     CART COUNT
  ========================= */

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );


  return (
    <div className="app">

      {/* =========================
          NAVBAR
      ========================= */}

      <Navbar
        cartCount={cartCount}
        onOpenCart={handleOpenCart}
      />


      {/* =========================
          MAIN ROUTES
      ========================= */}

      <main>

        <Routes>

          {/* HOME */}
          <Route
            path="/"
            element={<Home />}
          />


          {/* MENU */}
          <Route
            path="/menu"
            element={
              <Menu
                onAddToCart={handleAddToCart}
              />
            }
          />


          {/* GALLERY */}
          <Route
            path="/gallery"
            element={<Gallery />}
          />


          {/* CONTACT */}
          <Route
            path="/contact"
            element={<Contact />}
          />


          {/* FEEDBACK / REVIEWS */}
          <Route
            path="/reviews"
            element={<Feedback />}
          />


          <Route
            path="/feedback"
            element={<Feedback />}
          />


          {/* TABLE BOOKING */}
          <Route
            path="/booking"
            element={<Booking />}
          />


          {/* PARTY BOOKING */}
          <Route
            path="/party-booking"
            element={<PartyBooking />}
          />


          {/* LOGIN */}
          <Route
            path="/login"
            element={
              <Login
                onLoginSuccess={handleLoginSuccess}
                onSwitchToRegister={() =>
                  navigate("/register")
                }
              />
            }
          />


          {/* REGISTER */}
          <Route
            path="/register"
            element={
              <Register
                onRegisterSuccess={
                  handleRegisterSuccess
                }
                onSwitchToLogin={() =>
                  navigate("/login")
                }
              />
            }
          />


          {/* PROFILE */}
          <Route
            path="/profile"
            element={<Profile />}
          />


          {/* MY ORDERS */}
          <Route
            path="/orders"
            element={
              <MyOrders
                orders={orders}
              />
            }
          />


          {/* ORDER SUCCESS */}
          <Route
            path="/order-success"
            element={
              <OrderSuccess
                order={lastOrder}
                onContinueShopping={
                  handleContinueShopping
                }
              />
            }
          />

        </Routes>

      </main>


      {/* =========================
          FOOTER
      ========================= */}

      <Footer />


      {/* =========================
          CART MODAL
      ========================= */}

      {showCart && (
        <CartModal
          cartItems={cartItems}
          onClose={() => setShowCart(false)}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
          onRemove={handleRemove}
          onCheckout={handleCheckout}
        />
      )}


      {/* =========================
          CHECKOUT MODAL
      ========================= */}

      {showCheckout && (
        <CheckoutModal
          cartItems={cartItems}
          onClose={() => setShowCheckout(false)}
          onPlaceOrder={handlePlaceOrder}
          isLoggedIn={isLoggedIn}
          onLogin={() => {
            setShowCheckout(false);
            navigate("/login");
          }}
        />
      )}


      {/* =========================
          ADD TO CART POPUP
      ========================= */}

      {showAddPopup && selectedItem && (
        <AddToCartPopup
          item={selectedItem}
          onClose={() => setShowAddPopup(false)}
          onViewCart={() => {
            setShowAddPopup(false);
            setShowCart(true);
          }}
          onContinueShopping={() =>
            setShowAddPopup(false)
          }
        />
      )}


      {/* =========================
          COOKIE CONSENT
      ========================= */}

      <CookieConsent />

    </div>
  );
}


export default App;