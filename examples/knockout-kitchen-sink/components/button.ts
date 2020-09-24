import * as ko from 'knockout';

import './button.css';
const template = require('./button.html');
// At this moment I've not managed to make import work with jest
// import template from './button.html';
// const template = '<button data-bind="text: title, click: action, css: css"></button>';
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
