import React from 'react';

import Search from '../search';

import './TopBar.css';

export const TopBar = () => {
    return (
        <header className="TopBar">
            <Search />
            <label>
                Add Song
                <button className="add-song">+</button>
            </label>
        </header>
    );
};

export default TopBar;
