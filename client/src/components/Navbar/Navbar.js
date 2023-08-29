import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const navigate = useNavigate();
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);
  return (
    <div className="header bg-color-primary">
      <nav className="navbar">
        <a href="/" className="logo">
          <img src="Assets/logo.png" alt="" />
        </a>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#FFFFFF" }} />
          ) : (
            <FaBars size={30} style={{ color: "#FFFFFF" }} />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a href="/" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/about" onClick={closeMenu}>
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="/services" onClick={closeMenu}>
              Services
            </a>
          </li>
          <li className="nav-item">
            <a href="/contact" onClick={closeMenu}>
              Contact Us
            </a>
          </li>
          <div className="nav-btns">
            <button className="nav-button" onClick={() => navigate("/login")}>
              Sign In
            </button>
            <button className="nav-button" onClick={() => navigate("/signup")}>
              Sign up
            </button>
          </div>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
