import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ToggleSwitch, ToggleSwitchProps } from '../src';

const meta: Meta = {
  title: 'Input/Toggle Switch',
  component: ToggleSwitch,
  argTypes: { onClick: { action: 'clicked' } },
};

export default meta;

const Template: Story<ToggleSwitchProps> = (args) => <ToggleSwitch {...args} />;

export const Default = Template.bind({});
export const Disabled = Template.bind({});
Default.args = {
  checked: true,
  color: 'primary',
  label: 'Toggle',
};

Disabled.args = {
  disabled: true,
  label: 'Toggle',
};
