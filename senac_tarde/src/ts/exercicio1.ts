// Cadastro de Funcionários:
// • Detalhes pessoais e profissionais dos colaboradores.
// criando a classe Funcionario
class Funcionario {
    // atributos
    nome: string;
    endereco: string[];
    email: string;
    telefone: string;
    cargo: string;
    data_nascimento: Date;
    // Método construtor da classe
    constructor(endereco: string[], nome: string, email: string, telefone: string, cargo: string, data_nascimento: Date) {
        this.cargo = cargo;
        this.email = email;
        this.telefone = telefone;
        this.nome = nome;
        this.data_nascimento = data_nascimento;
        this.endereco = endereco
    }

}
// instanciando a classe e criando o objeto funcionario1
const funcionario1 = new Funcionario(['Rua Senac','13','Senac'],'Valtemir','val@gmail.com','12345678','professor',new Date('2023-2-25'))
console.log(funcionario1)


class Paciente {
    nome: string;
    cpf: string;
    rg: string;
    telefone: string;
    email: string;
    endereco: string;
    obs_alergias?: string;
    constructor(nome: string, cpf: string, rg: string, telefone: string, email: string, endereco: string, obs_alergias?: string) {
        this.nome = nome,
            this.cpf = cpf,
            this.email = email,
            this.endereco = endereco,
            this.rg = rg,
            this.telefone = telefone
        this.obs_alergias = obs_alergias
    }
   
}

const paciente1 = new Paciente('Valtemir', '1234445555', '0987654321', '84 9 9999-999', 'val@gmail', 'Rua tal de tal', 'dipirona')


// Cadastro de Consultas:
//• Dados específicos sobre cada consulta, incluindo informações importantes.
class Consulta {
    local: string;
    data: Date;
    convenio: boolean;
    medico: Funcionario;
    paciente: Paciente
    constructor(localizacao: string, data: Date, convenio: boolean, medico: Funcionario, paciente: Paciente) {
        this.data = data,
            this.local = localizacao,
            this.medico = medico,
            this.convenio = convenio,
            this.paciente = paciente
    }
}
const consulta1 = new Consulta('Mosquito', new Date('2024-09-23T12:12:12'), true, funcionario1, paciente1)

console.log(consulta1)

