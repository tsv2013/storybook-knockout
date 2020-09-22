import global from 'global';
import configure from '../configure';
import { Loader } from '../Loader';
import { StoryshotsOptions } from '../../api/StoryshotsOptions';

function test(options: StoryshotsOptions): boolean {
  return options.framework === 'knockout';
}

function load(options: StoryshotsOptions) {
  global.STORYBOOK_ENV = 'knockout';

  const storybook = jest.requireActual('@storybook/knockout');

  configure({ ...options, storybook });

  return {
    framework: 'knockout' as const,
    renderTree: jest.requireActual('./renderTree').default,
    renderShallowTree: () => {
      throw new Error('Shallow renderer is not supported for KnockoutJS');
    },
    storybook,
  };
}

const knockoutLoader: Loader = {
  load,
  test,
};

export default knockoutLoader;
