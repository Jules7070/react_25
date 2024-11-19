// src/App.js
import React, { useState } from 'react';
import './App.css';
import FilteredList from './components/FilteredList';
import SearchBox from './components/SearchBox';

function App() {
    const [searchText, setSearchText] = useState('');
    const items = ['React', 'JavaScript', 'CSS', 'HTML', 'Node.js', 'Python', 'TypeScript'];

    return (
        <div className="App">
            <h1>Hola Mundo Again : Filtro</h1>
            <SearchBox onSearchChange={setSearchText} />
            <FilteredList items={items} searchText={searchText} />
        </div>
    );
}

export default App;
