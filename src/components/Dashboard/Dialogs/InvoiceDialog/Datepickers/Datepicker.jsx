import React , {useState} from 'react';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { DateRangePicker } from '@mui/x-date-pickers-pro';
import { AdapterMoment } from '@mui/x-date-pickers-pro/AdapterMoment';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
const Datepicker = ({label, date}) => {

    const [value, setValue] = useState(date);
    return (
        <LocalizationProvider dateAdapter={AdapterMoment}>
            <DatePicker
                label={label}
                value={value}
                onChange={(newValue) => {
                    setValue(newValue);
                }}
                inputFormat="dd.MM.yyyy"
                disableMaskedInput
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>

    );
};

export default Datepicker;