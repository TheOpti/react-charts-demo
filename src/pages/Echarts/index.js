import React, { Component } from 'react';

import EchartsChart from '../../components/EchartsChart';


class Echarts extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-4">Echarts</h1>
        <p className="lead">
          <a href="https://ecomfe.github.io/echarts-examples/public/index.html">Echarts</a> - A Declarative Framework
          for Rapid Construction of Web-based Visualization
        </p>
        <hr className="my-4" />
        <EchartsChart />
      </div>
    );
  }
}

export default Echarts;