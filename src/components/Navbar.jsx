import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Navbar({ cartCount = 0, onOpenCart }) {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const checkUser = () => {
      const user = localStorage.getItem("zaikaLoggedInUser");

      if (user) {
        try {
          setLoggedInUser(JSON.parse(user));
        } catch {
          setLoggedInUser(null);
        }
      } else {
        setLoggedInUser(null);
      }
    };

    checkUser();

    window.addEventListener("storage", checkUser);

    return () => {
      window.removeEventListener("storage", checkUser);
    };
  }, []);

  const closeMenus = () => {
    setMenuOpen(false);
    setAccountOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("zaikaLoggedInUser");
    setLoggedInUser(null);
    setAccountOpen(false);
    setMenuOpen(false);

    navigate("/login");
  };

  const getUserName = () => {
    if (!loggedInUser) return "Account";

    return (
      loggedInUser.fullName ||
      loggedInUser.username ||
      "My Account"
    );
  };

  const linkStyle = ({ isActive }) => ({
    ...styles.navLink,
    color: isActive ? "#C9A85D" : "#FFF9F0",
  });

  return (
    <>
      <style>
        {`
          .zaika-navbar {
            width: 100%;
            min-height: 78px;
            padding: 0 5%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: #3B171C;
            border-bottom: 1px solid rgba(201,168,93,0.35);
            box-shadow: 0 5px 22px rgba(50,20,20,0.16);
            position: sticky;
            top: 0;
            z-index: 1000;
          }

          .zaika-nav-links {
            display: flex;
            align-items: center;
            gap: 25px;
          }

          .zaika-nav-link {
            position: relative;
            text-decoration: none;
            padding: 30px 2px 26px;
            font-size: 13px;
            font-weight: 600;
            letter-spacing: 0.3px;
            white-space: nowrap;
            transition: all 0.25s ease;
          }

          .zaika-nav-link::after {
            content: "";
            position: absolute;
            left: 50%;
            bottom: 19px;
            width: 0;
            height: 2px;
            background: #C9A85D;
            transform: translateX(-50%);
            transition: width 0.25s ease;
          }

          .zaika-nav-link:hover {
            color: #C9A85D !important;
          }

          .zaika-nav-link:hover::after {
            width: 100%;
          }

          .zaika-reserve {
            text-decoration: none;
            padding: 9px 15px;
            border: 1px solid #C9A85D;
            color: #C9A85D;
            border-radius: 3px;
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 0.5px;
            white-space: nowrap;
            transition: all 0.25s ease;
          }

          .zaika-reserve:hover {
            background: #C9A85D;
            color: #3B171C;
          }

          .zaika-account-button {
            border: 1px solid rgba(201,168,93,0.55);
            background: transparent;
            color: #FFF9F0;
            padding: 8px 12px;
            border-radius: 3px;
            cursor: pointer;
            font-family: inherit;
            font-size: 12px;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 6px;
            white-space: nowrap;
          }

          .zaika-account-button:hover {
            border-color: #C9A85D;
            color: #C9A85D;
          }

          .zaika-account-dropdown {
            position: absolute;
            top: 52px;
            right: 0;
            width: 205px;
            background: #FFF9F0;
            border: 1px solid rgba(201,168,93,0.55);
            box-shadow: 0 12px 30px rgba(45,20,20,0.22);
            padding: 8px 0;
            z-index: 1200;
          }

          .zaika-account-name {
            padding: 12px 16px;
            border-bottom: 1px solid rgba(201,168,93,0.25);
            color: #3B171C;
            font-family: Georgia, serif;
            font-size: 14px;
            font-weight: 700;
          }

          .zaika-account-item {
            width: 100%;
            display: block;
            text-align: left;
            text-decoration: none;
            border: none;
            background: transparent;
            color: #4A3030;
            padding: 10px 16px;
            cursor: pointer;
            font-family: inherit;
            font-size: 12px;
            font-weight: 500;
          }

          .zaika-account-item:hover {
            background: #F4EBDD;
            color: #8F2738;
          }

          .zaika-logout {
            color: #8F2738;
            border-top: 1px solid rgba(201,168,93,0.22);
          }

          .zaika-cart {
            border: 1px solid #8F2738;
            background: #8F2738;
            color: #FFFFFF;
            padding: 9px 13px;
            border-radius: 3px;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 6px;
            font-family: inherit;
            font-size: 12px;
            font-weight: 700;
            white-space: nowrap;
          }

          .zaika-cart:hover {
            background: #A93447;
          }

          .zaika-cart-badge {
            min-width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background: #C9A85D;
            color: #3B171C;
            font-size: 10px;
            font-weight: 800;
          }

          .zaika-menu-button {
            display: none;
            border: 1px solid rgba(201,168,93,0.6);
            background: transparent;
            color: #C9A85D;
            width: 42px;
            height: 38px;
            cursor: pointer;
            font-size: 22px;
            border-radius: 3px;
          }

          .zaika-mobile-menu {
            display: none;
          }

          @media (max-width: 1200px) {
            .zaika-nav-links {
              gap: 16px;
            }

            .zaika-nav-link {
              font-size: 12px;
            }

            .zaika-navbar {
              padding: 0 3%;
            }
          }

          @media (max-width: 1000px) {
            .zaika-nav-links,
            .zaika-desktop-actions {
              display: none;
            }

            .zaika-menu-button {
              display: block;
            }

            .zaika-navbar {
              min-height: 72px;
            }

            .zaika-mobile-menu {
              position: absolute;
              display: block;
              top: 72px;
              left: 0;
              width: 100%;
              background: #3B171C;
              border-top: 1px solid rgba(201,168,93,0.25);
              border-bottom: 1px solid rgba(201,168,93,0.35);
              box-shadow: 0 12px 25px rgba(40,15,15,0.25);
              padding: 12px 5% 18px;
            }

            .zaika-mobile-link {
              display: block;
              text-decoration: none;
              color: #FFF9F0;
              padding: 12px 4px;
              border-bottom: 1px solid rgba(255,255,255,0.08);
              font-size: 13px;
              font-weight: 600;
            }

            .zaika-mobile-link:hover {
              color: #C9A85D;
            }

            .zaika-mobile-actions {
              display: flex;
              flex-wrap: wrap;
              gap: 10px;
              padding-top: 15px;
            }

            .zaika-mobile-actions button,
            .zaika-mobile-actions a {
              flex: 1;
              min-width: 120px;
              text-align: center;
            }
          }

          @media (max-width: 480px) {
            .zaika-navbar {
              padding: 0 4%;
            }

            .zaika-logo {
              font-size: 21px !important;
            }

            .zaika-mobile-menu {
              padding-left: 5%;
              padding-right: 5%;
            }
          }
        `}
      </style>

      <nav className="zaika-navbar">

        {/* LOGO */}
        <Link
          to="/"
          className="zaika-logo"
          onClick={closeMenus}
          style={styles.logo}
        >
          <span style={styles.logoSymbol}>✦</span>
          <span style={styles.logoGold}>Zaika</span>
          <span> Express</span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="zaika-nav-links">

          <NavLink
            to="/"
            end
            className="zaika-nav-link"
            style={linkStyle}
          >
            Home
          </NavLink>

          <NavLink
            to="/menu"
            className="zaika-nav-link"
            style={linkStyle}
          >
            Menu
          </NavLink>

          <NavLink
            to="/gallery"
            className="zaika-nav-link"
            style={linkStyle}
          >
            Gallery
          </NavLink>

          <NavLink
            to="/booking"
            className="zaika-nav-link"
            style={linkStyle}
          >
            Reservations
          </NavLink>

          <NavLink
            to="/party-booking"
            className="zaika-nav-link"
            style={linkStyle}
          >
            Events
          </NavLink>

          <NavLink
            to="/feedback"
            className="zaika-nav-link"
            style={linkStyle}
          >
            Reviews
          </NavLink>

          <NavLink
            to="/contact"
            className="zaika-nav-link"
            style={linkStyle}
          >
            Contact
          </NavLink>

        </div>

        {/* DESKTOP RIGHT SIDE */}
        <div
          className="zaika-desktop-actions"
          style={styles.rightSide}
        >

          <Link
            to="/booking"
            className="zaika-reserve"
          >
            BOOK A TABLE
          </Link>

          {/* ACCOUNT */}
          <div style={{ position: "relative" }}>

            <button
              type="button"
              className="zaika-account-button"
              onClick={() => setAccountOpen(!accountOpen)}
            >
              <span>♙</span>
              <span>
                {loggedInUser ? getUserName() : "Account"}
              </span>
              <span style={{ fontSize: "9px" }}>▼</span>
            </button>

            {accountOpen && (
              <div className="zaika-account-dropdown">

                {loggedInUser ? (
                  <>
                    <div className="zaika-account-name">
                      {getUserName()}
                    </div>

                    <Link
                      to="/profile"
                      className="zaika-account-item"
                      onClick={() => setAccountOpen(false)}
                    >
                      My Profile
                    </Link>

                    <Link
                      to="/orders"
                      className="zaika-account-item"
                      onClick={() => setAccountOpen(false)}
                    >
                      My Orders
                    </Link>

                    <Link
                      to="/booking"
                      className="zaika-account-item"
                      onClick={() => setAccountOpen(false)}
                    >
                      My Reservations
                    </Link>

                    <button
                      type="button"
                      className="zaika-account-item zaika-logout"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <div className="zaika-account-name">
                      Welcome to Zaika
                    </div>

                    <Link
                      to="/login"
                      className="zaika-account-item"
                      onClick={() => setAccountOpen(false)}
                    >
                      Login
                    </Link>

                    <Link
                      to="/register"
                      className="zaika-account-item"
                      onClick={() => setAccountOpen(false)}
                    >
                      Create Account
                    </Link>
                  </>
                )}

              </div>
            )}

          </div>

          {/* CART */}
          <button
            type="button"
            className="zaika-cart"
            onClick={onOpenCart}
          >
            Cart
            <span style={{ fontSize: "13px" }}>🛒</span>

            <span className="zaika-cart-badge">
              {cartCount}
            </span>
          </button>

        </div>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          className="zaika-menu-button"
          onClick={() => {
            setMenuOpen(!menuOpen);
            setAccountOpen(false);
          }}
          aria-label="Open navigation menu"
        >
          {menuOpen ? "×" : "☰"}
        </button>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="zaika-mobile-menu">

            <NavLink
              to="/"
              end
              className="zaika-mobile-link"
              onClick={closeMenus}
            >
              Home
            </NavLink>

            <NavLink
              to="/menu"
              className="zaika-mobile-link"
              onClick={closeMenus}
            >
              Menu
            </NavLink>

            <NavLink
              to="/gallery"
              className="zaika-mobile-link"
              onClick={closeMenus}
            >
              Gallery
            </NavLink>

            <NavLink
              to="/booking"
              className="zaika-mobile-link"
              onClick={closeMenus}
            >
              Reservations
            </NavLink>

            <NavLink
              to="/party-booking"
              className="zaika-mobile-link"
              onClick={closeMenus}
            >
              Events & Parties
            </NavLink>

            <NavLink
              to="/feedback"
              className="zaika-mobile-link"
              onClick={closeMenus}
            >
              Reviews
            </NavLink>

            <NavLink
              to="/contact"
              className="zaika-mobile-link"
              onClick={closeMenus}
            >
              Contact
            </NavLink>

            <div className="zaika-mobile-actions">

              <Link
                to="/booking"
                className="zaika-reserve"
                onClick={closeMenus}
              >
                BOOK A TABLE
              </Link>

              {loggedInUser ? (
                <>
                  <Link
                    to="/profile"
                    className="zaika-reserve"
                    onClick={closeMenus}
                  >
                    MY PROFILE
                  </Link>

                  <Link
                    to="/orders"
                    className="zaika-reserve"
                    onClick={closeMenus}
                  >
                    MY ORDERS
                  </Link>

                  <button
                    type="button"
                    className="zaika-cart"
                    onClick={handleLogout}
                  >
                    LOGOUT
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="zaika-reserve"
                    onClick={closeMenus}
                  >
                    LOGIN
                  </Link>

                  <Link
                    to="/register"
                    className="zaika-reserve"
                    onClick={closeMenus}
                  >
                    REGISTER
                  </Link>
                </>
              )}

              <button
                type="button"
                className="zaika-cart"
                onClick={() => {
                  setMenuOpen(false);
                  onOpenCart();
                }}
              >
                CART 🛒 ({cartCount})
              </button>

            </div>

          </div>
        )}

      </nav>
    </>
  );
}

const styles = {
  logo: {
    textDecoration: "none",
    color: "#FFF9F0",
    fontFamily: "Georgia, 'Times New Roman', serif",
    fontSize: "25px",
    fontWeight: "600",
    letterSpacing: "0.6px",
    whiteSpace: "nowrap",
  },

  logoSymbol: {
    color: "#C9A85D",
    marginRight: "7px",
    fontSize: "18px",
  },

  logoGold: {
    color: "#C9A85D",
  },

  navLink: {
    textDecoration: "none",
  },

  rightSide: {
    display: "flex",
    alignItems: "center",
    gap: "9px",
  },
};

export default Navbar;