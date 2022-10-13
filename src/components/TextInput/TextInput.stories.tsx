/* eslint-disable react/jsx-key */
import { Meta, StoryObj } from '@storybook/react';
import { TextInput, TextInputRootProps } from '.';
import { EnvelopeSimple } from 'phosphor-react';

export default {
  title: 'Components/TextInput',
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.Icon>
        <EnvelopeSimple />
      </TextInput.Icon>,
      <TextInput.Input placeholder="Type your e-mail address" type="email" />,
    ],
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<TextInputRootProps>;

export const Default: StoryObj<TextInputRootProps> = {};

export const WithoutIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: (
      <TextInput.Input placeholder="Type your e-mail address" type="email" />
    ),
  },
};
