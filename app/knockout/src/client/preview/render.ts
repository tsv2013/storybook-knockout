import { document, Node } from 'global';
import dedent from 'ts-dedent';
import { RenderMainArgs } from './types';

import * as ko from 'knockout';

const rootElement = document.getElementById('root');

export default function renderMain({
  storyFn,
  selectedKind,
  selectedStory,
  showMain,
  showError,
  forceRender,
}: RenderMainArgs) {
  const element = storyFn();

  showMain();

  ko.cleanNode(rootElement);
  rootElement.knockout = ko;

  if (typeof element === 'string') {
    rootElement.innerHTML = element;
    ko.applyBindings({}, rootElement);
  } else if (element instanceof Node) {
    // Don't re-mount the element if it didn't change and neither did the story
    if (rootElement.firstChild === element && forceRender === true) {
      return;
    }

    rootElement.innerHTML = '';
    rootElement.appendChild(element);
    ko.applyBindings({}, rootElement);
  } else {
    showError({
      title: `Expecting an HTML snippet or DOM node from the story: "${selectedStory}" of "${selectedKind}".`,
      description: dedent`
        Did you forget to return the HTML snippet from the story?
        Use "() => <your snippet or node>" or when defining the story.
      `,
    });
  }
}
