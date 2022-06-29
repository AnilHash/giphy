import React, { useContext, useState } from "react";
import { SearchContext } from "../../App";

const SearchBox = () => {
  const { handleSearch } = useContext(SearchContext);
  const [search, setSearch] = useState("");
  return (
    <>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Type here..."
      />
      <button onClick={() => handleSearch(search)}>
        <span className="material-symbols-outlined">search</span>
      </button>
    </>
  );
};

export default SearchBox;
