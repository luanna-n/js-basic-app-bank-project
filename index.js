import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js"; //REMOVER ESSE IMPORT, ESSA CLASSE É ABSTRATA
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { ContaSalario } from "./ContaSalario.js";

const cliente1 = new Cliente("Ricardo", 12345678912);

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

const contaPoupanca = new ContaPoupanca (50, cliente1, 1001);
contaPoupanca.sacar(10);

const contaSalario = new ContaSalario (cliente1);
contaSalario.depositar(100);
contaSalario.sacar(10);

// console.log(contaPoupanca);
// console.log(contaCorrenteRicardo);
console.log(contaSalario);