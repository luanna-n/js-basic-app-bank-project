import { Conta } from "./Conta.js";

export class ContaSalario extends Conta{
    constructor(cliente){
        super(0, cliente, 100);
    }

    //vai sobrescrever o comportamento de sacar da classe pai - o metodo lá é abstrato
    sacar(valor) {
    const taxa = 1.01;
    return this._sacar(valor, taxa);
    }
}