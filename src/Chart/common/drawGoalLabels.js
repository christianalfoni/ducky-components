import { select, selectAll } from 'd3-selection';
import { transition } from 'd3-transition';

import styles from './drawGoalLabels.css';
import paths from './../svgpaths';

export default (labelGroup, goals, yourScore, yScale, speed, onClick) => {

  const labels = labelGroup.selectAll('g').data(goals, g => g);

  const eventListenerCO2 = (d, i) => {
    if (d <= yourScore) {
      onClick({co2: d});
    }
  }

  //Enter
  const enteredLabels = labels.enter().append('g');

  enteredLabels.append('text')
    .text((data) => Number(data).toLocaleString())
    .attr('x', -130)
    .attr('y', data => yScale(data) - 5)
    .attr('class', data => (data <= yourScore) ? styles.progressedGoalsText : styles.toBeProgressedGoalsText)
    .attr('font-size', '10px')
    .on('click', eventListenerCO2);

  enteredLabels.append('svg')
    .attr('viewBox', "0 0 768 768")
    .attr('width', 40)
    .attr('height', 16)
    .attr('y', data => yScale(data) - 17)
    .attr('x', -90)
    .append('path')
      .attr('d', data => (data <= yourScore) ? paths.check : paths.leaf)
      .attr('class', data => (data <= yourScore) ? styles.progressedGoalsCheck : styles.toBeProgressedGoalsLeaf);

  const mergedSelection = enteredLabels.merge(labels);

  mergedSelection.select('svg').transition().delay(speed).duration(speed)
    .attr('y', data => yScale(data) -17)
    .attr('x', -40);

  mergedSelection.select('svg').select('path')
    .attr('d', data => (data <= yourScore) ? paths.check : paths.leaf)
    .attr('class', data => (data <= yourScore) ? styles.progressedGoalsCheck : styles.toBeProgressedGoalsLeaf);

  mergedSelection.select('text').transition().delay(speed).duration(speed)
    .text((data) => Number(data).toLocaleString())
    .attr('y', data => yScale(data) - 5)
    .attr('x', -10);

  mergedSelection.select('text')
    .attr('class', data => (data <= yourScore) ? styles.progressedGoalsText : styles.toBeProgressedGoalsText)
    .on('click', eventListenerCO2);

  //Exit
  const exit = labels.exit();
  exit.select('svg').transition().delay(speed).duration(speed)
    .attr('x', -90);

  exit.select('text').transition().delay(speed).duration(speed)
    .attr('x', -130);

  exit.remove();
};
