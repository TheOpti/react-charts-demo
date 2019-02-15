import React, { Component } from 'react';

import DygraphsChart from '../../components/DygraphsChart';


class Dygraphs extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-4">Dygraphs</h1>
        <p className="lead">
          <a href="http://dygraphs.com/">dygraphs.js</a> - dygraphs is a fast, flexible open source JavaScript charting library.
        </p>
        <hr className="my-4" />
        <DygraphsChart />
      </div>
    );
  }
}

export default Dygraphs;