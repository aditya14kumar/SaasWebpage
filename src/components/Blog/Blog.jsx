import React from "react";
import "./Blog.css";
import blog_1 from "../../assets/blog1.png";
import blog_2 from "../../assets/blog2.png";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="container blog-cont">
      <div className="blog">
        <img src={blog_1} alt="" />
        <p>November 15, 2022</p>
        <h3>
          10 Top tips for making your
          <br />
          Saas product sticky
        </h3>
        <p>
          It is a long established fact that a reader will be distracted
          <br /> by the readable content of a page from when looking at it
          <br /> layout. The point of using Lorem Ipsum
        </p>
        <Link>Read More</Link>
      </div>
      <div className="blog">
        <img src={blog_2} alt="" />
        <p>November 15, 2022</p>
        <h3>
          Automate Reports Generation
          <br /> with Saasup
        </h3>
        <p>
          It is a long established fact that a reader will be distracted
          <br /> by the readable content of a page from when looking at it
          <br /> layout. The point of using Lorem Ipsum
        </p>
        <Link>Read More</Link>
      </div>
    </div>
  );
};

export default Blog;
