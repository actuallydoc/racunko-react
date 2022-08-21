import React, {useEffect, useState} from 'react';
import TableItem from './TableItem';
import TableSubHeader from "./TableSubHeader";
import {getUserPartners} from "../../../services/partnerServices";
const TableBody = ({invoices, refetchcb}) => {
    const [open , setOpen] = useState(false);
    const [fetch , setFetch] = useState(false);
    const [partners, setPartners] = useState([]);
    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(!open);
    }

    useEffect(() => {
        console.log("TableBody");
        getUserPartners().then(res=>{
            setPartners(res);
        }).catch(err=>{
            console.log(err)
        })
    }, [])

    return (
        <div className={"flex flex-col"}>
            <div className={""}>
                {invoices !== undefined || invoices === 0  ? invoices.map(invoice => {
                        return (
                            <div>
                            <TableItem refetchcb={refetchcb} data={invoice} signedBase64={invoice.signedPdf64} invoiceDate={invoice.datumIzdaje} InvoiceNumber={invoice.stRacuna} Status={invoice.status} base64={invoice.Pdf64} paymentDate={invoice.datumPlacila} serviceDate={invoice.datumStoritve} Partner={invoice.partnerId}/>
                            </div>)
                    }) : <div className={"flex"}>
                <div className={"flex font-mono font-bold text-center border-4 rounded-lg bg-slate-200"}>
                    <h1 className={"justify-center"}>You dont have a company!. Create one in the Company Tab.</h1>
                </div>
            </div>}

            </div>

        </div>
    );
};

export default TableBody;