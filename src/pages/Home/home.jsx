import React, { useState } from "react";
import Header from "../../components/Home/Header/header";
import SearchBar from "../../components/Home/SearchBar/searchBar";
import BlogList from "../../components/Home/BlogList/blogList";
import EmptyList from "../../components/Common/EmptyList/emptylist";
import { blogData } from "../../config/data";
// test::;;;;;;;;;;;;;;;:::::
import NewBlog from "../NewBlog/newblog";
import Settings from "../Settings/settings";
import Login from "../Login/login";
import Register from "../Register/register";

function Home() {
  const [blogs, setBlogs] = useState(blogData);
  const [search, setSearch] = useState("");

  // for search submit handling
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Submit Works");

    // filter by category logic
    const allBlogs = blogData;
    const filteredBlogs = allBlogs.filter((a) =>
      a.category.toLowerCase().includes(search.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  // For searchbar key press (adding to search state)
  const handleSearchKey = (e) => {
    setSearch(e.target.value);
    console.log("search bar is searching for: " + search);
  };

  // For clearing search bar category
  const clearSearch = () => {
    setBlogs(blogData);
    setSearch("");
  };

  return (
    <div>
      {/* Page Header component */}
      <Header />

      {/* Search Bar component */}
      <SearchBar
        handleSearchSubmit={handleSearchSubmit}
        handleSearchKey={handleSearchKey}
        search={search}
        clearSearch={clearSearch}
      />

      {/* Blog List Component */}
      {blogs.length ? <BlogList blogs={blogs} /> : <EmptyList />}
    </div>
  );
}

export default Home;
