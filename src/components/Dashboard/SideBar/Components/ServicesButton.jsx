import React from 'react';
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ListItemText from "@mui/material/ListItemText";

const ServicesButton = ({callback}) => {
    return (
        <div>
            <ListItem key={'Services'} disablePadding>
                <ListItemButton onClick={callback}>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Services'} />
                </ListItemButton>
            </ListItem>
        </div>
    );
};

export default ServicesButton;