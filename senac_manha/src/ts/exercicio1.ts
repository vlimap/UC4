// Cadastro de Funcionários:
// • Detalhes pessoais e profissionais dos colaboradores.
class Pessoa {
    constructor(
        public nome: string,
        public email: string,
        public telefone: string,
        public data_nascimento: Date,
        public endereco: string[],
        public cpf: string,
        public genero?: string
    ) {}
    
    mostrarDados() {
        console.log(`Nome do usuário: ${this.nome}`);
        console.log(`E-mail: ${this.email}`);
        console.log(`Telefone: ${this.telefone}`);
        console.log(`Data de nascimento: ${this.data_nascimento.toLocaleDateString('pt-BR')}`);
        console.log(`CPF: ${this.cpf}`);
        console.log(`Endereço: ${this.endereco.join(', ')}`);
        
        if (this.genero) {
            console.log(`Gênero: ${this.genero}`);
        }
    }
}

export class Funcionario extends Pessoa {
    matricula: string;
    cargo: string;
    
    // Método construtor da classe Funcionario
    constructor(
        endereco: string[],
        cpf: string,
        nome: string,
        email: string,
        telefone: string,
        cargo: string,
        data_nascimento: Date,
        matricula: string,
        genero?: string
    ) {
        super(nome, email, telefone, data_nascimento, endereco, cpf, genero);
        this.cargo = cargo;
        this.matricula = matricula;
    }
    
    mostrarDados() {
        console.log('--------------Dados do funcionário-------------');
        super.mostrarDados();
        console.log(`Matrícula: ${this.matricula}`);
        console.log(`Cargo: ${this.cargo}`);
        console.log(`Hora: ${this.data_nascimento.toLocaleTimeString()}`);
        console.log('------------------------------------------------');
    }
}

const funcionario1 = new Funcionario(
    ['Rua do Senac', 'Número 200', 'Bairro Senac', 'Cidade Senac'],
    '102547102',
    'Dr. Zezinho',
    'zezinho@email.com',
    '84995265878',
    'Médico',
    new Date('1956-10-25T12:12:12'),
    '2514'
);

funcionario1.mostrarDados();

class Paciente extends Pessoa {
    obs_alergias?: string;
    
    constructor(
        nome: string,
        cpf: string,
        telefone: string,
        email: string,
        endereco: string[],
        obs_alergias?: string
    ) {
        super(nome, email, telefone, new Date(), endereco, cpf);
        this.obs_alergias = obs_alergias;
    }
}

const paciente1 = new Paciente(
    'Fulano',
    '1234567890',
    '0987654321',
    '84 9 9999-999',
    ['Rua tal de tal'],
    'Alergia a alguma coisa'
);

// Cadastro de Consultas:
// • Dados específicos sobre cada consulta, incluindo informações importantes.
class Consulta {
    local: string;
    data: Date;
    convenio: boolean;
    medico: Funcionario;
    paciente: Paciente;
    
    constructor(local: string, data: Date, convenio: boolean, medico: Funcionario, paciente: Paciente) {
        this.data = data;
        this.local = local;
        this.medico = medico;
        this.convenio = convenio;
        this.paciente = paciente;
    }
    
    mostrarDados() {
        console.log('--------------Dados da consulta-------------');
        console.log(`Local: ${this.local}`);
        console.log(`Data: ${this.data.toLocaleDateString('pt-BR')}`);
        console.log(`Convênio: ${this.convenio ? 'Sim' : 'Não'}`);
        console.log('Medico:');
        this.medico.mostrarDados();
        console.log('Paciente:');
        this.paciente.mostrarDados();
        console.log('--------------------------------------------');
    }
}

const consulta1 = new Consulta(
    'Mosquito',
    new Date('2024-09-23T12:12:12'),
    true,
    funcionario1,
    paciente1
);

const consulta2 = new Consulta(
    'Japão',
    new Date('2024-09-23T12:12:12'),
    false,
    funcionario1,
    paciente1
);

consulta1.mostrarDados();
consulta2.mostrarDados();
