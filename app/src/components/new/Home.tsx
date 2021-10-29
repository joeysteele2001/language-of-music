import React from 'react';

import SongBrowser from './SongBrowser';
import Sidebar from './Sidebar';
import TopBar from './TopBar';

import './Home.css';

export const Home = () => {
    return (
        <div className="NewHome">
            <Sidebar />

            <div className="main-side">
                <TopBar />
                <main>
                    <h1>new home</h1>
                    <SongBrowser />
                </main>
            </div>
        </div>
    );
}

export default Home;
