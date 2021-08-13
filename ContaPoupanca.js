import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {
    constructor(saldoInicial, cliente, agencia){
        super(saldoInicial, cliente, agencia); //chama o construtor da classe pai
        //resolve o problema da classe derivada
    }
}