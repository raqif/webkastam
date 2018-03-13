import React, { Component } from 'react';
import './nav.css';

class Nav extends Component {
  render() {
    return (
      <nav className="App-nav">
        <ul className="Nav">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">PPKMM</a>
          </li>
          <li>
            <a href="#">Download</a>
          </li>
          <li>
            <a href="#">Media</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </nav>
      );
    }
  }

  export default Nav;
