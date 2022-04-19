import React from 'react';
import { DatePicker } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
// import './custom-theme.less';
export const BasicDatePicker = ({ oneTap = true, block = true, ...rest }) => {
  return <DatePicker oneTap={oneTap} block={block} ranges={[]} {...rest} />;
};
