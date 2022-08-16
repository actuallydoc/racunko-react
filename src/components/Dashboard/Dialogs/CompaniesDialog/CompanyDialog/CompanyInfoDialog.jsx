import React, {useEffect, useState} from 'react';
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import {DialogContentText} from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Slide from "@mui/material/Slide";
import TextField from "@mui/material/TextField";
import {toast} from "react-toastify";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import {updateCompany} from "../../../../../services/companyServices";



const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const style = {
    width: 500,
    maxWidth: 'auto',
}
const CompanyInfoDialog = ({data , callback, open, refetchcb}) => {
    const [companyData, setCompanyData] = useState(data);
    const [form, setForm] = useState({
        companyName: data.companyName,
        companyAddress: data.companyAddress,
        companyPostalCode: data.companyPostalCode,
        companyCity: data.companyCity,
        companyVAT: data.companyVAT,
        companyIBAN: data.companyIBAN,
        companySWIFT: data.companySWIFT,
        companyBankname: data.companyBankname,
        companyMaticnast: data.companyMaticnast,
        companyPhone: data.companyPhone,
        createdby: data.createdby,
        sign: data.sign,

    })
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
        console.log(form)
    }
    const handleImage= (e) => {
        const reader = new FileReader();
        const file = e.target.files[0];
        reader.readAsDataURL(file);
        reader.onloadstart = (e) => {
            toast('Uploading image...', {
                position: "top-right",
                autoClose: true,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
            });

        }
        reader.onloadend = (e) => {
            let base64 = reader.result;
            setForm({
                ...form,
                sign: base64
            })

            toast('Uploaded succesfully...', {
                position: "top-right",
                autoClose: true,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
            });
            toast('Click save...', {
                position: "top-right",
                autoClose: true,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
            });
        }

    }
    const handleSave = () => {
        updateCompany(form).then(res=>{
            console.log("Res", res)
            refetchcb();
        }).catch((err)=>{
            console.log("Err", err)
        })
    }
    const handleRemove = () => {
        setForm({
            ...form,
            sign: ''
        })
    }
    useEffect(()=>{
        console.log(data)
    } , [data])

    return (
        <div>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={callback}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Company Manager"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        <div>
                            <div>
                                <TextField sx={style}
                                           autoFocus
                                           margin="dense"
                                           id="name"
                                           label="Company Name"
                                           type="email"
                                           fullWidth
                                           value={form.companyName}
                                           variant="standard"
                                           name="companyName"
                                           onChange={handleChange}
                                />
                            </div>
                            <div>
                                <TextField sx={style}
                                           autoFocus
                                           margin="dense"
                                           id="name"
                                           label="Company Address"
                                           type="email"
                                           fullWidth
                                           value={form.companyAddress}
                                           variant="standard"
                                           name="companyAddress"
                                           onChange={handleChange}
                                />
                            </div>
                            <div>
                                <TextField sx={style}
                                           autoFocus
                                           margin="dense"
                                           id="name"
                                           label="Postal code"
                                           type="string"
                                           value={form.companyPostalCode}
                                           variant="standard"
                                           name="companyPostalCode"
                                           onChange={handleChange}
                                />
                            </div>
                            <div>
                                <TextField sx={style}
                                           autoFocus
                                           margin="dense"
                                           id="name"
                                           label="City"
                                           type="email"
                                           fullWidth
                                           value={form.companyCity}
                                           variant="standard"
                                             name="companyCity"
                                           onChange={handleChange}
                                />
                            </div>
                            <div>
                                <TextField sx={style}
                                           autoFocus
                                           margin="dense"
                                           id="name"
                                           label="VAT"
                                           type="string"
                                           fullWidth
                                           value={form.companyVAT}
                                           variant="standard"
                                             name="companyVAT"
                                           onChange={handleChange}
                                />
                            </div>
                            <div>
                                <TextField sx={style}
                                           autoFocus
                                           margin="dense"
                                           id="name"
                                           label="IBAN"
                                           type="string"
                                           fullWidth
                                           value={form.companyIBAN}
                                           variant="standard"
                                                name="companyIBAN"
                                           onChange={handleChange}
                                />
                            </div>
                            <div>
                                <TextField sx={style}
                                           autoFocus
                                           margin="dense"
                                           id="name"
                                           label="Bank SWIFT"
                                           type="email"
                                           fullWidth
                                           value={form.companySWIFT}
                                           variant="standard"
                                                name="companySWIFT"
                                           onChange={handleChange}
                                />
                            </div>
                            <div>
                                <TextField sx={style}
                                           autoFocus
                                           margin="dense"
                                           id="name"
                                           label="Bank Name"
                                           type="name"
                                           fullWidth
                                           value={form.companyBankname}
                                           variant="standard"
                                                name="companyBankname"
                                           onChange={handleChange}
                                />
                            </div>
                            <div>
                                <TextField sx={style}
                                           autoFocus
                                           margin="dense"
                                           id="name"
                                           label=""
                                           type="email"
                                           fullWidth
                                           value={form.companyMaticnast}
                                           variant="standard"
                                                name="companyMaticnast"
                                           onChange={handleChange}
                                />
                            </div>
                            <div>
                                <TextField sx={style}
                                           autoFocus
                                           margin="dense"
                                           id="name"
                                           label="Company Phone"
                                           type="email"
                                           fullWidth
                                           value={form.companyPhone}
                                           variant="standard"
                                                name="companyPhone"
                                           onChange={handleChange}
                                />
                            </div>
                            <div>
                                <TextField sx={style}
                                           autoFocus
                                           margin="dense"
                                           id="name"
                                           label="Owner"
                                           type="email"
                                           fullWidth
                                           value={form.createdby}
                                           variant="standard"
                                                name="createdby"
                                           onChange={handleChange}
                                />
                            </div>
                            <div className={"flex"}>
                                <div className={"pt-5 pl-5"}>
                                    <Button variant={"contained"} size={"small"} onClick={handleSave}>
                                        <h1>
                                            Save
                                        </h1>
                                    </Button>
                                </div>
                                {form?.sign && <div className={"pt-5 pl-3"}>
                                    <Button variant={"contained"} size={'small'} color={"error"} onClick={handleRemove}>
                                       <h1>Remove</h1>
                                    </Button>
                                </div>}

                                   <div>
                                       {form?.sign ?
                                           <div className={"pt-5"}>
                                               <img src={form.sign} width={"200"} height={"300"} />
                                           </div>:  <div className={"pt-4"}>
                                               <IconButton color="primary" size={"small"} aria-label="upload picture" component="label">
                                                   <div className={"flex space-x-3 bg-slate-200 p-1 rounded-lg"}>
                                                       <div>
                                                           <input hidden onChange={handleImage}  accept="image/*" type="file"/>
                                                           <p className={"text-slate-500"}>Upload Sign </p>
                                                       </div>
                                                       <div>
                                                           <PhotoCamera/>
                                                       </div>
                                                   </div>
                                               </IconButton>
                                           </div>}
                                   </div>


                            </div>

                        </div>



                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={callback}>X</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default CompanyInfoDialog;