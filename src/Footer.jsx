import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer style={{ backgroundColor: "#34568e", color: "white", padding: "20px", marginTop: "auto" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", gap: 40, flexWrap: "wrap" }}>
        <div style={{ flex: "1 1 300px" }}>
          <h2>E Shop</h2>
          <p style={{color:"white"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin rutrum massa...
          </p>
        </div>
        <div style={{ flex: "1 1 200px" }}>
          <h3>Useful Pages</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li><Link to="/home" style={{ color: "white", textDecoration: "none" }}>Home</Link></li>
            <li><Link to="/product" style={{ color: "white", textDecoration: "none" }}>Product</Link></li>
            <li><Link to="/cart" style={{ color: "white", textDecoration: "none" }}>Cart</Link></li>
            <li><Link to="/checkout" style={{ color: "white", textDecoration: "none" }}>Checkout</Link></li>
            <li><Link to="/login" style={{ color: "white", textDecoration: "none" }}>Login </Link></li>
            <li><Link to="/register" style={{ color: "white", textDecoration: "none" }}> Register </Link></li>
            <li><Link to="/ordertable" style={{ color: "white", textDecoration: "none" }}>My Account</Link></li>
            <li><Link to="/checkout" style={{ color: "white", textDecoration: "none" }} >checkout</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
