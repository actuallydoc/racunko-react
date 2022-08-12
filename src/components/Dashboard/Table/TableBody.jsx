import React from 'react';
import TableItem from './TableItem';
const TableBody = () => {
    return (
        <div className={"flex"}>
            <div className={"flex-col"}>
                <div className={""}>
                    <TableItem InvoiceNumber={"1"} Amount={"30"} Partner={"TBS TEAM 24 D.O.O"} Status={"Not paid"} invoiceDate={"12.22.2022"} paymentDate={"12.15.2022"} serviceDate={"10.02.2022"} Currency={"$"}/>
                </div>
                <div className={""} >
                    <TableItem InvoiceNumber={"2"} Amount={"30"} Partner={"TBS TEAM 24 D.O.O"} Status={"Not paid"} invoiceDate={"12.22.2022"} paymentDate={"12.15.2022"} serviceDate={"10.02.2022"} Currency={"$"}/>
                </div>
          </div>

        </div>
    );
};

export default TableBody;