import React, {useEffect, useState} from 'react';
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Slide from "@mui/material/Slide";
import {getUserPartners} from "../../../../services/partnerServices";
import {Alert, DialogContentText} from "@mui/material";
import PartnerItem from "./PartnerItem";
import PartnerInfoDialog from "./PartnerInfoDialog/PartnerInfoDialog";
import PartnerCreateDialog from "./PartnerCreateDialog/PartnerCreateDialog";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});




const PartnerDialog = ({open ,callback}) => {
    const [opened, setOpened] = useState(false)
    const [partners, setPartners] = useState([]);
    const [fetch, setFetch] = useState(false)
    useEffect(()=>{
        getUserPartners().then(res=>{
            setPartners(res.partners)
        }).catch(err=> {
            console.log(err)
        })
    },[])
    useEffect(()=>{
        getUserPartners().then(res=>{
            setPartners(res.partners)
            console.log(res.partners)
        }).catch(err=> {
            console.log(err)
        })
    },[fetch])

    const refetchData = ()=>{
        setFetch(!fetch)
    }

    const handleOpen = ()=>{
        setOpened(true)
    }
    const handleClose = ()=>{
        setOpened(!opened)
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
                <DialogTitle>{"Partner Manager"}</DialogTitle>

                <DialogContent>
                    <DialogActions>
                        <div className={"pb-1"}>
                            <Button onClick={handleOpen} variant={"contained"} color={"success"}>Create</Button>
                        </div>
                    </DialogActions>
                    <DialogContentText id="alert-dialog-slide-description">
                        <div className={"rounded-lg"}>
                            {partners.length != 0  ? partners.map(partner=>{
                                return <PartnerItem data={partner} refetchcb={refetchData}/>
                            })
                                : <div>
                                <Alert severity="error">No Partners found!</Alert>
                            </div>}
                        </div>
                    </DialogContentText>
        <DialogActions>

            <div>

                <div className={"pb-1"}>
                    <Button onClick={callback}  color={"error"}>X</Button>
                </div>
            </div>

        </DialogActions>
        </DialogContent>
        </Dialog>
            {opened ? <PartnerCreateDialog data={partners} refetchcb={refetchData} open={opened} callback={handleClose}/> : null}
        </div>
    );
};

export default PartnerDialog;