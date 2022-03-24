import React from 'react';
//import { theme } from '../theme';
import { AlertTitle, Alert } from '@mui/material';
import { Link } from 'react-router-dom';

export interface AlertProps {
  title: string;
  description: string;
}

export const CombinedAlert = ({ title, description, ...props }: AlertProps) => {
  return (
    <>
      {description ? (
        <Alert {...props} onClose={() => {}}>
          <AlertTitle>{title}</AlertTitle>
          {description + ' '}
          <Link color="primary" to="/">
            <i>Click here</i>
          </Link>
        </Alert>
      ) : (
        <Alert {...props} onClose={() => {}}>
          {title}
        </Alert>
      )}
    </>
  );
};
