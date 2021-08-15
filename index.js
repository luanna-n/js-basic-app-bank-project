import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("12345"); //cadastra a senha
const gerente = new Gerente("Joao", 5000, 98745612300);

const estaLogado = SistemaAutenticacao.login(diretor, "12345"); //ve se a senha é igual a cadastrada

console.log(estaLogado); //retorna true or false para funcionario.senha == senha