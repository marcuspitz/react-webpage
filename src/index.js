import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './app/about/About';
import Error404 from './app/404/404';
import { Route, BrowserRouter, Switch } from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/About" exact={true} component={About} />
            <Route path="*" exact={true} component={Error404} />
        </Switch>
    </BrowserRouter>
    
, document.getElementById('root'));

