import React from 'react';
import {Divider} from "@mui/material";
const TableSubHeader = () => {
    return (
        <div className={""}>
            <div className={""}>
                <ul className={"flex flex-row space-x-5 pb-1"}>
                    <div className={""}>
                        <li>Invoice Number</li>
                    </div>

                    <div className={"pl-4"}>
                        <li>Service Date</li>
                    </div>
                    <div className={"pl-3"}>
                        <li>Invoice Date</li>
                    </div>
                    <div className={"pl-3"}>
                        <li>Payment Date</li>
                    </div>
                    <div className={"pl-10"}>
                        <li>Partner</li>
                    </div>
                    <div className={"pl-14"}>
                        <li>Status</li>
                    </div>
                    <div className={"pl-4"}>
                        <li>Amount</li>
                    </div>
                    <div className={"pl-10"}>
                        <li>File</li>
                    </div>
                    <div className={"pl-24"}>
                        <li>Functions</li>
                    </div>


                </ul>
            </div>
        </div>

    );
};

export default TableSubHeader;