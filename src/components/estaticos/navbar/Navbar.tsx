import React from 'react';
import './Navbar.css'
import { AppBar, Button, Divider, Toolbar, Typography } from '@material-ui/core';
import {Box, Stack} from '@mui/material';
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <>
            <AppBar position="static" className='Appbar'>
                <Toolbar variant="dense" style={{background: "#810081", justifyContent: 'space-between'}} className='Navbar'>
                    <Box style={{ cursor: "pointer" }} className='Navbar-Logo'>
                        <Typography variant="h5" color="inherit" >
                            BlogPessoal - Vinicius
                        </Typography>
                        
                    </Box>
                    
                    <Stack direction={'row'} gap={5}>
                            
                            <Box px={1} style={{ cursor: "pointer" }} className='NavbarLink'>
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
                            
                            <Link to='/login'>
                                <Box px={1} style={{ cursor: "pointer" }} className='NavbarLink'>
                                <Button variant="text" style={{color: "white" }}>Logout</Button>
                                </Box>
                            </Link>
                        </Stack>

                </Toolbar>
            </AppBar>
            
        </>
    )
}

export default Navbar;