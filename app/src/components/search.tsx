import React from 'react';
import GeniusSearch from './GeniusSearch';

const Search = () => {
    return(
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search songs"
            name="q" 
        />
        <button type="submit">Search</button>
    </form>
    );
    };

export default Search;

const { search } = window.location;
const query = new URLSearchParams(search).get('q');
{GeniusSearch(query)}
