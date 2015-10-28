import React, { Component } from 'react';
import Navbar from './components/Navbar.js';
import Plants from './components/Plants.js';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      water: 40,
      temp: 30,
      light: 100
    }
  }
  render() {
    const styles = require('./App.scss');
    return (
      <div className={styles.App}>
        <Navbar/>
        <Plants/>
      </div>
    );
  }
}
