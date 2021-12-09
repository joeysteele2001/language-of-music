import React from 'react';

export const SearchBar = () => {
    return (
        <div className="SearchBar">
            <input type="text" placeholder="Search library..." />
            <button>Search</button>
        </div>
    );
};

export default SearchBar;
