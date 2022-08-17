import React, {useState} from 'react';
import Slide from "@mui/material/Slide";
import {toast} from "react-toastify";
import {updateUserProfile} from "../../../../../services/updateProfile";
import {createCompany} from "../../../../../services/companyServices";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import {DialogContentText} from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import DialogActions from "@mui/material/DialogActions";
import {createPartner} from "../../../../../services/partnerServices";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const style = {
    width: 500,
    maxWidth: 'auto',
}
const PartnerCreateDialog = ({open, callback , refetchcb}) => {
    const [opened, setOpened] = useState(open);
    const [uploaded, setUploaded] = useState(false);
    const [loading, setLoading] = useState(false);
    const [fileError, setFileError] = useState(false);
    const [progress, setProgress] = useState(0);
    const [removed, setRemoved] = useState(false);
    const [form , setForm] = useState({
        partnerName: '',
        partnerVAT: '',
        partnerAddress: '' ,
        partnerPostalCode: '' ,
        partnerCity: '' ,
        partnerIBAN: '' ,
        partnerSWIFT: '' ,
        partnerBankname:  '' ,
        partnerMaticnast:  '' ,
        partnerPhone:  '' ,

    })

    const handleCreate = () => {
        console.log(form)
        createPartner(form).then((res) => {
            toast("Partner created successfully", {type: "success"});
            refetchcb();
            callback();
        }).catch((err) => {
            console.log(err);
        })

    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
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
                                           label="Partner City"
                                           type="email"
                                             fullWidth
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
                                           label="Partner VAT"
                                           type="string"
                                             fullWidth
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
                                           label="Partner IBAN"
                                           type="string"
                                           fullWidth

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
                                           label="Partner Bank SWIFT"
                                           type="email"
                                           fullWidth

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
                                           label="Partner Registration number"
                                           type="email"
                                           fullWidth
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
                                           label="Partner Phone"
                                           type="email"
                                           fullWidth

                                           variant="standard"
                                           name="partnerPhone"
                                           onChange={handleChange}
                                />
                            </div>
                            </div>
                            <div className={"flex space-x-5"}>
                                <div className={"pt-6"}>
                                    <Button onClick={handleCreate} variant={"contained"} color={"success"}>
                                        Create
                                    </Button>
                                </div>
                            </div>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={callback}>X</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default PartnerCreateDialog;