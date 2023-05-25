import React, { ChangeEvent, useEffect, useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  FormHelperText,
} from "@material-ui/core";
import "./CadastroPost.css";
import { useNavigate, useParams } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import { busca, buscaId, post, put } from "../../../service/Service";
import { Tema } from "../../../model/Tema";
import { Postagem } from "../../../model/Postagem";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";

function CadastroPost() {

  let navigate = useNavigate();// usado para fazer os redirects de página
  const { id } = useParams<{ id: string }>();//captura o id que está na rota URL (para atualizar um elemento, precisa do id dele.)
    //const [token, setToken] = useLocalStorage("Token");//token armazenado no localStorage
  const [temas, setTemas] = useState<Tema[]>([]);//armazena dentro de um array os temas que JA estao cadastrados dentro da API
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  //verificação do token
  useEffect(() => {
    if (token == "") {
      alert("Você precisa estar logado");
      navigate("/login");
    }
  }, [token]);

  const [tema, setTema] = useState<Tema>({//state de tema - armazena um tema especifico, de acordo com o Id passado pela URL
    id: 0,
    descricao: ''
  });

  const [postagem, setPostagem] = useState<Postagem>({
    //state de postagem - efetua o cadastro das postagens
    id: 0,
    titulo: "",
    texto: "",
    tema: null
  });

  useEffect(() => {//monitora o state de tema e preenche o campo tema no state de postagens se estiver usando o select de temas
    setPostagem({
      ...postagem,
      tema: tema,
    });
  }, [tema]);

  useEffect(() => { //fica monitorando o id da postagem que é passado na URL, se o id existir irá fazer uma busca com esse id
    getTemas();
    if (id !== undefined) {
      findByIdPostagem(id);
    }
  }, [id]);

  //busca todos os temas da API e retorna para o state temas
  async function getTemas() {
    await busca("/temas", setTemas, {
      headers: {
        Authorization: token,
      },
    });
  }

  //busca na API pelo id, e o que é retornado pela API, será armazenado no state de postagens
  async function findByIdPostagem(id: string) {
    await buscaId(`postagens/${id}`, setPostagem, {
      headers: {
        Authorization: token,
      },
    });
  }

  //preenche o state de postagem com os temas se estiver usando o input de titulo ou texto
  function updatedPostagem(e: ChangeEvent<HTMLInputElement>) { 
    setPostagem({
      ...postagem,
      [e.target.name]: e.target.value,
      tema: tema,
    });
  }

  //envio das informações
  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();//evita que o botao nao recarregue a pagina

    //se o id é diferente de undefined, entao a postagem existe, isso significa que o ususario quer atualizar
    if (id !== undefined) {
      put(`/postagens`, postagem, setPostagem, {
        headers: {
          Authorization: token,
        },
      });
      alert("Postagem atualizada com sucesso");

      //se o id nao existe, entao o usuario quer criar uma postagem
    } else {
      post(`/postagens`, postagem, setPostagem, {
        headers: {
          Authorization: token,
        },
      });
      alert("Postagem cadastrada com sucesso");
    }
    back();
  }
  //redireciona para tela de posts
  function back() {
    navigate("/postagens");
  }

  return (
    <Container maxWidth="sm" className="topo">
      <form onSubmit={onSubmit}>
        <Typography
          variant="h3"
          color="textSecondary"
          component="h1"
          align="center"
        >
          Formulário de cadastro postagem
        </Typography>
        <TextField
          value={postagem.titulo}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)}
          id="titulo"
          label="titulo"
          variant="outlined"
          name="titulo"
          margin="normal"
          fullWidth
        />
        <TextField
          value={postagem.texto}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)}
          id="texto"
          label="texto"
          name="texto"
          variant="outlined"
          margin="normal"
          fullWidth
        />

        <FormControl>
          <InputLabel id="demo-simple-select-helper-label">Tema </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            onChange={(e) =>
              buscaId(`/temas/${e.target.value}`, setTema, {
                headers: {
                  Authorization: token,
                },
              })
            }
          >
            {temas.map((tema) => (
              <MenuItem value={tema.id}>{tema.descricao}</MenuItem>
            ))}
          </Select>
          <FormHelperText>Escolha um tema para a postagem</FormHelperText>
          <Button type="submit" variant="contained" color="primary">
            Finalizar
          </Button>
        </FormControl>
      </form>
    </Container>
  );
}
export default CadastroPost;
