import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from "@material-ui/core/Button";
import * as firebase from "firebase";
import {FACEBOOK_AUTH_PROVIDER, GOOGLE_AUTH_PROVIDER} from "@/utils/providers";
import googleLogo from '@res/google_icon.png';
import facebookLogo from '@res/facebook_icon.png';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 150
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        outline: 'none',
        borderRadius: theme.shape.borderRadius,
        display: 'flex',
        flexDirection: 'column'
    },
    icon: {
        height: 32,
        width: 32
    },
    button: {
        width: '100%',
        textTransform: 'none',
        justifyContent: 'left',
        boxShadow: '0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);',
        marginBottom: 10
    },
    facebookButton: {
        background: '#3b5998',
        color: 'white',
        '&:hover': {
            background: '#36518b'
        }
    }
}));

export default function LoginButton() {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button color="inherit" onClick={handleOpen}>Login</Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <Button
                            startIcon={<img className={classes.icon} src={googleLogo} alt="Google Logo"/>}
                            className={classes.button}
                            onClick={() => firebase.auth().signInWithPopup(GOOGLE_AUTH_PROVIDER)}
                        >SignIn with Google</Button>
                        <Button
                            startIcon={<img className={classes.icon} src={facebookLogo} alt="Google Logo"/>}
                            className={[classes.button, classes.facebookButton]}
                            onClick={() => firebase.auth().signInWithPopup(FACEBOOK_AUTH_PROVIDER)}
                        >SignIn with Facebook</Button>
                    </div>
                </Fade>
            </Modal>
        </>
    );
}