import React from 'react';
import { Route, Link, Switch, useRouteMatch } from 'react-router-dom';
import SelectMode from './SelectMode';
import './Home.css';



const Home = () => {
    const { path, url } = useRouteMatch();

    return (
        <main>
            <div className="HomeHeader">
                <h1>App Name</h1>
            </div>
            {//When any song clicked: link to selectmode page & simultaneously navigate to that song's data in a library//
            }
            <div className="Home">
                <div>
                    <button className="songButton">Song1</button>
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
