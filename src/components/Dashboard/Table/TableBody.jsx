import React, {useEffect} from 'react';
import TableItem from './TableItem';
const TableBody = ({company}) => {

    useEffect(() => {
        console.log("TableBody");
        console.log(company);
    }, [])
    return (
        <div className={"flex"}>
            <div className={""}>
                    {company.length === 0 || company === undefined ? <h1>Table items</h1>:
                        <div className={"flex"}>
                            <div className={"flex font-mono font-bold text-center border-4 rounded-lg bg-slate-200"}>
                                <h1 className={"justify-center"}>You dont have a company!. Create one in the Company Tab.</h1>
                            </div>
                        </div>}
                </div>

        </div>
    );
};

export default TableBody;