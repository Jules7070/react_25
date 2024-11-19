// src/components/FilteredList.js
import React, { useState } from 'react';

function FilteredList({ items, searchText }) {
    const filteredItems = items.filter((item) =>
        item.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <ul className="filtered-list">
            {filteredItems.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}

export default FilteredList;