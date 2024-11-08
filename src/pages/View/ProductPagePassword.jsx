import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const ProductPagePassword = ({setPassword, password, handleSubmit, hasError=false}) => {

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    return (
        <div style={{ display: 'flex',  alignItems: 'center', height: '100vh' }}>
            <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            sx={{ maxWidth: 800, margin: '0 auto', padding: 3, boxShadow: 3, borderRadius: 2, backgroundColor: '#f5f5f5' }}
        >
            <Typography variant="h6" gutterBottom>
                Enter Password
            </Typography>
            <TextField
                type="password"
                label="Password"
                variant="outlined"
                fullWidth
                value={password}
                onChange={handlePasswordChange}
                sx={{ marginBottom: 2 }}
            />
            {hasError && (
                <Typography variant="body1" color="error" gutterBottom>
                    Incorrect password. Please try again.
                </Typography>
            )}
            <Button variant="contained" color="primary" onClick={() => handleSubmit()}>
                Submit
            </Button>
        </Box>
        </div>
    );
};

export default ProductPagePassword;
