
//useState faz o controle dos estados de um componente, permite adicionar estados a um componente funcional
import React, { ChangeEvent, useState, useEffect } from 'react'
import './Login.css'
import { Grid, Box, Typography, TextField, Button, Stack } from '@mui/material'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { login } from '../../../service/Service'
import { UserLogin } from '../../../model/UserLogin'
import useLocalStorage from 'react-use-localstorage'


function Login() {

    //useState na prática
    //userLogin = estado do componente, acessar a informação do state
    //setUserLogin alterar a informação do state
    //
    //cria a variavel pra navegação interna pela rota
    let history = useNavigate()//navega de uma tela para outra, navegar através da lógica/

    //cria um estado para armazenamento no localStorage do navegador
    const [token, setToken] = useLocalStorage('Token')
    
    const [userLogin, setUserLogin] = useState<UserLogin>(  //Cria um estado de controle para o usuario preencher os dados de login
        //history('/posts')
        {
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        foto: '',
        token: ''
    }
    )

    //Roda dentro de cada um dos inputs para atualizar os campos do JSON
    function updatedModel(e: ChangeEvent<HTMLInputElement>){ //recebe um envento de modificação no input
        setUserLogin({ 
           ... userLogin, //spread operator = repete as informações do JSON para preencher
           [e.target.name]: e.target.value //[atributo]:valor
        })
    }

    //função que envia o formulario para o backend
    async function onSubmit (e: ChangeEvent<HTMLFormElement>) { //vai entender que oq ta sendo enviado é um form        
        e.preventDefault() //previne que o formulario atualize a pagina

        //tenta logar, mas se nao consegui aparece usuario ou senha invalido
        try{
            await login(`/usuarios/logar`, userLogin, setToken)
            alert('Usuário logado com sucesso!')
        }catch(error){
            alert('Dados inválidos')
        }

        
    }

    //ele fica de olho no token, quando chega algo diferente de vazio navega para /home
    useEffect(()=>{
        if(token != ''){
            history('/home')
        }
    }, [token])
    

  return (
    <>
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos1'>Entrar</Typography>
                        <TextField className='user' value={userLogin.usuario} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='Usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField className='pass' value={userLogin.senha} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password'fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            
                                <Button type='submit' variant='contained' style={{backgroundColor: "#810081"}}>
                                    Logar
                                </Button>
                            
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                        </Box>
                        <Link to='/cadastrousuario'>
                            <Typography variant='subtitle1' gutterBottom align='center' className='textos1'>Cadastre-se</Typography>
                        </Link>
                            
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} className="imagemLogin">

            </Grid>
        </Grid>
    </>
  )
}

export default Login