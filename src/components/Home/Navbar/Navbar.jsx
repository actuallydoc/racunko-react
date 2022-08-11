import React, {useEffect} from 'react';
import Navitem from './NavItem';
import {useState} from "react";
import Box from '@mui/material/Box';
import {style} from './ModalStyles'
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import SocialItem from "../Footer/SocialItem";
import {Switch} from "@mui/material";
import {useCookies} from "react-cookie";
const Navbar = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [cookies, setCookie] = useCookies();
    const [state, setState] = useState(false);

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
            <div>
                {modalIsOpen ?  (
                    <Modal
                        open={modalIsOpen}
                        onClose={closeModal}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box  sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Contact Information
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2}}>
                                <div className={"pt-2"}>
                                    <SocialItem name={"Facebook"} link={"https://facebook.com/test"} img={"https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg"} alt={"Fb link"} height={"20px"} width={"20px"}/>
                                </div>
                                <div className={"pt-2"}>
                                    <SocialItem name={"Twitter"} link={"https://facebook.com/test"} img={"https://upload.wikimedia.org/wikipedia/commons/4/4f/Twitter-logo.svg"} alt={"Twitter link"} height={"20px"} width={"23px"}/>
                                </div>
                                <div className={"pt-2"}>
                                    <SocialItem name={"Instagram"} link={"https://facebook.com/test"} img={"https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"} alt={"Instagram link"} height={"20px"} width={"23px"}/>
                                </div>
                                <div className={"pt-2"}>
                                    <SocialItem name={"Github"} link={"https://github.com/actuallydoc"} img={"https://cdn-icons-png.flaticon.com/512/25/25231.png"} alt={"Github link"} height={"20px"} width={"23px"}/>
                                </div>
                                <div className={"pt-2"}>
                                    <SocialItem name={"LinkedIn"} img={"https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"} alt={"Linkedin link"} height={"20px"} width={"25px"}/>
                                </div>

                                <div className={"pt-2"}>
                                    <SocialItem name={"Discord"} link={"https://discord.gg/C4WYTmFK9S"} img={"https://seeklogo.com/images/D/discord-color-logo-E5E6DFEF80-seeklogo.com.png"} alt={"Discord"} height={"15px"} width={"28px"}/>
                                </div>
                                <div className={"pt-3 font-bold"}>
                                    <p>You can also use live chat! and we will try to respond as fast as possible</p>
                                </div>
                            </Typography>
                        </Box>
                    </Modal>

                    ) : null}
            </div>
            <div className={"flex space-x-3"}>
                <div className={"mx-2 ml-5"}>
                    <Navitem name={"Home"} path={"/"} />
                </div>
                <div className={"justify-center text-center"}>
                    <Navitem name={"About"} path={"/about"} />
                </div>
                <div className={"justify-center text-center"}>
                    {/*RENDER A MODAL WINDOW POPUP WITH CONTACT INFORMATION ABOUT THE COMPANY */}
                    <Navitem name={"Contact"} path={""} callback={openModal} />
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
            <div className={"justify-center text-center mx-10"}>
                <Navitem name={"Signup"} path={"/signup"} />
            </div>
            <div className={"justify-center text-center mr-5"}>
                <Navitem name={"Login"} path={"/login"} />
            </div>
        </div>


    );
};

export default Navbar;