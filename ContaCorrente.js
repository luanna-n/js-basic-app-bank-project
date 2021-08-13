import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    static numeroContas = 0; //toda vez que instanciar um objeto, ele vai contar +1 - esse é um atributo da classe em si e não das instâncias
    constructor(cliente, agencia){
        super(0, cliente, agencia); //chama o construtor da classe pai
        //resolve o problema da classe derivada
        ContaCorrente.numeroContas += 1;
    }

    //vai sobrescrever o comportamento da classe pai
    sacar(valor) {
        let taxa = 1.1;
        return this._sacar(valor, taxa);
    }
}