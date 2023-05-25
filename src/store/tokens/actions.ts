//exportando um tipo chamado Action, que é um objeto
//definindo uma ação específica chamada "ADD_TOKEN" que possui um payload do tipo string.
//payload: armazena o token
export type Action = { type: "ADD_TOKEN"; payload: string };


export const addToken = (token: string): Action => ({
    type: "ADD_TOKEN",
    payload: token,
});