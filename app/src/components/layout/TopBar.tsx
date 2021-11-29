import React from 'react';

import Search from '../search';

import './TopBar.css';

export const TopBar = () => {
    return (
        <header className="TopBar">
            <Search />
        </header>
    );
};

export default TopBar;
