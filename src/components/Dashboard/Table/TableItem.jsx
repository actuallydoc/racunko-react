import React, {useEffect, useState} from 'react';
import Slide from "@mui/material/Slide";
import {Divider, Tooltip} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import Button from "@mui/material/Button";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import DeleteIcon from '@mui/icons-material/Delete';
import SelectStatus from '../Table/SelectStatus';
import PDFDialog from '../PDFDialog/PDFDialog'
import InvoiceDialog from "../Dialogs/InvoiceDialog/InvoiceDialog";
import {getUserPartners} from "../../../services/partnerServices";
const TableItem = ({data , InvoiceNumber, serviceDate, paymentDate, invoiceDate, base64,Amount,SelectStatusValue, Status, Partner, Currency }) => {
    const [open, setOpen] = useState(false);
    const [invoiceOpen , setInvoiceOpen] = useState(false);
    const [partnerData , setPartnerData] = useState([]);
    const handleInvoiceOpen=()=>{
        setInvoiceOpen(true)
    }
    const handleInvoiceClose =()=>{
        setInvoiceOpen(!invoiceOpen)
    }

    const handleClick = (event) => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
    useEffect(() => {
        setOpen(false);
        getUserPartners().then((res)=>{
            setPartnerData(res.partners)
        })
    }, [])
    return (
        <div className={"border border-slate-200 pb-2 rounded-lg hover:py-1 scale-105 duration-150"}>
            <Slide direction="up" in={true} mountOnEnter unmountOnExit>
                <div className={"flex flex-row m-1  transform hover:bg-slate-50 cursor-pointer"} onClick={handleInvoiceOpen}>
                    <ul className={"flex flex-row space-x-3  text-center ml-10"}>
                        <div className={""}>
                            <Tooltip title={"Invoice Number"}>
                            <li>{InvoiceNumber}</li>
                            </Tooltip>
                        </div>
                            <Divider orientation={"vertical"}/>
                            <Tooltip title={"Service Date"}>
                            <li>{serviceDate}</li>
                            </Tooltip>
                        <Divider orientation={"vertical"}/>
                        <Tooltip title={"Invoice Date"}>
                            <li>{invoiceDate}</li>
                        </Tooltip>
                        <Divider orientation={"vertical"}/>
                        <Tooltip title={"Payment Date"}>
                            <li>{paymentDate}</li>
                        </Tooltip>
                        <Divider orientation={"vertical"}/>
                        <Tooltip title={"Partner Name"}>
                            <li>{Partner}</li>
                        </Tooltip>
                        <Divider orientation={"vertical"}/>
                        <Tooltip title={"Payment Status"}>
                            <li>{Status}</li>
                        </Tooltip>
                        <Divider orientation={"vertical"}/>
                        <div className={"flex"}>
                            <div>
                                <Tooltip title={"Payment Amount"}>
                                <li>{Amount}</li>
                                </Tooltip>
                            </div>
                            <div>
                                <p>{Currency}</p>
                            </div>
                        </div>
                        <Divider orientation={"vertical"}/>
                        <div>
                            <Button onClick={handleClick} variant="outlined" size={"small"} startIcon={<PictureAsPdfIcon />}>
                                PDF
                            </Button>
                             <PDFDialog open={open}  base64={base64} callback={handleClose}/>
                        </div>
                        <Divider orientation={"vertical"}/>
                        <div>
                            <Button variant="outlined" size={"small"} startIcon={<EditIcon />}>
                                EDIT
                            </Button>
                        </div>
                        <div>
                            <Button variant="outlined"  size={"small"} startIcon={<DeleteIcon/>}>
                                DELETE
                            </Button>
                        </div>

                    </ul>
                </div>
            </Slide>
            <div>
                <InvoiceDialog data={data} callback={handleInvoiceClose} open={invoiceOpen} partners={partnerData} />
            </div>
        </div>
    );
};

export default TableItem;