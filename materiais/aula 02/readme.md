# Curso de TypeScript

## Aula 02 - Variáveis em TypeScript

TypeScript é um superconjunto tipado de JavaScript que adiciona tipagem estática ao código. Isso permite um desenvolvimento mais seguro e previsível, já que os tipos de variáveis são verificados em tempo de compilação.

### Tipos de Variáveis

TypeScript suporta vários tipos de variáveis, incluindo:

1. **String:** Para texto.
    ```typescript
    let nome: string = 'João';
    ```

2. **Number:** Para números inteiros e decimais.
    ```typescript
    let idade: number = 30;
    let altura: number = 1.75;
    ```

3. **Boolean:** Para valores verdadeiro ou falso.
    ```typescript
    let estaAtivo: boolean = true;
    ```

4. **Array:** Para listas de valores.
    ```typescript
    let numeros: number[] = [1, 2, 3, 4, 5];
    let frutas: Array<string> = ['Maçã', 'Banana', 'Laranja'];
    ```

5. **Tuple:** Para arrays com tipos fixos e número de elementos.
    ```typescript
    let pessoa: [string, number] = ['Maria', 28];
    ```

6. **Enum:** Para definir um conjunto de valores nomeados.
    ```typescript
    enum DiasDaSemana { Domingo, Segunda, Terça, Quarta, Quinta, Sexta, Sábado }
    let hoje: DiasDaSemana = DiasDaSemana.Quarta;
    ```

7. **Any:** Para variáveis com tipo dinâmico.
    ```typescript
    let algo: any = 'Texto';
    algo = 10;
    algo = true;
    ```

8. **Void:** Para funções que não retornam valor.
    ```typescript
    function saudacao(): void {
        console.log('Olá, mundo!');
    }
    ```

9. **Null e Undefined:** Para representar a ausência de valor ou a não atribuição de valor a uma variável.
    ```typescript
    let vazio: null = null;
    let indefinido: undefined = undefined;
    ```

### Declaração de Variáveis

As variáveis em TypeScript podem ser declaradas usando `let`, `const` ou `var`:

- `let`: Para variáveis que podem ser reatribuídas.
- `const`: Para constantes cujo valor não pode ser alterado.
- `var`: Deve ser evitado em favor de `let` e `const` devido ao seu escopo de função.

### Exemplo Completo

Aqui está um exemplo que demonstra a declaração e o uso de diferentes tipos de variáveis em TypeScript:

```typescript
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

```