import React, { Component } from 'react';

import styles from './Tooltip.module.css';


class Tooltip extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0,
      seriesValues: [],
      visible: true,
    };
  }


  render() {
    const {
      x,
      y,
      seriesValues,
    } = this.state;

    console.log('Tooltip render, seriesValues: ', seriesValues);

    if (!seriesValues.length) {
      return null;
    }

    return (
      <div className={styles.root}>
       Tooltip
      </div>
    );
  }
}

export default Tooltip;