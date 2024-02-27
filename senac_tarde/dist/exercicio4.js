"use strict";
// Definindo uma classe abstrata chamada Pessoa
class Pessoa {
    nome;
    email;
    cargo;
    // Definindo o construtor da classe Pessoa com três parâmetros: nome, email e cargo
    constructor(nome, // Atributo protegido que armazena o nome da pessoa
    email, // Atributo protegido que armazena o email da pessoa
    cargo // Atributo protegido que armazena o cargo da pessoa
    ) {
        this.nome = nome;
        this.email = email;
        this.cargo = cargo;
    }
    // Método abstrato para mostrar os dados da pessoa
    mostrarDados() {
        // Imprime uma linha indicando o início dos dados da pessoa
        console.log('--------------Dados da Pessoa-------------');
        // Imprime o nome da pessoa
        console.log(`Nome: ${this.nome}`);
        // Imprime o email da pessoa
        console.log(`Email: ${this.email}`);
        // Imprime o cargo da pessoa
        console.log(`Cargo: ${this.cargo}`);
        // Imprime uma linha indicando o fim dos dados da pessoa
        console.log('------------------------------------------------');
    }
}
// Definição da classe Projeto para representar os projetos em andamento
class Projeto {
    nome;
    descricao;
    equipe;
    progresso;
    marcos;
    // O construtor da classe Projeto recebe os parâmetros necessários para inicializar seus atributos
    constructor(nome, // Nome do projeto (atributo privado)
    descricao, // Descrição do projeto (atributo privado)
    equipe, // Lista de membros da equipe do projeto (atributo privado)
    progresso, // Progresso do projeto (atributo privado)
    marcos // Lista de marcos do projeto, contendo descrição e prazo (atributo privado)
    ) {
        this.nome = nome;
        this.descricao = descricao;
        this.equipe = equipe;
        this.progresso = progresso;
        this.marcos = marcos;
    }
    // Método para mostrar os dados do projeto
    mostrarDados() {
        // Imprime uma linha indicando o início dos dados do projeto
        console.log('--------------Dados do Projeto-------------');
        // Imprime o nome do projeto
        console.log(`Nome: ${this.nome}`);
        // Imprime a descrição do projeto
        console.log(`Descrição: ${this.descricao}`);
        // Imprime os membros da equipe do projeto
        console.log('Equipe:');
        // Loop para percorrer a lista de membros da equipe
        for (let i = 0; i < this.equipe.length; i++) {
            // Chama o método mostrarDados() de cada membro da equipe para exibir seus dados
            this.equipe[i].mostrarDados();
        }
        // Imprime o progresso do projeto
        console.log(`Progresso: ${this.progresso}%`);
        // Imprime os marcos do projeto
        console.log('Marcos:');
        // Loop para percorrer a lista de marcos do projeto
        for (let i = 0; i < this.marcos.length; i++) {
            // Armazena o marco atual em uma variável para facilitar a referência
            const marco = this.marcos[i];
            // Imprime a descrição e o prazo do marco, formatando a data com toLocaleDateString()
            console.log(`${marco.descricao} - Prazo: ${marco.prazo.toLocaleDateString()}`);
        }
        // Imprime uma linha indicando o fim dos dados do projeto
        console.log('------------------------------------------------');
    }
}
// Definição da classe Tarefa para representar as tarefas individuais de um projeto
// Definição da classe Tarefa para representar as tarefas individuais de um projeto
class Tarefa {
    descricao;
    responsavel;
    prazo;
    status;
    // O construtor da classe Tarefa recebe os parâmetros necessários para inicializar seus atributos
    constructor(descricao, // Descrição da tarefa (atributo privado)
    responsavel, // Responsável pela tarefa (atributo privado)
    prazo, // Prazo para conclusão da tarefa (atributo privado)
    status // Status da tarefa (atributo privado)
    ) {
        this.descricao = descricao;
        this.responsavel = responsavel;
        this.prazo = prazo;
        this.status = status;
    }
    // Método para mostrar os dados da tarefa
    mostrarDados() {
        // Imprime uma linha indicando o início dos dados da tarefa
        console.log('--------------Dados da Tarefa-------------');
        // Imprime a descrição da tarefa
        console.log(`Descrição: ${this.descricao}`);
        // Imprime o responsável pela tarefa
        console.log('Responsável:');
        // Chama o método mostrarDados() do responsável para exibir seus dados
        this.responsavel.mostrarDados();
        // Imprime o prazo para conclusão da tarefa, formatando a data com toLocaleDateString()
        console.log(`Prazo: ${this.prazo.toLocaleDateString()}`);
        // Imprime o status da tarefa
        console.log(`Status: ${this.status}`);
        // Imprime uma linha indicando o fim dos dados da tarefa
        console.log('------------------------------------------------');
    }
}
// Definição da classe Comunicacao para facilitar a comunicação entre os membros da equipe
class Comunicacao {
    membros;
    mensagens;
    arquivos;
    discussao;
    // O construtor da classe Comunicacao recebe os parâmetros necessários para inicializar seus atributos
    constructor(membros, // Lista de membros da equipe (atributo privado)
    mensagens, // Lista de mensagens trocadas entre os membros (atributo privado)
    arquivos, // Lista de arquivos compartilhados entre os membros (atributo privado)
    discussao // Lista de discussões registradas entre os membros (atributo privado)
    ) {
        this.membros = membros;
        this.mensagens = mensagens;
        this.arquivos = arquivos;
        this.discussao = discussao;
    }
    // Método para mostrar os dados de comunicação
    mostrarDados() {
        // Imprime uma linha indicando o início dos dados de comunicação
        console.log('--------------Dados de Comunicação-------------');
        // Mostrar membros
        console.log('Membros:');
        // Loop sobre a lista de membros para mostrar os dados de cada um
        for (let i = 0; i < this.membros.length; i++) {
            this.membros[i].mostrarDados();
        }
        // Mostrar mensagens
        console.log('Mensagens:');
        // Loop sobre a lista de mensagens para mostrar cada uma delas
        for (let i = 0; i < this.mensagens.length; i++) {
            console.log(this.mensagens[i]);
        }
        // Mostrar arquivos
        console.log('Arquivos:');
        // Loop sobre a lista de arquivos para mostrar cada um deles
        for (let i = 0; i < this.arquivos.length; i++) {
            console.log(this.arquivos[i]);
        }
        // Mostrar discussões
        console.log('Discussão:');
        // Loop sobre a lista de discussões para mostrar cada uma delas
        for (let i = 0; i < this.discussao.length; i++) {
            console.log(this.discussao[i]);
        }
        // Imprime uma linha indicando o fim dos dados de comunicação
        console.log('------------------------------------------------');
    }
}
// Agora podemos utilizar essas classes para implementar o sistema de gerenciamento de projetos
// Instanciar projetos, atribuir tarefas, facilitar a comunicação interna, etc.
// Criando instâncias de pessoas
const pessoa1 = new Pessoa('Alice', 'alice@email.com', 'Desenvolvedora');
const pessoa2 = new Pessoa('Bob', 'bob@email.com', 'Designer');
const pessoa3 = new Pessoa('Carlos', 'carlos@email.com', 'Gerente de Projeto');
// Criando uma lista de membros da equipe para um projeto
const equipeProjeto1 = [pessoa1, pessoa2, pessoa3];
// Criando instâncias de marcos de um projeto
const marcosProjeto1 = [
    { descricao: 'Análise de Requisitos', prazo: new Date('2024-03-15') },
    { descricao: 'Desenvolvimento', prazo: new Date('2024-04-30') },
    { descricao: 'Testes', prazo: new Date('2024-05-15') }
];
// Criando uma instância de projeto
const projeto1 = new Projeto('Projeto XYZ', 'Desenvolvimento de um novo aplicativo', equipeProjeto1, 50, marcosProjeto1);
// Criando instâncias de tarefas
const tarefa1 = new Tarefa('Implementar página de login', pessoa1, new Date('2024-03-10'), 'Em andamento');
const tarefa2 = new Tarefa('Criar protótipo da interface', pessoa2, new Date('2024-03-20'), 'Pendente');
// Criando uma lista de membros da equipe para comunicação interna
const equipeComunicacao = [pessoa1, pessoa2, pessoa3];
// Criando instâncias de mensagens, arquivos e discussões para comunicação interna
const mensagens = ['Lembrete: Reunião hoje às 14h.', 'Atualização do documento de requisitos enviado.'];
const arquivos = ['Documento de Requisitos_v1.1.pdf', 'Wireframes_v2.0.zip'];
const discussao = ['Discussão sobre a priorização das tarefas', 'Decisão sobre a tecnologia a ser utilizada'];
// Criando uma instância de comunicação interna
const comunicacaoInterna = new Comunicacao(equipeComunicacao, mensagens, arquivos, discussao);
// Testando a exibição dos dados
projeto1.mostrarDados(); // Mostra os dados do projeto
console.log('\n');
tarefa1.mostrarDados(); // Mostra os dados da primeira tarefa
console.log('\n');
comunicacaoInterna.mostrarDados(); // Mostra os dados de comunicação interna
