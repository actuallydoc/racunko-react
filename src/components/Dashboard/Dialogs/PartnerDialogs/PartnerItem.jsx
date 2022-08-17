import React, {useEffect, useState} from 'react';

import PartnerInfoDialog from "./PartnerInfoDialog/PartnerInfoDialog";
import {Divider, Tooltip} from "@mui/material";

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
                <div className={"flex space-x-5 border-2 p-1 bg-slate-200 m-1 cursor-pointer  rounded-lg border-slate-200 hover:scale-105 duration-150"} onClick={handleOpen}>
                    <div>
                        <Tooltip title={"Partner Name"}>
                        <h1>{data.partnerName}</h1>
                        </Tooltip>
                    </div>
                    <div>
                        <Divider orientation={'vertical'}/>
                    </div>
                    <div>
                        <Tooltip title={"Partner VAT"}>
                        <h1>{data.partnerVAT}</h1>
                            </Tooltip>
                    </div>
                    <div>
                        <Divider orientation={'vertical'}/>
                    </div>
                    <div>
                        <Tooltip title={"Partner Address"}>
                        <h1>{data.partnerAddress}</h1>
                            </Tooltip>
                    </div>
                </div>

                {open && <PartnerInfoDialog refetchcb={refetchcb} data={data} open={open} callback={handleClose}/>}
            </div>
        </div>
    );
};

export default PartnerItem;