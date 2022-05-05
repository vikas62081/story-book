import React from 'react';
import { Meta, Story } from '@storybook/react';
import { BasicDatePickerRange } from '../src';

const meta: Meta = {
  title: 'Components/Molecules/Date Range',
  component: BasicDatePickerRange,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<any> = (args) => <BasicDatePickerRange {...args} />;

export const Default = Template.bind({});

Default.args = {
  placeholder: 'Select Date',
};
