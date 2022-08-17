import React, {useEffect, useState} from 'react';
import Navbar from "../components/Dashboard/Navbar/Navbar";
import Fab from '@mui/material/Fab';
import SideBar from '../components/Dashboard/SideBar/SideBar';
import AddIcon from '@mui/icons-material/Add';
import Table from '../components/Dashboard/Table/Table';
import {fetchUserData} from "../services/userServices";
import ToastNoti from '../components/Home/Toast/ToatNoti';
import {toast} from "react-toastify";
import {useCookies} from "react-cookie";
import {useNavigate} from 'react-router-dom';
const Dashboard = () => {
    const navigate = useNavigate()
    const  [all , setAll] = useState(true);
    const [profile, setProfile] = useState(false);
    const [cookies, setCookie, deleteCookie] = useCookies(['token']);
    const [userData, setUserData] = useState([]);
    useEffect(() => {
        if (cookies.token === undefined){
            navigate('/login')
        }
        fetchUserData().then(res => {
            setUserData(res.user);
        }).catch(err => {
            if (cookies.token) {
                deleteCookie('token');
            }
            toast('Redirecting')
            navigate('/login')
        })
    }, [])
    return (
    <div className={""}>
        <div className={"pt-20"}>
            <SideBar>
                <Navbar data={userData} />
            </SideBar>
        </div>
        <div className={"pt-5 text-center pl-24"}>
        </div>
        <div className={"pt-5 text-right pr-5 align-text"}>
            <Fab color="primary" aria-label="Create">
                <AddIcon />
            </Fab>
        </div>
        <ToastNoti/>
    </div>
);
}

export default Dashboard;