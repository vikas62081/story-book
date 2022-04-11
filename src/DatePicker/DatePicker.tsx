import * as React from 'react';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

export const BasicDatePicker = () => {
  const [value, setValue] = React.useState<Date | null>(null);

  return <input type="date" />;
};
// <LocalizationProvider dateAdapter={AdapterDateFns}>
//   <DatePicker
//     label="Basic example"
//     value={value}
//     onChange={(newValue: any) => {
//       setValue(newValue);
//     }}
//     renderInput={(params: any) => <TextField {...params} />}
//   />
// </LocalizationProvider>
