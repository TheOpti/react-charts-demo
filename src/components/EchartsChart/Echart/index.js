import React, { Component } from 'react';
import echarts from "echarts";


class Echart extends Component {
  constructor(props) {
    super(props);

    this.myRef = React.createRef();
  }

  componentDidMount() {
    const { data } = this.props;

    this.echart = echarts.init(this.myRef.current);

    console.log('ComponentDidMount, data.series: ', data.series);

    this.chartOptions = {
      tooltip: {
        trigger: 'axis',
      },
      dataZoom: {
        show: true,
        realtime: true,
      },
      grid: {
        left: 50,
        right: 50,
        bottom: 80,
        top: 5,
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

    this.echart.setOption(this.chartOptions);
    setTimeout(() => {
      this.echart.resize();
    }, 100);

    window.addEventListener('resize', this.resizeEchart);
  }

  componentDidUpdate() {
    const { data, seriesVisibility } = this.props;

    const visibleSeries = data.series.filter((data) => {
      if (seriesVisibility.find(elem => elem.id === data.name && elem.isVisible)) {
        return data;
      }
    });

    const newOptions = Object.assign({}, this.chartOptions, { series: visibleSeries });
    this.echart.setOption(newOptions, true);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeEchart);
  }

  resizeEchart = () => {
    if (this.echart) {
      this.echart.resize();
    }
  };

  getEchartInstance = () => {
    return this.echart;
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

export default Echart;