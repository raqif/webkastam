import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//components
import Header from './components/header/header'

class App extends Component {
  render() {
    return (
      <div className="App">

<<<<<<< HEAD
        <Header />
=======
      <div className="App-header">
        <div className="App-body">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="col">
        <h1 className="title">Persatuan Pegawai Kastam Marin Malaysia</h1>
        <p className="title">Berai roboh</p>
        </div>
        </div>
      </div>

>>>>>>> 21a2f44b9ce64c5f0f09b696943d52bd0ebadc72

        <nav className="App-nav">
          <ul>
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

        <div className="App-body">
          <p className="slideshow">
          <img src={logo} className="App-logo" alt="logo" />
          slide
          </p>
          <p className="activity">
          <img src={logo} className="App-logo" alt="logo" />
          show
          </p>
        </div>

        <div className="App-body2">
          <p className="App-link">
            JKDM | JPA | Jabatan Laut | Biro Angkasa | Cuepacs
            | PEBERKAS | APMM | Polis Marin
          </p>
        </div>



        <footer className="App-footer">
        copyright 2018
        </footer>




      </div>
    );
  }
}

export default App;
