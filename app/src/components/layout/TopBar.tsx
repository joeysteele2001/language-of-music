import React from 'react';

import Search from '../search';

import './TopBar.css';

export interface Props {
    onAddSong?: (query: string) => void;
}

export const TopBar = (props: Props) => {
    return (
        <header className="TopBar">
            <Search onAdd={props.onAddSong} />
        </header>
    );
};

export default TopBar;
