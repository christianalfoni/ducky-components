import {stories, func, oneOf, number, string} from '../duckyStories';
import PopoverCalendar from './index';

stories(module, PopoverCalendar, [
  'https://github.com/DuckyTeam/ducky-web/issues/1293'
], {
  // color: string('green'),
  onClick: func(),
  // style: json({color: 'blue'}), month: oneOf('Januar', 'Februar', 'Mars', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Desember'),
  month: oneOf(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12),
  language: string('is'),
  year: number('2309')

});
