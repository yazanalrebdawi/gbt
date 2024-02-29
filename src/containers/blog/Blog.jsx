import React from "react";
import "./blog.css";
import { Article } from "../../components/exportComponents";
import {
  blog1,
  blog2,
  blog3,
  blog4,
  blog5,
} from "../../components/article/exportArticles";
const Blog = () => {
  return (
    <div className="gbt3__blog section__padding " id="blog">
      <div className="gbt3__blog_heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gbt3__blog_container">
        <div className="gbt3__blog_container_groupA">
          <Article imgUrl={blog1} />
        </div>
        <div className="gbt3__blog_container_groupB">
          <Article imgUrl={blog2} />
          <Article imgUrl={blog3} />
          <Article imgUrl={blog4} />
          <Article imgUrl={blog5} />
        </div>
      </div>
    </div>
  );
};

export default Blog;
