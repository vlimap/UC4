// Cadastro de Funcionários:
// • Detalhes pessoais e profissionais dos colaboradores.
class Funcionario {
    nome: string;
    email: string;
    telefone: string;
    cargo: string;
    data_nascimento: Date;
    // Método construtor da classe Funcionario
    constructor(nome: string, email: string, telefone: string, cargo: string, data_nascimento: Date) {
        this.cargo = cargo;
        this.email = email;
        this.telefone = telefone;
        this.nome = nome;
        this.data_nascimento = data_nascimento;
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


class Paciente {
    nome: string;
    cpf: string;
    rg: string;
    telefone: string;
    email: string;
    endereco: string;
    obs_alergias?: string;
    constructor(nome: string, cpf: string, rg: string, telefone: string, email: string, endereco: string, obs_alergias?: string) {
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.endereco = endereco;
        this.rg = rg;
        this.telefone = telefone;
        this.obs_alergias = obs_alergias;
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


