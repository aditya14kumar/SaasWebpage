import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import cost_img from "../../assets/cost.png";

const About = () => {
  return (
    <div className="container about">
      <div className="about-left">
        <h2>
          Powerful and easy to use
          <br />
          saas builder platform
        </h2>
        <p>
          It is a long established fact that a reader will be by the from
          <br />
          readable content of a page when looking at its layout. The
          <br /> point of using lorem Ipsum.
        </p>
        <div className="cost-container">
          <img src={cost_img} alt="" />
          <div className="cost-content">
            <h4>Cost Effective</h4>
            <p>
              Contrary to popular belief, Lore Ipsum
              <br />
              is not simply random text.
            </p>
          </div>
        </div>
      </div>
      <div className="about-right">
        <img src={about_img} alt="" />
      </div>
    </div>
  );
};

export default About;
