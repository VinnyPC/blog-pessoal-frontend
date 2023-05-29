import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";
import { Box } from "@mui/material";
import "./ListaTema.css";
import { Tema } from "../../../model/Tema";
//import useLocalStorage from "react-use-localstorage";
import { busca } from "../../../service/Service";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { Action, addToken } from "../../../store/tokens/actions";
import { toast } from "react-toastify";

function ListaTema() {
  const [temas, setTemas] = useState<Tema[]>([]);
  //const [token, setToken] = useLocalStorage("Token");
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  let history = useNavigate();

  useEffect(() => {
    if (token == "") {
      toast.error("Você precisa estar logado", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
      history("/login");
    }
  }, [token]);

  async function getTemas() {
    // alterado a função pra dentro de um try catch, para poder verificar a validade do token do usuário
    try{
      await busca("/temas", setTemas, {
      headers: {
        Authorization: token,
      },
    })
    }catch (error: any) {
      if(error.toString().includes('403')) {
        toast.error("Seu token expirou logue novamente.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: "colored",
          progress: undefined,
        });
        dispatch(addToken(''))
        history('/login')
    }
    }
  
  }

  useEffect(() => {
    getTemas();
  }, []);

  return (
    <>
      {temas.map((tema) => (
        <Box m={2}>
          <Card variant="outlined">
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                {tema.id}
              </Typography>
              <Typography variant="h5" component="h2">
                {tema.descricao}
              </Typography>
            </CardContent>
            <CardActions>
              <Box display="flex" justifyContent="center" mb={1.5}>
                <Link
                  to={`/formularioTema/${tema.id}`}
                  className="text-decorator-none"
                >
                  <Box mx={1}>
                    <Button
                      variant="contained"
                      className="marginLeft"
                      size="small"
                      color="primary"
                    >
                      atualizar
                    </Button>
                  </Box>
                </Link>
                <Link
                  to={`/deletarTema/${tema.id}`}
                  className="text-decorator-none"
                >
                  <Box mx={1}>
                    <Button variant="contained" size="small" color="secondary">
                      deletar
                    </Button>
                  </Box>
                </Link>
              </Box>
            </CardActions>
          </Card>
        </Box>
      ))}
    </>
  );
}

export default ListaTema;
function dispatch(arg0: Action) {
  throw new Error("Function not implemented.");
}

