//useState faz o controle dos estados de um componente, permite adicionar estados a um componente funcional
import React, { ChangeEvent, useState, useEffect } from "react";
import "./Login.css";
import { Grid, Box, Typography, TextField, Button, Stack } from "@mui/material";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { login } from "../../../service/Service";
import { UserLogin } from "../../../model/UserLogin";
//import useLocalStorage from "react-use-localstorage";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useDispatch } from "react-redux";
import { addToken } from "../../../store/tokens/actions";
import { toast } from "react-toastify";

function Login() {

	//useState na prática
	//userLogin = estado do componente, acessar a informação do state
	//setUserLogin alterar a informação do state
	//
	//cria a variavel pra navegação interna pela rota
	let history = useNavigate(); //navega de uma tela para outra, navegar através da lógica/

  const dispatch = useDispatch();
  const [token, setToken] = useState("");
	//cria um estado para armazenamento no localStorage do navegador
	//const [token, setToken] = useLocalStorage("Token");

	const [userLogin, setUserLogin] = useState<UserLogin>( //Cria um estado de controle para o usuario preencher os dados de login
		//history('/posts')
		{
			id: 0,
			nome: "",
			usuario: "",
			senha: "",
			foto: "",
			token: "",
		}
	);

	//Roda dentro de cada um dos inputs para atualizar os campos do JSON
	function updatedModel(e: ChangeEvent<HTMLInputElement>) {
		//recebe um envento de modificação no input
		setUserLogin({
			...userLogin, //spread operator = repete as informações do JSON para preencher
			[e.target.name]: e.target.value, //[atributo]:valor
		});
	}

	//função que envia o formulario para o backend
	async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
		//vai entender que oq ta sendo enviado é um form
		e.preventDefault(); //previne que o formulario atualize a pagina

		//tenta logar, mas se nao consegui aparece usuario ou senha invalido
		try {
			await login(`/usuarios/logar`, userLogin, setToken);
			toast.success("Usuario logado com sucesso", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
		} catch (error) {
			toast.error("Dados inválidos", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
		}
	}

	//ele fica de olho no token, quando chega 
  //algo diferente de vazio navega para /home
	useEffect(() => {
		if (token != "") {
      dispatch(addToken(token))
			history("/home");
		}
	}, [token]);

	return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        
      >
        <Grid alignItems="center" xs={7}>
          <Box paddingX={25}>
            <form onSubmit={onSubmit}>
              <Typography
                variant="h3"
                gutterBottom
                color="textPrimary"
                component="h3"
                align="left"
                className="textos1"
              >
                Entrar
              </Typography>
              <TextField
                className="user"
                value={userLogin.usuario}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                id="usuario"
                label="Usuário"
                variant="standard"
                name="usuario"
                margin="normal"
                fullWidth
              />
              <TextField
                className="pass"
                value={userLogin.senha}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                id="senha"
                label="Senha"
                variant="standard"
                name="senha"
                margin="normal"
                type="password"
                fullWidth
              />
              <Box marginTop={4} textAlign="center">
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  style={{ backgroundColor: "#279574" }}
                >
                  Logar
                </Button>
              </Box>
            </form>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Box marginTop={4}>
                <Button
                  type="submit"
                  variant="outlined"
                  style={{
                    backgroundColor: "#FFFFFF",
                    color: "#91becf",
                    fontSize: "11px",
                  }}
                  disabled
                  className="btnGoogle"
                >
                  <GoogleIcon
                    style={{ fontSize: "20px", marginRight: "5px" }}
                  />
                  Logar com Google
                </Button>
              </Box>

              <Box marginTop={4}>
                <Button
                  type="submit"
                  variant="outlined"
                  className="btnFacebook"
                  disabled
                  style={{
                    backgroundColor: "#FFFFFF",
                    color: "#91becf",
                    fontSize: "11px",
                  }}
                >
                  <FacebookIcon
                    style={{ fontSize: "20px", marginRight: "5px" }}
                  />
                  Logar com Facebook
                </Button>
              </Box>
            </Box>
            <Box display="flex" justifyContent="center" marginTop={2}>
              <Box marginRight={1}>
                <Typography variant="subtitle1" gutterBottom align="center">
                  Não tem uma conta?
                </Typography>
              </Box>
              <Link to="/cadastrousuario">
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  align="center"
                  className="textos1"
                  color={"#279574"}
                >
                  Cadastre-se
                </Typography>
              </Link>
            </Box>
          </Box>
        </Grid>
        <Grid xs={5} className="imagemLogin"></Grid>
      </Grid>
    </>
  );
}

export default Login;
