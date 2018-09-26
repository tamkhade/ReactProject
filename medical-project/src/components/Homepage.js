import React, { Component } from 'react';
import Header from '../baselayout/header';
import { Link } from 'react-router-dom';

class Homepage extends Component {
  render() {
    return (
     <div>
         <Header
          />
        <ul className="Header_links">
        <br/><br/>
        <Link to={"Header_link"}>Purchase</Link>
        <br/><br/>
        <Link to={"Header_link"}>Sale</Link>
        <br/><br/>
        <Link to={"Header_link"}>Stock</Link>
        <br/><br/>
        <Link to={"medicine"}>Medicine</Link>
        <br/><br/> 
        <Link to={"Header_link"}>Dealer</Link>
        <br/><br/>
        <Link to={"Header_link"}>Company</Link>
        <br/><br/>
        <Link to={"Header_link"}>Tab1</Link>
        <br/><br/>
        <Link to={"Header_link"}>Tab2</Link>
        <br/><br/>
        <Link to={"Header_link"}>Tab3</Link>
        <br/><br/>
        </ul>
    </div>
     
    );
  }
}

export default Homepage;
