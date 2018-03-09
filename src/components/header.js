import React, { Component } from 'react';
import logo from './logo.svg';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App-header">
        <div className="App-body">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="col">
        <h1 className="title">Persatuan Pegawai Kastam Marin Malaysia</h1>
        <p className="title">Berai roboh</p>
        </div>
        </div>
      </div>
    )
  }
}
