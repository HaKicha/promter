import React from 'react';
import {inject, observer} from "mobx-react";
import {SwipeableDrawer, List, Divider} from "@material-ui/core";
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import CreateIcon from '@material-ui/icons/Create';
import ListIcon from '@material-ui/icons/List';
import SettingsIcon from '@material-ui/icons/Settings';
import {EDITOR, PROMTER, SETTINGS, SPEECH_LIST} from "@/utils/routes";
import NavItem from "@/components/NavPane/NavItem";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    list: {
        width: 250
    }
}))

const NavPane = inject('uiStore')(observer(({uiStore}) => {

    const classes = useStyles();

    return(
        <SwipeableDrawer
            onClose={uiStore.closeDrawer}
            onOpen={uiStore.openDrawer}
            open={uiStore.isDrawerOpen}
        >
            <List className={classes.list}>
                <NavItem
                    path={PROMTER}
                    icon={<PlaylistPlayIcon/>}
                    text='Promter'
                />
                <NavItem
                    path={EDITOR}
                    icon={<CreateIcon/>}
                    text='Edit'
                />
                <NavItem
                    path={SPEECH_LIST}
                    icon={<ListIcon/>}
                    text='List'
                />
                <Divider />
                <NavItem
                    path={SETTINGS}
                    icon={<SettingsIcon/>}
                    text='Settings'
                />
            </List>
        </SwipeableDrawer>
    )

}));

export default NavPane;
