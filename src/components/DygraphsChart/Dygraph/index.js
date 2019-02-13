import React, { Component } from 'react';
import Dygraph from 'dygraphs';


class DygraphsChart extends Component {
  constructor(props) {
    super(props);

    this.myRef = React.createRef();
  }

  componentDidMount() {
    const g = new Dygraph(
      this.myRef.current,
      this.props.data,
      {
        labels: [ 'x', 'A', 'B', 'C', 'X'],
        highlightCallback: this.props.onChartHighlight,
        showRangeSelector: true,
        strokeWidth: 1,
        showLabelsOnHighlight: false,
      }
    );
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