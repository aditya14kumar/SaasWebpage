import React from "react";
import "./Features.css";
import { Link } from "react-router-dom";
import card_1 from "../../assets/features1.png";
import card_2 from "../../assets/features2.png";
import card_3 from "../../assets/features3.png";

const Features = () => {
  return (
    <div className="container feature-container">
      <div className="feature">
        <img src={card_1} alt="" />
        <h3>Secured Platform</h3>
        <p>
          Contrary to popular belief, Lore Ipsum
          <br /> is not simply random text. It has roots
          <br /> in a piece.
        </p>
        <Link>Learn More</Link>
      </div>
      <div className="feature">
        <img src={card_2} alt="" />
        <h3>Advanced Analytics</h3>
        <p>
          Contrary to popular belief, Lore Ipsum
          <br /> is not simply random text. It has roots
          <br /> in a piece.
        </p>
        <Link>Learn More</Link>
      </div>
      <div className="feature">
        <img src={card_3} alt="" />
        <h3>Powerful Automation</h3>
        <p>
          Contrary to popular belief, Lore Ipsum
          <br /> is not simply random text. It has roots
          <br /> in a piece.
        </p>
        <Link>Learn More</Link>
      </div>
    </div>
  );
};

export default Features;
