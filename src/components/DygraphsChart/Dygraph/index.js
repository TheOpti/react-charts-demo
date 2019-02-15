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

    this.graph = new Dygraph(
      this.myRef.current,
      this.props.data,
      {
        labels: [ 'x', 'A', 'B', 'C', 'X'],
        highlightCallback: onChartHighlight,
        showRangeSelector: true,
        strokeWidth: 1,
        showLabelsOnHighlight: false,
        visibility: visibility,
      },
    );
  }

  componentDidUpdate() {
    this.props.visibility.forEach((visibility, index) => {
      this.graph.setVisibility(index, visibility);
    });
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