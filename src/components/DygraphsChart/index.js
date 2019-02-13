import React, { Component } from 'react';
import Rx from 'rx';
import generateData from '../../utils/generateData';
import Dygraph from './Dygraph';
import Tooltip from './Tooltip';

import './styles.css';


class DygraphsChart extends Component {
  constructor(props) {
    super(props);

    this.chartRef = React.createRef();
    this.mouseCoordsStream = new Rx.Subject();
  }

  mouseEnter = (event) => this.setMouseCoords(event, true);

  mouseLeave = (event) => this.setMouseCoords(event, false);

  setMouseCoords = (event, isVisible) => {
    this.mouseCoordsStream.onNext({
      x: event.offsetX,
      y: event.offsetY,
      seriesValues: [],
      visible: isVisible,
    });
  };

  onChartHighlight = (event, x, points) => {
    if (this.mouseCoordsStream) {
      this.mouseCoordsStream.onNext({
        x: event.offsetX,
        y: event.offsetY,
        seriesValues: points,
        visible: true,
      });
    }
  };

  render() {
    const graphStyle = {
      width: '100%',
      maxWidth: '1110px',
      overflow: 'hidden',
    };

    return (
      <div
        className="dygraphs-chart"
        onMouseEnter={(event) => this.mouseEnter(event)}
        onMouseLeave={(event) => this.mouseLeave(event)}
        ref={this.chartRef}
      >
        <Dygraph
          data={generateData()}
          style={graphStyle}
          onChartHighlight={this.onChartHighlight}
        />
        <Tooltip
          mouseCoordsStream={this.mouseCoordsStream}
          chartElem={this.chartRef.current}
        />
      </div>
    );
  }
}

export default DygraphsChart;