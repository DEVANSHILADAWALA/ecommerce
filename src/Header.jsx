import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaSearch } from "react-icons/fa";

function Header() {
  const navigate = useNavigate();
  const [cartCount, setCartCount] = useState(0);

  // Update cartCount from sessionStorage on mount and when sessionStorage changes (simple version)
  useEffect(() => {
    const count = Number(sessionStorage.getItem("cartCount")) || 0;
    setCartCount(count);

    // Optional: add event listener if you dispatch a custom event on cart update
    function onCartUpdate() {
      const newCount = Number(sessionStorage.getItem("cartCount")) || 0;
      setCartCount(newCount);
    }
    window.addEventListener("cartUpdated", onCartUpdate);

    return () => {
      window.removeEventListener("cartUpdated", onCartUpdate);
    };
  }, []);

  function handleLogout() {
    sessionStorage.clear();
    setCartCount(0);
    navigate("/Login");
  }

  return (
    <>
      {/* Main Top Header */}
      <nav className="navbar bg-white py-3 border-bottom">
        <div className="container d-flex justify-content-between align-items-center">
          {/* Logo */}
          <div className="d-flex align-items-center">
            <img src="logo.jpg" alt="Logo" width="60" height="40" className="me-2" />
          </div>

          {/* Search Bar */}
          <form className="d-flex search-box" style={{ maxWidth: "400px", width: "100%" }}>
            <input type="text" className="form-control border-primary" placeholder="Search" />
            <button className="btn btn-outline-primary" type="submit">
              <FaSearch />
            </button>
          </form>

          {/* Account & Cart */}
          <div className="d-flex align-items-center gap-3">
            {/* My Account Dropdown */}
            <div className="dropdown">
              <button
                className="btn btn-link dropdown-toggle text-decoration-none text-primary"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                My Account
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                {!sessionStorage.getItem("islogin") && (
                  <li className="nav-item">
                    <Link className="nav-link text-center" to="./Login">
                      Login
                    </Link>
                  </li>
                )}
                <li className="nav-item">
                    <Link className="nav-link text-center" to="./ordertable">
                      My Oder
                    </Link>
                  </li>
                
                
                {sessionStorage.getItem("islogin") && (
                  <li className="nav-item">
                    <a
                      className="nav-link text-center"
                      onClick={handleLogout}
                      href="#"
                      aria-current="page"
                    >
                      Logout
                    </a>
                  </li>
                )}
              </ul>
            </div>

            {/* Cart Icon with Count */}
            <Link to="/cart" className="text-decoration-none text-primary d-flex align-items-center">
              <FaShoppingCart className="me-1" />
              ({cartCount})
            </Link>
          </div>
        </div>
      </nav>

      {/* Blue Navigation Bar */}
      <div className="blue-navbar  text-white py-2">
        <div className="container d-flex justify-content-center gap-3 fw-semibold align-items-center">
          <Link to="/home" className="nav-link text-white">
            HOME
          </Link>
          <Link to="/home" className="nav-link text-white">
            ABOUT US
          </Link>
          <Link to="/product" className="nav-link text-white">
            PRODUCTS
          </Link>
          <Link to="/contact" className="nav-link text-white">
            CONTACT US
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
