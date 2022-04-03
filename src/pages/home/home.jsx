import React, { useState } from "react";
import Header from "../../components/home/header/header";
import SearchBar from "../../components/home/searchbar/searchBar";
import BlogList from "../../components/home/bloglist/blogList";
import EmptyList from "../../components/common/emptylist/emptylist";
import { blogData } from "../../config/data";
// test::;;;;;;;;;;;;;;;:::::
import NewBlog from "../newblog/newblog";
import Settings from "../settings/settings";
import Login from "../login/login";
import Register from "../register/register";

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
