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
mundo string = 'Mundo'
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
