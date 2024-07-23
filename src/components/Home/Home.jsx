import React from "react";
import "./Home.css";
import home from "../../assets/home.png";
import video from '../../assets/play.png'

const Home = () => {
  return (
    <div className="container home">
      <div className="home-left">
        <h2>
          Build your
          <br /> audience and
          <br /> grow your brand
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit<br/> interdum
          ullamcorper sed pharetra sene.
        </p>
        <div className="button-div">
            <button>Get Started</button>
            <button>Watch Video <img src={video} alt="" /></button>
        </div>
      </div>
      <div className="home-right">
        <img src={home} alt="" />
      </div>
    </div>
  );
};

export default Home;
