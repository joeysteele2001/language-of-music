import React from 'react';
import { Route, Switch } from 'react-router';
import Sidebar from './layout/sidebar/Sidebar';
import SongGallery from './content/SongGallery';
import SongPage from './content/SongPage';
import TopBar from './layout/TopBar';
import ColorPalette from './content/ColorPalette';

import { DEFAULT_PRESET } from '../util/settings';
import { getLibrary } from '../util/songLibrary';

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
                        <Route path="/songpage">
                            <SongPage settings={settings} />
                        </Route>

                        <Route path="/colors">
                            <ColorPalette />
                        </Route>

                        <Route path="/">
                            <h1>Home</h1>
                            <SongGallery load={getLibrary} />
                        </Route>
                    </Switch>
                </main>
            </div>
        </div>
    );
};

export default Main;
