import React from 'react';
import Slide from "@mui/material/Slide";
import Button from "@mui/material/Button";
const TableItem = ({InvoiceNumber, serviceDate, paymentDate, invoiceDate, Amount, Status, Partner, Currency }) => {
    return (
        <div className={"border border-slate-200 rounded-lg hover:py-2 scale-105 duration-150"}>
            <Slide direction="up" in={true} mountOnEnter unmountOnExit>
                <div className={"flex-col columns-8 cursor-pointer"} onClick={()=>{
                    console.log("clicked an invoice");
                }}>
                    <ul className={"flex-col columns-7"}>
                            <li>{InvoiceNumber}</li>
                            <li>{serviceDate}</li>
                            <li>{invoiceDate}</li>
                            <li>{paymentDate}</li>
                            <li>{Partner}</li>
                        <div className={"flex"}>
                            <div>
                                <li>{Amount}</li>
                            </div>
                            <div>
                                <p>{Currency}</p>
                            </div>
                        </div>
                        <div>
                            <button className={"border border-sky-400 bg-sky-200 rounded-lg"}>
                                PDF
                            </button>
                        </div>

                    </ul>
                </div>
            </Slide>
        </div>
    );
};

export default TableItem;