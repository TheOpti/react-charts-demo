import React, { Component } from 'react';

import styles from './Tooltip.module.css';


class Tooltip extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0,
      seriesValues: [],
      visible: false,
    };
  }

  componentDidMount () {
    if (this.props.mouseCoordsStream) {
      this.mouseCoordsObserver =
        this.props.mouseCoordsStream.subscribe(({x, y, seriesValues, visible}) => {
          this.setState({x, y, seriesValues, visible});
        });
    }
  }

  componentWillUnmount () {
    if (this.props.mouseCoordsStream) {
      this.mouseCoordsObserver.dispose();
    }
  }

  render() {
    const {
      x,
      y,
      seriesValues,
      visible,
    } = this.state;

    if (!visible || !seriesValues.length || y > 255) {
      return null;
    }

    let leftPos = seriesValues[0].canvasx - 150 - 30;

    const isLeft = leftPos < 75;

    if (isLeft) {
      leftPos = seriesValues[0].canvasx + 30;
    }

    const divStyle = this.state.visible ? {
      left: leftPos,
      top: y,
    } : null;

    const dateToDisplay = (new Date(seriesValues[0].xval)).toLocaleDateString();

    return (
      <div className={styles.root} style={divStyle}>
        { isLeft && <div className={[styles.arrow, styles.leftArrow].join(' ')} /> }
        { !isLeft && <div className={[styles.arrow, styles.rightArrow].join(' ')} /> }
        <div className={styles.title}>
          Tooltip title
        </div>
        <div className={styles.seriesRow}>
          <div>
            x:
          </div>
          <div>
            { dateToDisplay }
          </div>
        </div>
        <hr />
        {
          seriesValues.map((series) => {
            return (
              <div key={series.name} className={styles.seriesRow}>
                <div>{ series.name } :</div>
                <div>{ series.yval }</div>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default Tooltip;