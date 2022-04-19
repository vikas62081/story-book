import React from 'react';
import { DateRangePicker } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
// import './custom-theme.less';
export const BasicDateRangePicker = ({
  oneTap = true,
  block = true,
  ...rest
}) => {
  return <DateRangePicker {...rest} />;
};
