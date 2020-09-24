const button = require('./button.html'); // At this moment I've not managed to make import work with jest
// import button from './button.html';

const packageName = './button.html';
const componentSubtitle = `import button from '${packageName}/lib/elements/buttons';`;

export default {
  title: 'Addons/Source loader',
  parameters: {
    componentSubtitle,
  },
};

export const Button = () => button;
Button.story = {
  parameters: {
    storySource: {
      source: button,
    },
  },
};

export const SimpleStory = () =>
  `<p>
      <strong>
        This is a fragment of HTML
      </strong>
    </p>`;
SimpleStory.story = {
  name: 'Very simple story',
};
