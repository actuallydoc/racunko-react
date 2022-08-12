import React from 'react';
import Navbar from "../components/Dashboard/Navbar/Navbar";
import Fab from '@mui/material/Fab';
import SideBar from '../components/Dashboard/SideBar/SideBar';
import AddIcon from '@mui/icons-material/Add';
import Table from '../components/Dashboard/Table/Table';
const Dashboard = () => (
    <div className={""}>
        <div>
            <Navbar/>
        </div>
        <div>
            <SideBar><Navbar/></SideBar>
        </div>

        <div className={"pt-5 text-center"}>
            <Table/>
        </div>
        <div>
            <Fab color="primary" aria-label="add" className={""}>
                <AddIcon />
            </Fab>
        </div>
    </div>
);

export default Dashboard;