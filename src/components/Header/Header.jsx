/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-unknown-property */
import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <nav className="container">
        <h3>Saas Up</h3>
        <div className="nav-item">
          <ul>
            <li>
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li>
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li>
              <Link className="nav-link" to="/features">Features</Link>
            </li>
            <li>
              <Link className="nav-link" to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <button className="btn">
          <Link className="contact-link">Contact Us</Link>
        </button>
      </nav>
    </div>
  );
};

export default Header;
