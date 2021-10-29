import React from 'react';

import Settings from './Settings';

import './Sidebar.css';

export const Sidebar = () => {
    return (
        <div className="Sidebar">
            <header>App Name or Icon</header>

            <nav>
                <ul>
                    <li>Song Library</li>
                    <li>
                        Languages
                        <ul>
                            <li>Japanese</li>
                            <li>French</li>
                        </ul>
                    </li>
                    <li>High Quality</li>
                </ul>
            </nav>

            <footer>
                <Settings />
            </footer>
        </div>
    );
};

export default Sidebar;
