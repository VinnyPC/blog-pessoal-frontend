import React from 'react';
import { Grid,Typography, Button, TextField } from '@material-ui/core';
import {Box} from '@mui/material';
import { Link } from 'react-router-dom';
import './CadastroUsuario.css';
import { Margin } from '@mui/icons-material';

function CadastroUsuario() {
    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={6} className='imagem2'></Grid>
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={10}>
                    <form>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos2'>Cadastrar</Typography>
                        <TextField id='nome' label='Nome' variant='outlined' name='nome' margin='normal' fullWidth className='inputCadastro'/>
                        <TextField id='usuario' label='Usuario' variant='outlined' name='usuario' margin='normal'fullWidth className='inputCadastro' />
                        <TextField id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth className='inputCadastro' />
                        <TextField id='confirmarSenha' label='Confirmar Senha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth className='inputCadastro' />
                        <Box marginTop={2} textAlign='center' display={'flex'} justifyContent={'center'} gap={5}>
                        <Link to='/login'>
                            <Button variant='contained' style={{backgroundColor: "#810081", color: "#ffffff"}} >Login</Button>
                        </Link>
                        <Button type='submit' variant='contained'  style={{backgroundColor: "#810081", color: "#ffffff"}}>
                                    Cadastrar
                        </Button>       
                        </Box>
                    </form>
                </Box>
            </Grid>
        </Grid>
    );
}

export default CadastroUsuario;