import { makeDecorator } from '@storybook/addons';

export const withKo = makeDecorator({
  name: 'withKo',
  parameterName: 'knockout',
  wrapper: (storyFn, context, { parameters }) => {
    // Do something with `parameters`, which are set via { something: ... }

    // Note you may alter the story output if you like.
    // Although generally that's not advised.

    let story = storyFn(context);

    let knockoutInstance = !!parameters && parameters.instance;
    if (!knockoutInstance) {
      return story;
    }

    let knockoutStory = {
      ko: knockoutInstance,
    };
    if (typeof story === 'string' || story instanceof Node) {
      knockoutStory.template = story;
    } else {
      knockoutStory.template = story.template;
      knockoutStory.context = story.context;
      if (!!story.ko) {
        knockoutStory.ko = story.ko;
      }
    }
    return knockoutStory;
  },
});
