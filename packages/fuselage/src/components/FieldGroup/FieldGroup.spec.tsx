import { composeStories } from '@storybook/react-webpack5';

import { render } from '../../testing';

import * as stories from './FieldGroup.stories';

const { Default } = composeStories(stories);

describe('[FieldGroup Component]', () => {
  it('renders without crashing', () => {
    render(<Default />);
  });
});
