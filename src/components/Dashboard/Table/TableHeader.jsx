import React, {useState} from 'react';
import {TextField, Button} from "@mui/material";
import Datepicker from './Datepicker';
import {LocalizationProvider} from "@mui/x-date-pickers-pro";
import {AdapterDateFns } from '@mui/x-date-pickers-pro/AdapterDateFns';
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
const TableHeader = () => {

    const [fromValue, setFromValue] = useState(new Date());
    const [fromDate , setFromDate] = useState(new Date());
    const [toDate , setToDate] = useState(new Date());
    const [toValue , setToValue] = useState(new Date());
    const handleClick = () => {
        handleChange()

    }
    const handleChange = () => {
        console.log("From: "+ fromDate.toLocaleDateString('de-DE'));
        console.log("To: "+ toDate.toLocaleDateString('de-DE'));
    }
    return (
        <div className={"flex space-x-5 pb-5"}>
            <div>
                <LocalizationProvider dateAdapter={AdapterDateFns }>
                    <DatePicker
                        label={"From"}
                        value={fromDate}
                        inputFormat="dd.MM.yyyy"
                        onChange={(newValue) => {
                            setFromValue(newValue);
                            setFromDate(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
            </div>
            <div>
                <LocalizationProvider dateAdapter={AdapterDateFns }>
                    <DatePicker
                        label={"To"}
                        value={toDate}
                        inputFormat="dd.MM.yyyy"
                        onChange={(newValue) => {
                            setToValue(newValue);
                            setToDate(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
            </div>
            <div className={"pt-2"}>
                <Button onClick={handleClick} variant="contained">Confirm</Button>
            </div>

        </div>
    );
};

export default TableHeader;