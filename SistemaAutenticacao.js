//Ser autenticavel significa ter a propriedade senha
//É necessario evitar a exposicao dessa senha
//Ser autenticavel agora é ter o metodo autenticar
//Duck Typing - não interessa o que ele é, só interessa se ele tem a propriedade que eu quero usar

export class SistemaAutenticacao{
    static login(autenticavel, senha){
        if(SistemaAutenticacao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }
        return false;
    }
    static ehAutenticavel(autenticavel){
        return "autenticar" in autenticavel && //verifica se essa chave existe dentro deste objeto
            autenticavel.autenticar instanceof Function; //verifica se é uma instancia de uma função
        
    }
}