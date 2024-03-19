
# Curso de TypeScript

## Aula 04 - Manipulação de String, Número e Data

### Manipulação de String

TypeScript, assim como JavaScript, oferece várias maneiras de manipular strings. Aqui estão alguns exemplos comuns:

```typescript
// Concatenação de strings
let saudacao: string = 'Olá';
let nome: string = 'Maria';
let mensagem: string = saudacao + ', ' + nome + '!';
console.log(mensagem); // Saída: Olá, Maria!

// Template literals (strings interpoladas)
let mensagemInterpolada: string = `${saudacao}, ${nome}!`;
console.log(mensagemInterpolada); // Saída: Olá, Maria!

// Métodos de string
let texto: string = 'TypeScript é incrível!';
console.log(texto.toUpperCase()); // Saída: TYPESCRIPT É INCRÍVEL!
console.log(texto.toLowerCase()); // Saída: typescript é incrível!
console.log(texto.slice(0, 10)); // Saída: TypeScript
```

### Manipulação de Número

TypeScript fornece diversas operações para manipular números, incluindo operações aritméticas e métodos de objeto `Number`.

```typescript
// Operações aritméticas
let soma: number = 10 + 5;
let subtracao: number = 10 - 5;
let multiplicacao: number = 10 * 5;
let divisao: number = 10 / 5;
console.log(soma, subtracao, multiplicacao, divisao); // Saída: 15 5 50 2

// Métodos de Number
let numero: number = 123.456;
console.log(numero.toFixed(2)); // Saída: 123.46
console.log(Math.round(numero)); // Saída: 123
console.log(Math.ceil(numero)); // Saída: 124
console.log(Math.floor(numero)); // Saída: 123
```

### Manipulação de Data

TypeScript permite a manipulação de datas usando o objeto `Date`. Aqui estão alguns exemplos:

```typescript
// Criando uma nova data
let agora: Date = new Date();
console.log(agora); // Saída: data e hora atuais

// Acessando componentes da data
console.log(agora.getFullYear()); // Saída: ano atual
console.log(agora.getMonth()); // Saída: mês atual (0 a 11)
console.log(agora.getDate()); // Saída: dia do mês atual
console.log(agora.getDay()); // Saída: dia da semana atual (0 a 6)

// Formatando datas
let opcoes: Intl.DateTimeFormatOptions = {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
};
console.log(agora.toLocaleDateString('pt-BR', opcoes)); // Saída: sexta-feira, 17 de março de 2023
```

Estes são apenas alguns exemplos básicos de como manipular strings, números e datas em TypeScript. Existem muitas outras operações e métodos disponíveis para explorar.
