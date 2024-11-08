import React, { useState } from 'react';
import {
    Container, TextField, Button, Box, Modal, Typography, List, ListItem, ListItemIcon, ListItemText, Checkbox, CircularProgress, IconButton
} from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import API from '../../../API';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';

const DeployAdminPanel = () => {
    const { panelSlug } = useParams()
    const [domain, setDomain] = useState('');
    const [platformTitle, setPlatformTitle] = useState('');
    const [panelUrl, setPanelUrl] = useState(`https://tools.dkv.global/product/${panelSlug}`);
    const [modalOpen, setModalOpen] = useState(false);
    const [responseMessage, setResponseMessage] = useState('');
    const [checked, setChecked] = useState([false, false, false]);
    const [status, setStatus] = useState('');

    const StatusIcon = ({ status }) => {
        switch (status) {
            case 'success':
                return <CheckCircleIcon color="success" sx={{ fontSize: 40, mb: 2 }} />;
            case 'error':
                return <ErrorIcon color="error" sx={{ fontSize: 40, mb: 2 }} />;
            case 'loading':
                return <CircularProgress color="primary" sx={{ mb: 2 }} />;
            default:
                return null;
        }
    };
    const checklist = [
        'Connected the IP 172.187.157.71 to the domain.',
        'The domain is valid.',
        'Domain is active.',
    ];

    const handleToggle = (index) => () => {
        const newChecked = [...checked];
        newChecked[index] = !newChecked[index];
        setChecked(newChecked);
    };

    const allChecked = checked.every(Boolean);
    // Submit form
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!allChecked) {
            setStatus('error');
            setResponseMessage('Please ensure all checklist items are completed.');
            setModalOpen(true);
            return;
        }
        const data = { domain: domain, panel_url: panelUrl, diagram_slug: panelSlug, platform_title: platformTitle };
        setStatus('loading');
        try {
            const response = await API.deployAdminDashboard(data);
            console.log("response: ", response)
            setResponseMessage(response?.data?.message || "Successfully deployed");
            setStatus('success');
            setModalOpen(true);
        } catch (error) {
            console.log("error: ", error)
            if (error?.response?.status === 400) {
                const { data  } = error.response;
                Object.keys(data).forEach((key) => {
                    setStatus('error');
                    setResponseMessage(data[key]);
                    setModalOpen(true);
                });
            } else {
                setResponseMessage(error.message);
                setStatus('error');
                setModalOpen(true);
            }
            setStatus('error');
            setModalOpen(true);
        } finally {
            console.log("done: ")
            setStatus('');
        }
    };

    return (
        <Container maxWidth="sm">
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    mt: 4,
                    p: 3,
                    boxShadow: 3,
                    borderRadius: 2,
                }}
            >
                <Typography variant="h5" component="div" gutterBottom>
                    Deployment Manager
                </Typography>
                <Typography component="h6">
                    Please make sure you have completed the following
                </Typography>
                <List>
                    {checklist.map((item, index) => (
                        <ListItem key={index} disablePadding>
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={checked[index]}
                                    tabIndex={-1}
                                    disableRipple
                                    onChange={handleToggle(index)}
                                />
                            </ListItemIcon>
                            <ListItemText primary={item} />
                            {item === checklist[0] && (
                                <Link
                                    sx={{ marginLeft: 2 }}
                                    to="https://support.wix.com/en/article/connecting-a-subdomain-to-an-external-resource"
                                    target="_blank"
                                >
                                    How?
                                </Link>
                            )}
                        </ListItem>
                    ))}
                </List>
                <div style={{ display: "flex", flexDirection: "column", gap: ".4rem" }}>
                    <TextField
                        label="Platform Title"
                        value={platformTitle}
                        onChange={(e) => setPlatformTitle(e.target.value)}
                        required
                    />
                    <Typography color={"text.secondary"} fontSize={"12px"}>
                        Eg: Business Dev & Sales
                    </Typography>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: ".4rem" }}>
                    <TextField
                        label="Domain Name"
                        value={domain}
                        onChange={(e) => setDomain(e.target.value)}
                        required
                    />
                    <Typography color={"text.secondary"} fontSize={"12px"}>
                        Eg: tools.dkv.global
                    </Typography>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: ".4rem" }}>
                    <TextField
                        label="Panel URL"
                        value={panelUrl}
                        onChange={(e) => setPanelUrl(e.target.value)}
                        required
                    />
                    <Typography color={"text.secondary"} fontSize={"12px"}>
                        Eg: https://tools.dkv.global/product/{panelSlug}
                    </Typography>
                </div>
                <Button type="submit" variant="contained" color="primary" disabled={status === 'loading'}  >
                    {
                        status === 'loading' ? <div><CircularProgress sx={{ color: 'white' }} size={20} /> Deploying...</div>  : "Deploy"
                    }
                </Button>
            </Box>

            <Modal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        bgcolor: 'background.paper',
                        borderRadius: 2,
                        boxShadow: 24,
                        p: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                    }}
                >
                    <IconButton
                        sx={{
                            position: 'absolute',
                            top: 8,
                            right: 8,
                        }}
                        onClick={() => setModalOpen(false)}
                    >
                        <CloseIcon />
                    </IconButton>
                    <StatusIcon status={status} />
                    <Typography id="modal-title" variant="h6" component="h2">
                        Deployment Status
                    </Typography>
                    <Typography id="modal-description" sx={{ mt: 2 }}>
                        {responseMessage}
                    </Typography>
                    <Button onClick={() => setModalOpen(false)} sx={{ mt: 2 }} variant="contained">
                        Close
                    </Button>
                </Box>
            </Modal>
        </Container>
    );
};

export default DeployAdminPanel;
