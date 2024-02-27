// Exportando a classe abstrata Pessoa para que ela possa ser utilizada em outros arquivos
export abstract class Pessoa {
    // Definição do construtor da classe Pessoa com vários parâmetros para inicializar os atributos
    constructor(
        public nome: string, // Atributo público que armazena o nome da pessoa
        protected email: string, // Atributo protegido que armazena o email da pessoa
        public telefone: string, // Atributo público que armazena o telefone da pessoa
        public data_nascimento: Date, // Atributo público que armazena a data de nascimento da pessoa
        public endereco: string[], // Atributo público que armazena o endereço da pessoa (como array de strings)
        protected cpf: string, // Atributo protegido que armazena o CPF da pessoa
        protected genero?: string // Atributo protegido opcional que armazena o gênero da pessoa
    ) {}

    // Método abstrato que deve ser implementado pelas classes derivadas para mostrar os dados da pessoa
    abstract mostrarDados(): void;

    // Método para obter o CPF da pessoa
    getCpf(): string {
        return this.cpf; // Retorna o valor do atributo cpf
    }

    // Método para definir o CPF da pessoa
    setCpf(cpf: string): void {
        this.cpf = cpf; // Define o valor do atributo cpf com o valor passado como argumento
    }
}

// Definição da classe Funcionario que estende a classe Pessoa
export class Funcionario extends Pessoa {
    // Atributos específicos de Funcionario
    matricula: string;
    cargo: string;

    // Construtor da classe Funcionario
    constructor(
        endereco: string[], // Endereço do funcionário
        cpf: string, // CPF do funcionário
        nome: string, // Nome do funcionário
        email: string, // Email do funcionário
        telefone: string, // Telefone do funcionário
        cargo: string, // Cargo do funcionário
        data_nascimento: Date, // Data de nascimento do funcionário
        matricula: string, // Matrícula do funcionário
        genero?: string // Gênero do funcionário (opcional)
    ) {
        // Chamada ao construtor da classe pai (Pessoa) usando super()
        super(nome, email, telefone, data_nascimento, endereco, cpf, genero);
        
        // Inicialização dos atributos específicos de Funcionario
        this.cargo = cargo;
        this.matricula = matricula;
    }

    // Método para mostrar os dados do funcionário
    mostrarDados(): void {
        // Imprime uma linha indicando o início dos dados do funcionário
        console.log('--------------Dados do funcionário-------------');
        
        // Imprime o nome do funcionário
        console.log(`Nome: ${this.nome}`);
        
        // Imprime o e-mail do funcionário
        console.log(`E-mail: ${this.email}`);
        
        // Imprime o telefone do funcionário
        console.log(`Telefone: ${this.telefone}`);
        
        // Imprime a data de nascimento do funcionário, formatada como string
        console.log(`Data de Nascimento: ${this.data_nascimento.toLocaleDateString()}`);
        
        // Imprime o endereço do funcionário, unindo os elementos do array com uma vírgula e um espaço
        console.log(`Endereço: ${this.endereco.join(', ')}`);
        
        // Imprime o CPF do funcionário
        console.log(`CPF: ${this.cpf}`);
        
        // Verifica se o gênero do funcionário está definido e, se sim, imprime o gênero
        if (this.genero) {
            console.log(`Gênero: ${this.genero}`);
        }
        
        // Imprime a matrícula do funcionário
        console.log(`Matrícula: ${this.matricula}`);
        
        // Imprime o cargo do funcionário
        console.log(`Cargo: ${this.cargo}`);
        
        // Imprime uma linha indicando o fim dos dados do funcionário
        console.log('------------------------------------------------');
    }
}
// Definição da classe Paciente que estende a classe Pessoa
export class Paciente extends Pessoa {
    // Construtor da classe Paciente
    constructor(
        nome: string, // Nome do paciente
        email: string, // Email do paciente
        telefone: string, // Telefone do paciente
        data_nascimento: Date, // Data de nascimento do paciente
        endereco: string[], // Endereço do paciente
        cpf: string, // CPF do paciente
        genero?: string // Gênero do paciente (opcional)
    ) {
        // Chamada ao construtor da classe pai (Pessoa) usando super()
        super(nome, email, telefone, data_nascimento, endereco, cpf, genero);
    }

