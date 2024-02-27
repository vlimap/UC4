/* // Importando a classe Pessoa do arquivo exercicio1.ts
import { Pessoa } from './exercicio1';

// Definindo a classe Livro
class Livro {
    // Definindo o construtor da classe Livro com propriedades privadas
    constructor(
        private titulo: string, // Propriedade que armazena o título do livro
        private autor: string, // Propriedade que armazena o autor do livro
        private editora: string, // Propriedade que armazena a editora do livro
        private categoria: string, // Propriedade que armazena a categoria do livro
        private quantidadeDisponivel: number // Propriedade que armazena a quantidade disponível do livro
    ) {}

    // Método para mostrar os dados do livro
    mostrarDados(): void {
        console.log('--------------Dados do Livro-------------');
        console.log(`Título: ${this.titulo}`); // Mostra o título do livro
        console.log(`Autor: ${this.autor}`); // Mostra o autor do livro
        console.log(`Editora: ${this.editora}`); // Mostra a editora do livro
        console.log(`Categoria: ${this.categoria}`); // Mostra a categoria do livro
        console.log(`Quantidade Disponível: ${this.quantidadeDisponivel}`); // Mostra a quantidade disponível do livro
        console.log('------------------------------------------------');
    }
}

class Usuario extends Pessoa {
    // Declaração de propriedade privada para armazenar o histórico de empréstimos do usuário
    private historicoEmprestimos: { livro: Livro, dataEmprestimo: Date, dataDevolucao: Date }[] = [];

    // Método para registrar um empréstimo
    registrarEmprestimo(livro: Livro, dataEmprestimo: Date, dataDevolucao: Date): void {
        // Adiciona um novo empréstimo ao histórico de empréstimos do usuário
        this.historicoEmprestimos.push({ livro, dataEmprestimo, dataDevolucao });
    }

    // Método para registrar a devolução de um livro
    registrarDevolucao(livro: Livro): void {
        // Procura pelo empréstimo correspondente ao livro no histórico de empréstimos
        const emprestimo = this.historicoEmprestimos.find(emprestimo => emprestimo.livro === livro);
        // Se o empréstimo for encontrado, atualiza a data de devolução para a data atual
        if (emprestimo) {
            emprestimo.dataDevolucao = new Date();
        }
    }

    // Método para mostrar os dados do usuário
    mostrarDados(): void {
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
    // Construtor da classe Emprestimo que recebe um livro, um usuário, a data de empréstimo e a data de devolução
    constructor(
        private livro: Livro, // Objeto Livro emprestado
        private usuario: Usuario, // Objeto Usuario que está realizando o empréstimo
        private dataEmprestimo: Date, // Data em que o livro foi emprestado
        private dataDevolucao: Date // Data em que o livro deve ser devolvido
    ) {}

    // Método para mostrar os dados do empréstimo
    mostrarDados(): void {
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
 */