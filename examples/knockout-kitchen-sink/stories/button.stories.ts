import { action } from '@storybook/addon-actions';
import { useEffect } from '@storybook/client-api';

import { ButtonViewModel } from '../components/button';

const template = require('./sbt-button.html'); // At this moment I've not managed to make import work with jest
// import template from './sbt-button.html';

export default {
  title: 'Demo',
  kocomponents: [ButtonViewModel],
};

export const ButtonComponent = () => {
  return {
    template: '<sbt-button params="action: action"></sbt-button>',
    context: {
      action: function () {
        alert('!');
      },
    },
  };
};

export const KnockoutBindings = () => {
  return template;
};

export const Heading = () => '<h1>Hello World</h1>';
export const Headings = () =>
  '<h1>Hello World</h1><h2>Hello World</h2><h3>Hello World</h3><h4>Hello World</h4>';

export const Button = () => {
  const btn = document.createElement('button');
  btn.innerHTML = 'Hello Button';
  btn.addEventListener('click', action('Click'));
  return btn;
};

export const Effect = () => {
  useEffect(() => {
    document.getElementById('button').style.backgroundColor = 'yellow';
  });

  return '<button id="button">I should be yellow</button>';
};
