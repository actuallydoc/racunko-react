import React from 'react';
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ListItemText from "@mui/material/ListItemText";

const BugButton = ({callback}) => {
    return (
        <div>
            <ListItem key={'Report a bug!'} disablePadding>
                <ListItemButton onClick={callback}>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Report a bug'} />
                </ListItemButton>
            </ListItem>
        </div>
    );
};

export default BugButton;