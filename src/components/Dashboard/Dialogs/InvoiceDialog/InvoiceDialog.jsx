import React, {useEffect, useState} from 'react';
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import {Alert, DialogContentText, Select, Tooltip} from "@mui/material";
import Button from "@mui/material/Button";
import Slide from "@mui/material/Slide";
import TextField from "@mui/material/TextField";
import {LocalizationProvider} from "@mui/x-date-pickers-pro";
import {AdapterDateFns} from "@mui/x-date-pickers-pro/AdapterDateFns";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import {getUserPartners} from "../../../../services/partnerServices";
const style = {
    width: 300,
    maxWidth: 'auto',
}

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const InvoiceDialog = ({open , callback, data, partners}) => {
    const [partner , setPartner] = useState(partners);
    const [form , setForm ] = useState([]);
    const [invoiceDate ,setInvoiceDate] = useState(new Date(data.datumIzdaje))
    const [serviceDate , setServiceDate] = useState(new Date(data.datumStoritve))
    const [paymentDate, setPaymentDate] = useState(new Date(data.datumPlacila))
    const [selectPartner, setSelectPartner] = useState([])
    useEffect(()=>{

    }, [])

    const handleSave=()=>{
        console.log("Handle save")
    }
    const handleDelete = ()=>{
        console.log("Handle delete")
    }

    const handleChange = (e)=>{
      setSelectPartner(e.target.value)
        console.log(e.target.value)
    }
    useEffect(()=>{
        console.log("data", data)
        console.log(partners)
    }, [])

    return (
        <div>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={callback}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Invoice"}</DialogTitle>
                <DialogContent>
                    <DialogActions>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Partner</InputLabel>
                            <Select
                                value={partner.partnerId}
                                label="Partner"
                                uncontrolled
                                onChange={handleChange}
                            >
                                {partners.map(partner => {
                                    console.log("Partner id", partner.id)
                                        return (
                                            <div>
                                                <MenuItem value={partner.id}>{partner.partnerName}</MenuItem>
                                            </div>
                                        )
                                })}
                            </Select>
                        </FormControl>
                    </DialogActions>
                    <div className={""}>
                    <div className={"pt-5"}>
                        <LocalizationProvider dateAdapter={AdapterDateFns }>
                            <DatePicker
                                label={"Invoice Date"}
                                value={invoiceDate.toLocaleDateString('de')}
                                inputFormat="dd.MM.yyyy"
                                onChange={(newValue) => {
                                    setInvoiceDate(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </div>
                    <div className={"pt-5"}>
                        <LocalizationProvider dateAdapter={AdapterDateFns }>
                            <DatePicker
                                label={"Invoice Date"}
                                value={serviceDate.toLocaleDateString('de')}
                                inputFormat="dd.MM.yyyy"
                                onChange={(newValue) => {
                                    setServiceDate(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </div>
                    <div className={"pt-5"}>
                        <LocalizationProvider dateAdapter={AdapterDateFns }>
                            <DatePicker
                                label={"Invoice Date"}
                                value={paymentDate.toLocaleDateString('de')}
                                inputFormat="dd.MM.yyyy"
                                onChange={(newValue) => {
                                    setPaymentDate(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </div>
                    </div>
                    <TextField sx={style}
                               autoFocus
                               margin="dense"
                               id="name"
                               label="Invoice Date"
                               type="email"
                               fullWidth
                               value={data.datumIzdaje}
                               variant="standard"
                               name="companyName"
                               onChange={handleChange}
                    />
                    <DialogContentText id="alert-dialog-slide-description">

                    </DialogContentText>
                    <div className={"flex space-x-5"}>
                        <div className={""}>
                            <Tooltip title={"Save invoice data"}>
                                <Button onClick={handleSave}  variant={"contained"} color={"success"}>Save</Button>
                            </Tooltip>
                        </div>
                        <div>
                            <Tooltip title={"Delete invoice"}>
                                <Button onClick={handleDelete}  variant={"contained"} color={"error"}>Delete</Button>
                            </Tooltip>
                        </div>
                    </div>


                </DialogContent>
                <DialogActions>
                    <Tooltip title={"Close Menu"}>
                        <Button onClick={callback} color={"error"}>X</Button>
                    </Tooltip>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default InvoiceDialog;