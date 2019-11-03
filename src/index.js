import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './app/about/About';
import Error404 from './app/404/404';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom'

const fakeAuth = {
    isAuthenticated: true,
    authenticate(cb) {
      this.isAuthenticated = true
      setTimeout(cb, 100)
    },
    signout(cb) {
      this.isAuthenticated = false
      setTimeout(cb, 100)
    }
  }

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      fakeAuth.isAuthenticated === true
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
  )

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <PrivateRoute path="/About" exact={true} component={About} />
            <Route path="*" exact={true} component={Error404} />
        </Switch>
    </BrowserRouter>
    
, document.getElementById('root'));

