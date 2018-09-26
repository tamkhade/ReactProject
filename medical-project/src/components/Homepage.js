import React, { Component } from 'react';
import Header from '../baselayout/header';
import { Link } from 'react-router-dom'

class Homepage extends Component {
  render() {
    return (
     <div>
         <Header
          />
        <ul className="Header_links">
        <Link to={"Header_link"}>hiiii</Link>
          <li className="Header_link">When</li>
          <li className="Header_link">Why</li>
          <li className="Header_link">About</li>
        </ul>
    </div>
     
    );
  }
}

export default Homepage;
