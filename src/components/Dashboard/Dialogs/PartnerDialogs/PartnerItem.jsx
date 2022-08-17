import React, {useEffect, useState} from 'react';

import PartnerInfoDialog from "./PartnerInfoDialog/PartnerInfoDialog";
import {Divider} from "@mui/material";

const PartnerItem = ({data, refetchcb}) => {
    const [open , setOpen] = useState(false)
    const handleOpen = () =>{
        setOpen(true)
    }
    const handleClose = ()=>{
        setOpen(!open)
    }

    return (
        <div>
            <div>
                <div className={"flex space-x-10 border-2 p-1 bg-slate-200 m-1 cursor-pointer  rounded-lg border-slate-200 hover:scale-105 duration-150"} onClick={handleOpen}>
                    <div>
                        <h1>{data.partnerName}</h1>
                    </div>
                    <div>
                        <Divider orientation={'vertical'}/>
                    </div>
                    <div>
                        <h1>{data.partnerVAT}</h1>
                    </div>
                    <div>
                        <Divider orientation={'vertical'}/>
                    </div>
                    <div>
                        <h1>{data.partnerAddress}</h1>
                    </div>
                </div>

                {open && <PartnerInfoDialog refetchcb={refetchcb} data={data} open={open} callback={handleClose}/>}
            </div>
        </div>
    );
};

export default PartnerItem;