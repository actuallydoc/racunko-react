import React, {useEffect} from 'react';
import {toast} from "react-toastify";
import ToastNoti from '../Home/Toast/ToatNoti'
import {useNavigate} from 'react-router-dom';
const UnknownPage = () => {
    const navigate = useNavigate()
    useEffect(() => {
        toast("Page not found, Redirecting!");
        setInterval(() => {
            navigate("/")
        }, 3000);
    }, [navigate])
    return (
        <div className={"bg-gradient-to-r from-sky-500 to-indigo-500 flex h-screen justify-center items-center"}>
            <div className={""}>


                <div className={"m-auto content-center pb-3"}>
                    <img className={"m-auto"} src={"https://www.clipartmax.com/png/full/256-2569310_sad-face-emoji-black-and-white.png"} alt={"error"} width={"50%"} height={"30%"}/>
                </div>
                <div className={"text-2xl text-mono font-bold text-slate-200 m-auto pt-3 text-center"}>

                    <p>404 NOT FOUND</p>
                </div>
                <div>
                    <ToastNoti HideProgressBar={false} />
                </div>
            </div>
        </div>
    );
};

export default UnknownPage;