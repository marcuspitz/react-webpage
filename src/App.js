import React from 'react';
import './App.css';
import { NavLink } from 'react-router-dom'

class App extends React.Component {
    constructor(props) {
      super(props);      
    }
  
    componentDidMount() {
        
    }
  
    componentWillUnmount() {
        
    }
  
    render() {        
        return (
        <div className="App">
            <header className="App-header">      
            <p>
            App page
            <br></br>
            <NavLink to="/About">About page</NavLink>
            </p>      
            </header>
        </div>
        );
    }
}

export default App;