import React from 'react';
import TableBody from './TableBody';
import TableHeader from './TableHeader';
import TableSubHeader from './TableSubHeader';
import {Divider} from "@mui/material";
const Table = () => {
    return (
        <div className={"w-6/12 h-screen pt-7 p-5 border-4 mx-auto border-3 border-slate-200 rounded-lg drop-shadow-2xl"}>
            <div>
                <div>
                    <TableHeader/>
                </div>
            <Divider/>
                <div>
                    <TableSubHeader/>
                </div>
                <Divider/>
                <div>
                    <TableBody/>
                </div>
            </div>

        </div>
    );
};

export default Table;