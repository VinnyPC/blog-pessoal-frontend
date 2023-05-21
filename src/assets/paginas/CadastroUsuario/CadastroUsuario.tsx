import React, { useState, useEffect, ChangeEvent } from "react";
import { Grid, Typography, Button, TextField } from "@material-ui/core";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import "./CadastroUsuario.css";
import { Margin } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

import { cadastroUsuario } from "../../../service/Service";
import User from "../../../model/User";

function CadastroUsuario() {
  //
  let navigate = useNavigate();
  const [confirmarSenha, setConfirmarSenha] = useState<String>(""); //se o valor que o usuario digitou em confirmar senha é igual a o campo senha

  const [user, setUser] = useState<User>({ //contem as informações que vai enviar para cadastro
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
  });

  const [userResult, setUserResult] = useState<User>({ //armazena o retorno dos dados cadastrados e armazena dentro de "userResult"
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
  });

  //quando o usuario já estiver cadastrado, será direcionado para tela de login
  //verifica o id do userResult, se for diferente de 0 não está mais padrao, quer dizer que ja tem algum valor cadastrado
  useEffect(() => {
    if (userResult.id != 0) {
      navigate("/login");
      console.log("qualquer coisa");
    }
  }, [userResult]);

  //captura o valor do campo confirmar senha
  function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(e.target.value);
  }

  //pega os nomes dos campos e vai montando uma model, preparando para o envio para o backend
  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }
  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    //confirmar senha
    if (confirmarSenha == user.senha) {
      cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult);
      alert("Usuario cadastrado com sucesso");
      //navigate("/login");provisório, deveria estar no useEffect
    } else {
      alert(
        "Dados inconsistentes. Favor verificar as informações de cadastro."
      );
    }
  }

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item xs={6} className="imagem2"></Grid>
      <Grid item xs={6} alignItems="center">
        <Box paddingX={10}>
          <Typography
            variant="h3"
            gutterBottom
            color="textPrimary"
            component="h3"
            align="left"
            style={{ marginBottom: "1px" }}
          >
            Cadastrar
          </Typography>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Box marginTop={4}>
              <Button
                type="submit"
                variant="outlined"
                style={{
                  backgroundColor: "#FFFFFF",
                  color: "#B3B3B3",
                  fontSize: "11px",
                }}
                disabled
                className="btnGoogle"
              >
                <img src="https://static-00.iconduck.com/assets.00/google-icon-256x256-hqxhu7j7.png" />
                Cadastrar com Google
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
                  color: "#B3B3B3",
                  fontSize: "11px",
                }}
              >
                <img src="https://cdn-icons-png.flaticon.com/256/145/145802.png" />
                Cadastrar com Facebook
              </Button>
            </Box>
          </Box>

          <Typography
            align="center"
            variant="h6"
            style={{ marginTop: "2em", color: "#B3B3B3" }}
          >
            -OU-
          </Typography>

          <form onSubmit={onSubmit}>
            <TextField
              value={user.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="nome"
              label="Nome"
              variant="standard"
              name="nome"
              margin="normal"
              fullWidth
              className="inputCadastro"
            />
            <TextField
              value={user.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="usuario"
              label="Usuario"
              variant="standard"
              name="usuario"
              margin="normal"
              fullWidth
              className="inputCadastro"
            />
            <TextField
              value={user.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="senha"
              label="Senha"
              variant="standard"
              name="senha"
              margin="normal"
              type="password"
              fullWidth
              className="inputCadastro"
            />
            <TextField
              value={confirmarSenha}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                confirmarSenhaHandle(e)
              }
              id="confirmarSenha"
              label="Confirmar Senha"
              variant="standard"
              name="confirmarSenha"
              margin="normal"
              type="password"
              fullWidth
              className="inputCadastro"
            />

            <Box textAlign={"center"} mt={2}>
              <Button
                type="submit"
                variant="contained"
                style={{ backgroundColor: "#279574", color: "#ffffff" }}
              >
                Cadastrar
              </Button>
            </Box>

            <Box display="flex" justifyContent="center" marginTop={2}>
              <Box marginRight={1}>
                <Typography variant="subtitle1" gutterBottom align="center">
                  Já tem uma conta?
                </Typography>
              </Box>
              <Link to="/login">
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  align="center"
                  style={{ color: "#279574" }}
                >
                  Login
                </Typography>
              </Link>
            </Box>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
}

export default CadastroUsuario;
