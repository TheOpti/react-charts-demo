import React, { Component } from 'react';
import Rx from 'rx';
import generateData from '../../utils/generateData';
import Dygraph from './Dygraph';
import Tooltip from './Tooltip';
import HighlightBar from './HighlightBar';
import SeriesVisibilityPanel from './SeriesVisibilityPanel';

import './styles.css';


class DygraphsChart extends Component {
  constructor(props) {
    super(props);

    this.chartRef = React.createRef();
    this.mouseCoordsStream = new Rx.Subject();

    this.state = {
      seriesVisibility: [
        {
          id: 'max',
          name: 'Max values',
          isVisible: true,
        },
        {
          id: 'avg',
          name: 'Average',
          isVisible: true,
        },
        {
          id: 'min',
          name: 'Min values',
          isVisible: true,
        },
      ]
    }
  }

  mouseEnter = (event) => this.setMouseCoords(event, true);

  mouseLeave = (event) => this.setMouseCoords(event, false);

  setMouseCoords = (event, isVisible, points = []) => {
    this.mouseCoordsStream.onNext({
      x: event.offsetX,
      y: event.offsetY,
      seriesValues: points,
      visible: isVisible,
    });
  };

  onChartHighlight = (event, x, points) => {
    if (this.mouseCoordsStream) {
      this.setMouseCoords(event, true, points);
    }
  };

  toggleSeriesVisibility = (event) => {
    const { id } = event.currentTarget;
    const { seriesVisibility } = this.state;

    const updatedSeriesVisibility = seriesVisibility.map((elem) => {
      if (elem.id === id) {
        elem.isVisible = !elem.isVisible
      }

      return elem;
    });

    this.setState({
      seriesVisibility: updatedSeriesVisibility,
    })
  };

  getSeriesVisibility() {
    return this.state.seriesVisibility
      .map((series) => {
        return series.isVisible;
      })
  }

  render() {
    const {
      seriesVisibility
    } = this.state;

    const graphStyle = {
      width: '100%',
      maxWidth: '1110px',
      overflow: 'hidden',
    };

    console.log('seriesVisibility ', seriesVisibility);

    const testVisibility = [...this.getSeriesVisibility(), true];

    return (
      <React.Fragment>
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
            visibility={testVisibility}
          />
          <Tooltip
            mouseCoordsStream={this.mouseCoordsStream}
            chartElem={this.chartRef.current}
          />
          <HighlightBar
            mouseCoordsStream={this.mouseCoordsStream}
          />
        </div>
        <SeriesVisibilityPanel
          seriesVisibility={seriesVisibility}
          toggleSeriesVisibility={this.toggleSeriesVisibility}
        />
      </React.Fragment>
    );
  }
}

export default DygraphsChart;