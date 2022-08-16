import React, {useEffect, useState} from 'react';

import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TextField from "@mui/material/TextField";
import {toast} from "react-toastify";
import CircularProgress from '@mui/material/CircularProgress';
import {updateUserProfile} from "../../../services/updateProfile";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const BootstrapDialogTitle = ({children}) => {


    return (
        <DialogTitle sx={{ m: 0, p: 2 }}>

            {children}


        </DialogTitle>
    );
};



export default function ProfileDialog({open ,base64, callback, username, email}) {
    const [opened, setOpened] = useState(open);
    const [uploaded, setUploaded] = useState(false);
    const [loading, setLoading] = useState(false);
    const [fileError, setFileError] = useState(false);
    const [progress , setProgress] = useState(0);
    const [removed, setRemoved] = useState(false);
    const [data, setData] = useState({
        username: '',
        email: '',
        picture: ''
    })
    const handleImage= (e) => {
        //Get data from the input field and convert it to a base64 string
        const reader = new FileReader();
        const file = e.target.files[0];
        reader.readAsDataURL(file);
        reader.onloadstart = (e) => {
            setLoading(true);
            toast('Uploading image...', {
                position: "top-right",
                autoClose: true,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                });

        }
        reader.onprogress = (e) => {
            setProgress(Math.round((e.loaded / e.total) * 100));
        }
        reader.onloadend = (e) => {
            base64 = reader.result;
            setData({
                ...data,
                picture: base64
            })
            setLoading(false);
            setUploaded(true);
            toast('Uploaded succesfully...', {
                position: "top-right",
                autoClose: true,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
            });
            toast('Click save...', {
                position: "top-right",
                autoClose: true,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
            });
        }
        setProgress(0);
    }
    const handleRemove = () => {
        setRemoved(true);
        setData({
            ...data,
            picture: ''
        })
        toast('Image removed...', {
            position: "top-right",
            autoClose: true,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
        });
        toast('Click save...', {
            position: "top-right",
            autoClose: true,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
        });
        setUploaded(false);
    }
    const handleSave = () => {
        console.log("save");
        console.log(data)
        updateUserProfile(data).then((res) => {
                console.log(res);
            }).catch((err) => {
            console.log(err);
            })
        window.location.reload();
        //Post and update data to server if changed
    }

    useEffect(() => {
        setData({
            username: username,
            email: email,
            picture: base64
        })
    }, [username, email, base64]);



    return (
        <div>
            <BootstrapDialog
                onClose={callback}
                aria-labelledby="customized-dialog-title"
                open={open}

            >
                <DialogContent dividers>
                        <div className={"flex space-x-5"}>
                            <div className={""}>
                                <div>
                                    <p className={"text-center font-bold"}>Profile picture</p>
                                </div>
                                <div>
                                    {data?.picture ? <img className={"border-4 rounded-lg py-2 ml-7"} src={data.picture} alt="profile" width="150" height="150"/> : <AccountCircleIcon/>}
                                </div>
                                <div className={"flex space-x-5 pt-5"}>
                                        {data?.picture ?  <div className={"m-0"}><Button variant={"contained"} size={"small"} onClick={handleRemove} startIcon={<DeleteForeverIcon />}>
                                            Remove
                                            </Button> </div>: null}
                                    <div className={"flex rounded-lg border-3 bg-blue-500"}>
                                        <IconButton color="primary" size={"small"} aria-label="upload picture" component="label">
                                            <input hidden onChange={handleImage} accept="image/*" type="file"/>
                                            <p className={"text-white"}>Upload</p>
                                            <PhotoCamera />
                                        </IconButton>
                                    </div>
                                </div>
                                </div>

                            <div>
                                {fileError ? toast('File size is too big') : null}
                            </div>
                            <div className={"flex-col"}>
                                <div className={"pb-5"}>
                                    <TextField disabled required id="standard-basic" value={username} label="Username" variant="standard" />
                                </div>
                                <div className={"pb-5"}>
                                    <TextField disabled id="standard-basic" value={email} label="Email" variant="standard" />
                                </div>
                            </div>

                        </div>


                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleSave} color="primary">
                        Save
                    </Button>
                    <Button autoFocus onClick={callback} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </div>
    );
}
