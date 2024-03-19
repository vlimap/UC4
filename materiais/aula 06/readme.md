
# Curso de TypeScript

## Aula 06 - Arrays e seus Métodos

Em TypeScript, os arrays são usados para armazenar múltiplos valores em uma única variável. Aqui estão alguns métodos comuns para manipular arrays:

### Métodos de Arrays

- **push():** Adiciona um ou mais elementos ao final do array.
  ```typescript
  let frutas: string[] = ['Maçã', 'Banana'];
  frutas.push('Laranja');
  console.log(frutas); // ['Maçã', 'Banana', 'Laranja']
  ```

- **pop():** Remove o último elemento do array e o retorna.
  ```typescript
  let ultimaFruta: string | undefined = frutas.pop();
  console.log(ultimaFruta); // 'Laranja'
  console.log(frutas); // ['Maçã', 'Banana']
  ```

- **shift():** Remove o primeiro elemento do array e o retorna.
  ```typescript
  let primeiraFruta: string | undefined = frutas.shift();
  console.log(primeiraFruta); // 'Maçã'
  console.log(frutas); // ['Banana']
  ```

- **unshift():** Adiciona um ou mais elementos ao início do array.
  ```typescript
  frutas.unshift('Morango');
  console.log(frutas); // ['Morango', 'Banana']
  ```

- **slice():** Retorna uma cópia de uma parte do array.
  ```typescript
  let copiaFrutas: string[] = frutas.slice(0, 1);
  console.log(copiaFrutas); // ['Morango']
  ```

- **splice():** Altera o conteúdo do array, adicionando ou removendo elementos.
  ```typescript
  frutas.splice(1, 0, 'Kiwi');
  console.log(frutas); // ['Morango', 'Kiwi', 'Banana']
  ```

- **forEach():** Executa uma função para cada elemento do array.
  ```typescript
  frutas.forEach((fruta) => {
      console.log(fruta);
  });
  // Saída:
  // Morango
  // Kiwi
  // Banana
  ```

- **map():** Cria um novo array com o resultado da chamada de uma função para cada elemento do array.
  ```typescript
  let frutasMaiusculas: string[] = frutas.map((fruta) => fruta.toUpperCase());
  console.log(frutasMaiusculas); // ['MORANGO', 'KIWI', 'BANANA']
  ```

- **filter():** Cria um novo array com todos os elementos que passam no teste implementado pela função fornecida.
  ```typescript
  let frutasComB: string[] = frutas.filter((fruta) => fruta.startsWith('B'));
  console.log(frutasComB); // ['Banana']
  ```

- **reduce():** Aplica uma função para cada elemento do array, reduzindo-o a um único valor.
  ```typescript
  let totalLetras: number = frutas.reduce((total, fruta) => total + fruta.length, 0);
  console.log(totalLetras); // 17 (7 + 4 + 6)
  ```

- **find():** Retorna o valor do primeiro elemento no array que satisfaz a função de teste fornecida.
  ```typescript
  let frutaComM: string | undefined = frutas.find((fruta) => fruta.startsWith('M'));
  console.log(frutaComM); // 'Morango'
  ```

- **some():** Testa se pelo menos um elemento no array passa no teste implementado pela função fornecida.
  ```typescript
  let temFrutaComK: boolean = frutas.some((fruta) => fruta.startsWith('K'));
  console.log(temFrutaComK); // true
  ```

- **every():** Testa se todos os elementos no array passam no teste implementado pela função fornecida.
  ```typescript
  let todasFrutasComM: boolean = frutas.every((fruta) => fruta.startsWith('M'));
  console.log(todasFrutasComM); // false
  ```

- **sort():** Ordena os elementos de um array.
  ```typescript
  frutas.sort();
  console.log(frutas); // ['Banana', 'Kiwi', 'Morango']
  ```

- **indexOf():** Retorna o primeiro índice em que um determinado elemento pode ser encontrado no array, ou -1 se ele não estiver presente.
  ```typescript
  let indiceBanana: number = frutas.indexOf('Banana');
  console.log(indiceBanana); // 0
  ```

- **lastIndexOf():** Retorna o último índice em que um determinado elemento pode ser encontrado no array, ou -1 se ele não estiver presente.
  ```typescript
  frutas.push('Banana');
  let ultimoIndiceBanana: number = frutas.lastIndexOf('Banana');
  console.log(ultimoIndiceBanana); // 3
  ```

- **concat():** Retorna um novo array que é a junção de dois ou mais arrays.
  ```typescript
  let maisFrutas: string[] = ['Abacaxi', 'Melão'];
  let todasFrutas: string[] = frutas.concat(maisFrutas);
  console.log(todasFrutas); // ['Banana', 'Kiwi', 'Morango', 'Banana', 'Abacaxi', 'Melão']
  ```

- **join():** Junta todos os elementos de um array em uma string.
  ```typescript
  let frutasString: string = frutas.join(', ');
  console.log(frutasString); // 'Banana, Kiwi, Morango, Banana'
  ```

- **reverse():** Inverte a ordem dos elementos de um array.
  ```typescript
  frutas.reverse();
  console.log(frutas); // ['Banana', 'Morango', 'Kiwi', 'Banana']
  ```

- **includes():** Determina se um array contém um determinado elemento.
  ```typescript
  let temLaranja: boolean = frutas.includes('Laranja');
  console.log(temLaranja); // false
  ```
