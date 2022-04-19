import React from 'react';
import { Meta, Story } from '@storybook/react';
import { BasicDateRangePicker } from '../src';

const meta: Meta = {
  title: 'Components/Date Range Picker',
  component: BasicDateRangePicker,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<any> = (args) => <BasicDateRangePicker {...args} />;

export const Default = Template.bind({});
// export const Disabled = Template.bind({});
// export const Secondary = Template.bind({});
Default.args = {
  children: 'Click Me',
  variant: 'contained',
  color: 'primary',
};
