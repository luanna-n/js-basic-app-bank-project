import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static numeroContas = 0; //toda vez que instanciar um objeto, ele vai contar +1 - esse é um atributo da classe em si e não das instâncias
    agencia;
    _cliente;

    //#saldo - privado
    _saldo = 0;


    //ACESSORES
    set cliente(novoValor) {
        if (novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    constructor(agencia, cliente){ //se inverter os parametos, ele também vai mandar invertido
        this.agencia = agencia;
        this.cliente = cliente; //tô usando o acessor dentro do construtor
        ContaCorrente.numeroContas += 1;
    }

    
    //MÉTODOS
    sacar(valor) {
        if(this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor) {
        if(valor <= 0) {
            return;
        }
        this._saldo += valor;
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}