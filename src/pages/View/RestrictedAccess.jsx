import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import { useNavigate } from 'react-router-dom';

const RestrictedAccess = () => {
    const navigate = useNavigate()
    const handleGoBack = () => {
        // Logic to go back to the previous page or home page
        navigate('/');
    };

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="100vh"
            sx={{ backgroundColor: '#f5f5f5', textAlign: 'center', padding: 3 }}
        >
            <LockIcon sx={{ fontSize: 60, color: '#ff1744', marginBottom: 2 }} />
            <Typography variant="h4" gutterBottom>
                Restricted Access
            </Typography>
            <Typography variant="body1" gutterBottom>
                You don't have permission to view this page.
            </Typography>
            <Button variant="contained" color="primary" onClick={handleGoBack}>
                Go Back
            </Button>
        </Box>
    );
};

export default RestrictedAccess;
