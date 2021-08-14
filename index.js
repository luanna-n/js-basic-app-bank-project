import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new Cliente("Ricardo", 12345678912);

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

const contaPoupanca = new ContaPoupanca (50, cliente1, 1001);
contaPoupanca.sacar(10);

const conta = new Conta(0, cliente1, 2055);

// console.log(contaPoupanca);
// console.log(contaCorrenteRicardo);
console.log(conta);