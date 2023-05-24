import React, { useState, useEffect, ChangeEvent } from "react";
import { Container, Typography, TextField, Button } from "@material-ui/core";
import "./CadastroTema.css"
import { buscaId, post, put } from "../../../service/Service";
import { useNavigate, useParams } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import { Tema } from "../../../model/Tema";

function CadastroTema() {
  let navigate = useNavigate();

  //capturar os parametros que sao enviados por uma URL
  const{ id } = useParams<{id: string}>();
  const [token, setToken] = useLocalStorage('Token');

  const[tema, setTema] = useState<Tema>({
    id: 0,
    descricao: ''
  })

  useEffect(() => {
    if (token == "") {
      alert("Você precisa estar logado");
      navigate("/login");
    }
  }, [token]);

  useEffect(() => {
    if(id !== undefined){
      findById(id)
    }
  }, [id])

  async function findById(id: string){
    buscaId(`/tema/${id}`, setTema, {
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
       put(`/tema`, tema, setTema, { //usa o put para atualizar um tema, passando como parametro a URL da API, os dados
                                      //que serao atualizados, capturar o objeto atualizado que a API retornar
         headers: { //passando o token
           Authorization: token,
         },
       });
       alert("Tema atualizado com sucesso");

       //não tem um id
     } else {
      //vai criar um tema seguindo os mesmos parametros da put
       post(`/tema`, tema, setTema, {
         headers: {
           Authorization: token,
         },
       });
       alert("Tema cadastrado com sucesso");
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