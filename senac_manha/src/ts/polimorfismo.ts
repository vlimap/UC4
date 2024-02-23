import { Funcionario } from './exercicio1'

const funcionario2 = new Funcionario(['Rua Nordestao','12'],'321456987','Robervaldo','robervaldo123@email.com','45623456','Desenvolvedor',new Date('1957-11-23'),'0021')

funcionario2.mostrarDados()

class Desenvolvedor extends Funcionario{
    habilidades: string[];
    ano_experiencia: number;
    constructor(
        ano_experiencia: number, 
        habilidades: string[],
        endereco: string[],
        cpf: string, 
        nome: string, 
        email:string, 
        telefone: string, 
        cargo: string, 
        data_nascimento:Date,
        matricula: string, 
        genero?:string
        ){
        super(endereco,cpf,nome,email,telefone,cargo, data_nascimento, matricula, genero)
        this.habilidades = habilidades;
        this.ano_experiencia = ano_experiencia
    }
    mostrarDados() {
        super.mostrarDados()
        console.log(`Experiencia:__________ ${this.ano_experiencia}`)
        console.log(`Habilidades:__________ ${this.habilidades}`)
    }
}

const dev1 = new Desenvolvedor(
    5, // ano_experiencia
    ['JavaScript', 'TypeScript', 'React'], // habilidades
    ['Rua Exemplo, 123', 'Cidade Exemplo', 'Estado Exemplo'], // endereco
    '123.456.789-10', // cpf
    'Fulano de Tal', // nome
    'fulano@example.com', // email
    '123456789', // telefone
    'Desenvolvedor Full Stack', // cargo
    new Date('1990-01-01'), // data_nascimento
    'ABC123', // matricula
    'Masculino' // genero
);

dev1.mostrarDados()


