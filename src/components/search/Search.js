import React from "react";
import { TbSearch } from "react-icons/tb";

const Search = () => {
  return (
    <div className="search">
      <input
        className="search__field"
        type="search"
        placeholder="Search"
      ></input>

      <div className="search__icon">
        <TbSearch size={32} />
      </div>
    </div>
  );
};

export default Search;
