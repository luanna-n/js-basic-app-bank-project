import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 12345678912;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 22233344455;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente1; //O cliente agora é um objeto da classe Cliente

contaCorrenteRicardo.depositar(500);

const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
// conta2.cliente.nome = "Alice";
// conta2.cliente.cpf = 22233344455;
conta2.agencia = 102;

let valor = 200;

contaCorrenteRicardo.transferir(valor, conta2);

console.log(conta2.saldo);