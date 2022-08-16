import React, {useState} from 'react';
import CompanyInfoDialog from "./CompanyDialog/CompanyInfoDialog";

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
            <div className={"flex space-x-10 border-2 p-1 bg-slate-200 m-1 cursor-pointer  rounded-lg border-slate-200 hover:scale-105 duration-150"} onClick={handleOpen}>
                <div>
                    <h1>{data.companyName}</h1>
                </div>
                <div>
                    <h1>{data.companyVAT}</h1>
                </div>
                <div>
                    <h1>{data.companyAddress}</h1>
                </div>
            </div>
            {open && <CompanyInfoDialog refetchcb={refetchcb} data={data} open={open} callback={handleClose}/>}
        </div>
    );
};

export default CompanyItem;