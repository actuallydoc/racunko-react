import React, {useEffect, useState} from 'react';
import Button from "@mui/material/Button";
import DialogContent from "@mui/material/DialogContent";
import {Alert, DialogContentText} from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import Slide from "@mui/material/Slide";
import {fetchCompanyData} from "../../../../services/companyServices";
import CompanyItem from "./CompanyItem";
import CreateCompanyDialog from "./CreateCompany/CreateCompanyDialog";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const CompanyDialog = ({open, callback}) => {
    const [companyData, setCompanyData] = useState([]);
    const [fetch, setFetch] = useState(false)
    const [createCompany, setCreateCompany] = useState(false)
    useEffect(()=>{
        fetchCompanyData().then(res=>{
            setCompanyData(res.companies)
        }).catch(err=>{
            console.log(err)
        });
    }, [])

    useEffect(()=>{
        fetchCompanyData().then(res=>{
            setCompanyData(res.companies)
        }).catch(err=>{
            console.log(err)
        });
    }, [fetch])
    const openCreateCompany = ()=>{
        setCreateCompany(true)
    }
    const closeCreateCompany = ()=>{
        setCreateCompany(!createCompany)
    }
    const refetchData = ()=>{
        setFetch(!fetch)
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
                    <DialogActions>
                        <div className={"pb-1"}>
                            <Button onClick={openCreateCompany} variant={"contained"} color={"success"}>Create</Button>
                        </div>
                    </DialogActions>
                    <DialogContentText id="alert-dialog-slide-description">
                        <div className={"rounded-lg"}>
                            {companyData  != 0 ? companyData.map(data=> {
                                return (
                                    <div className={""}>
                                        <div className={"pb-2"}>
                                            <CompanyItem data={data} refetchcb={refetchData}/>
                                        </div>

                                    </div>

                                )}): <div>
                                <Alert severity="error">No companies found!</Alert>
                            </div>}
                        </div>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={callback}>X</Button>
                </DialogActions>
            </Dialog>
            {createCompany && <CreateCompanyDialog refetchcb={refetchData} open={createCompany} callback={closeCreateCompany}/>}
        </div>
    );
};

export default CompanyDialog;