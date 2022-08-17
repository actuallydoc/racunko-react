import React, {useState} from 'react';
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import {DialogContentText} from "@mui/material";
import Slide from "@mui/material/Slide";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import {toast} from "react-toastify";
import {updateUserProfile} from "../../../../../services/updateProfile";
import {createCompany} from "../../../../../services/companyServices";
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const style = {
    width: 500,
    maxWidth: 'auto',
}
const CreateCompanyDialog = ({open, callback , refetchcb}) => {
    const [opened, setOpened] = useState(open);
    const [uploaded, setUploaded] = useState(false);
    const [loading, setLoading] = useState(false);
    const [fileError, setFileError] = useState(false);
    const [progress , setProgress] = useState(0);
    const [removed, setRemoved] = useState(false);
    const [data, setData] = useState({
        companyName: '',
        companyAddress: '',
        companyPostalCode: '',
        companyCity: '',
        companyVAT: '',
        companyIBAN: '',
        companySWIFT: '',
        companyBankname: '',
        companyMaticnast: '',
        companyPhone: '',
        createdby: '',
        sign: ''

    })
    const handleImage= (e) => {
        const reader = new FileReader();
        const file = e.target.files[0];
        reader.readAsDataURL(file);
        reader.onloadstart = (e) => {
            setLoading(true);
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
        reader.onprogress = (e) => {
            setProgress(Math.round((e.loaded / e.total) * 100));
        }
        reader.onloadend = (e) => {
            let base64 = reader.result;
            setData({
                ...data,
                sign: base64
            })
            setLoading(false);
            setUploaded(true);
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
        setProgress(0);
    }
    const handleRemove = () => {
        setRemoved(true);
        setData({
            ...data,
            sign: ''
        })
        toast('Image removed...', {
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
        setUploaded(false);
    }
    const handleSave = () => {
        console.log("save");
        console.log(data)
        updateUserProfile(data).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })
        window.location.reload();
        //Post and update data to server if changed
    }

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    const handleCreate = () => {
        createCompany(data).then((res) => {
            console.log(res);
            refetchcb();
            toast('Company created...')
            callback();
        }).catch((err) => {
            console.log(err);
        })
        console.log('Created')
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
                                           label="Company Name"
                                           type="email"
                                           fullWidth
                                           variant="standard"
                                             name="companyName"
                                           onChange={handleChange}
                                           required
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
                                           variant="standard"
                                           name="companyAddress"
                                           onChange={handleChange}
                                           required
                                />
                            </div>
                            <div>
                                <TextField sx={style}
                                           autoFocus
                                           margin="dense"
                                           id="name"
                                           label="Postal code"
                                           type="string"
                                           fullWidth
                                           onChange={handleChange}
                                           variant="standard"
                                           name="companyPostalCode"
                                           required
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
                                            onChange={handleChange}
                                           variant="standard"
                                           name="companyCity"
                                           required
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
                                           onChange={handleChange}
                                           variant="standard"
                                           name="companyVAT"
                                           required
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
                                           onChange={handleChange}
                                           variant="standard"
                                           name="companyIBAN"
                                           required
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
                                           onChange={handleChange}
                                           variant="standard"
                                           name="companySWIFT"
                                           required
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
                                           onChange={handleChange}
                                           variant="standard"
                                           name="companyBankname"
                                           required
                                />
                            </div>
                            <div>
                                <TextField sx={style}
                                           autoFocus
                                           margin="dense"
                                           id="name"
                                           name="companyMaticnast"
                                           label="Registration Number"
                                           type="email"
                                           fullWidth
                                           onChange={handleChange}
                                           variant="standard"
                                           required
                                />
                            </div>
                            <div>
                                <TextField sx={style}
                                           autoFocus
                                           margin="dense"
                                           id="name"
                                           name="companyPhone"
                                           label="Company Phone"
                                           type="email"
                                           fullWidth
                                           onChange={handleChange}
                                           variant="standard"
                                           required
                                />
                            </div>
                            <div>
                                <TextField sx={style}
                                           required
                                           autoFocus
                                           margin="dense"
                                           name="createdby"
                                           label="Owner"
                                           type="email"
                                           onChange={handleChange}
                                           fullWidth
                                           variant="standard"
                                />
                            </div>
                            <div className={"flex rounded-lg border-3 pt-5 space-x-5"}>
                                {data?.sign ?
                                    <div>
                                        <div>
                                            <img src={data.sign} alt={"sign"} width={"200"} height={"100"}/>
                                        </div>
                                        <div>
                                            <div className={"pt-3"}>
                                                <Button onClick={handleRemove} variant={"contained"} color={"error"}>
                                                    <h1>
                                                        Remove Sign
                                                    </h1>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>:
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
                                </IconButton>}

                            </div>
                            <div className={"flex space-x-5"}>
                                <div className={"pt-6"}>
                                    <Button onClick={handleCreate} variant={"contained"} color={"success"}>
                                        Create
                                    </Button>
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

export default CreateCompanyDialog;