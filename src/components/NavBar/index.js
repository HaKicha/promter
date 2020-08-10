import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ProfileButton from "./ProfileButton";
import LoginButton from "./LoginButton";
import {inject, observer} from "mobx-react";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const NavBar = inject('userStore', 'uiStore')(observer(({userStore, uiStore}) => {
    const classes = useStyles();

    function toggleDrawer() {
        uiStore.isDrawerOpen ? uiStore.closeDrawer() : uiStore.openDrawer();
    }

    return (
        <AppBar position="fixed">
            <Toolbar>
                <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="menu"
                    onClick={toggleDrawer}
                >
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    News
                </Typography>
                {userStore.user ? <ProfileButton user={userStore.user} /> : <LoginButton />}

            </Toolbar>
        </AppBar>
    )
}));

export default NavBar;