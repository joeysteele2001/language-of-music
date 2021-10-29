import React from 'react';

import SearchBar from './input/SearchBar';

import './TopBar.css';

export const TopBar = () => {
    return (
        <header className="TopBar">
            <SearchBar />
            <label>
                Add Song
                <button className="add-song">+</button>
            </label>
        </header>
    );
};

export default TopBar;
