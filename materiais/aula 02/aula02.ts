// String
let nome: string = 'Ana';

// Number
let idade: number = 25;

// Boolean
let possuiHobbies: boolean = true;

// Array
let hobbies: string[] = ['Cozinhar', 'Esportes'];

// Tuple
let endereco: [string, number] = ['Rua Principal', 99];

// Enum
enum Cor {
    Cinza, // 0
    Verde, // 1
    Azul   // 2
}
let minhaCor: Cor = Cor.Verde;

// Any
let carro: any = 'BMW';
carro = { marca: 'BMW', ano: 2019 };

// Funções
function retornaMeuNome(): string {
    return nome;
}
console.log(retornaMeuNome());

// Void
function digaOi(): void {
    console.log('Oi');
}
digaOi();

// Null e Undefined
let podeSerNulo: null = null; // Mais comum em tipo union
let indefinido: undefined = undefined;

// Checagem de tipos
let valor: any = 'Isso é uma string';
if (typeof valor === 'string') {
    console.log('O valor é uma string.');
}