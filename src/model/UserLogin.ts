//Informar sempre os campos que tem no Db, quase uma model


// campos que precisa ter para fazer a autenticação ⬇
export interface UserLogin {
    id: number;
    nome: string;
    usuario: string;
    senha: string;
    foto: string;
    token?: string | null;
}

export default UserLogin