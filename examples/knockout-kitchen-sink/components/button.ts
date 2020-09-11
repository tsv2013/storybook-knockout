import * as ko from 'knockout';

import './button.css';
import template from './button.html';
// console.log(template);

export class ButtonViewModel {
  title = ko.observable('Button');
  action = () => {
    alert('Button clicked');
  };
  css = ko.observable('sbt-button');
}

ko.components.register('sbt-button', {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      return new ButtonViewModel();
    },
  },
  template: template,
});
