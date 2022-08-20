import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const BootstrapDialogTitle = ({children}) => {


    return (
        <DialogTitle sx={{ m: 0, p: 2 }}>

                {children}


        </DialogTitle>
    );
};



export default function PDFDialog({open ,base64,signedBase64, callback}) {
    const [text, setText] = useState('PDF');
    const [docState, setDocState] = useState(true);
    return (
        <div>
            <BootstrapDialog
                onClose={callback}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <DialogContent dividers>
                    {base64 && docState ? <embed src={base64} width={"500"} height={"700"} /> : null}
                    {!docState && signedBase64 ? <embed src={signedBase64} width={"500"} height={"700"} /> : null}
                </DialogContent>
                <DialogActions>

                    <Button onClick={()=> {
                        setDocState(true)
                        setText('PDF')
                    }}>
                        <div>
                            <p>PDF</p>
                        </div>
                    </Button>

                    <Button onClick={()=> {
                        setDocState(!text);
                        setText("Signed PDF");
                    }}>
                        <div>
                            <p>SIGNED PDF</p>
                        </div>
                    </Button>
                    <Button autoFocus onClick={()=>{
                        callback();
                    }} color="error">
                        Close
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </div>
    );
}