import {stories, oneOf, json, func} from './../../duckyStories';
import BarChart from './index';

stories(module, BarChart, [
  'https://github.com/DuckyTeam/ducky-web/issues/1662'
], {
  data:json([{
    id: 12,
    value: 0,
    label: "Strek1",
  }, {
    id: 13,
    value: 0,
    label: "De nye Gitarkameratene",
  }, {
    id: 14,
    value: 0,
    label: "Strek3"
  }, {
    id: 15,
    value: 0,
    label: "Strek4"
  }]),
  goals: json([200, 400, 600, 800]),
  graphID: json(1),
  height: oneOf("300px", "400px"),
  memberOf: json(12),
  selectedId: json(12),
  onClick: func(),
  isMobile: json(true)
}, 'Chart/BarChart');
