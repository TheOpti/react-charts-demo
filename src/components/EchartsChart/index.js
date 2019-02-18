import React, { Component } from 'react';
import echarts from 'echarts';

import generateEchartsData from '../../utils/generateEchartsData';


const data = generateEchartsData();

class EchartsChart extends Component {
  constructor(props) {
    super(props);

    this.myRef = React.createRef();
  }

  componentDidMount() {
    this.echart = echarts.init(this.myRef.current);

    // specify chart configuration item and data
    const option = {
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        data: data.series.map(series => series.name),
      },
      axisPointer: {
        link: {
          xAxisIndex: 'all'
        }
      },
      dataZoom: {
        show: true,
        realtime: true,
      },
      grid: {
        left: 50,
        right: 50,
        bottom: 75
      },
      xAxis: {
        type: 'time',
        data: data.xValues,
        splitLine: {
          show: false
        }
      },
      yAxis: {},
      series: data.series
    };

    // use configuration item and data specified to show chart
    this.echart.setOption(option);

    this.echart.resize();

    setTimeout(() => {
      this.echart.resize();
    }, 50);

    window.addEventListener('resize', this.resizeEchart);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeEchart);
  }

  resizeEchart = () => {
    if (this.echart) {
      this.echart.resize();
    }
  };

  render() {
    const divStyles = {
      width: '100%',
      height: '320px',
      maxWidth: '1110px'
    };

    return (
      <div
        ref={this.myRef}
        style={divStyles}
      />
    );
  }
}

export default EchartsChart;
