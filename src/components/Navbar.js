import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    const {value, color} = this.props;
    const styles = require('./Navbar.scss');
    return (
      <div className={styles.Navbar}>
        <h1>FARMIUM</h1>
      </div>
    );
  }
}
