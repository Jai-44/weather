import React from "react";
import "./Search.css";

function Search() {
  return (
    <form>
      <div className="searchBar">
        <input
          className="searchInput"
          type="text"
          placeholder="Search A Location"
        />
        <div className="searchIcon">
          <span className="material-symbols-outlined">Search</span>
        </div>
      </div>
    </form>
  );
}

export default Search;
