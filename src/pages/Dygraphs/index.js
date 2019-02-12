import React, { Component } from 'react';

import DygraphsChart from '../../components/DygraphsChart';


class Dygraphs extends Component {
  render() {
    return (
      <div className="dygraphs">
        <h1>
          Dygraphs
        </h1>
        <div>
          <DygraphsChart />
        </div>
      </div>
    );
  }
}

export default Dygraphs;