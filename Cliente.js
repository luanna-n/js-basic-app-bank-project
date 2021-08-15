export class Cliente {
//    nome; //excluir para adequar - propriedades devem ficar DENTRO dos métodos da classe - melhor dentro do construtor
//    _cpf;

    get cpf(){
        return this._cpf;
    }

    constructor(nome, cpf, senha){
        this.nome = nome;
        this._cpf = cpf;
        this._senha = senha;
    }

    //faz com que meu cliente sempre retorne true
    autenticar(){
        return true;
    }
}