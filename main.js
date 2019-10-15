const usuario = {
    nome: 'Edson',
    idade: 53,
    endereco: {
        cidade: 'São Paulo',
        estado: 'SC',
    },
};

console.log(usuario);

function mostrarNome({ nome, idade, endereco: { cidade } }) {
    console.log(nome, idade, cidade);
}

mostrarNome(usuario);

// const nome = usuario.nome;
// const idade = usuario.idade;
//const cidade = usuario.endereco.cidade;

// const { nome, idade, endereco: { cidade } } = usuario;

// console.log(nome, idade, cidade);

// exemplos de valores padrao
// const soma1 = (a = 7, b = 9) => a + b;
// console.log(soma1(51));
// console.log(soma1());


// function soma(a = 7, b = 7) {
//     return a + b;
// }

// console.log(soma(1));
// console.log(soma());

// exemplos de uso de arrows
// const arr = [1,2,3,4,5,7,8,9];

// const newArr =  arr.map(item => item * 2);

// console.log(newArr);

// const teste = () => {
//     return "Teste";
// }
// console.log(teste());

// const teste1 = () => "Teste1";

// console.log(teste1());

// // para objeto precisa usar ()
// const teste3 = () => ({usuario: 'eskokado'});
// console.log(teste3());


// Exemplos de uso de array
// const arr = [1,2,3,4,5,7,8,9];

// const newArr =  arr.map(function(item, index) {
//     return item + index;
// });

// console.log(newArr);

// const sum = arr.reduce(function(total, next){
//     console.log(total, next);
//     return total + next;
// });

// console.log(sum);

// const filter = arr.filter(function(item){
//     return item % 2 === 0;
// });

// console.log(filter);

// const find = arr.find(function(item){
//     return item === 4;
// });

// console.log(find);

// Exempo de uma classe com methodo statico
// class Matematica {
//     static soma (a, b) {
//         return a + b;        
//     }
// }

// console.log(Matematica.soma(5,4));

// Exemplo 3 - Metodo estatico não reconhe outros restantes da classe.
// class TodoList {
//     constructor() {
//         this.todos = [];
//     }

//     static addTodo() {
//         this.todos.push('Novo todo');
//         console.log(this.todos);
//     }
// }

// TodoList.addTodo();
// TodoList.addTodo();
// TodoList.addTodo();
// TodoList.addTodo();

// Exemplo 2 - Herança
// class List {
//     constructor() {
//         this.data = [];
//     }

//     add(data) {
//         this.data.push(data);
//         console.log(this.data);
//     }
// }

// class TodoList extends List{
//     constructor() {
//         super();

//         this.usuario = "Edson Shideki Kokado";
//     }

//     mostraUsuario() {
//         console.log(this.usuario);
//     }


//     // ######### Exemplo 1 - sem herança
//     // constructor() {
//     //     this.todos = [];
//     // }

//     // addTodo() {
//     //     this.todos.push('Novo todo');
//     //     console.log(this.todos);
//     // }
// }

// var MinhaLista = new TodoList();

// document.getElementById('novotodo').onclick = function() {
//     // MinhaLista.addTodo();
//     MinhaLista.add('Novo todo por herança');
// }

// MinhaLista.mostraUsuario();