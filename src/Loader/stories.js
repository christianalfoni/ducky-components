import {stories, className, oneOf, bool, string} from '../duckyStories';
import Loader from './index';

stories(module, Loader, [
  'https://github.com/DuckyTeam/ducky-web/issues/1093'
], {
  children: string('Component'),
  className: className(),
  hide: bool(),
  size: oneOf('small', 'standard', 'large1')
});
