import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    container: {
        marginTop: 64
    }
}));

export default function Content({children}) {
    const classes = useStyles();
    return (<div className={classes.container}>{children}</div>)
}