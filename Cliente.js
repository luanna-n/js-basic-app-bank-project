export class Cliente {
//    nome; //excluir para adequar - propriedades devem ficar DENTRO dos métodos da classe - melhor dentro do construtor
//    _cpf;

    get cpf(){
        return this._cpf;
    }

    constructor(nome, cpf){
        this.nome = nome;
        this._cpf = cpf;
    }
}