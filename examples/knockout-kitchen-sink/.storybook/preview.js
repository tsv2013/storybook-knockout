import { addParameters, addDecorator } from '@storybook/client-api';
import { withA11y } from '@storybook/addon-a11y';
import { withKo } from './addon-knockout/register';

import * as ko from 'knockout';

addDecorator(withA11y);
addDecorator(withKo);

addParameters({
  a11y: {
    config: {},
    options: {
      checks: { 'color-contrast': { options: { noScroll: true } } },
      restoreScroll: true,
    },
  },
  knockout: {
    instance: ko,
  },
  options: {
    showRoots: true,
  },
  docs: {
    iframeHeight: '200px',
  },
});
