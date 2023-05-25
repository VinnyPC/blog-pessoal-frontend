import React from "react";
import "./Navbar.css";
import {
  AppBar,
  Button,
  Divider,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Box, Stack } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { useDispatch } from "react-redux";
import { Action, addToken } from "../../../store/tokens/actions";
function Navbar() {
  //capturar o token que ta armazenado no navegador
  //const [token, setToken] = useLocalStorage('Token');

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  //history que irá receber o useNavigate
  let history = useNavigate();
  const dispatch = useDispatch();

  //efetivar o logout zerando o token
  function goLogout(){
      dispatch(addToken(""));
    alert("Usuário deslogado")
    console.log('abacaxi')
    history('/login')
  };
  return (
    <>
      <AppBar
        position="static"
        className="Appbar"
        style={{ background: "#810081" }}
      >
        <Toolbar
          variant="dense"
          className="Navbar"
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "1em",
          }}
        >
          <Box style={{ cursor: "pointer" }} className="Navbar-Logo">
            <Typography variant="h4" color="inherit">
              BlogPessoal - Vinicius
            </Typography>
          </Box>

          <Stack direction={"row"} gap={5}>
            <Link to="/home">
              <Box px={2} style={{ cursor: "pointer" }} className="NavbarLink">
                <Button variant="text" style={{ color: "white" }}>
                  Home
                </Button>
              </Box>
            </Link>
            <Link to="/postagens">
              <Box px={1} style={{ cursor: "pointer" }} className="NavbarLink">
                <Button variant="text" style={{ color: "white" }}>
                  Postagens
                </Button>
              </Box>
            </Link>
            <Link to="/temas">
              <Box px={2} style={{ cursor: "pointer" }} className="NavbarLink">
                <Button variant="text" style={{ color: "white" }}>
                  Temas
                </Button>
              </Box>
            </Link>
            <Link to="/formularioTema">
              <Box px={1} style={{ cursor: "pointer" }} className="NavbarLink">
                <Button variant="text" style={{ color: "white" }}>
                  Cadastrar Tema
                </Button>
              </Box>
            </Link>
            
              <Box px={2} style={{ cursor: "pointer" }} className="NavbarLink" onClick={goLogout}>
                <Button variant="text" style={{ color: "white" }}>
                  Logout
                </Button>
              </Box>
            
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
function dispatch(arg0: Action) {
  throw new Error("Function not implemented.");
}

