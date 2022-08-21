import TableItem from './TableItem';
const TableBody = ({invoices, refetchcb}) => {

  //TODO : Fetch user partners and fill the name of the partner instead of partner id in the table


    return (
        <div className={"flex flex-col"}>
            <div className={""}>
                {invoices !== undefined || invoices === 0  ? invoices.map(invoice => {
                        return (
                            <div>
                            <TableItem refetchcb={refetchcb} data={invoice} signedBase64={invoice.signedPdf64} invoiceDate={invoice.datumIzdaje} InvoiceNumber={invoice.stRacuna} Status={invoice.status} base64={invoice.Pdf64} paymentDate={invoice.datumPlacila} serviceDate={invoice.datumStoritve} Partner={invoice.partnerId}/>
                            </div>)
                    }) : <div className={"flex"}>
                <div className={"flex font-mono font-bold text-center border-4 rounded-lg bg-slate-200"}>
                    <h1 className={"justify-center"}>You dont have a company!. Create one in the Company Tab.</h1>
                </div>
            </div>}

            </div>

        </div>
    );
};

export default TableBody;