import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Box } from '@mui/material';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            {/* Background Gradient */}
            <Box
                sx={{
                    minHeight: "100vh",
                    width: "100vw",
                    background: "linear-gradient(to right, #84fab0, #8fd3f4)",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    zIndex: -1, // Keeps it behind everything
                }}
            />
            {/* Routes and Centered Forms */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "100vh",
                }}
            >
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/home" element={<Home />} />
                    
                </Routes>
            </Box>
        </BrowserRouter>
    );
}

export default App;
