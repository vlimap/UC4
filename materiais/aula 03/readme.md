
# Curso de TypeScript

## Aula 03 - Condicionais em TypeScript

Condicionais são estruturas de controle que permitem tomar decisões no código com base em determinadas condições. No TypeScript, as estruturas condicionais mais comuns são `if`, `else if`, `else`, e `switch`.

### If, Else If e Else

A estrutura `if` permite executar um bloco de código se uma condição específica for verdadeira. Você pode adicionar condições adicionais usando `else if` e um bloco final `else` para executar um código padrão quando nenhuma das condições anteriores for verdadeira.

```typescript
let nota: number = 85; // Declaração de variável com tipo number

if (nota >= 90) { // Condição para nota A
    console.log('A');
} else if (nota >= 80) { // Condição para nota B
    console.log('B');
} else if (nota >= 70) { // Condição para nota C
    console.log('C');
} else if (nota >= 60) { // Condição para nota D
    console.log('D');
} else { // Condição para nota F
    console.log('F');
}
```

### Switch

A estrutura `switch` é uma alternativa ao `if` que é mais adequada quando você tem várias condições que dependem do valor de uma única variável.

```typescript
let dia: number = new Date().getDay(); // Obtém o dia atual da semana

switch (dia) { // Avalia o valor da variável 'dia'
    case 0: // Caso o dia seja 0 (Domingo)
        console.log('Domingo');
        break; // Encerra o bloco de código
    case 1: // Caso o dia seja 1 (Segunda-feira)
        console.log('Segunda-feira');
        break; // Encerra o bloco de código
    case 2: // Caso o dia seja 2 (Terça-feira)
        console.log('Terça-feira');
        break; // Encerra o bloco de código
    case 3: // Caso o dia seja 3 (Quarta-feira)
        console.log('Quarta-feira');
        break; // Encerra o bloco de código
    case 4: // Caso o dia seja 4 (Quinta-feira)
        console.log('Quinta-feira');
        break; // Encerra o bloco de código
    case 5: // Caso o dia seja 5 (Sexta-feira)
        console.log('Sexta-feira');
        break; // Encerra o bloco de código
    case 6: // Caso o dia seja 6 (Sábado)
        console.log('Sábado');
        break; // Encerra o bloco de código
    default: // Caso nenhum dos casos anteriores seja atendido
        console.log('Dia inválido');
}
```

### Operador Ternário

O operador ternário é uma forma concisa de escrever uma estrutura condicional. Ele é composto por três partes: uma condição, um resultado se a condição for verdadeira e um resultado se a condição for falsa.

```typescript
let idade: number = 18; // Declaração de variável com tipo number
let status: string = idade >= 18 ? 'Adulto' : 'Menor de idade'; // Operador ternário

console.log(status); // Exibe o status baseado na idade
```

Este operador é útil para atribuições simples baseadas em condições.
