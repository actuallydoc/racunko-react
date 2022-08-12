import React from 'react';

const TableSubHeader = () => {
    return (
        <div className={"flex-col columns-8 pb-2"}>
            <ul className={"flex-col"}>
                <li>Invoice number</li>
                <li>Service Date</li>
                <li>Invoice Date</li>
                <li>Payment Date</li>
                <li>Partner</li>
                <li>Status</li>
                <li>Amount</li>
                <li>File</li>
            </ul>
        </div>
    );
};

export default TableSubHeader;