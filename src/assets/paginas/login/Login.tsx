import React from 'react'
import './Login.css'
import { Grid, Box, Typography, TextField, Button, Stack } from '@mui/material'
import { Link } from 'react-router-dom'


function Login() {
  return (
    <>
        <Grid container>
            <Grid item xs={6}>
                <Box>
                    <form>
                        <Stack spacing={2} direction={'column'} justifyContent="center" alignItems="center" style={{minHeight: '100vh'}}>
                            <h1>Login</h1>
                            <TextField label='Nome de usuário' className='user'/>
                            <TextField label='Senha' type='password' className='pass'/>
                            <Link to='/home'>
                                <Button variant='contained' style={{backgroundColor: "#810081"}}>Login</Button>
                            </Link>
                        </Stack>
                    </form>
                </Box>
            </Grid>
            <Grid item xs={6} className="imagemLogin">
                
            </Grid>
        </Grid>
    </>
  )
}

export default Login