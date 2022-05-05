import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export interface CheckboxProps {
  label: string;
}

export const ContainedCheckbox = ({ label, ...rest }: CheckboxProps) => {
  return <FormControlLabel control={<Checkbox {...rest} />} label={label} />;
};
