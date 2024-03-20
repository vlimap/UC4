# Aula 01
## Sobre o TypeScript
TypeScript é um superconjunto tipado de JavaScript que compila para JavaScript puro. Ele oferece suporte a tipos estáticos opcionais, que podem ajudar a prevenir erros comuns e tornar o código mais previsível e fácil de depurar.

## Por que usar TypeScript?
- `Segurança de Tipos:` Ajuda a evitar erros relacionados a tipos de dados.
- `Desenvolvimento Mais Rápido:` A detecção de erros durante a compilação economiza tempo de depuração.
- `Melhor Suporte à IDE:` Fornece recursos de autocompletar e refatoração de código mais avançados.
- `Compatibilidade:` Pode ser usado em qualquer projeto JavaScript existente.

## Empresas que usam TypeScript
Empresas como `Microsoft`, `Google`, `Airbnb` e `Slack` usam TypeScript em suas aplicações para melhorar a qualidade do código e a eficiência do desenvolvimento.

## Preparando o ambiente

1. Baixe o PowerShell da loja de aplicativos do Windows (`Win Store`).
2. Instale o VSCode e adicione as extensões "TypeScript and JavaScript" e "Code Runner".
3. Crie uma pasta na área de trabalho.
4. Instale o TypeScript globalmente usando o comando:
    ```bash
    npm install -g typescript
    ```
5. Verifique o caminho do TypeScript global com:
    ```bash
    npm list -g typescript
    ```
6. Copie o caminho do TypeScript e adicione-o às variáveis de ambiente do seu sistema.
7. Inicialize o TypeScript no projeto com:
    ```bash
    npm init -y
    tsc --init
    ```
    Se tudo ocorreu bem, um arquivo `tsconfig.json` será criado.
8. Configure o `tsconfig.json` com as seguintes opções:
    ```json
    {
      "compilerOptions": {
        "target": "ESnext",
        "rootDir": "./src",
        "outDir": "./dist"
      }
    }
    ```
9. Crie os diretórios `src` e `dist`:
    ```bash
    mkdir src dist
    ```
10. Para testar, crie um arquivo com a extensão `.ts` dentro da pasta `src`. Exemplo:`teste.ts`

```typescript
let mundo: string = 'Mundo'
console.log(`Olá ${mundo}`)
```
11. Para iniciar o compilador TypeScript em modo de observação, use:
    ```bash
    tsc --watch
    ```

## Instalando o projeto

Instale o projeto com npm:

```bash
npm install my-project
cd my-project
```

## Executando o projeto no vscode

Para executar o projeto no vscode no terminal você deve isntalar:
```bash
npm install -g ts-node
```
# Entrada e Saída de Dados em TypeScript

## Entrada de Dados

Em TypeScript, a entrada de dados pode ser realizada de várias maneiras, dependendo do ambiente em que o código está sendo executado (navegador, Node.js, etc.). Vamos explorar algumas opções:

### No Navegador

Para obter entrada do usuário no navegador, você pode usar caixas de diálogo ou elementos de formulário HTML.

- **Caixas de Diálogo:**
  ```typescript
  let nome = prompt("Digite seu nome:");
  console.log(`Olá, ${nome}!`);
  ```

- **Elementos de Formulário:**
  Você pode obter o valor de um campo de entrada usando o DOM (Document Object Model).
  ```html
  <input type="text" id="idadeInput">
  <button onclick="mostrarIdade()">Mostrar Idade</button>
  <script>
      function mostrarIdade() {
          let idade = (document.getElementById("idadeInput") as HTMLInputElement).value;
          console.log(`Sua idade é ${idade}`);
      }
  </script>
  ```

### No Node.js

Para entrada de dados no Node.js, você pode usar o módulo `readline`.

- **Usando `readline`:**
  ```typescript
  import * as readline from 'readline';

  let rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
  });

  rl.question('Qual é o seu nome? ', (nome) => {
      console.log(`Olá, ${nome}!`);
      rl.close();
  });
  ```

## Saída de Dados

A saída de dados em TypeScript é geralmente realizada usando o método `console.log()` para imprimir mensagens no console.

- **Imprimindo no Console:**
  ```typescript
  console.log("Olá, Mundo!");
  ```

- **Formatando Saídas:**
  Você pode usar template strings para formatar a saída.
  ```typescript
  let nome = "Alice";
  let idade = 30;
  console.log(`Nome: ${nome}, Idade: ${idade}`);
  ```

## Exemplo Completo

Aqui está um exemplo que combina entrada e saída de dados no Node.js:

```typescript
import * as readline from 'readline';

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite seu nome: ', (nome) => {
    rl.question('Digite sua idade: ', (idade) => {
        console.log(`Nome: ${nome}, Idade: ${idade}`);
        rl.close();
    });
});
```

Este exemplo pede ao usuário para digitar seu nome e idade e, em seguida, imprime essas informações no console.