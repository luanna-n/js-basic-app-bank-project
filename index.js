import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("12345"); //cadastra a senha
const gerente = new Gerente("Joao", 5000, 98745612300);
gerente.cadastrarSenha("6789");

const cliente = new Cliente("Maria", 11122233344, "777");

const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "6789"); //ve se a senha é igual a cadastrada
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "12345");

const clienteEstaLogado = SistemaAutenticacao.login(cliente, "777");
//se em SistemaAutenticacao tiver funcionario._senha == senha ==> isso retorna TRUE ==> aqui busca a propriedade senha
//se em SistemaAutenticacao tiver funcionario.senha == senha ==> isso retorna FALSE ==> aqui busca o acessor de senha

console.log(gerenteEstaLogado, diretorEstaLogado); //retorna true or false para funcionario.senha == senha
console.log(clienteEstaLogado);