import React from "react";
import "./blogList.css";
import BlogItem from "./BlogItem/blogItem";

const BlogList = ({ blogs }) => {
  return (
    <div className="bloglist-container">
      {blogs.map((blog) => {
        return <BlogItem blog={blog} key={blog.id} />;
      })}
    </div>
  );
};

export default BlogList;
