import { document, Node } from 'global';

function getRenderedTree(story: { render: () => any; parameters: any }) {
  const component = story.render();
  const ko = story.parameters.knockout.instance;

  if (component instanceof Node) {
    ko.applyBindings({}, component);
    ko.tasks.runEarly();
    return component;
  }

  const section: HTMLElement = document.createElement('section');

  if (typeof component === 'string') {
    section.innerHTML = component;
    ko.applyBindings({}, section);
  } else {
    section.innerHTML = component.template;
    ko.applyBindings(component.context || {}, section);
  }

  ko.tasks.runEarly();
  if (section.childElementCount > 1) {
    return section;
  }
  return section.firstChild;
}

export default getRenderedTree;
