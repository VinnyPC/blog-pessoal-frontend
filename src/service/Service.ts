//Esse arquivo é responsável por fazer a conexão de fato com a API (backend)
//axios intercepta todas as requisições
import axios from "axios";

//inicializando o axios colocando dentro de um objeto que será exportado dpois
// "api" irá receber o axios, e todas as funções que ele possui
export const api = axios.create({
    //baseURL armazena o endereço da API
    //baseURL: 'https://blogpessoal-lz76.onrender.com'
    baseURL: 'http://localhost:8080' //teste local
});


//metodo que vai fazer a requisição de login
//url: baseURL + /endereço dentro da api
//dados: JSON com os dados que serao passados para API
//setDado: vai receber a resposta da API (dados com um token)

//assincrono porque precisa aguardar o retorno da API para depois acionar a função setDados
export const login = async (url: any, dados: any, setDados: any) => {
    const resposta = await api.post(url, dados)
    setDados(resposta)
}