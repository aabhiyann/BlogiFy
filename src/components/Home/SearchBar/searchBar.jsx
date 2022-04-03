import React from "react";
import "./searchBar.css";
import { FaTimes, FaSearch } from "react-icons/fa";

const SearchBar = ({
  search,
  handleSearchKey,
  clearSearch,
  handleSearchSubmit,
}) => {
  return (
    <div className="searchbar-container">
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search by category"
          value={search}
          onChange={handleSearchKey}
        />
        {search && (
          <span onClick={clearSearch}>
            {" "}
            <p className="clear-btn">
              <FaTimes />
            </p>{" "}
          </span>
        )}
        <button className="search-submit-btn" type="submit">
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
