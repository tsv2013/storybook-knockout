import { document, Node } from 'global';

function getRenderedTree(story: { render: () => any }) {
  const component = story.render();

  if (component instanceof Node) {
    story.parameters.knockout.instance.applyBindings({}, component);
    story.parameters.knockout.instance.tasks.runEarly();
    return component;
  }

  const section: HTMLElement = document.createElement('section');

  if(typeof component === "string") {
    section.innerHTML = component;
    story.parameters.knockout.instance.applyBindings({}, section);
    story.parameters.knockout.instance.tasks.runEarly();
    return section;
  } else {
    section.innerHTML = component.template;
    story.parameters.knockout.instance.applyBindings(component.context || {}, section);
    story.parameters.knockout.instance.tasks.runEarly();
    return section;
    // if (section.childElementCount > 1) {
    // return section;
    // }
  }

  return section.firstChild;

}

export default getRenderedTree;
