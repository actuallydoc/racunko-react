import React from 'react';
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ListItemText from "@mui/material/ListItemText";

const CompanyButton = ({callback}) => {
    return (
        <div>
            <ListItem key={'Company'} disablePadding>
                <ListItemButton onClick={callback}>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Company'} />
                </ListItemButton>
            </ListItem>
        </div>
    );
};

export default CompanyButton;