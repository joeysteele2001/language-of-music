import React from 'react';
import { Route, Link, Switch, useRouteMatch } from 'react-router-dom';
import SelectMode from './SelectMode';
import './Home.css';

const Home = () => {
    const { path, url } = useRouteMatch();

    return (
        <main>
            <div className="HomeHeader">
                <h1><span className="dev">App Name</span></h1>
            </div>

            <div className="SongBrowser">
                <div className="SongBrowser-song">
                    <Link to="#">Song 1</Link>
                </div>

                <div
                    className="SongBrowser-song"
                    style={{
                        backgroundImage: "url(https://img.youtube.com/vi/_IkopJwRDKU/mqdefault.jpg)",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                    }}
                >
                    <Link to={`${url}/SelectMode`}>Gurenge</Link>
                </div>

                <div className="SongBrowser-song">
                    <Link to="#">Song 3</Link>
                </div>

                <div className="SongBrowser-song">
                    <Link to="#">Song 4</Link>
                </div>

                <div className="SongBrowser-song">
                    <Link to="#">Song 5</Link>
                </div>

                <div className="SongBrowser-song">
                    <Link to="#">Song 6</Link>
                </div>
            </div>

            <Switch>
                <Route path={`${path}/SelectMode`}>
                    <SelectMode />
                </Route>
            </Switch>
        </main>
    );
};

export default Home;
