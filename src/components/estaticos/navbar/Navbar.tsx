import React from 'react';
import './Navbar.css'
import { AppBar, Divider, Toolbar, Typography } from '@material-ui/core';
import {Box} from '@mui/material';
function Navbar() {
    return (
        <>
            <AppBar position="static" >
                <Toolbar variant="dense" style={{background: "#810081"}} className='Navbar'>
                    <Box style={{ cursor: "pointer" }} >
                        <Typography variant="h5" color="inherit" >
                            BlogPessoal - Vinicius
                        </Typography>
                        
                    </Box>
                    
                    <Box display="flex" justifyContent="start" gap={{sm: 6}} marginLeft={6}>
                    <Divider orientation="vertical" flexItem/>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit" className='MenuBtn' style={{}}>
                                Home
                            </Typography>
                        </Box>
                        <Divider orientation="vertical" flexItem/>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                Postagens
                            </Typography>
                        </Box>
                        <Divider orientation="vertical" flexItem/>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                Temas
                            </Typography>
                        </Box>
                        <Divider orientation="vertical" flexItem/>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                Cadastrar Tema
                            </Typography>
                        </Box>
                        <Divider orientation="vertical" flexItem/>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                Logout
                            </Typography>
                        </Box>
                        <Divider orientation="vertical" flexItem/>
                    </Box>

                </Toolbar>
            </AppBar>
            
        </>
    )
}

export default Navbar;