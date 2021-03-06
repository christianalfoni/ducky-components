import {stories, bool, oneOf, func, className} from '../duckyStories';
import ActionButton from './index';

stories(module, ActionButton, [
  'https://github.com/DuckyTeam/ducky-web/issues/624',
  'https://github.com/DuckyTeam/ducky-web/issues/626'
], {
  className: className(),
  disabled: bool(true),
  icon: oneOf('icon-leaf'),
  onClick: func(),
  size: oneOf('standard', 'main')
});
