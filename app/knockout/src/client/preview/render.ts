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
  const storyContent = storyFn();
  showMain();

  if (typeof storyContent === 'string') {
    ko.cleanNode(rootElement);
    rootElement.innerHTML = storyContent;
    ko.applyBindings({}, rootElement);
  } else if (storyContent instanceof Node) {
    // Don't re-mount the element if it didn't change and neither did the story
    if (rootElement.firstChild === storyContent && forceRender === true) {
      return;
    }

    ko.cleanNode(rootElement);
    rootElement.innerHTML = '';
    rootElement.appendChild(storyContent);
    ko.applyBindings({}, rootElement);
  } else if (
    'template' in storyContent &&
    typeof storyContent.ko === 'object' &&
    (typeof storyContent.template === 'string' || storyContent.template instanceof Node)
  ) {
    storyContent.ko.cleanNode(rootElement);
    if (typeof storyContent.template === 'string') {
      rootElement.innerHTML = storyContent.template;
    } else {
      rootElement.innerHTML = '';
      rootElement.appendChild(storyContent);
    }
    storyContent.ko.applyBindings(storyContent.context || {}, rootElement);
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
