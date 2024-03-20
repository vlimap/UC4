# Curso de TypeScript

## Aula 09 - Classes e Atributos

Em TypeScript, as classes são uma forma de definir estruturas de dados e comportamentos que podem ser reutilizados. Os atributos são propriedades que pertencem às classes. Aqui estão alguns exemplos de como trabalhar com classes e atributos:

### Definindo uma Classe

```typescript
class Pessoa {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    saudar(): void {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}

let pessoa1 = new Pessoa('Alice', 30);
pessoa1.saudar(); // Olá, meu nome é Alice e tenho 30 anos.
```

### Atributos

- **Atributos Públicos:** Por padrão, todos os atributos são públicos em TypeScript.
  ```typescript
  class Carro {
      marca: string;
      modelo: string;

      constructor(marca: string, modelo: string) {
          this.marca = marca;
          this.modelo = modelo;
      }
  }

  let meuCarro = new Carro('Toyota', 'Corolla');
  console.log(meuCarro.marca); // Toyota
  ```

- **Atributos Privados:** Usando a palavra-chave `private`, os atributos só podem ser acessados dentro da classe.
  ```typescript
  class ContaBancaria {
      private saldo: number;

      constructor(saldoInicial: number) {
          this.saldo = saldoInicial;
      }

      depositar(valor: number): void {
          this.saldo += valor;
      }

      sacar(valor: number): void {
          if (valor <= this.saldo) {
              this.saldo -= valor;
          } else {
              console.log('Saldo insuficiente.');
          }
      }

      obterSaldo(): number {
          return this.saldo;
      }
  }

  let minhaConta = new ContaBancaria(1000);
  minhaConta.depositar(500);
  minhaConta.sacar(200);
  console.log(minhaConta.obterSaldo()); // 1300
  ```

- **Atributos Protegidos:** Com a palavra-chave `protected`, os atributos podem ser acessados na classe e em subclasses.
  ```typescript
  class Animal {
      protected nome: string;

      constructor(nome: string) {
          this.nome = nome;
      }
  }

  class Cachorro extends Animal {
      latir(): void {
          console.log(`Au au! Meu nome é ${this.nome}.`);
      }
  }

  let cachorro = new Cachorro('Rex');
  cachorro.latir(); // Au au! Meu nome é Rex.
  ```

- **Atributos Readonly:** Atributos que só podem ser lidos e atribuídos uma única vez, geralmente no momento da construção.
  ```typescript
  class Circulo {
      readonly pi: number = 3.14;
      raio: number;

      constructor(raio: number) {
          this.raio = raio;
      }

      calcularArea(): number {
          return this.pi * this.raio * this.raio;
      }
  }

  let circulo = new Circulo(5);
  console.log(circulo.calcularArea()); // 78.5
  ```

Estes são alguns exemplos básicos de como trabalhar com classes e atributos em TypeScript. Existem muitas outras possibilidades, dependendo das necessidades do seu projeto.