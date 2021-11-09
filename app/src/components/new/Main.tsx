import React from 'react';
import { Route, Switch } from 'react-router';
import Sidebar from './Sidebar';
import SongBrowser from './SongBrowser';
import SongPage from './SongPage';
import TopBar from './TopBar';

import { DEFAULT_PRESET } from '../../util/settings';

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
                        <Route path="/new-home">
                            <h1>new home</h1>
                            <SongBrowser />
                        </Route>

                        <Route path="/new-songpage">
                            <SongPage settings={settings} />
                        </Route>
                    </Switch>
                </main>
            </div>
        </div>
    );
};

export default Main;
