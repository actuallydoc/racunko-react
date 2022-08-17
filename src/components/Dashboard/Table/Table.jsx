import React, {useEffect, useState} from 'react';
import TableBody from './TableBody';
import TableHeader from './TableHeader';
import TableSubHeader from './TableSubHeader';
import {Divider} from "@mui/material";
import {fetchUserInvoices} from "../../../services/invoiceServices";
import {toast} from "react-toastify";
const Table = ({data , func}) => {
    useEffect(()=>{

    }, []);
    const [company, setCompany] = useState([]);
    return (
        <div className={"w-9/12 h-auto pt-7 p-5 border-4 ml-auto mr-auto px-32 border-3 border-slate-200 rounded-lg drop-shadow-2xl"}>
            <div>
                <div>
                    <TableHeader/>
                </div>
            <Divider/>
                <div>
                    <TableSubHeader/>
                </div>

                <div>
                    <TableBody invoices={data} />
                </div>
            </div>

        </div>
    );
};

export default Table;