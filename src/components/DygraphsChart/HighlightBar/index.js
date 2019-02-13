import React, { Component } from 'react';

import styles from './HighlightBar.module.css';


class HighlightBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0,
      visible: false,
    };
  }

  componentDidMount () {
    if (this.props.mouseCoordsStream) {
      this.mouseCoordsObserver =
        this.props.mouseCoordsStream.subscribe(({x, y, visible}) => {
          this.setState({x, y, visible});
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
      visible,
    } = this.state;

    if (!visible || !y || y > 320 - 56) {
      return null;
    }

    const divStyle = this.state.visible ? {
      left: x,
    } : null;

    return (
      <div
        className={styles.root}
        style={divStyle}
      />
    );
  }
}

export default HighlightBar;