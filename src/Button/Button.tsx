import React from 'react';
//import { theme } from '../theme';
//import { ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';

export interface ButtonProps {
  children: string;
}

export const ContainedButton = ({ children, ...rest }: ButtonProps) => {
  return <Button {...rest}>{children}</Button>;
};
