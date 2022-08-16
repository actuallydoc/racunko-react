import React, {useEffect} from 'react';
import {useState} from "react";
import Typography from '@mui/material/Typography';
import {Avatar, Switch} from "@mui/material";
import {useCookies} from "react-cookie";
import Navitem  from "../../Home/Navbar/NavItem";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import {Tooltip} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ProfileDialog from "../ProfileDialog/ProfileDialog";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

const Navbar = ({data}) => {
    const navigate = useNavigate();
    const [modalIsOpen, setIsOpen] = useState(false);
    const [cookies, setCookie, removeCookie] = useCookies();
    const [state, setState] = useState(false);
    const [profileModal , setProfileModal] = useState(false);
    const [redirect, setRedirect] = useState(false);
    const handleProfile = () => {
        console.log(profileModal);
        setProfileModal(!profileModal);
        console.log(profileModal);

    }
    const handleHideProfile = () => {
        setProfileModal(false);
    };
    const handleLogout = () => {
        console.log("Clicked logout")
        removeCookie('token');
        toast("Logout Successfully")
        navigate('/')

    }


    const handleChange = (event) => {
        setState(event.target.checked);
        setCookie('theme',  event.target.checked, {path: '/'});
    }

    const closeModal = () => {
        setIsOpen(false);
    }
    const openModal = () => {
        console.log(cookies)
        setIsOpen(true);
    }

    return (
        <div className={"flex pt-3 text-xl text-slate-200 justify-center text-center  drop-shadow-xl bg-gradient-to-r from-sky-500 to-indigo-500"}>
            <div className={"flex space-x-3"}>
                <div className={"mx-2 ml-5 py-2"}>
                    <Navitem name={"Home"} path={"/"} />
                </div>

            </div>
            <div className={"ml-auto"}>
                <Switch
                    label="theme"
                    checked={state}
                    defaultChecked
                    onChange={handleChange}
                />
            </div>
            <div className={"flex justify-center text-center mx-5 "}>
                <div className={"flex space-x-3 cursor-pointer justify-center text-center"}>
                    <div>
                        <Menu
                            sx={{ mt: '40px' }}
                            id="menu-appbar"
                            anchorEl={modalIsOpen}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(modalIsOpen)}
                            onClose={closeModal}
                        >

                                <MenuItem key={"Profile"} onClick={
                                    handleProfile}>
                                    <Typography textAlign="center">Profile</Typography>
                                </MenuItem>
                            <MenuItem key={"Logout"} onClick={handleLogout}>
                                <Typography textAlign="center">Logout</Typography>
                            </MenuItem>
                        </Menu>
                        <div className={"flex"}>
                            <div className={""}>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={()=> setIsOpen(!modalIsOpen)}>
                                        {data.picture ? <Avatar src={data.picture} /> : <AccountCircleIcon/>}
                                    </IconButton>
                                </Tooltip>
                          </div>
                            <div className={""}>
                            </div>
                        </div>

                    </div>

                </div>


            </div>
            <ProfileDialog open={profileModal} base64={data.picture} callback={handleHideProfile} username={data.username} email={data.email} avatarImg={data.picture}/>
        </div>


    );
};

export default Navbar;