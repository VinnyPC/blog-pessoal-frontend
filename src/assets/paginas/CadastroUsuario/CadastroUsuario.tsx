import React , {useState, useEffect, ChangeEvent } from 'react';
import { Grid,Typography, Button, TextField } from '@material-ui/core';
import {Box} from '@mui/material';
import { Link } from 'react-router-dom';
import './CadastroUsuario.css';
import { Margin } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

import { cadastroUsuario } from '../../../service/Service';
import User from '../../../model/User';

function CadastroUsuario() {
    //
    let navigate = useNavigate();
    const [confirmarSenha,setConfirmarSenha] = useState<String>("") //se o valor que o usuario digitou em confirmar senha é igual a o campo senha
    
    const [user, setUser] = useState<User>(//contem as informações que vai enviar para cadastro
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: ''
        })

    const [userResult, setUserResult] = useState<User>(//armazena o retorno dos dados cadastrados e armazena dentro de "userResult"
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: ''
        })

        //quando o usuario já estiver cadastrado, será direcionado para tela de login
        //verifica o id do userResult, se for diferente de 0 não está mais padrao, quer dizer que ja tem algum valor cadastrado
    useEffect(() => {
        if (userResult.id != 0) {
            navigate("/login")
        }
    }, [userResult])


    //captura o valor do campo confirmar senha
    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>){
        setConfirmarSenha(e.target.value)
    }

    //pega os nomes dos campos e vai montando uma model, preparando para o envio para o backend
    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        //confirmar senha
        if(confirmarSenha == user.senha){ 
        cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
        alert('Usuario cadastrado com sucesso')
        }else{
            alert('Dados inconsistentes. Favor verificar as informações de cadastro.')
        }
    }

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={6} className='imagem2'></Grid>
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={10}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos2'>Cadastrar</Typography>
                        <TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nome' label='Nome' variant='outlined' name='nome' margin='normal' fullWidth className='inputCadastro'/>
                        <TextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='Usuario' variant='outlined' name='usuario' margin='normal'fullWidth className='inputCadastro' />
                        <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth className='inputCadastro' />
                        <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='confirmarSenha' label='Confirmar Senha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth className='inputCadastro' />
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