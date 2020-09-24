import { withLinks } from '@storybook/addon-links';

import './welcome.css';

const welcome = require('./welcome.html'); // At this moment I've not managed to make import work with jest
// import welcome from './welcome.html';

export default {
  title: 'Welcome',
  decorators: [withLinks],
};

export const Welcome = () => welcome;
