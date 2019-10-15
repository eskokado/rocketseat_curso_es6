"use strict";

// Exercício 02
// const usuarios = [
//     { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
//     { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
//     { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
// ];
//2.1
// const idades = usuarios.map(function(user) {
//     return user.idade;        
// });
// console.log('2.1', idades);
// 2.2
// const users = usuarios.filter(function(item) {
//     return item.idade > 18; 
// })
// console.log('2.2', users);
// 2.3
// const users = usuarios.find(function(item) {
//     return item.empresa === 'Facebook';
// })
// console.log('2.3', users);
// 2.4
// const users = (usuarios.map(function(item) {
//     return {nome: item.nome, idade: item.idade * 2, empresa: item.empresa};
// })).filter(function(item) {
//     return item.idade <= 50;
// });
// console.log(users);
// 3.1
// const arr = [1, 2, 3, 4, 5];
// console.log('3.1', arr.map(item => item + 10));
// 3.2
// Dica: Utilize uma constante pra function
// const usuario = { nome: 'Diego', idade: 23 };
// const mostraIdade = (usuario) => usuario.idade;
// console.log('3.2', mostraIdade(usuario));
// 3.3
// Dica: Utilize uma constante pra function
// const nome = "Diego";
// const idade = 23;
// const mostraUsuario = (nome = 'Diego', idade = 18) =>  [nome, idade];
// console.log('3.3', mostraUsuario(nome, idade));
// console.log('3.3', mostraUsuario(nome));
// 3.4
// const promise = () => (new Promise((resolve, reject) => resolve()));
// 4.1
// const empresa = {
//     nome: 'Rocketseat',
//     endereco: {
//     cidade: 'Rio do Sul',
//     estado: 'SC',
//     }
//    };
//    const {nome, endereco: {cidade}, endereco: {estado}} = empresa;
//   console.log(nome); // Rocketseat
//   console.log(cidade); // Rio do Sul
//   console.log(estado); // SC
// 4.2 
// function mostraInfo({nome, idade}) {
//     //return `${usuario.nome} tem ${usuario.idade} anos.`;
//     return `${nome} tem ${idade} anos.`;
// }
// mostraInfo({ nome: 'Diego', idade: 23 })
// 5.1
// const arr = [1, 2, 3, 4, 5, 6];
// const [x, ...y] = arr;
// console.log(x); // 1
// console.log(y); // [2, 3, 4, 5, 6]
// const usuario = {
//     nome: 'Diego',
//     idade: 23,
//     endereco: {
//     cidade: 'Rio do Sul',
//     uf: 'SC',
//     pais: 'Brasil',
//     }
//    };
// const usuario2 = { ...usuario, nome: 'Grabriel'};
// const usuario3 = {...usuario, endereco:{cidade: 'Lontras'}};
// console.log(usuario2);
// console.log(usuario3);
// const usuario = 'Diego';
// const idade = 23;
// console.log(`O usuário ${usuario}  possui  ${idade} anos`);
var nome = 'Diego';
var idade = 23;
var usuario = {
  nome: nome,
  idade: idade,
  cidade: 'Rio do Sul'
};
console.log(usuario); // Exercício 01
// class Usuario {
//     constructor(email, senha) {
//         this.email = email;
//         this.senha = senha;
//         this.admin = false;
//     }
//     isAdmin() {
//         return this.admin
//     }
// }
// class Admin extends Usuario {
//     constructor(email, senha) {
//         super(email, senha);
//         this.admin = true;
//     }
// }
// const User1 = new Usuario('email@teste.com', 'senha123');
// const Adm1 = new Admin('email@teste.com', 'senha123');
// console.log(User1.isAdmin()) // false
// console.log(Adm1.isAdmin()) // true
// // Object Short Syntax
// const nome = 'Edson';
// const idade = 52;
// const usuario = {
//     nome,
//     idade,
//     empresa: 'rocketseat'
// };
// // maneira tradicional
// // const usuario = {
// //     nome: nome,
// //     idade: idade,
// //     empresa: 'rocketseat'
// // };
// console.log(usuario);
// Templates Literais
// const nome = 'Edson';
// const idade = 23;
// //console.log('Meu nome é ' + nome + ' e tenho ' + idade + ' anos');
// console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);
// SPREAD
// Exemplo de SPREAD usando objeto
// const usuario1 = {
//     nome: 'Diego',
//     idade: 23,
//     empresa: 'Rocketseat'
// };
// const usuario2 = { ...usuario1, nome: 'Edson'};
// console.log(usuario2);
// exemplo de SPREAD com parametros de array
// const arr1 = [1,2,3];
// const arr2 = [4,5,6];
// const arr3 = [...arr1, ...arr2];
// console.log(arr3);
// REST
// Exemplo de REST com parametros de função
// function soma(...params) {
//     return params.reduce((total, next) => total + next);
// }
// console.log(soma(1,2,3,4));
// Exemplo de REST com array
// const arr = [1,2,3,4];
// const [a, b, ...c] = arr;
// console.log(a);
// console.log(b);
// console.log(c);
// Exemplo de REST com objetos
// const usuario = {
//     nome: 'Edson',
//     idade: 52,
//     empresa: 'Esk Info Tech Web'
// };
// const { nome, ...resto} = usuario;
// console.log(nome);
// console.log(resto);
