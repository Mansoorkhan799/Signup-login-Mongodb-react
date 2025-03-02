import React, { useState } from 'react';
import { Box, Paper, TextField, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/login", { email, password })
            .then(result => {
                localStorage.setItem('token', result.data.token);
                navigate('/home');
            })
            .catch(err => alert(err.response.data.error));
    };

    return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
            <Paper sx={{ padding: "2rem", borderRadius: "1rem", boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.1)", textAlign: "center" }}>
                <Typography sx={{ fontSize: "2.2rem", fontWeight: "bold" }}>Login</Typography>
                <form onSubmit={handleLogin}>
                    <TextField fullWidth label="Email" type='email' onChange={(e) => setEmail(e.target.value)} required sx={{ mt: 2 }} />
                    <TextField fullWidth label="Password" type='password' onChange={(e) => setPassword(e.target.value)} required sx={{ mt: 2 }} />
                    <Button type="submit" variant="contained" sx={{ mt: 2, backgroundColor: "green", color: "white" }}>Login</Button>
                </form>
            </Paper>
        </Box>
    );
};