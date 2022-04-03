import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "../../components/Common/Card/card";
import EmptyList from "../../components/Common/EmptyList/emptylist";
import { blogData } from "../../config/data";
import "./blog.css";
import { FaAngleLeft, FaEdit, FaTrash } from "react-icons/fa";

function Blog() {
  const { id } = useParams();
  const [displayBlog, setDisplayBlog] = useState();

  // render once each time blog component gets called
  useEffect(() => {
    // find the blog with desired id from the whole blogdata
    const blog = blogData.find((a) => a.id === parseInt(id));

    if (blog) {
      setDisplayBlog(blog);
    }
  }, []);

  return (
    <div>
      <Link to="/" className="back-btn">
        <FaAngleLeft />
        <p className="back-text">Go back</p>
      </Link>
      {displayBlog ? (
        <div className="displayblog-container">
          <header>
            <p className="date-blog">{displayBlog.date}</p>
            <h1 className="blog-title">{displayBlog.title}</h1>
            <div className="category">
              <Card category={displayBlog.category} />
            </div>
          </header>
          <img src={displayBlog.cover} alt="cover-image" />
          <p className="blog-author">Author: {displayBlog.authorName}</p>
          <p className="description-blog">{displayBlog.description}</p>
          <div className="blog-icons">
            <i className="edit-btn">
              <FaEdit />
            </i>
            <i className="delete-btn">
              <FaTrash />
            </i>
          </div>
        </div>
      ) : (
        <EmptyList />
      )}
    </div>
  );
}

export default Blog;
