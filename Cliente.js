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
        // this.autenticar = 1;
        //se eu adicionar autenticar desse modo, vai dar um erro porque autenticar PRECISA ser uma função
        //e nesse caso ela não é
    }

    //é uma função e faz com que meu cliente sempre retorne true
    autenticar(){
        return true;
    }
}