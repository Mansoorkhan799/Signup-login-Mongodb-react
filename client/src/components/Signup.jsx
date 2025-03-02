import React, { useState } from 'react';
import { Box, Paper, TextField, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Signup = () => {
    const heading={fontSize: "2.5rem", fontWeight: "600"};
    const paperStyle={padding: "2rem", margin: "100px auto", borderRadius: "1rem", boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.1)"};
    const row={display: "flex", marginTop: "2rem"};
    const btnStyle={marginTop: "2rem", fontSize: "1.5rem", fontWeight: "300", backgroundColor: "green", color: "white", borderRadius: "0.5rem"};

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/signup", { name, email, password })
            .then(result => {
                if (result.status == 201) {
                    console.log("User created Successfully");
                    navigate('/login');
                }
            })
            .catch(err => {
                if (err.response && err.response.status === 409) {
                    window.alert("Email already exists, please use a different email");
                } else {
                    console.log(err);
                }
            });
    };

    return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
            <Paper sx={{
                width: {
                    xs: '80vw',
                    sm: '50vw',
                    md: '40vw',
                    lg: '30vw',
                    xl: '20vw'
                },
                height: '60vh',
                padding: "2rem",
                margin: "100px auto",
                borderRadius: "1rem",
                boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.1)"
            }}>
                <Typography sx={{ fontSize: "2.5rem", fontWeight: "600" }}>Signup</Typography>
                <form onSubmit={handleSignup}>
                    <TextField 
                        onChange={(e) => setName(e.target.value)} 
                        name="name" 
                        required 
                        sx={{ label: { fontWeight: 700, fontSize: "1.3rem" }, mt: 2 }} 
                        label="Enter Name" 
                        type='text' 
                        autoComplete="name"
                    />
                    <TextField 
                        onChange={(e) => setEmail(e.target.value)} 
                        name="email" 
                        required 
                        sx={{ label: { fontWeight: 700, fontSize: "1.3rem" }, mt: 2 }} 
                        label="Enter Email" 
                        type='email' 
                        autoComplete="email"
                    />
                    <TextField 
                        onChange={(e) => setPassword(e.target.value)} 
                        name="password" 
                        required 
                        sx={{ label: { fontWeight: 700, fontSize: "1.3rem" }, mt: 2 }} 
                        label="Enter Password" 
                        type='password' 
                        autoComplete="new-password"
                    />
                    <Button 
                        type="submit" 
                        variant="contained" 
                        sx={{ mt: 2, fontSize: "1.5rem", fontWeight: "300", backgroundColor: "green", color: "white", borderRadius: "0.5rem" }}
                    >
                        Signup
                    </Button>
                </form>
            </Paper>
        </Box>
    )
}
