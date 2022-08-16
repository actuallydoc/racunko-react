import React ,{useState} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectStatus({status}) {
    const [value, setValue] = useState(status);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">Status</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={value}
                    onChange={handleChange}
                    label="Status"
                >
                    <MenuItem value={1}>Paid</MenuItem>
                    <MenuItem value={2}>Not paid</MenuItem>
                    <MenuItem value={3}>Refunded</MenuItem>
                    <MenuItem value={4}>Cancelled</MenuItem>
                </Select>
            </FormControl>

        </div>
    );
}