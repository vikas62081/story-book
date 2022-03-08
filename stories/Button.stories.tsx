import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ContainedButton, ButtonProps } from '../src';

const meta: Meta = {
  title: 'Input/Button',
  component: ContainedButton,
  argTypes: {
    onClick: { action: 'clicked' },
    title: {
      control: {
        type: 'text',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<ButtonProps> = (args) => <ContainedButton {...args} />;

export const Default = Template.bind({});
export const Disabled = Template.bind({});
export const Secondary = Template.bind({});
Default.args = {
  children: 'Click Me',
  variant: 'contained',
  color: 'primary',
};
Secondary.args = {
  children: 'Click Me',
  variant: 'contained',
  color: 'secondary',
};
Disabled.args = {
  children: 'Click Me',
  disabled: true,
};
