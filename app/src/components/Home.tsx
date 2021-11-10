import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import SelectMode from './SelectMode';
import './Home.css';
import SongGallery from './new/SongGallery';

const Home = () => {
    const { path } = useRouteMatch();

    return (
        <main>
            <div className="HomeHeader">
                <h1><span className="dev">App Name</span></h1>
            </div>

            <SongGallery />

            <Switch>
                <Route path={`${path}/SelectMode`}>
                    <SelectMode />
                </Route>
            </Switch>
        </main>
    );
};

export default Home;
