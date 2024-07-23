import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaSquareInstagram } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container footer">
      <div className="footer-left">
        <p>Copyright © Saasup | Developed by Aditya</p>
      </div>
      <div className="footer-right">
        <ul>
          <li>
            <Link
              to="https://www.instagram.com/aditya_thakur464/"
              className="icon-1"
            >
              <FaSquareInstagram />
            </Link>
          </li>
          <li>
            <Link to="#" className="icon-2">
              <FaFacebook />
            </Link>
          </li>
          <li>
            <Link to="https://x.com/AdityaK6955919" className="icon-3">
              <FaTwitterSquare />
            </Link>
          </li>
          <li>
            <Link
              to="https://www.linkedin.com/in/aditya-kumar-ba4200218/"
              className="icon-4"
            >
              <FaLinkedin />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
