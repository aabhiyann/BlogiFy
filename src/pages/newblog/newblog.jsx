import React, { useState, useRef } from "react";
import "./newblog.css";
import { FaPlus } from "react-icons/fa";
import { blogData } from "../../config/data";
import Alert from "../../components/common/alert/alert";

function NewBlog() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
  });

  const handleNewBlog = (e) => {
    e.preventDefault();
    let newData = {
      id: Date.now(),
      title: title,
      category: category,
      description: description,
      authorName: "Abhiyan Sainju",
      authorAvatar: "/assets/images/user_5.jpg",
      date: "Febuary 16, 2021",
      cover: "/assets/images/blog_2.jpg",
    };
    blogData.push(newData);
    // console.log(newData);
    console.log(blogData);

    showAlert(true, "item added sucessfully");
  };

  const showAlert = (show = false, msg = "") => {
    setAlert({ show: show, msg: msg });
  };

  return (
    <div className="write-container">
      <img
        className="input-cover"
        src="/assets/images/blog_1.jpg"
        alt="input-page-cover"
      ></img>
      <form className="blog-form" onSubmit={handleNewBlog}>
        {alert.show && <Alert props={alert} removeAlert={showAlert} />}
        <div className="form-group">
          {/* input for image */}
          <label htmlFor="fileInput">
            <i className="add-btn">
              <FaPlus />
            </i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            autoFocus={true}
            value={title}
            className="blog-input"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />{" "}
          <input
            type="text"
            placeholder="Category"
            className="blog-input"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Start BlogyFying...."
            type="text"
            className="blog-input blog-text"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>
        </div>
        <button className="form-submit-btn">Publish</button>
      </form>
    </div>
  );
}

export default NewBlog;
