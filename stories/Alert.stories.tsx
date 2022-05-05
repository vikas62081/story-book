import React from 'react';
import { Meta, Story } from '@storybook/react';
import { AlertProps, CombinedAlert } from '../src';

const meta: Meta = {
  title: 'Components/Molecules/Alert',
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
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/wDnN6FrtMTtJ6W0IworORn/myCOI-Design-System?node-id=580%3A16682',
    },
  },
};

export default meta;

const Template: Story<AlertProps> = (args) => <CombinedAlert {...args} />;

export const Default = Template.bind({});
export const Disabled = Template.bind({});

Default.args = {
  title: 'Notification title',
  description:
    'Notification message: Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type',
  severity: 'error',
  onClose: () => {},
};
Disabled.args = {
  title: 'Notification title',
  severity: 'success',
  onClose: () => {},
};
