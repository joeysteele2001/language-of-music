import React from 'react';
import './SelectMode.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

const SelectMode = () => {
return (
    <main>
    <h1>Select Mode</h1>
    
    <div className= "SelectMode">
        <div>Just Listen</div>
        <div>Listen and Learn</div>
        <div>Play Along</div>
    </div>
    </main>
);
};


export default SelectMode;
