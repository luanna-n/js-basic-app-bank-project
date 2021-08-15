//CLASSE ABSTRATA - FEITA PARA SER HERDADA - NÃO DEVE SER INSTANCIADA
export class Conta{
    constructor(saldoInicial, cliente, agencia){
        //Avisa ao desenvolvedor que ele não deveria construir um objeto Conta
        if(this.constructor == Conta){
            //Cria um objeto do tipo erro que vai parar a execução
            throw new Error("Você não deveria instanciar um objeto do tipo Conta diretamente, pois essa é uma classe abstrata.");
        }
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
        
    }

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

    
    //MÉTODOS
    sacar(valor) {//Método abstrato - como todas as contas precisam sobrescresver esse comportamento, já que todas as contas pagarão taxa, essa é a melhor forma de proteger
        // let taxa = 1;
        // return this._sacar(valor, taxa);
        throw new Error("O método Sacar da conta é abstrato!");
        //se alguma classe filha esquecer de implementar esse método, ela vai receber um erro
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }

        return 0; //caso não consiga sacar
    }

    depositar(valor) {
        this._saldo += valor;
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}