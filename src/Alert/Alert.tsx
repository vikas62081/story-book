import React from 'react';
import { AlertTitle, Alert } from '@mui/material';
//import { Link } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import SmsFailedIcon from '@mui/icons-material/SmsFailed';
import ReportIcon from '@mui/icons-material/Report';
// import ReportProblemIcon from '@mui/icons-material/ReportProblem';
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
    error: <ReportIcon fontSize={iconSize} />,
    warning: <SmsFailedIcon fontSize={iconSize} />,
    info: <ErrorIcon fontSize={iconSize} />,
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
