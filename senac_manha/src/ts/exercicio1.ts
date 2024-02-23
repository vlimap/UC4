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
        console.log(`Nome do usuario___: ${this.nome}`)
        console.log(`E-mail____________: ${this.email}`)
        console.log(`Telefone__________: ${this.telefone}`)
        console.log(`Data de nascimento: ${this.data_nascimento.toLocaleDateString('pt-BR')}`)
        console.log(`CPF_______________: ${this.cpf}`)
        console.log(`Telefone__________: ${this.telefone}`)
        console.log(`Endereço__________: ${this.endereco}`)

        if (this.genero) {
            console.log(`Genero____________: ${this.genero}`)
        }
    }
}

export class Funcionario extends Pessoa {
    matricula: string;
    cargo: string;
    // Método construtor da classe Funcionario
    constructor(endereco: string[], cpf: string, nome: string, email: string, telefone: string, cargo: string, data_nascimento: Date, matricula: string,genero?: string) {
        super(nome,email, telefone, data_nascimento, endereco,cpf,genero);
        this.cargo = cargo;
        this.matricula = matricula;
    }
    mostrarDados() {
        console.log('--------------Dados do funcionario-------------');
        super.mostrarDados();
        console.log(`Matricula_________: ${this.matricula}`);
        console.log(`Cargo_____________: ${this.cargo}`);
        console.log(`Hora_____________: ${this.data_nascimento.toLocaleTimeString()}`);
        console.log('------------------------------------------------');

    }
}

const funcionario1 = new Funcionario(['Rua do Senac', 'Numero 200', 'Bairro Senac', 'Cidade Senac'], '102547102', 'Dr. Zezinho', 'zezinho@email.com', '84995265878', 'Medico', new Date('1956-10-25T12:12:12'), '2514')
//funcionario1.mostrarDados()
/* 

class Paciente extends Pessoa {
    obs_alergias?: string;
    constructor(nome: string, cpf: string, telefone: string, email: string, endereco: string, obs_alergias?: string) {

    }
}

const paciente1 = new Paciente('Fulano', '1234567890', '0987654321', '84 9 9999-999', 'val@gmail', 'Rua tal de tal')


// Cadastro de Consultas:
//• Dados específicos sobre cada consulta, incluindo informações importantes.
class Consulta {
    local: string;
    data: Date;
    convenio: boolean;
    medico: Funcionario;
    paciente: Paciente;
    constructor(localizacao: string, data: Date, convenio: boolean, medico: Funcionario, paciente: Paciente) {
        this.data = data;
        this.local = localizacao;
        this.medico = medico;
        this.convenio = convenio;
        this.paciente = paciente;
    }
    mostrarDados() {
        console.log(`Funcionario: 
1 - ${funcionario1.nome} \n
2 - ${funcionario1.nome} \n
3 - ${funcionario1.nome} \n
4 - ${funcionario1.nome} \n
5 - ${funcionario1.nome} \n
            `)
    }
}

const consulta1 = new Consulta('Mosquito', new Date('2024-09-23T12:12:12'), true, funcionario1, paciente1)
const consulta2 = new Consulta('Japao', new Date('2024-09-23T12:12:12'), false, funcionario1, paciente1)

console.log(consulta1.mostrarDados())
console.log(consulta2)


    * / */