    // Método para mostrar os dados do paciente
    mostrarDados(): void {
        // Imprime uma linha indicando o início dos dados do paciente
        console.log('--------------Dados do paciente-------------');
        
        // Imprime o nome do paciente
        console.log(`Nome: ${this.nome}`);
        
        // Imprime o e-mail do paciente
        console.log(`E-mail: ${this.email}`);
        
        // Imprime o telefone do paciente
        console.log(`Telefone: ${this.telefone}`);
        
        // Imprime a data de nascimento do paciente, formatada como string
        console.log(`Data de Nascimento: ${this.data_nascimento.toLocaleDateString()}`);
        
        // Imprime o endereço do paciente, unindo os elementos do array com uma vírgula e um espaço
        console.log(`Endereço: ${this.endereco.join(', ')}`);
        
        // Imprime o CPF do paciente
        console.log(`CPF: ${this.cpf}`);
        
        // Verifica se o gênero do paciente está definido e, se sim, imprime o gênero
        if (this.genero) {
            console.log(`Gênero: ${this.genero}`);
        }
        
        // Imprime uma linha indicando o fim dos dados do paciente
        console.log('------------------------------------------------');
    }
}

// Definição da classe Consulta para representar consultas médicas
export class Consulta {
    // Construtor da classe Consulta
    constructor(
        public local: string, // Local da consulta
        public data: Date, // Data da consulta
        public convenio: boolean, // Indica se o paciente possui convênio ou não
        public medico: Funcionario, // Médico responsável pela consulta
        public paciente: Paciente // Paciente que realizará a consulta
    ) {}

    // Método para mostrar os dados da consulta
    mostrarDados(): void {
        // Imprime uma linha indicando o início dos dados da consulta
        console.log('--------------Dados da consulta-------------');
        
        // Imprime o local da consulta
        console.log(`Local: ${this.local}`);
        
        // Imprime a data da consulta, formatada como string
        console.log(`Data: ${this.data.toLocaleString()}`);
        
        // Imprime os dados do médico responsável pela consulta
        console.log('Médico:');
        this.medico.mostrarDados();
        
        // Imprime os dados do paciente que realizará a consulta
        console.log('Paciente:');
        this.paciente.mostrarDados();
        
        // Imprime se o paciente possui convênio ou não, usando um operador ternário para exibir 'Sim' ou 'Não'
        console.log(`Convênio: ${this.convenio ? 'Sim' : 'Não'}`);
        
        // Imprime uma linha indicando o fim dos dados da consulta
        console.log('------------------------------------------------');
    }
}
// Criando uma instância de Funcionario
const funcionario1 = new Funcionario(
    // Endereço do funcionário
    ['Rua do Senac', 'Número 200', 'Bairro Senac', 'Cidade Senac'],
    '102547102', // CPF do funcionário
    'Dr. Zezinho', // Nome do funcionário
    'zezinho@email.com', // Email do funcionário
    '84995265878', // Telefone do funcionário
    'Médico', // Cargo do funcionário
    new Date('1956-10-25T12:12:12'), // Data de nascimento do funcionário
    '2514' // Matrícula do funcionário
);

// Criando uma instância de Paciente
const paciente1 = new Paciente(
    'Fulano de Tal', // Nome do paciente
    'fulano@example.com', // Email do paciente
    '987654321', // Telefone do paciente
    new Date('1980-05-15'), // Data de nascimento do paciente
    ['Rua dos Pacientes', '123'], // Endereço do paciente
    '98765432100', // CPF do paciente
    'Masculino' // Gênero do paciente
);

// Criando duas instâncias de Consulta
const consulta1 = new Consulta(
    'Mosquito', // Local da consulta
    new Date('2024-09-23T12:12:12'), // Data e hora da consulta
    true, // Indica se o paciente possui convênio
    funcionario1, // Médico responsável pela consulta
    paciente1 // Paciente que realizará a consulta
);

const consulta2 = new Consulta(
    'Japão', // Local da consulta
    new Date('2024-09-23T14:30:00'), // Data e hora da consulta
    false, // Indica se o paciente possui convênio
    funcionario1, // Médico responsável pela consulta
    paciente1 // Paciente que realizará a consulta
);

// Mostrando os dados das consultas
consulta1.mostrarDados();
consulta2.mostrarDados();
