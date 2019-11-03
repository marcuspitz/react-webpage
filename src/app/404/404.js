import React from 'react';
import { NavLink } from 'react-router-dom'

class Error404 extends React.Component {
    constructor(props) {
      super(props);      
    }
  
    componentDidMount() {
        
    }
  
    componentWillUnmount() {
        
    }
  
    render() {
      return (
        <div className="404">
            <header className="404-header">      
                <p>
                Page not found - ERROR 404
                <br></br>
                <NavLink to="/">Return home</NavLink>
                </p>      
            </header>
        </div>
      );
    }
}

export default Error404;