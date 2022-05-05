import * as React from 'react';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';

export interface RadioProps {
  label: string;
}

export const CombinedRadio = ({ label, ...rest }: RadioProps) => {
  return <FormControlLabel control={<Radio {...rest} />} label={label} />;
};
