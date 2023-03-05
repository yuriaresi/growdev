const nome = "yuri aresi"
let nome2 = "";
let pessoaDefault = {
    nome: "yuri aresi",
    idade: "26",
    trabalho: "metalurgico"
}
let nomes = ["Yuri aresi", "Maria Silva", "Pedro Silva"];

let pessoaListaVazia = [];

let pessoas = [
    {
        nome: "Yuri Aresi",
        idade: "26",
        trabalho: "metalurgico",
    },
    {
        nome: "Maria Silva",
        idade: "25",
        trabalho: "UX/UI Designer",
    }
];

function alterarNome() {
    nome2 = "maria silva";
    console.log("valor alterado:");
console.log(nome2);
}

function recebeEalteranome(novoNome) {
nome2 = novoNome;
console.log("valor alterado recebendo um nome:");
console.log(nome2);
}

function imprimirPessoa(pessoa) {
    console.log("nome:");
    console.log(pessoa.nome);
    
    console.log("idade");
    console.log(pessoa.idade);
    
    console.log("trabalho");
    console.log(pessoa.trabalho);
}

function adicionarPessoa(pessoa) {
    pessoas.push(pessoa);
}

function imprimirPessoas() {
    console.log("-----IMPRIMIRPESSOAS-----");
pessoas.forEach((item) => {
    console.log("Nome:");
    console.log(item.nome);

    console.log("idade");
    console.log(item.idade);
    
    console.log("trabalho");
    console.log(item.trabalho);
    })
};
imprimirPessoas();

adicionarPessoa({
    nome: "Pedro SIlva",
    idade: "28",
    trabalho: "Porteiro"
});

imprimirPessoas();

//console.log(pessoas)


//imprimirPessoa(pessoaDefault);


//imprimirPessoa({
// nome: "maria silva",
//idade: "25",
//trabalho: "UX/UI Designer"
//});

//recebeEalteranome("João Silva Pereira");
//recebeEalteranome("maria silva");

//alterarNome();