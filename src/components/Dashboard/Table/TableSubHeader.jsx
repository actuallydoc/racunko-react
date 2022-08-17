import React from 'react';
import {Divider} from "@mui/material";
const TableSubHeader = () => {
    return (
        <div className={"flex"}>
            <div className={""}>
                <ul className={"flex flex-row space-x-1 pb-1"}>
                    <div className={""}>
                        <li>Invoice Number</li>
                    </div>
                    <Divider orientation={'vertical'}/>
                    <div className={""}>
                        <li>Service Date</li>
                    </div>
                    <Divider orientation={'vertical'}/>
                    <div className={""}>
                        <li>Invoice Date</li>
                    </div>
                    <Divider orientation={'vertical'}/>
                    <div className={""}>
                        <li>Payment Date</li>
                    </div>
                    <Divider orientation={'vertical'}/>
                    <div className={""}>
                        <li>Partner</li>
                    </div>
                    <Divider orientation={'vertical'}/>
                    <div className={""}>
                        <li>Status</li>
                    </div>
                    <Divider orientation={'vertical'} color={"black"}/>
                    <div className={""}>
                        <li>Amount</li>
                    </div>

                </ul>
            </div>
        </div>

    );
};

export default TableSubHeader;