import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import SelectMode from './SelectMode';
import './Home.css';
import SongBrowser from './new/SongBrowser';

const Home = () => {
    const { path } = useRouteMatch();

    return (
        <main>
            <div className="HomeHeader">
                <h1><span className="dev">App Name</span></h1>
            </div>

            <SongBrowser />

            <Switch>
                <Route path={`${path}/SelectMode`}>
                    <SelectMode />
                </Route>
            </Switch>
        </main>
    );
};

export default Home;
