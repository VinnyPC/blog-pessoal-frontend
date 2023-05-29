import React, { useState, useEffect, ChangeEvent } from "react";
import { Container, Typography, TextField, Button } from "@material-ui/core";
import "./CadastroTema.css"
import { buscaId, post, put } from "../../../service/Service";
import { useNavigate, useParams } from "react-router-dom";
//import useLocalStorage from "react-use-localstorage";
import { Tema } from "../../../model/Tema";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { toast } from "react-toastify";

function CadastroTema() {
  let navigate = useNavigate();

  //capturar os parametros que sao enviados por uma URL
  const{ id } = useParams<{id: string}>();
  //const [token, setToken] = useLocalStorage('Token');
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  const[tema, setTema] = useState<Tema>({
    id: 0,
    descricao: ''
  })

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
      navigate("/login");
    }
  }, [token]);

  useEffect(() => {
    if(id !== undefined){
      findById(id)
    }
  }, [id])

  async function findById(id: string){
    buscaId(`/temas/${id}`, setTema, {
      headers: {
        Authorization: token
      }
    })
  }

  //quando o usuario começar a usar o input lá, o onchange vai ficar monitorando o textfield
  //e irá disparar essa funçao
  //updatedTema vai capturar os valores e atualizar o useState com os dados que o usuario digitou
  function updatedTema(e: ChangeEvent<HTMLInputElement>){
    setTema({
      ...tema,
      [e.target.name]: e.target.value,

    })
  }

  //função que será disparada ao clicar em finalizar
   async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
     e.preventDefault(); //para o botao nao atualizar a tela
     console.log("tema" + JSON.stringify(tema)); //imprime no console os dados armazenados no state tema

     //essa função pode tanto atualizar quanto cadastrar.
     //Se tiver algum id (diferente de undefined), significa que a postagem existe, entao é uma atualização
     if (id !== undefined) {
       console.log(tema);
       put(`/temas`, tema, setTema, { //usa o put para atualizar um tema, passando como parametro a URL da API, os dados
                                      //que serao atualizados, capturar o objeto atualizado que a API retornar
         headers: { //passando o token
           Authorization: token,
         },
       });
       toast.success("Tema atualizado com sucesso", {
         position: "top-right",
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: false,
         draggable: false,
         theme: "colored",
         progress: undefined,
       });

       //não tem um id
     } else {
      //vai criar um tema seguindo os mesmos parametros da put
       post(`/temas`, tema, setTema, {
         headers: {
           Authorization: token,
         },
       });
       toast.success("Tema cadastrado com sucesso", {
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
     back(); //redirecionar para /temas
   }

   function back() {
     navigate("/temas");
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
          Formulário de cadastro tema
        </Typography>
        <TextField
        value={tema.descricao}
        onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)}
          id="descricao"
          label="descricao"
          variant="outlined"
          name="descricao"
          margin="normal"
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary">
          Finalizar
        </Button>
      </form>
    </Container>
  );
}

export default CadastroTema;
