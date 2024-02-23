import { Funcionario } from './exercicio1'

class Desenvolvedor extends Funcionario{
    constructor(
        matricula: string, 
        endereco: string[], 
        colaborador: string, 
        email: string, 
        telefone: string, 
        cargo: string, 
        data_nascimento: Date, 
        rg: string
    ){
        super(matricula,endereco,colaborador, email, telefone,cargo,data_nascimento,rg)
    }
    mostrarDados() {
        super.mostrarDados();
    }
}

const dev1 = new Desenvolvedor('0021',['Rua Trairi','Bairro Petropolis'],'Robesvaldo','robesvaldo@email.com','849999999','Dev Web',new Date('1954-11-12'),'2359862')

dev1.mostrarDados()