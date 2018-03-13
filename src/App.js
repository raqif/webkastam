import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//components
import Header from './components/header/header'
import Nav from './components/navigation/nav'
import Footer from './components/footer/footer'


//body
class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />

        <Nav />

        <div className="App-body">
          <p className="slideshow">
          <img src={logo} className="App-logo" alt="logo" />
          slideshow
          </p>
          <p className="activity">
          <img src={logo} className="App-logo" alt="logo" />
          timeline
          </p>
        </div>

        <div className="App-body2">
          <p className="foreword">
            gambar pengarah
          </p>
          <p className="foreword2">
            kata-kata aluan pengarah kastam
          </p>
        </div>

        <div className="App-body3">
          <p className="App-link">
            JKDM | JPA | Jabatan Laut | Biro Angkasa | Cuepacs
            | PEBERKAS | APMM | Polis Marin
          </p>
        </div>

        <Footer />

      </div>
    );
  }
}

export default App;
