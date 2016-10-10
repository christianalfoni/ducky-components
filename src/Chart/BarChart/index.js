import React from 'react';
import chart from './chart';
import Chart from './../index';

class BarChart extends React.Component {
  render() {
    return (
      <Chart
        chart={chart}
        {...this.props}
      />
    );
  }
}

BarChart.propTypes = {
  data: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.any,
    value: React.PropTypes.number,
    label: React.PropTypes.string
  })),
  goals: React.PropTypes.arrayOf(React.PropTypes.number),
  graphID: React.PropTypes.number.isRequired,
  height: React.PropTypes.string.isRequired,
  isMobile: React.PropTypes.bool,
  memberOf: React.PropTypes.number,
  onClick: React.PropTypes.func,
  selectedId: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string])
};

export default BarChart;
