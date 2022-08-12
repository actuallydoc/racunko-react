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

const Navbar = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [cookies, setCookie] = useCookies();
    const [state, setState] = useState(false);
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
    const handleChange = (event) => {

        setState(event.target.checked);
        setCookie('theme',  event.target.checked, {path: '/'});

    }

    const closeModal = () => {
        setIsOpen(false);
    }
    const openModal = () => {
        setIsOpen(true);
    }
    useEffect(() => {

    }, [modalIsOpen])

    useEffect(() => {
        console.log(cookies)
        if(cookies.theme === 'true'){
            setState(true);
        }
        if (cookies.theme === 'false'){
            setState(false);
        }
    }, [])
    return (
        <div className={"flex p-2 text-xl text-slate-200 drop-shadow-2xl bg-gradient-to-r from-sky-500 to-indigo-500"}>

            <div className={"flex space-x-3"}>
                <div className={"mx-2 ml-5"}>
                    <Navitem name={"Home"} path={"/"} />
                </div>
            </div>
            <div className={"ml-auto justify-center text-center"}>
                <Switch
                    label="theme"
                    checked={state }
                    defaultChecked
                    onChange={handleChange}
                />
            </div>
            <div className={"flex justify-center text-center mx-5"}>
                <div className={"flex space-x-3 cursor-pointer"}>
                    <div>
                        <Menu
                            sx={{ mt: '45px' }}
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
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={closeModal}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                        <div className={"flex"}>
                            <div>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={()=> setIsOpen(!modalIsOpen)} sx={{ p: 0 }}>
                                        <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />

                                    </IconButton>
                                </Tooltip>
                          </div>
                            <div>
                                {modalIsOpen ? <ArrowDownwardIcon onClick={openModal}/> : <ArrowUpwardIcon/>}
                            </div>
                        </div>


                    </div>

                </div>


            </div>
        </div>


    );
};

export default Navbar;