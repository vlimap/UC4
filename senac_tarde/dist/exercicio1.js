"use strict";
// Cadastro de Funcionários:
// • Detalhes pessoais e profissionais dos colaboradores.
class Funcionario {
    nome;
    email;
    telefone;
    cargo;
    data_nascimento;
    constructor(nome, email, telefone, cargo, data_nascimento) {
        this.cargo = cargo,
            this.email = email,
            this.telefone = telefone,
            this.nome = nome,
            this.data_nascimento = data_nascimento;
    }
}
const funcionario1 = new Funcionario('Valtemir', 'val@gmail.com', "1234567890", 'medico', new Date("2023-2-23"));
console.log(funcionario1);
class Paciente {
    nome;
    cpf;
    rg;
    telefone;
    email;
    endereco;
    obs_alergias;
    constructor(nome, cpf, rg, telefone, email, endereco, obs_alergias) {
        this.nome = nome,
        this.cpf = cpf,
        this.email = email,
        this.endereco = endereco,
        this.rg = rg,
        this.telefone = telefone;
        this.obs_alergias = obs_alergias;
    }
}
const paciente1 = new Paciente('Valtemir', '1234567890', '0987654321', '84 9 9999-999', 'val@gmail', 'Rua tal de tal');
// Cadastro de Consultas:
//• Dados específicos sobre cada consulta, incluindo informações importantes.
class Consulta {
    local;
    data;
    convenio;
    medico;
    paciente;
    constructor(localizacao, data, convenio, medico, paciente) {
        this.data = data,
        this.local = localizacao,
        this.medico = medico,
        this.convenio = convenio,
        this.paciente = paciente;
    }
}
const consulta1 = new Consulta('Mosquito', new Date('2024-09-23T12:12:12'), true, funcionario1, paciente1);
console.log(consulta1);
