import React, {useState} from 'react';
import CompanyInfoDialog from "./CompanyDialog/CompanyInfoDialog";
import {Divider, Tooltip} from "@mui/material";

const CompanyItem = ({data, refetchcb}) => {
    const [open , setOpen] = useState(false)
    const handleOpen = () =>{
        setOpen(true)
    }
    const handleClose = ()=>{
        setOpen(!open)
    }
    return (
        <div>
            <div className={"flex space-x-5 border-2 p-1 bg-slate-200 m-1 cursor-pointer  rounded-lg border-slate-200 hover:scale-105 duration-150"} onClick={handleOpen}>
                <div>
                    <Tooltip title={"Company Name"}>
                    <h1>{data.companyName}</h1>
                    </Tooltip>
                </div>
                <div>
                    <Divider orientation={'vertical'}/>
                </div>
                <div>
                    <Tooltip title={"Company VAT"}>
                    <h1>{data.companyVAT}</h1>
                    </Tooltip>
                </div>
                <div>
                    <Divider orientation={'vertical'}/>
                </div>
                <div>
                    <Tooltip title={"Company Address"}>
                    <h1>{data.companyAddress}</h1>
                        </Tooltip>
                </div>
            </div>
            {open && <CompanyInfoDialog refetchcb={refetchcb} data={data} open={open} callback={handleClose}/>}
        </div>
    );
};

export default CompanyItem;