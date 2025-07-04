import type { Meta } from '@storybook/react-webpack5';
import type { ComponentType } from 'react';

import { BasicMessageTemplate } from '../helpers';

import { MessageReaction } from './MessageReaction';
import { MessageReactionAction } from './MessageReactionAction';
import { MessageReactions } from './MessageReactions';

export default {
  title: 'Message/MessageReactions',
  component: MessageReactions,
  subcomponents: {
    MessageReaction: MessageReaction as ComponentType<any>,
    MessageReactionAction: MessageReactionAction as ComponentType<any>,
  },
} satisfies Meta<typeof MessageReactions>;

const reactions = (
  <MessageReactions>
    <MessageReaction title='reaction 1' mine counter={1} />
    <MessageReaction title='reaction 2' counter={2} />
    <MessageReaction title='reaction 3' counter={3} />
    <MessageReactionAction title='action' />
  </MessageReactions>
);

export const Default = BasicMessageTemplate.bind({});
Default.args = {
  reactions,
};
