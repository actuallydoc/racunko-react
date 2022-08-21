import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Table from '../Table/Table'
import AllButton from "./Components/AllButton";
import PaidButton from "./Components/PaidButton";
import CompanyButton from "./Components/CompanyButton";
import PartnerButton from "./Components/PartnerButton";
import MessageButton from "./Components/MessageButton";
import HelpButton from "./Components/HelpButton";
import ContactButton from "./Components/ContactButton";
import UnpaidButton from "./Components/UnpaidButton";
import BugButton from "./Components/BugButton";
import {toast} from "react-toastify";
import CompanyDialog from '../Dialogs/CompaniesDialog/CompanyDialog'
import {fetchUserInvoices} from "../../../services/invoiceServices";
import PartnerDialog from "../Dialogs/PartnerDialogs/PartnerDialog";
import Button from "@mui/material/Button";
const drawerWidth = 250;

export default function SideBar({children}) {

    const [companyDialog, setCompanyDialog] = useState(false);
    const handleCompanyDialog = () => {
        setCompanyDialog(!companyDialog);
    }
    const [partnerDialog, setPartnerDialog] = useState(false);
    const handlePartnerDialog = () => {
        setPartnerDialog(!partnerDialog);
    }
     const [all, setAll] = useState(true);
     const [paid, setPaid] = useState(false);
     const [unpaid, setUnpaid] = useState(false);
     const [company, setCompany] = useState(false);
     const [partner, setPartner] = useState(false);
     const [service, setService] = useState(false);
     const [message , setMessage] = useState(false);
     const [invoices , setInvoices] = useState([]);

     const [fetch, setFetch] = useState(false);
     useEffect(()=>{
         fetchUserInvoices().then(res=>{
                setInvoices(res.data);
         }).catch(err=>{
                console.log(err)
         })
     }, []);

     useEffect(()=>{
         fetchUserInvoices().then(res=>{
             setInvoices(res.data);
             console.log(res.data)
         }).catch(err=>{
             console.log(err)
         })
     }, [fetch])

    const refetchcb = () => {
        console.log("refetching")
        setFetch(!fetch);
    }


     const handleAll = () => {
         toast('All')
            setAll(true);
            setPaid(false);
            setUnpaid(false);
            setCompany(false);
            setPartner(false);
            setService(false);
            setMessage(false);
     }
        const handlePaid = () => {
            toast('Paid')
            setAll(false);
            setPaid(true);
            setUnpaid(false);
            setCompany(false);
            setPartner(false);
            setService(false);
            setMessage(false);
        }
        const handleUnpaid = () => {
            toast('Unpaid')
            setAll(false);
            setPaid(false);
            setUnpaid(true);
            setCompany(false);
            setPartner(false);
            setService(false);
            setMessage(false);
        }
        const handleCompany = () => {
            setCompany(true);
            setCompanyDialog(true);
        }
        const handlePartner = () => {
            toast('Partner')
            setAll(all);
            setPaid(paid);
            setUnpaid(unpaid);
            setCompany(company);
            setPartner(true);
            setPartnerDialog(true)
            setService(service);
            setMessage(message);
        }
        const handleService = () => {
            toast('Service')
            setAll(false);
            setPaid(false);
            setUnpaid(false);
            setCompany(false);
            setPartner(false);
            setService(true);
            setMessage(false);
        }
        const handleMessage = () => {
            toast('Message')
            setAll(false);
            setPaid(false);
            setUnpaid(false);
            setCompany(false);
            setPartner(false);
            setService(false);
            setMessage(true);
        }
    return (
        <div>
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                {children}
            </AppBar>
        </Box>
            <div>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <Toolbar />
                <Box>
                    <List>
                        <AllButton callback={handleAll}/>
                        <PaidButton callback={handlePaid}/>
                        <UnpaidButton callback={handleUnpaid}/>
                    </List>
                    <Divider />
                    <List>
                        <CompanyButton callback={handleCompany}/>
                        <PartnerButton callback={handlePartner}/>
                        <MessageButton callback={handleMessage}/>
                    </List>
                    <Divider />
                    <List>
                        <HelpButton callback={handleService} />
                        <ContactButton/>
                        <BugButton/>
                    </List>
                </Box>
            </Drawer>
            </div>
            {company && <CompanyDialog open={companyDialog} callback={handleCompanyDialog}/>}
            {partner && <PartnerDialog open={partnerDialog} callback={handlePartnerDialog}/>}
            {all && <div className={"pt-5 text-center pl-24"}>
                <Table refetchcb={refetchcb} data={invoices}/>
            </div>}



</div>
    );
}