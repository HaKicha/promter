import React from 'react';
import {NavLink} from "react-router-dom";
import {ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import {inject} from "mobx-react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    listItem: {
        color: theme.palette.text.primary
    },
    link: {
        textDecoration: 'none'
    }
}));

const NavItem = inject('uiStore')(({uiStore, path, icon, text}) => {

    const classes = useStyles();

    return (
        <NavLink
            to={path}
            onClick={uiStore.closeDrawer}
            className={classes.link}
        >
            <ListItem className={classes.listItem}>
                <ListItemIcon>
                    {icon}
                </ListItemIcon>
                <ListItemText>{text}</ListItemText>
            </ListItem>
        </NavLink>
    )
});

export default NavItem;
