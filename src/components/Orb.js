import React, { Component } from 'react';

export default class Orb extends Component {
  render() {
    const {value, color} = this.props;
    const styles = require('./Orb.scss');
    return (
      <div style={{
        backgroundImage: `linear-gradient( to top,
          ${color} 0%, ${color} ${value}%,transparent ${value}%,transparent 100%)`
      }} className={styles.Orb}>{value + '%'}</div>
    );
  }
}
