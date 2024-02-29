import React from "react";
import "./article.css";
const Article = ({ imgUrl }) => {
  return (
    <div className="gbt3__blog_container_article">
      <div className="gbt3__blog_container_article_image">
        <img src={imgUrl} alt="Blog Img" />
      </div>
      <div className="gbt3__blog_container_article_content">
        <div>
          <p>Sep 26, 2021</p>
          <h3>GPT-3 and Open AI is the future. Let us exlore how it is?</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;
