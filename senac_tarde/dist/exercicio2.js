"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importando a classe Pessoa do arquivo exercicio1.ts
const exercicio1_1 = require("./exercicio1");
// Definindo a classe Livro
class Livro {
    titulo;
    autor;
    editora;
    categoria;
    quantidadeDisponivel;
    // Definindo o construtor da classe Livro com propriedades privadas
    constructor(titulo, // Propriedade que armazena o título do livro
    autor, // Propriedade que armazena o autor do livro
    editora, // Propriedade que armazena a editora do livro
    categoria, // Propriedade que armazena a categoria do livro
    quantidadeDisponivel // Propriedade que armazena a quantidade disponível do livro
    ) {
        this.titulo = titulo;
        this.autor = autor;
        this.editora = editora;
        this.categoria = categoria;
        this.quantidadeDisponivel = quantidadeDisponivel;
    }
    // Método para mostrar os dados do livro
    mostrarDados() {
        console.log('--------------Dados do Livro-------------');
        console.log(`Título: ${this.titulo}`); // Mostra o título do livro
        console.log(`Autor: ${this.autor}`); // Mostra o autor do livro
        console.log(`Editora: ${this.editora}`); // Mostra a editora do livro
        console.log(`Categoria: ${this.categoria}`); // Mostra a categoria do livro
        console.log(`Quantidade Disponível: ${this.quantidadeDisponivel}`); // Mostra a quantidade disponível do livro
        console.log('------------------------------------------------');
    }
}
class Usuario extends exercicio1_1.Pessoa {
    // Declaração de propriedade privada para armazenar o histórico de empréstimos do usuário
    historicoEmprestimos = [];
    // Método para registrar um empréstimo
    registrarEmprestimo(livro, dataEmprestimo, dataDevolucao) {
        // Adiciona um novo empréstimo ao histórico de empréstimos do usuário
        this.historicoEmprestimos.push({ livro, dataEmprestimo, dataDevolucao });
    }
    // Método para registrar a devolução de um livro
    registrarDevolucao(livro) {
        // Procura pelo empréstimo correspondente ao livro no histórico de empréstimos
        const emprestimo = this.historicoEmprestimos.find(emprestimo => emprestimo.livro === livro);
        // Se o empréstimo for encontrado, atualiza a data de devolução para a data atual
        if (emprestimo) {
            emprestimo.dataDevolucao = new Date();
        }
    }
    // Método para mostrar os dados do usuário
    mostrarDados() {
        console.log('--------------Dados do Usuário-------------');
        console.log(`Nome: ${this.nome}`); // Mostra o nome do usuário
        console.log(`Email: ${this.email}`); // Mostra o email do usuário
        console.log(`Telefone: ${this.telefone}`); // Mostra o telefone do usuário
        console.log(`Data de Nascimento: ${this.data_nascimento.toLocaleDateString()}`); // Mostra a data de nascimento do usuário
        console.log(`Endereço: ${this.endereco}`); // Mostra o endereço do usuário
        console.log(`CPF: ${this.getCpf()}`); // Mostra o CPF do usuário
        if (this.genero) {
            console.log(`Gênero: ${this.genero}`); // Mostra o gênero do usuário, se estiver disponível
        }
        console.log('------------------------------------------------');
    }
}
class Emprestimo {
    livro;
    usuario;
    dataEmprestimo;
    dataDevolucao;
    // Construtor da classe Emprestimo que recebe um livro, um usuário, a data de empréstimo e a data de devolução
    constructor(livro, // Objeto Livro emprestado
    usuario, // Objeto Usuario que está realizando o empréstimo
    dataEmprestimo, // Data em que o livro foi emprestado
    dataDevolucao // Data em que o livro deve ser devolvido
    ) {
        this.livro = livro;
        this.usuario = usuario;
        this.dataEmprestimo = dataEmprestimo;
        this.dataDevolucao = dataDevolucao;
    }
    // Método para mostrar os dados do empréstimo
    mostrarDados() {
        console.log('--------------Dados do Empréstimo-------------');
        console.log('Livro emprestado:');
        this.livro.mostrarDados(); // Mostra os dados do livro emprestado chamando o método mostrarDados() da classe Livro
        console.log('Usuário:');
        this.usuario.mostrarDados(); // Mostra os dados do usuário que realizou o empréstimo chamando o método mostrarDados() da classe Usuario
        console.log(`Data de Empréstimo: ${this.dataEmprestimo.toLocaleString()}`); // Mostra a data de empréstimo formatada
        console.log(`Data de Devolução: ${this.dataDevolucao.toLocaleString()}`); // Mostra a data de devolução formatada
        console.log('------------------------------------------------');
    }
}
// Instanciando um livro
const livro1 = new Livro('Dom Quixote', 'Miguel de Cervantes', 'Editora A', 'Romance', 5);
// Instanciando um usuário
const usuario1 = new Usuario('Fulano de Tal', 'fulano@example.com', '123456789', new Date('1990-01-01'), ['Rua A, 123'], '12345678901', 'Masculino');
usuario1.mostrarDados(); // Chamando o método mostrarDados() para exibir os dados do usuário
// Instanciando um empréstimo
const dataEmprestimo = new Date();
const dataDevolucao = new Date();
dataDevolucao.setDate(dataDevolucao.getDate() + 7); // Supondo que o empréstimo é válido por 7 dias
const emprestimo1 = new Emprestimo(livro1, usuario1, dataEmprestimo, dataDevolucao);
emprestimo1.mostrarDados(); // Chamando o método mostrarDados() para exibir os dados do empréstimo
