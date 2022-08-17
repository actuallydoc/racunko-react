import React , {useState, useEffect} from 'react';
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import {DialogContentText, Tooltip} from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import Slide from "@mui/material/Slide";
import {removePartner, updatePartner} from "../../../../../services/partnerServices";
import {toast} from "react-toastify";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const style = {
    width: 500,
    maxWidth: 'auto',
}
const PartnerInfoDialog = ({open, callback, data, refetchcb}) => {
    const [form , setForm] = useState({
        id: data.id,
        partnerName: data.partnerName,
        partnerVAT: data.partnerVAT,
        partnerAddress: data.partnerAddress,
        partnerPostalCode: data.partnerPostalCode,
        partnerCity: data.partnerCity,
        partnerIBAN: data.partnerIBAN,
        partnerSWIFT: data.partnerSWIFT,
        partnerBankname: data.partnerBankname,
        partnerMaticnast: data.partnerMaticnast,
        partnerPhone: data.partnerPhone

    })


    const handleChange = (e) =>{
        setForm({...form , [e.target.name]: e.target.value})

        console.log(form)
    }
    const handleSave = () =>{
        updatePartner(form).then(res=>{
            console.log("Res", res)
            toast("Partner updated successfully", {type: "success"})
            refetchcb();
        }).catch((err)=>{
            console.log("Err", err)
        })
    }
    const handleRemove = () =>{
        removePartner(form).then(res=>{
            console.log(form.id)
            console.log("Res", res)
            toast("Partner removed successfully", {type: "success"})
            refetchcb();
        }).catch((err)=>{
            console.log("Err", err)
        })
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
                <DialogTitle>{"Company Manager"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        <div>
                            <div>
                                <TextField sx={style}
                                           autoFocus
                                           margin="dense"
                                           id="name"
                                           label="Partner Name"
                                           type="string"
                                           fullWidth
                                           value={form.partnerName}
                                           variant="standard"
                                           name="partnerName"
                                           onChange={handleChange}
                                />
                            </div>
                            <div>
                                <TextField sx={style}
                                           autoFocus
                                           margin="dense"
                                           id="name"
                                           label="Partner Address"
                                           type="email"
                                           fullWidth
                                           value={form.partnerAddress}
                                           variant="standard"
                                           name="partnerAddress"
                                           onChange={handleChange}
                                />
                            </div>
                            <div>
                                <TextField sx={style}
                                           autoFocus
                                           margin="dense"
                                           id="name"
                                           label="Partner Postal code"
                                           type="string"
                                           value={form.partnerPostalCode}
                                           variant="standard"
                                           name="partnerPostalCode"
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
                                           value={form.partnerCity}
                                           variant="standard"
                                           name="partnerCity"
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
                                           value={form.partnerVAT}
                                           variant="standard"
                                           name="partnerVAT"
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
                                           value={form.partnerIBAN}
                                           variant="standard"
                                           name="partnerIBAN"
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
                                           value={form.partnerSWIFT}
                                           variant="standard"
                                           name="partnerSWIFT"
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
                                           value={form.partnerBankname}
                                           variant="standard"
                                           name="partnerBankname"
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
                                           value={form.partnerMaticnast}
                                           variant="standard"
                                           name="partnerMaticnast"
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
                                           value={form.partnerPhone}
                                           variant="standard"
                                           name="partnerPhone"
                                           onChange={handleChange}
                                />
                            </div>
                            <div className={"flex"}>
                                <div className={"pt-6"}>
                                    <div>
                                        <Tooltip title="Save the changes">
                                        <Button variant={"contained"} color={"success"} size={"medium"} onClick={handleSave}>
                                                <h1>
                                                    Save
                                                </h1>

                                        </Button>
                                        </Tooltip>
                                    </div>

                                    <div className={"pt-6"}>
                                        <Tooltip title="Delete the partner. this cannot be undone!">
                                        <Button onClick={handleRemove} variant={"contained"} color={"error"}>
                                            <h1>Remove</h1>
                                        </Button>
                                        </Tooltip>
                                    </div>
                                </div>
                                </div>
                        </div>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Tooltip title={"Close the menu"}>
                    <Button onClick={callback}>X</Button>
                   </Tooltip>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default PartnerInfoDialog;