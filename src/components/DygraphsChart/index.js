import React, { Component } from 'react';
import generateData from '../../utils/generateData';
import Dygraph from './Dygraph';
import Tooltip from './Tooltip';

import './styles.css';


class DygraphsChart extends Component {


  onChartHighlight(seriesMetaData, seriesPointData, event, x, points = []) {
    /*
    \\
    function(event, x, points, row, seriesName) {
          console.log('highlight callback ', event, x, points, row, seriesName);
        }
     */
  }

  render() {
    const graphStyle = {
      width: '100%',
      overflow: 'hidden',
    };

    return (
      <div className="dygraphs-chart">
        <Dygraph
          data={generateData()}
          style={graphStyle}
        />
        <Tooltip

        />
      </div>
    );
  }
}

export default DygraphsChart;