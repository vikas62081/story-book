import React from 'react';
import { Meta, Story } from '@storybook/react';
import { AlertProps, CombinedAlert } from '../src';

const meta: Meta = {
  title: 'Notifications/Alert',
  component: CombinedAlert,

  argTypes: {
    onClick: { action: 'clicked' },
    title: {
      control: {
        type: 'text',
      },
    },
    description: {
      control: {
        type: 'text',
      },
    },
    severity: {
      control: {
        type: 'select',
        options: ['success', 'error', 'warning', 'info'],
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<AlertProps> = (args) => <CombinedAlert {...args} />;

export const Default = Template.bind({});
export const Disabled = Template.bind({});
// export const Secondary = Template.bind({});
Default.args = {
  title: 'Notification title',
  description:
    'Notification message: Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type',
  severity: 'error',
};
Disabled.args = {
  title: 'Notification title',
  severity: 'success',
};
