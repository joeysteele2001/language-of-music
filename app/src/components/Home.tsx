import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import SelectMode from './SelectMode';
import './Home.css';



const Home = () => {
return (
        <main>
            <div className="HomeHeader">
            <h1>App Name</h1>
            </div>
            <BrowserRouter>
            <div className="Home">
                <div>
                <button className="songButton">Song1</button>
                </div>
                <div>
                <Link to="/SelectMode"><button className="songButton">Song2</button></Link>
                </div>
                <Route exact path="/SelectMode">
                    <SelectMode />
                </Route>
                </div>
            </BrowserRouter>
        </main>
    );
};

export default Home;
