// Cadastro de Funcionários:
// • Detalhes pessoais e profissionais dos colaboradores.
// criando a classe Funcionario
class Pessoa {
    nome: string;
    endereco: string[];
    email: string;
    telefone: string;
    data_nascimento: Date;
    rg: string;
    constructor(nome: string, endereco: string[], email: string, telefone: string, data_nascimento: Date, rg: string) {
        this.nome = nome;
        this.endereco = endereco;
        this.email = email;
        this.telefone = telefone;
        this.data_nascimento = data_nascimento;
        this.rg = rg;
    }
    mostrarDados() {
        console.log('Dados do funcionario:')
        console.log(`Nome completo do usuario: ${this.nome}`)
        console.log(`E-mail: ${this.email}`)
        console.log(`Telefone: ${this.telefone}`)
        console.log(`Data de nascimento: ${this.data_nascimento.toLocaleDateString('pt-BR')}`)
        console.log(`Endereço: ${this.endereco}`)
        console.log(`Endereço: ${this.rg}`)
    }

}

class Funcionario extends Pessoa {
    // atributos proprios da classe funcionario
    cargo: string;
    matricula: string;
    // Método construtor da classe
    constructor(matricula: string, endereco: string[], colaborador: string, email: string, telefone: string, cargo: string, data_nascimento: Date, rg: string) {
        super(colaborador, endereco, email, telefone, data_nascimento, rg)
        this.cargo = cargo;
        this.matricula = matricula;
    }
    mostrarDados() {
        super.mostrarDados();
        console.log(`Cargo: ${this.cargo}`);
        console.log(`Matricula: ${this.matricula}`);
    }
}
// instanciando a classe e criando o objeto funcionario1
const funcionario1 = new Funcionario('123456', ['Rua Senac', '13', 'Bairro Senac', 'Cidade Senac'], 'Colaborador', 'val@gmail.com', '12345678', 'professor', new Date('2024-2-25'), '12345')

class Paciente extends Pessoa {
    cpf: string;
    obs_alergias?: string;
    constructor(nome: string, cpf: string, rg: string, telefone: string, email: string, endereco: string[], data_nascimento: Date, obs_alergias?: string) {
        super(nome, endereco, email, telefone, data_nascimento, rg)
        this.cpf = cpf;
        this.obs_alergias = obs_alergias;
    }

}

const paciente1 = new Paciente('Paciente', '12345', '12345', '123456789', 'fulano@email.com', ['Rua tal', '25', 'Bairro tal'], new Date("2023-3-25"))
paciente1.mostrarDados()
funcionario1.mostrarDados()

// Cadastro de Consultas:
//• Dados específicos sobre cada consulta, incluindo informações importantes.
class Consulta {
    local: string;
    data: Date;
    convenio: boolean;
    medico: Funcionario;
    paciente: Paciente
    constructor(localizacao: string, data: Date, convenio: boolean, medico: Funcionario, paciente: Paciente) {
        this.data = data;
        this.local = localizacao;
        this.medico = medico;
        this.convenio = convenio;
        this.paciente = paciente;
    }

}
const consulta1 = new Consulta('Mosquito', new Date("2024-09-23"), true, funcionario1, paciente1)

paciente1.mostrarDados()
