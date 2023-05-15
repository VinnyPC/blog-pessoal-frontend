import React from 'react';
import './Navbar.css'
import { AppBar, Button, Divider, Toolbar, Typography } from '@material-ui/core';
import {Box} from '@mui/material';
function Navbar() {
    return (
        <>
            <AppBar position="static" className='Appbar' >
                <Toolbar variant="dense" style={{background: "#810081", justifyContent: 'space-around'}} className='Navbar'>
                    <Box style={{ cursor: "pointer" }} className='Navbar-Logo'>
                        <Typography variant="h5" color="inherit" >
                            BlogPessoal - Vinicius
                        </Typography>
                        
                    </Box>
                    
                    <Box display="flex">
                            
                            <Box px={1} style={{ cursor: "pointer" }} className='NavbarLink -NavbarLink'>
                                <Button variant="text" style={{color: "white" }}>Home</Button>
                            </Box>
                            
                            <Box px={1} style={{ cursor: "pointer" }} className='NavbarLink'>
                            <Button variant="text" style={{color: "white" }}>Postagens</Button>
                            </Box>
                            
                            <Box px={1} style={{ cursor: "pointer" }} className='NavbarLink'>
                            <Button variant="text" style={{color: "white" }}>Temas</Button>
                            </Box>

                            <Box px={1} style={{ cursor: "pointer" }} className='NavbarLink'>
                            <Button variant="text" style={{color: "white" }}>Cadastrar Tema</Button>
                            </Box>
                            
                            <Box px={1} style={{ cursor: "pointer" }} className='NavbarLink NavbarLink-'>
                            <Button variant="text" style={{color: "white" }}>Logout</Button>
                            </Box>
                            
                    </Box>

                </Toolbar>
            </AppBar>
            
        </>
    )
}

export default Navbar;