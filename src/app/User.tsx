import { createStyles, makeStyles } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useCallback, useState } from 'react';

const useStyle = makeStyles(() => createStyles({
    avatar: {
        cursor: 'pointer'
    }
}));

export default function User(): JSX.Element {
    const classes = useStyle();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    
    const handleAvatarClick = useCallback((event: any) => {
        setAnchorEl(event.currentTarget);
    }, [anchorEl]);

    const handleClose = useCallback((event: any) => {
        setAnchorEl(null);
        console.log(event);
    }, [anchorEl]);

    return (
        <>
            <Avatar aria-controls="simple-menu" aria-haspopup="true"
                className={classes.avatar} onClick={handleAvatarClick}>AB</Avatar>
            <Menu id="simple-menu" anchorEl={anchorEl} keepMounted
                open={Boolean(anchorEl)} onClose={handleClose}>
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </>
    );
}