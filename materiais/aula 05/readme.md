
# Curso de TypeScript

## Aula 05 - Laços de Repetição

Laços de repetição são estruturas que permitem executar um bloco de código várias vezes. TypeScript suporta vários tipos de laços, incluindo `for`, `while`, `do...while`, e `for...of`.

### For Loop

O laço `for` é usado para repetir um bloco de código um número específico de vezes.

```typescript
for (let i: number = 0; i < 5; i++) {
    console.log(`Iteração ${i}`);
}
// Saída:
// Iteração 0
// Iteração 1
// Iteração 2
// Iteração 3
// Iteração 4
```

### While Loop

O laço `while` executa um bloco de código enquanto uma condição específica for verdadeira.

```typescript
let contador: number = 0;
while (contador < 5) {
    console.log(`Contador: ${contador}`);
    contador++;
}
// Saída:
// Contador: 0
// Contador: 1
// Contador: 2
// Contador: 3
// Contador: 4
```

### Do...While Loop

O laço `do...while` é semelhante ao `while`, mas garante que o bloco de código seja executado pelo menos uma vez.

```typescript
let contadorDoWhile: number = 0;
do {
    console.log(`Contador do...while: ${contadorDoWhile}`);
    contadorDoWhile++;
} while (contadorDoWhile < 5);
// Saída:
// Contador do...while: 0
// Contador do...while: 1
// Contador do...while: 2
// Contador do...while: 3
// Contador do...while: 4
```

### For...Of Loop

O laço `for...of` é usado para iterar sobre os elementos de uma coleção, como um array ou uma string.

```typescript
let frutas: string[] = ['Maçã', 'Banana', 'Laranja'];
for (let fruta of frutas) {
    console.log(`Fruta: ${fruta}`);
}
// Saída:
// Fruta: Maçã
// Fruta: Banana
// Fruta: Laranja
```

Estes são os tipos mais comuns de laços de repetição em TypeScript. Eles são muito úteis para iterar sobre arrays, coleções ou para executar um bloco de código várias vezes.
