import React from 'react';
import Item from "./Item";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {Button} from "@mui/material";

const UserModal = () => {
    return (
        <div>
            <div>
                <Item/>
            </div>

            <Box
                component="modal"
                sx={{
                    '& > :not(style)': { m: 2, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="outlined-basic" name="email" label="Email" variant="outlined" onChange={"onChangae"} />
                <TextField id="outlined-basic" name="password" label="Password" variant="outlined" onChange={""}/>
                <div>
                    <Button onClick={""} variant="contained" color="primary" size="large" fullWidth>Login</Button>
                </div>

            </Box>
        </div>
    );
};

export default UserModal;