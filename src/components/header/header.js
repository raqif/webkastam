import React, { Component } from 'react';
import raqif from './logo.svg';
import './header.css';

class Header extends Component {
  render() {
    return (
        <header className="App-header">
          <img src={raqif} className="App-logo" alt="logo" />
          <div className='col'>
            <h1 className='title'>
               Persatuan Pegawai Kastam Marin Malaysia
              </h1>
            <p className='slogan'>
              bersatu kita teguh
            </p>
          </div>
        </header>
      );
    }
  }

  export default Header;
