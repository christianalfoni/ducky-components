import {stories, oneOf, json, func, bool} from './../../duckyStories';
import BarChart from './index';

stories(module, BarChart, [
  'https://github.com/DuckyTeam/ducky-web/issues/1662'
], {
  data:json([{
    id: 12,
    value: 140,
    label: "Strek1",
  }, {
    id: 13,
    value: 1005,
    label: "De nye Gitarkameratene",
  }, {
    id: 14,
    value: 320,
    label: "Strek3"
  }, {
    id: 15,
    value: 520,
    label: "Strek4"
  }]),
  goals: json([10, 25, 50, 100, 200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000, 5000, 10000]),
  graphID: json(1),
  height: oneOf("300px", "400px"),
  memberOf: json(12),
  selectedId: json(12),
  onClick: func(),
  isMobile: bool(false)
}, 'Chart/BarChart');
