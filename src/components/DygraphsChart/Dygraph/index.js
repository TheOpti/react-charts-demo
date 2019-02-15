import React, { Component } from 'react';
import Dygraph from 'dygraphs';


class DygraphsChart extends Component {
  constructor(props) {
    super(props);

    this.myRef = React.createRef();
  }

  componentDidMount() {
    const {
      onChartHighlight,
      visibility,
    } = this.props;

    this.dygraph = new Dygraph(
      this.myRef.current,
      this.props.data,
      {
        labels: [ 'x', 'A', 'B', 'C', 'X'],
        highlightCallback: onChartHighlight,
        showRangeSelector: true,
        strokeWidth: 1,
        showLabelsOnHighlight: false,
        visibility: visibility,
        colors: [
          '#00b7ff',
          '#0066cc',
          '#00b7ff',
          '#ce392b',
        ],
        series: {
          'B': {
            strokeWidth: 1.5,
            strokePattern: [6, 3],
          },
          'X': {
            strokeWidth: 3,
            strokePattern: [7, 2],
          }
        }
      },
    );
  }

  componentDidUpdate() {
    this.props.visibility.forEach((visibility, index) => {
      this.dygraph.setVisibility(index, visibility);
    });
  }

  getDygraph() {
    return this.dygraph;
  }

  render() {
    return (
      <div
        ref={this.myRef}
        style={this.props.style}
      />
    );
  }
}

export default DygraphsChart;