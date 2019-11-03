import React from 'react';
import { NavLink } from 'react-router-dom'

class About extends React.Component {
    constructor(props) {
      super(props);      
    }
  
    componentDidMount() {
        
    }
  
    componentWillUnmount() {
        
    }
  
    render() {
      return (
        <div className="About">
            <header className="About-header">      
                <p>
                About page
                <br></br>
                <NavLink to="/">Return home</NavLink>
                </p>      
            </header>
        </div>
      );
    }
}

export default About;
