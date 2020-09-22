import React from 'react';

import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';

export default {
  title: 'Welcome',

  parameters: {
    component: Welcome,
  },
};

export const toStorybook = () => <Welcome showApp={linkTo('Button')} />;

toStorybook.storyName = 'to Storybook';
