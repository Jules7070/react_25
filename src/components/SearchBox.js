// src/components/SearchBox.js
import React from 'react';

function SearchBox({ onSearchChange }) {
    const handleChange = (e) => {
        onSearchChange(e.target.value);
    };

    return (
        <div className="search-box">
            <input
                type="text"
                placeholder="Search..."
                onChange={handleChange}
                aria-label="Search"
            />
        </div>
    );
}

export default SearchBox;
