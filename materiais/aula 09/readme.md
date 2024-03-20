# Curso de TypeScript

## Aula 08 - Funções

Em TypeScript, as funções são blocos de código que podem ser reutilizados e executados quando chamados. Aqui estão alguns exemplos de como trabalhar com funções:

### Tipos de Funções

- **Função Simples:**
  ```typescript
  function saudar(nome: string): void {
      console.log(`Olá, ${nome}!`);
  }
  saudar('Alice');
  ```

- **Função com Retorno:**
  ```typescript
  function somar(a: number, b: number): number {
      return a + b;
  }
  let resultado = somar(5, 3);
  console.log(resultado); // 8
  ```

- **Função Anônima:**
  ```typescript
  let multiplicar = function(a: number, b: number): number {
      return a * b;
  };
  console.log(multiplicar(4, 2)); // 8
  ```

- **Arrow Function:**
  ```typescript
  let dividir = (a: number, b: number): number => {
      return a / b;
  };
  console.log(dividir(10, 2)); // 5
  ```

### Tipos de Retorno

- **Retorno Explícito:**
  ```typescript
  function obterNome(): string {
      return 'Alice';
  }
  let nome: string = obterNome();
  console.log(nome); // Alice
  ```

- **Retorno Implícito:**
  ```typescript
  let obterIdade = (): number => 25;
  console.log(obterIdade()); // 25
  ```

- **Retorno Void:**
  ```typescript
  function imprimirMensagem(mensagem: string): void {
      console.log(mensagem);
  }
  imprimirMensagem('Hello, World!');
  ```

- **Retorno Never:**
  ```typescript
  function erro(mensagem: string): never {
      throw new Error(mensagem);
  }
  // erro('Algo deu errado!');
  ```

### Parâmetros

- **Parâmetros Opcionais:**
  ```typescript
  function saudacao(nome: string, sobrenome?: string): string {
      return `Olá, ${nome} ${sobrenome || ''}`;
  }
  console.log(saudacao('Alice')); // Olá, Alice
  console.log(saudacao('Alice', 'Smith')); // Olá, Alice Smith
  ```

- **Parâmetros Padrão:**
  ```typescript
  function saudacaoCompleta(nome: string, sobrenome: string = 'Doe'): string {
      return `Olá, ${nome} ${sobrenome}`;
  }
  console.log(saudacaoCompleta('Alice')); // Olá, Alice Doe
  ```

- **Parâmetros Rest:**
  ```typescript
  function somarNumeros(...numeros: number[]): number {
      return numeros.reduce((a, b) => a + b, 0);
  }
  console.log(somarNumeros(1, 2, 3, 4, 5)); // 15
  ```

Estes são alguns exemplos básicos de como trabalhar com funções em TypeScript. Existem muitas outras possibilidades, dependendo das necessidades do seu projeto.