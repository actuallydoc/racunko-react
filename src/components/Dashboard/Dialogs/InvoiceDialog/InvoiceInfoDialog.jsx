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
import {deleteInvoice} from "../../../../services/invoiceServices";
import {toast} from "react-toastify";
const style = {
    width: 300,
    maxWidth: 'auto',
}


const STATUS_OPTIONS = [
    {
        1: 'PAID',
        2: 'CANCELLED',
        3: 'UNPAID'
    }
    ]


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const InvoiceInfoDialog = ({open , callback, data, partners, refetchcb}) => {

    const [form , setForm ] = useState(
        {
             stRacuna: data.stRacuna,
            datumIzdaje: data.datumIzdaje,
            datumStoritve: data.datumStoritve,
            datumPlacila: data.datumPlacila,
           partnerId: data.partnerId,
            status: data.status,
            services: JSON.parse(data.services)
        }
    );
    const [invoiceDate ,setInvoiceDate] = useState(form.datumIzdaje)
    const [serviceDate , setServiceDate] = useState(form.datumStoritve)
    const [paymentDate, setPaymentDate] = useState(form.datumPlacila)
    const handleSave=()=>{
        console.log("Handle save")
    }
    const handleDelete = ()=>{
        console.log('Data id: ' + data.id)
        deleteInvoice({
            invoiceID: data.id,
            partnerId: data.partnerId
        }).then(res=>{
                toast('Invoice Deleted')
            callback()
            refetchcb()
        }).catch(err=>{
            console.log(err)
        })
  }
    useEffect(()=>{
      console.log(partners)
    },[])

    

        const handlePartnerChange = (e)=>{
        setForm({...form, partner: e.target.value})
        console.log(form)}

    const handleRemoveService = (service)=>{
        const newServices = form.services.filter(s=>s.id !== service.id)
        setForm({...form, services: newServices})
    }
    const handleAddService = ()=>{
        console.log('Add service')
        setForm({...form, services: [...form.services, {service: '', price: 0}]})
    }
    const handleStatusChange = (e)=>{
        setForm({...form, status: e.target.value})
        console.log(form)
    }
    const handleInvoiceDate = (e)=>{
        setForm({...form, datumIzdaje: e.toLocaleDateString('de-DE')})
        setInvoiceDate(e)
    }
    const handleServiceDate = (e)=>{
        console.log(e)
        setForm({...form, datumStoritve: e.toLocaleDateString('de-DE')})
        setServiceDate(e)
    }
    const handlePaymentDate = (e)=>{
        console.log(e.toLocaleDateString('de-DE'))
        setForm({...form, datumPlacila: e.toLocaleDateString('de-DE')})
        setPaymentDate(e)
    }
    const handleRestoreData = ()=>{
        setForm({...form, datumIzdaje: data.datumIzdaje, datumStoritve: data.datumStoritve, datumPlacila: data.datumPlacila, partnerId: data.partnerId, status: data.status})
        setInvoiceDate(data.datumIzdaje)
        setServiceDate(data.datumStoritve)
        setPaymentDate(data.datumPlacila)
    }
  
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
                                labelId="demo-simple-select-autowidth-label"
                                id="demo-simple-select-autowidth"
                                onChange={handlePartnerChange}
                                autoWidth
                                defaultValue={data.partnerId}
                                label="Partner"
                            >
                                {partners?.map((partner)=>{
                                return (
                                  <MenuItem value={partner.id}>{partner.partnerName}</MenuItem>
                                )
                                })}
                            </Select>

                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Status</InputLabel>
                            <Select
                                onChange={handleStatusChange}
                                autoWidth
                                defaultValue={data.status}
                                label="Status"
                            >
                             <MenuItem value={'PAID'}>PAID</MenuItem>
                                <MenuItem value={'UNPAID'}>UNPAID</MenuItem>
                                <MenuItem value={'CANCELLED'}>CANCELLED</MenuItem>
                            </Select>
                        </FormControl>
                    </DialogActions>
                    <div className={""}>
                    <div className={"pt-5"}>
                        <LocalizationProvider dateAdapter={AdapterDateFns }>
                            <DatePicker
                                label={"Invoice Date"}
                                value={invoiceDate}
                                inputFormat="dd.MM.yyyy"
                                onChange={handleInvoiceDate}

                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </div>
                    <div className={"pt-5"}>
                        <LocalizationProvider dateAdapter={AdapterDateFns }>
                            <DatePicker
                                label={"Service Date"}
                                value={serviceDate}
                                inputFormat="dd.MM.yyyy"
                                onChange={handleServiceDate}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </div>
                    <div className={"pt-5"}>
                        <LocalizationProvider dateAdapter={AdapterDateFns }>
                            <DatePicker
                                label={"Payment Date"}
                                value={paymentDate}
                                inputFormat="dd.MM.yyyy"
                                onChange={handlePaymentDate}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </div>
                    </div>
                    <div className={"pt-5 pb-5"}>
                        <TextField
                            id="outlined-number"
                            label="Invoice Number"
                            type="number"
                            defaultValue={data.stRacuna}
                            onChange={(e)=>setForm({...form, stRacuna: e.target.value})}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </div>

                    <DialogContentText id="alert-dialog-slide-description">

                    </DialogContentText>
                <div className={"flex-col"}>
                    {form?.services.map((service)=>{
                        return (
                    <div className={"flex space-x-5 pt-5"}>
                        <div>
                            <TextField sx={{"width": "100%"}}
                                id="filled-multiline-flexible"
                                label="Description"
                                multiline
                                value={service[0]}
                                variant="filled"
                            />
                        </div>
                        <div>
                            <TextField
                                id="filled-multiline-flexible"
                                label="Quantity"
                                maxRows={20}
                                value={service[1]}
                                variant="filled"
                            />
                        </div>
                        <div>
                            <TextField
                                id="filled-multiline-flexible"
                                label="Price"
                                value={service[2]}
                                variant="filled"
                            />
                        </div>

                    </div>)}
                    )
                }
                </div>
                <div className={"pt-5"}>
                    <div className={"pb-5"}>
                        <Button size={"small"} onClick={handleAddService} variant={"contained"} color={"primary"}>Add service</Button>
                    </div>
                    <div>
                        <Button size={"small"} onClick={handleRemoveService} variant={"contained"} color={"error"}>Remove ALL Services</Button>
                    </div>

                </div>
                </DialogContent>
                <DialogActions>
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
                        <div>
                            <Tooltip title={"Close Menu"}>
                                <Button onClick={()=>{
                                    callback()
                                    handleRestoreData()
                                }} color={"error"}>X</Button>
                            </Tooltip>
                        </div>
                    </div>

                </DialogActions>
            </Dialog>
        </div>
    );
};

export default InvoiceInfoDialog;
