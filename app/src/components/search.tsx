import React from 'react';
import GeniusSearch from './GeniusSearch';
import YoutubeID from './YoutubeID';

const Search = () => {
    return (
        <form action="/" method="get">
            <label htmlFor="header-search">
                <span className="visually-hidden">Search</span>
            </label>
            <input
                type="text"
                id="header-search"
                placeholder="Add new songs"
                name="q"
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default Search;

const { search } = window.location;
const query = new URLSearchParams(search).get('q');
if (query) {
    GeniusSearch(query);
    YoutubeID(query);
}