import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Container, Typography, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Snackbar, Alert } from '@mui/material';
import API from '../API';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex !important',
        flexDirection: 'column',
        alignItems: 'center',
        justifyItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
    },
}));

const ErrorPage = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const { user } = useSelector((state) => state);
    const [ reqStatus, setReqStatus ] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const navigate = useNavigate();

    const handleRequestAccess = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    const useHasAccessPlatform = async () => {
        try {
            const response = await API.getPlatformAccessStatus();
            setReqStatus(response?.status);
            setSnackbarMessage(response?.message);
        } catch (error) {
            setSnackbarMessage(`Request failed: ${error?.response?.data?.message}`);
            setReqStatus(error?.response?.data?.req_status);
            setSnackbarOpen(true);
        }
    }

    useEffect(() => {
        useHasAccessPlatform()
    }, [user]);

    const requestPlatformAccess = async () => {
        try {
            const response = await API.requestPlatformAccess();
            setSnackbarMessage(response?.message);
            setSnackbarOpen(true);
            useHasAccessPlatform();
            navigate("/")
        } catch (error) {
            setSnackbarMessage(`Request failed: ${error?.response?.data?.message}`);
            setSnackbarOpen(true);
        } finally {
            setOpen(false);
        }
    };

    return (
        <Container>
            <div className={classes.root}>
                <Typography variant="h4" className={classes.message}>
                    Non-Authorized Access
                </Typography>
                <Typography variant="body1">
                    You do not have permission to view this page. Please contact support.
                </Typography>
                {
                    !reqStatus ?
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={handleRequestAccess}
                >
                    Request Access
                </Button>
                :
                <p>
                    Request Status: {reqStatus}
                </p>
                }
            </div>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Request Access</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Do you want to request access to view the project components?
                    </DialogContentText>
                </DialogContent>
                <DialogActions >
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={requestPlatformAccess} color="primary" autoFocus>
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>

            <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
                <Alert onClose={handleSnackbarClose} severity="info" sx={{ width: '100%' }}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </Container>
    );
};

export default ErrorPage;