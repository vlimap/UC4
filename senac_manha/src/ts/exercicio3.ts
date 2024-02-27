/* import { Pessoa } from './exercicio1';

// Definindo uma classe concreta Cliente que estende Pessoa
class Cliente extends Pessoa {
    constructor(
        nome: string,
        email: string,
        telefone: string,
        data_nascimento: Date,
        endereco: string[],
        cpf: string,
        genero?: string
    ) {
        // Chamando o construtor da classe pai (Pessoa) usando super()
        super(nome, email, telefone, data_nascimento, endereco, cpf, genero);
    }

    // Implementação do método abstrato mostrarDados() da classe Pessoa
    mostrarDados(): void {
        // Início da impressão dos dados do cliente
        console.log('--------------Dados do Cliente-------------');
        console.log(`Nome: ${this.nome}`); // Imprime o nome do cliente
        console.log(`Email: ${this.email}`); // Imprime o email do cliente
        console.log(`Telefone: ${this.telefone}`); // Imprime o telefone do cliente
        console.log(`Data de Nascimento: ${this.data_nascimento.toLocaleDateString()}`); // Imprime a data de nascimento do cliente formatada como string
        console.log(`Endereço: ${this.endereco}`); // Imprime o endereço do cliente
        console.log(`CPF: ${this.getCpf()}`); // Imprime o CPF do cliente usando o método getCpf()
        if (this.genero) { // Verifica se o gênero do cliente está definido
            console.log(`Gênero: ${this.genero}`); // Imprime o gênero do cliente
        }
        console.log('------------------------------------------------'); // Fim da impressão dos dados do cliente
    }

    // Implementação do método abstrato getCpf() da classe Pessoa
    getCpf(): string {
        return this.cpf; // Retorna o CPF do cliente
    }

    // Implementação do método abstrato setCpf() da classe Pessoa
    setCpf(cpf: string): void {
        this.cpf = cpf; // Define o CPF do cliente com o valor passado como argumento
    }
}
// Definição da classe Conta
class Conta {
    constructor(
        private cliente: Pessoa, // Referência ao cliente associado à conta
        private saldo: number, // Saldo da conta
        private tipo: string // Tipo de conta (ex: corrente, poupança)
    ) {}
    getSaldo():number{
        return this.saldo
    }
    setSaldo(saldo: number):void{
        this.saldo = saldo
    }

    // Métodos e propriedades da classe Conta podem ser adicionados aqui
}

// Definição da classe Transacao
class Transacao {
    constructor(
        private descricao: string, // Descrição da transação
        private valor: number, // Valor da transação
        private categoria: string // Categoria da transação (ex: alimentação, transporte)
    ) {}

    // Métodos e propriedades da classe Transacao podem ser adicionados aqui
}

// Definição da classe Metas
class Metas {
    constructor(
        private cliente: Pessoa, // Referência ao cliente associado à meta
        private descricao: string, // Descrição da meta
        private valor: number // Valor da meta
    ) {}

    // Métodos e propriedades da classe Metas podem ser adicionados aqui
}
// Criando um cliente
const cliente1 = new Cliente(
    'João', // Nome do cliente
    'joao@email.com', // Email do cliente
    '123456789', // Telefone do cliente
    new Date('1990-01-01'), // Data de nascimento do cliente
    ['Rua A, 123'], // Endereço do cliente
    '12345678901', // CPF do cliente
    'Masculino' // Gênero do cliente
);

// Criando uma conta bancária para o cliente
const conta1 = new Conta(
    cliente1, // Cliente associado à conta
    1000, // Saldo inicial da conta
    'Corrente' // Tipo da conta
);



// Criando uma transação financeira
const transacao1 = new Transacao(
    'Compra de supermercado', // Descrição da transação
    -150, // Valor da transação (indicando uma despesa de 150)
    'Alimentação' // Categoria da transação
);

// Criando uma meta financeira para o cliente
const meta1 = new Metas(
    cliente1, // Cliente associado à meta
    'Economizar para viagem', // Descrição da meta
    2000 // Valor da meta
);
cliente1.mostrarDados() // Mostra os detalhes da conta na console
console.log(conta1.getSaldo()); // Obtém o saldo da conta
console.log(meta1); // Mostra os detalhes da meta na console

 */