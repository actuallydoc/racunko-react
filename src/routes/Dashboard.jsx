import React from 'react';
import Navbar from "../components/Dashboard/Navbar/Navbar";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
const Dashboard = () => (
    <div className={""}>
        <div>
            <Navbar/>
        </div>
        <div>

        </div>
        <div className={"sticky position-bottom"}>
            <Fab color="primary" aria-label="add">
                <AddIcon />
            </Fab>
        </div>
    </div>
);

export default Dashboard;