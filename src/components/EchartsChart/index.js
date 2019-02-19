import React, { Component } from 'react';
import generateEchartsData from '../../utils/generateEchartsData';
import SeriesVisibilityPanel from '../SeriesVisibilityPanel';
import Echart from './Echart';

const data = generateEchartsData();


class EchartsChart extends Component {
  constructor(props) {
    super(props);

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

  render() {
    const { seriesVisibility } = this.state;

    return (
      <React.Fragment>
        <Echart
          data={data}
          seriesVisibility={seriesVisibility}
        />
        <SeriesVisibilityPanel
          seriesVisibility={seriesVisibility}
          toggleSeriesVisibility={this.toggleSeriesVisibility}
        />
      </React.Fragment>
    );
  }
}

export default EchartsChart;
