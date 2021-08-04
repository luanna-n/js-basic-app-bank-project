import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo", 12345678912);
const cliente2 = new Cliente("Alice", 22233344455);
// cliente2._cpf = -2; //esse reatribui o valor
// cliente2.cpf = -1; //esse NÃO REATRIBUI o valor - GET

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
contaCorrenteRicardo.depositar(500);
const conta2 = new ContaCorrente(102, cliente2);

let valor = 200;
contaCorrenteRicardo.transferir(valor, conta2);

console.log(cliente2.cpf);