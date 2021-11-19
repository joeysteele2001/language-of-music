import React from 'react';
import { Route, Switch } from 'react-router';
import Sidebar from './Sidebar';
import SongGallery from './SongGallery';
import SongPage from './SongPage';
import TopBar from './TopBar';
import ColorPalette from '../ColorPalette';

import { DEFAULT_PRESET } from '../../util/settings';
import songs from '../../resources/songs.json';

import './Main.css';

export const Main = () => {
    const [settings, setSettings] = React.useState(DEFAULT_PRESET);

    return (
        <div className="Main">
            <Sidebar onSettingsChange={setSettings} />

            <div className="main-side">
                <TopBar />

                <main>
                    <Switch>
                        <Route path="/home">
                            <h1>Home</h1>
                            <SongGallery songs={songs} />
                        </Route>

                        <Route path="/songpage">
                            <SongPage settings={settings} />
                        </Route>

                        <Route path="/colors">
                            <ColorPalette />
                        </Route>
                    </Switch>
                </main>
            </div>
        </div>
    );
};

export default Main;
