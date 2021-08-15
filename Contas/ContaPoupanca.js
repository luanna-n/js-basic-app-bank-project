import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {
    constructor(saldoInicial, cliente, agencia){
        super(saldoInicial, cliente, agencia); //chama o construtor da classe pai
        //resolve o problema da classe derivada
    }

    //vai sobrescrever o comportamento de sacar da classe pai
    sacar(valor) {
        const taxa = 1.02;
        return this._sacar(valor, taxa);
    }
}