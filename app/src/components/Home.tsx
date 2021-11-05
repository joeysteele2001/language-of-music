import React from 'react';
import { Route, Link, Switch, useRouteMatch } from 'react-router-dom';
import SelectMode from './SelectMode';
import './Home.css';
import getLyrics from './getLyrics';
import translate from './translate';



const Home = () => {
    const { path, url } = useRouteMatch();

    return (
        <main>
            <div className="HomeHeader">
                <h1>APP NAME</h1>
            </div>
            <div className="Home">
                <div>
                    <button className="songButton">Song1</button>
                </div>
                <div>
                    {getLyrics}
                </div>
                <div>
                    <Link to={`${url}/SelectMode`}><button className="songButton">Song2</button></Link>
                </div>
                <Switch>
                    <Route path={`${path}/SelectMode`}>
                        <SelectMode />
                    </Route>
                </Switch>
            </div>
        </main>
    );
};

export default Home;
