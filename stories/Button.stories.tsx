import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ContainedButton, ButtonProps } from '../src';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import VerifiedUserRoundedIcon from '@mui/icons-material/VerifiedUserRounded';
import WarningIcon from '@mui/icons-material/Warning';
const meta: Meta = {
  title: 'Components/Atoms/Button',
  component: ContainedButton,
  argTypes: {
    onClick: { action: 'clicked' },
    variant: {
      control: {
        type: 'select',
        options: ['text', 'contained', 'outlined'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    color: {
      control: {
        type: 'select',
        options: [
          'primary',
          'secondary',
          'neutral',
          'ghost',
          'tertiary',
          'destructive',
        ],
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

export const primary = Template.bind({});
export const Secondary = Template.bind({});
export const Neutral = Template.bind({});

primary.args = {
  children: 'Click Me',
  variant: 'contained',
  color: 'primary',
  startIcon: <VerifiedUserOutlinedIcon />,
  endIcon: <VerifiedUserOutlinedIcon />,
};
Secondary.args = {
  children: 'Click Me',
  variant: 'contained',
  color: 'secondary',
  startIcon: <VerifiedUserRoundedIcon />,
  endIcon: <VerifiedUserRoundedIcon />,
};
Neutral.args = {
  children: 'Click Me',
  variant: 'contained',
  color: 'ff',
  startIcon: <VerifiedUserRoundedIcon />,
  endIcon: <VerifiedUserRoundedIcon />,
};
