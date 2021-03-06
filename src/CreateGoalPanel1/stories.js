import {bool, stories, func, string, className} from '../duckyStories';
import CreateGoalPanel1 from './index';

stories(module, CreateGoalPanel1, [
  'https://github.com/DuckyTeam/ducky-web/issues/1458'
], {
  className: className(),
  children: string('Bygg en vane eller fullfør prestasjoner iløpet av en fastsatt periode.'),
  title: string('Sett nytt personlig mål'),
  onClick: func(),
  inactive: bool(),
  onCancel: func(),
  text: string('AVBRYT')
});
