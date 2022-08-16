import React, {useEffect, useState} from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ToastNoti from '../components/Home/Toast/ToatNoti';
import Navbar from "../components/Login/Navbar/Navbar";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Button, Typography} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import {useCookies} from "react-cookie";
import {userLogin} from "../services/authServices";
const Login = () => {
    const navigate = useNavigate();
    const [cookie, setCookie] = useCookies(['token']);
    const [formState, setFormState] = useState({
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
        toast("Logging in!");

        userLogin(formState)
            .then(res => {
                console.log(res.data);
                toast("Logging in!");
                setInterval(() => {
                    navigate('/dashboard');
                }, 1000);
            }).catch(err => {
                toast.error(err.response.data.message);
            });

    }
    useEffect(() => {
        console.log(cookie)
        //Check if there is a cookie otherwise stay on the login page and show a toast message
        toast("Login required!");
    }, [])
    return (
    <div>
        <div>
            <ToastNoti HideProgressBar={false} />
        </div>
        <div>
            <Navbar/>
        </div>
        <div className={"bg-gradient-to-r from-sky-500 to-indigo-500 flex h-screen justify-center items-center shadow-2xl"}>
            <div className={"box-border h-auto w-72 p-4 bg-slate-200 drop-shadow-2xl rounded-lg"}>
                <div className={"text-center"}>
                    <Typography variant="h6" gutterBottom>Login</Typography>
                </div>

                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 2, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="outlined-basic" name="email" label="Email" variant="outlined" onChange={onChange} />
                    <TextField id="outlined-basic" name="password" label="Password" variant="outlined" onChange={onChange}/>
                    <div>
                        <Button onClick={onSubmit} variant="contained" color="primary" size="large" fullWidth>Login</Button>
                    </div>

                </Box>
            </div>
        </div>

    </div>
);
}
export default Login;