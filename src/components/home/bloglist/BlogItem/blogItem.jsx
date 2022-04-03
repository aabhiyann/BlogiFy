import React from "react";
import "./blogItem.css";
import Card from "../../../common/card/card";
import { Link } from "react-router-dom";
import { FaChevronRight, FaLocationArrow } from "react-icons/fa";

const BlogItem = ({ blog }) => {
  const {
    id,
    title,
    category,
    description,
    authorName,
    authorAvatar,
    date,
    cover,
  } = blog;

  return (
    <div className="blog-container">
      <Link to={`/blog/${id}`}>
        <img src={cover} alt="blog-cover-image" className="blog-cover" />
      </Link>
      <Card category={category} />
      <div className="title-container">
        <p className="arrow-icon">
          <FaLocationArrow />
        </p>
        <h2>{title}</h2>
      </div>
      <p className="blog-description">{description}</p>

      <footer>
        <div className="author-container">
          <img src={authorAvatar} alt="author-image" />
          <div>
            <h6>{authorName}</h6>
            <p>{date}</p>
          </div>
        </div>
        {/* link to seperate blog component using blog id */}
        <Link to={`/blog/${id}`} className="next-btn">
          <FaChevronRight />
        </Link>
      </footer>
    </div>
  );
};

export default BlogItem;
