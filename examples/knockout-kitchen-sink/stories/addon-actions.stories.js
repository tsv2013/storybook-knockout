import { withActions, decorate } from '@storybook/addon-actions';

const pickTarget = decorate([(args) => [args[0].target]]);

const button = () => `<button type="button">Hello World</button>`;

export default {
  title: 'Addons/Actions',
  decorators: [withActions],
};

export const Story1 = button;
Story1.story = { name: 'Hello World' };
Story1.parameters = {
  actions: ['click'],
};

export const Story2 = button;
Story2.story = { name: 'Multiple actions' };
Story2.parameters = {
  actions: ['click', 'contextmenu'],
};

export const Story3 = button;
Story3.story = { name: 'Multiple actions + config' };
Story3.parameters = {
  actions: ['click', 'contextmenu', { clearOnStoryChange: false }],
};

export const Story4 = button;
Story4.story = { name: 'Multiple actions, object' };
Story4.parameters = {
  actions: [{ click: 'clicked', contextmenu: 'right clicked' }],
};

// TODO: reanimate
export const Story5 = () => `
        <div>
          Clicks on this button will be logged: <button class="btn" type="button">Button</button>
        </div>
      `;
Story5.story = { name: 'Multiple actions, selector' };
Story5.parameters = {
  actions: [{ 'click .btn': 'clicked', contextmenu: 'right clicked' }],
};

export const Story6 = button;
Story6.story = { name: 'Multiple actions, object + config' };
Story6.parameters = {
  actions: [{ click: 'clicked', contextmenu: 'right clicked' }, { clearOnStoryChange: false }],
};

export const Story7 = () => pickTarget(button);
Story7.story = { name: 'Decorated actions' }; // TODO: reanimate
Story7.parameters = {
  actions: ['click', 'contextmenu'],
};

export const Story8 = () => pickTarget(button);
Story8.story = { name: 'Decorated actions + config' }; // TODO: reanimate
Story8.parameters = {
  actions: ['click', 'contextmenu', { clearOnStoryChange: false }],
};
