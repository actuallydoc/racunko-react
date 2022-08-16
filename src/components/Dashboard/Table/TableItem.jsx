import React, {useEffect, useState} from 'react';
import Slide from "@mui/material/Slide";
import { Divider } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import Button from "@mui/material/Button";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import DeleteIcon from '@mui/icons-material/Delete';
import SelectStatus from '../Table/SelectStatus';
import PDFDialog from '../PDFDialog/PDFDialog'
const TableItem = ({InvoiceNumber, serviceDate, paymentDate, invoiceDate, base64,Amount,SelectStatusValue, Status, Partner, Currency }) => {
    const [open, setOpen] = useState(false);
    const handleClick = (event) => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
    useEffect(() => {
        setOpen(false);
    }, [])
    return (
        <div className={"border border-slate-200 pb-2 rounded-lg hover:py-1 scale-105 duration-150"}>
            <Slide direction="up" in={true} mountOnEnter unmountOnExit>
                <div className={"flex flex-row m-1  transform hover:bg-slate-50 cursor-pointer"} onClick={()=>{
                    console.log("clicked an invoice");}}>
                    <ul className={"flex flex-row space-x-3  text-center ml-10"}>
                        <div className={""}>
                            <li>{InvoiceNumber}</li>
                        </div>
                            <Divider orientation={"vertical"}/>
                            <li>{serviceDate}</li>
                        <Divider orientation={"vertical"}/>
                            <li>{invoiceDate}</li>
                        <Divider orientation={"vertical"}/>
                            <li>{paymentDate}</li>
                        <Divider orientation={"vertical"}/>
                            <li>{Partner}</li>
                        <Divider orientation={"vertical"}/>
                            <li>{Status}</li>
                        <Divider orientation={"vertical"}/>
                        <div className={"flex"}>
                            <div>
                                <li>{Amount}</li>
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
        </div>
    );
};

export default TableItem;