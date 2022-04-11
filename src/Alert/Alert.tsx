import React from 'react';
import { AlertTitle, Alert } from '@mui/material';
//import { Link } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import InfoIcon from '@mui/icons-material/Info';
import ErrorIcon from '@mui/icons-material/Error';
import WarningIcon from '@mui/icons-material/Warning';
export interface AlertProps {
  title: string;
  description?: string;
  open?: boolean;
}

const getCustomIcons = (
  iconSize: 'small' | 'inherit' | 'large' | 'medium' | undefined
) => {
  return {
    success: <CheckCircleIcon fontSize={iconSize} />,
    error: <ErrorIcon fontSize={iconSize} />,
    warning: <WarningIcon fontSize={iconSize} />,
    info: <InfoIcon fontSize={iconSize} />,
  };
};

export const CombinedAlert = ({
  title,
  description,
  open = true,
  ...props
}: AlertProps) => {
  return (
    <>
      {open ? (
        description ? (
          <Alert {...props} iconMapping={getCustomIcons('large')}>
            <AlertTitle>{title}</AlertTitle>
            {description + ' '}
            {/* <Link color="primary" to="/">
            <i>Click here</i>
          </Link> */}
          </Alert>
        ) : (
          <Alert {...props} iconMapping={getCustomIcons('inherit')}>
            {title}
          </Alert>
        )
      ) : null}
    </>
  );
};
