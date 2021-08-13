import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new Cliente("Ricardo", 12345678912);
const cliente2 = new Cliente("Alice", 22233344455);


const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

const conta2 = new Conta(102, cliente2);

let valor = 200;
contaCorrenteRicardo.transferir(valor, conta2);

const contaPoupanca = new ContaPoupanca (50, cliente1, 1001);

console.log(contaPoupanca);
console.log(contaCorrenteRicardo);