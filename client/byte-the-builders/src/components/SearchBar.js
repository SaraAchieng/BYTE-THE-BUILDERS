// src/components/SearchBar.js
import React, { useState } from 'react';
import '../App.css';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle the search logic here
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="search-bar-container">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search Projects, Employees, Materials, Clients, Equipment..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
