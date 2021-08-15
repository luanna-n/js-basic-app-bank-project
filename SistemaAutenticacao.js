//Ser autenticavel significa ter a propriedade senha
//É necessario evitar a exposicao dessa senha
//Ser autenticavel agora é ter o metodo autenticar

export class SistemaAutenticacao{
    static login(autenticavel, senha){
        return autenticavel.autenticar(senha);
    }
}