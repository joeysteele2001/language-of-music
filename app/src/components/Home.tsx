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
                    <Link to="#">
                        <div className="SongBrowser-thumbnail"></div>
                        <div className="SongBrowser-name">Song 1</div>
                    </Link>
                </div>

                <div className="SongBrowser-song">
                    <Link to={`${url}/SelectMode`}>
                        <div
                            className="SongBrowser-thumbnail"
                            style={{
                                backgroundImage: "url(https://img.youtube.com/vi/_IkopJwRDKU/mqdefault.jpg)",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                            }}
                        />
                        <div className="SongBrowser-name">Gurenge</div>
                    </Link>
                </div>

                <div className="SongBrowser-song">
                    <Link to="#">
                        <div className="SongBrowser-thumbnail"></div>
                        <div className="SongBrowser-name">Song 3</div>
                    </Link>
                </div>

                <div className="SongBrowser-song">
                    <div className="SongBrowser-thumbnail"></div>
                    <Link to="#">Song 4</Link>
                </div>

                <div className="SongBrowser-song">
                    <div className="SongBrowser-thumbnail"></div>
                    <Link to="#">Song 5</Link>
                </div>

                <div className="SongBrowser-song">
                    <div className="SongBrowser-thumbnail"></div>
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
