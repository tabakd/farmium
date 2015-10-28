import React, { Component } from 'react';
import Orb from './Orb.js';

const PlantColors = {
  light: '#B0BEC5',
  water: '#4FC3F7',
  temp: '#FF8A65'
}

export default class Plant extends Component {
  render() {
    const {image, sensors} = this.props;
    const styles = require('./Plant.scss');
    return (
      <div className={styles.Plant}>
        <img src={image} />
        {Object.keys(sensors).map((k) => {
          return <Orb key={k} value={sensors[k]} color={PlantColors[k]} />
        })}
      </div>
    );
  }
}
