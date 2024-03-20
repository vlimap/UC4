# Curso de TypeScript

## Aula 10 - Classes e Outros Métodos

Além dos métodos e atributos básicos, as classes em TypeScript podem ter outros recursos interessantes. Vamos explorar alguns deles:

### Métodos Estáticos

Métodos estáticos são funções que pertencem à classe e não a uma instância específica da classe.

```typescript
class Matematica {
    static somar(a: number, b: number): number {
        return a + b;
    }

    static subtrair(a: number, b: number): number {
        return a - b;
    }
}

console.log(Matematica.somar(5, 3)); // 8
console.log(Matematica.subtrair(10, 7)); // 3
```

### Getters e Setters

Getters e setters são métodos especiais que permitem controlar o acesso e a modificação de atributos de uma classe.

```typescript
class Pessoa {
    private _idade: number;

    constructor(idade: number) {
        this._idade = idade;
    }

    get idade(): number {
        return this._idade;
    }

    set idade(novaIdade: number) {
        if (novaIdade > 0) {
            this._idade = novaIdade;
        } else {
            console.log('Idade inválida.');
        }
    }
}

let pessoa = new Pessoa(25);
console.log(pessoa.idade); // 25
pessoa.idade = 30;
console.log(pessoa.idade); // 30
pessoa.idade = -5; // Idade inválida.
```

### Herança

A herança permite que uma classe herde propriedades e métodos de outra classe.

```typescript
class Animal {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    mover(distancia: number): void {
        console.log(`${this.nome} moveu-se ${distancia}m.`);
    }
}

class Cachorro extends Animal {
    latir(): void {
        console.log('Au au!');
    }
}

let cachorro = new Cachorro('Rex');
cachorro.mover(10); // Rex moveu-se 10m.
cachorro.latir(); // Au au!
```

### Abstract Classes

Classes abstratas são classes que não podem ser instanciadas diretamente, apenas herdadas por outras classes.

```typescript
abstract class Veiculo {
    abstract mover(): void;
}

class Carro extends Veiculo {
    mover(): void {
        console.log('Carro está se movendo.');
    }
}

let carro = new Carro();
carro.mover(); // Carro está se movendo.
```

### Implementando Interfaces

Interfaces definem contratos que as classes podem implementar, garantindo que possuam certas propriedades ou métodos.

```typescript
interface IVoador {
    voar(): void;
}

class Aviao implements IVoador {
    voar(): void {
        console.log('Avião está voando.');
    }
}

let aviao = new Aviao();
aviao.voar(); // Avião está voando.
```

Estes são alguns exemplos adicionais de como trabalhar com classes e métodos em TypeScript. A combinação desses recursos pode ajudar a criar estruturas de dados e comportamentos mais sofisticados e reutilizáveis.