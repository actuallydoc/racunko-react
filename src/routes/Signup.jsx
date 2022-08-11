import React, {useEffect, useState} from 'react';
import Navbar from "../components/Signup/Navbar/Navbar";
import {toast} from "react-toastify";
import ToastNoti from "../components/Home/Toast/ToatNoti";
import {Button, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {useNavigate} from "react-router-dom";
import {useCookies} from "react-cookie";
import axios from "axios";
const Signup = () => {
    const navigate = useNavigate();

    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: ''

    });

    const onChange = (e) => {
        console.log(e.target.value);
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    }
    const onSubmit = (e) => {
        console.log(formState);
        e.preventDefault();

        const res = axios.post('http://localhost:5000/user/create', formState)
            .then(res => {
                toast("Signed up!");
                toast("Login in!");
                navigate('/login');
            }).catch(err => {
                //TODO Depends on the error message, show a toast message to the user like  "Invalid credentials!" or "Email already exists!"
                console.log(err);
                toast.error("Invalid credentials!");
            });
        setInterval(() => {

            // navigate("/dashboard")
        },2000);
    }
    return (
        <div>
            <div>
                <ToastNoti HideProgressBar={false} />
            </div>
            <header>
                <Navbar/>
            </header>
            <div className={"bg-gradient-to-r from-sky-500 to-indigo-500 flex h-screen justify-center items-center shadow-2xl"}>
                <div className={"box-border h-auto w-72 p-4 bg-slate-200 drop-shadow-2xl rounded-lg"}>
                    <div className={"text-center"}>
                        <Typography variant="h6" gutterBottom>Signup</Typography>
                    </div>

                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 2, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="outlined-basic" name="username" label="Username" variant="outlined" onChange={onChange} />
                        <TextField id="outlined-basic" name="email" label="Email" variant="outlined" onChange={onChange} />
                        <TextField id="outlined-basic" name="password" label="Password" variant="outlined" onChange={onChange}/>
                        <div>
                            <Button onClick={onSubmit} variant="contained" color="primary" size="large" fullWidth>Login</Button>
                        </div>

                    </Box>
                </div>
            </div>
        </div>
        )

};

export default Signup;