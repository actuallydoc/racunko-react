import React, {useState} from 'react';
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import {DialogContentText, Select, Tooltip} from "@mui/material";
import Button from "@mui/material/Button";
import Slide from "@mui/material/Slide";
import TextField from "@mui/material/TextField";
import {LocalizationProvider} from "@mui/x-date-pickers-pro";
import {AdapterDateFns} from "@mui/x-date-pickers-pro/AdapterDateFns";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import {deleteInvoice, updateInvoice} from "../../../../services/invoiceServices";
import {toast} from "react-toastify";
const style = {
    width: 300,
    maxWidth: 'auto',
}




const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const InvoiceInfoDialog = ({open , callback, data, partners, companies, refetchcb}) => {

    const [form , setForm ] = useState(
        {
            id: data.id,
            company: data.companyId,
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
        updateInvoice(form).then(res=> {
                toast.success('Invoice updated')
                refetchcb()
                callback()
        }).catch(err=>{
            toast.error('Error updating invoice')
        })

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
    const handleServiceChange = (e, service, index) => {
       //TODO IMPEMENT SERVICE CHANGE FOR INVOICE DIALOG
    }
    const handlePartnerChange = (e)=>{
        setForm({...form, partner: e.target.value})
        console.log(form)}
    const handleCompanyChange = (e)=>{
        setForm({...form, company: e.target.value})
        console.log(form)
    }
    const handleRemoveService = (service)=>{
        const services = form.services;
        services.splice(services.indexOf(service), 1);
        setForm({...form, services: services});
        console.log(
            'Service removed: ' + service
        )
    }
    const handleAddService = (service)=>{
        const services = form.services;
        services.push({service: service, price: 0});
        setForm({...form, service: services});
        console.log(
            'Service added: ' + JSON.stringify(services)
        )
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
                maxWidth={"xl"}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Invoice"}</DialogTitle>
                <DialogContent>
                    <DialogActions>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Company</InputLabel>
                            <Select
                                labelId="demo-simple-select-autowidth-label"
                                id="demo-simple-select-autowidth"
                                onChange={handleCompanyChange}
                                autoWidth
                                defaultValue={data.companyId}
                                label="Partner"
                            >
                                {companies?.map((company)=>{
                                return (
                                  <MenuItem value={company.id}>{company.companyName}</MenuItem>
                                )
                                })}
                            </Select>

                        </FormControl>
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
                            sx={style}
                            id="outlined-number"
                            label="Invoice Number"
                            type="number"
                            defaultValue={parseInt(data.stRacuna)}
                            onChange={(e)=>setForm({...form, stRacuna: parseInt(e.target.value)})}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </div>

                    <DialogContentText id="alert-dialog-slide-description">
                    </DialogContentText>
                <div className={"flex-col"}>
                    {form?.services.map((service, index)=>{
                        return (
                    <div className={"flex space-x-5 pt-5"}>
                        <div>
                            <TextField
                                sx={style}
                                id="filled-multiline-flexible"
                                label="Description"
                                multiline
                                defaultValue={service[0]}
                                variant="filled"
                                onChange={(e) => {
                                    handleServiceChange(e, service[0], index)
                                }
                                }
                            />
                        </div>
                        <div>
                            <TextField
                                sx={style}
                                id="filled-multiline-flexible"
                                label="Quantity"
                                maxRows={20}
                                defaultValue={service[1]}
                                variant="filled"
                                onChange={(e) => {

                                    handleServiceChange(e, service[1], index)
                                }
                                }
                            />
                        </div>
                        <div>
                            <TextField
                                sx={style}
                                id="filled-multiline-flexible"
                                label="Price"
                                defaultValue={service[2]}
                                variant="filled"
                                onChange={(e) => {
                                    handleServiceChange(e, service[2], index)
                                }
                                }
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
                        <Button size={"small"} onClick={handleRemoveService} variant={"contained"} color={"error"}>Remove Service</Button>
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
