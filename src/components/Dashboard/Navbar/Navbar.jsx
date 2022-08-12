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
    const [cookies, setCookie, deleteCookies] = useCookies();
    const [state, setState] = useState(false);
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

    const handleMenu = (event) => {
        const expression = event.currentTarget.innerText
    }
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
        console.log(cookies)
        if(cookies.theme === 'true'){
            setState(true);
        }
        if (cookies.theme === 'false'){
            setState(false);
        }
    }, [])
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
                    checked={state }
                    defaultChecked
                    onChange={handleChange}
                />
            </div>
            <div className={"flex justify-center text-center mx-5 "}>
                <div className={"flex space-x-3 cursor-pointer justify-center text-center"}>
                    <div>
                        <Menu
                            sx={{ mt: '55px' }}
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
                                <MenuItem key={setting} onClick={handleMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                        <div className={"flex"}>
                            <div className={""}>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={()=> setIsOpen(!modalIsOpen)}>
                                        <Avatar alt="User" src="https://material-ui.com/static/images/avatar/1.jpg" />
                                    </IconButton>
                                </Tooltip>
                          </div>
                            <div className={""}>
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