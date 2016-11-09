import styles from './drawGoalLabels.css';
import paths from './../svgpaths';

export default (labelGroup, goals, yourScore, yScale, speed) => {

  const labels = labelGroup.selectAll('g').data(goals, g => g);

  //Enter
  const enteredLabels = labels.enter().append('g');

  enteredLabels.append('text')
    .text((data) => Number(data).toLocaleString())
    .attr('x', -130)
    .attr('y', data => yScale(data) - 5)
    .attr('class', data => (data <= yourScore) ? styles.progressedGoalsText : styles.toBeProgressedGoalsText)
    .attr('font-size', '10px');

  enteredLabels.append('svg')
    .attr('viewBox', "0 0 768 768")
    .attr('width', 40)
    .attr('height', 16)
    .attr('y', data => yScale(data) - 17)
    .attr('x', -90)
    .append('path')
      .attr('d', data => (data <= yourScore) ? paths.check : paths.leaf)
      .attr('class', data => (data <= yourScore) ? styles.progressedGoalsCheck : styles.toBeProgressedGoalsLeaf);

  //Update
  labels.select('svg').transition().delay(speed).duration(speed)
    .attr('y', data => yScale(data) -17)
    .attr('x', -40);

  labels.select('svg').select('path')
    .attr('d', data => (data <= yourScore) ? paths.check : paths.leaf)
    .attr('class', data => (data <= yourScore) ? styles.progressedGoalsCheck : styles.toBeProgressedGoalsLeaf);

  labels.select('text').transition().delay(speed).duration(speed)
    .text((data) => Number(data).toLocaleString())
    .attr('y', data => yScale(data) - 5)
    .attr('x', -10);

  labels.select('text')
    .attr('class', data => (data <= yourScore) ? styles.progressedGoalsText : styles.toBeProgressedGoalsText);

  //Exit
  const exit = labels.exit();
  exit.select('svg').transition().delay(speed).duration(speed)
    .attr('x', -90);

  exit.select('text').transition().delay(speed).duration(speed)
    .attr('x', -130);
};
