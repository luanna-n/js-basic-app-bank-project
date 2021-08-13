import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {
    constructor(saldoInicial, cliente, agencia){
        super(saldoInicial, cliente, agencia); //chama o construtor da classe pai
        //resolve o problema da classe derivada
    }
}

//to herdando tudo da classe conta, por isso pude apagar os metodos & os parametros que estavam dentro do construtor