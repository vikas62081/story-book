import React, { useState } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export interface ToggleSwitchProps {
  checked: boolean;
  color: any;
  label: string;
}

export const ToggleSwitch = ({
  checked,
  color,
  label,
  ...props
}: ToggleSwitchProps) => {
  const [value, setValue] = useState(checked);

  return (
    <FormControlLabel
      control={
        <Switch
          {...props}
          checked={value}
          onChange={() => setValue(!value)}
          color={color}
        />
      }
      label={label}
    />
  );
};
