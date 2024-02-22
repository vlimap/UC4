// Cadastro de Funcionários:
// • Detalhes pessoais e profissionais dos colaboradores.
class Pessoa {
    nome: string;
    email: string;
    telefone: string;
    data_nascimento: Date;
    endereco: string[];
    cpf: string;
    genero?: string;
    constructor(nome: string, email: string, telefone: string, data_nascimento: Date, endereco: string[], cpf: string, genero?: string) {
        this.nome = nome;
        this.genero = genero;
        this.telefone = telefone;
        this.endereco = endereco;
        this.email = email;
        this.cpf = cpf;
        this.data_nascimento = data_nascimento;
    }
    mostrarDados() {
        console.log('--------------Dados do funcionario-------------')
        console.log(`Nome do usuario___: ${this.nome}`)
        console.log(`E-mail____________: ${this.email}`)
        console.log(`Telefone__________: ${this.telefone}`)
        console.log(`Data de nascimento: ${this.data_nascimento.toLocaleDateString('pt-BR')}`)
        console.log(`CPF_______________: ${this.cpf}`)
        console.log(`Telefone__________: ${this.telefone}`)
        if (this.genero) {
            console.log(`Genero____________: ${this.genero}`)
        }
        console.log('------------------------------------------------')
    }
}

class Funcionario extends Pessoa {
    matricula: string;
    cargo: string;
    // Método construtor da classe Funcionario
    constructor(endereco: string[], cpf: string,nome: string, email: string, telefone: string, cargo: string, data_nascimento: Date, matricula: string) {
        super(nome,email,telefone,data_nascimento,endereco,cpf);
        this.cargo = cargo;
        this.matricula = matricula;
    }
    mostrarDados() {
        console.log('--------------Dados do funcionario-------------')
        console.log(`Nome do usuario___: ${this.nome}`)
        console.log(`E-mail____________: ${this.email}`)
        console.log(`Telefone__________: ${this.telefone}`)
        console.log(`Cargo_____________: ${this.cargo}`)
        console.log(`Data de nascimento: ${this.data_nascimento.toLocaleDateString('pt-BR')}`)
        console.log('------------------------------------------------')
    }

}

const funcionario1 = new Funcionario('Fulano', 'fulano@gmail.com', "1234567890", 'medico', new Date("2023-2-23"))
console.log(funcionario1.mostrarDados())


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


