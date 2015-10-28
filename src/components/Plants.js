import React, { Component } from 'react';
import Plant from './Plant.js';

import io from 'socket.io-client';

export default class Plants extends Component {
  constructor() {
    super();
    this.state = {
      water: 40,
      temp: 30,
      light: 100
    }
  }
  componentDidMount() {
    let socket = io('http://localhost:8999');
    socket.on('data', (data) => {
      console.log(data);
      this.setState(data);
    });
  }
  render() {
    const {value, color} = this.props;
    const styles = require('./Plants.scss');
    return (
      <div className={styles.Plants}>
        <Plant sensors={this.state} image="https://upload.wikimedia.org/wikipedia/commons/a/ae/Emoji_u1f345.svg" />
        <Plant sensors={this.state} image="https://upload.wikimedia.org/wikipedia/commons/0/0a/Emoji_u1f346.svg" />
        <Plant sensors={this.state} image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Emoji_u1f353.svg/128px-Emoji_u1f353.svg.png" />
        <Plant sensors={this.state} image="https://upload.wikimedia.org/wikipedia/commons/c/ce/Emoji_u1f349.svg" />
        <Plant sensors={this.state} image="https://upload.wikimedia.org/wikipedia/commons/e/eb/Emoji_u1f33f.svg" />
        <Plant sensors={this.state} image="https://upload.wikimedia.org/wikipedia/commons/5/5c/Emoji_u1f34f.svg" />
      </div>
    );
  }
}
