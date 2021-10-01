import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import SelectMode from './SelectMode';


const Home = () => {
    return (
        <main>
            <h1>App Name</h1>
            <p>Songs</p>
            {//When any song clicked: link to selectmode page & simultaneously navigate to that song's data in a library//
}
            <BrowserRouter>
                <Link to="/SelectMode">SelectMode</Link>
                <Route exact path="/SelectMode">
                    <SelectMode />
                </Route>
            </BrowserRouter>

        </main>
        
    );
};



export default Home;
