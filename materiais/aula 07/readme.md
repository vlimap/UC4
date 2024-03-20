# Curso de TypeScript

## Aula 07 - Manipulação de Datas

Em TypeScript, a manipulação de datas pode ser realizada usando o objeto `Date`. Aqui estão alguns exemplos de como trabalhar com datas:

### Manipulação de Datas

- **Obter a data e hora atual:**
  ```typescript
  let dataAtual: Date = new Date();
  console.log(dataAtual);
  ```

- **Criar uma data específica:**
  ```typescript
  let dataEspecifica: Date = new Date('2024-03-20');
  console.log(dataEspecifica);
  ```

- **Obter componentes individuais de uma data:**
  ```typescript
  let ano: number = dataAtual.getFullYear();
  let mes: number = dataAtual.getMonth() + 1; // Mês começa em 0
  let dia: number = dataAtual.getDate();
  console.log(`Ano: ${ano}, Mês: ${mes}, Dia: ${dia}`);
  ```

- **Definir componentes de uma data:**
  ```typescript
  dataAtual.setFullYear(2025);
  dataAtual.setMonth(11); // Mês dezembro, pois começa em 0
  dataAtual.setDate(25);
  console.log(dataAtual);
  ```

- **Adicionar dias a uma data:**
  ```typescript
  let novaData: Date = new Date(dataAtual.getTime() + (5 * 24 * 60 * 60 * 1000)); // Adiciona 5 dias
  console.log(novaData);
  ```

- **Comparar datas:**
  ```typescript
  let data1: Date = new Date('2024-03-20');
  let data2: Date = new Date('2024-03-21');
  if (data1 < data2) {
      console.log('Data1 é anterior a Data2');
  } else if (data1 > data2) {
      console.log('Data1 é posterior a Data2');
  } else {
      console.log('As datas são iguais');
  }
  ```

- **Formatar uma data:**
  ```typescript
  let dataFormatada: string = `${dataAtual.getDate()}/${dataAtual.getMonth() + 1}/${dataAtual.getFullYear()}`;
  console.log(dataFormatada); // Formato DD/MM/AAAA
  ```

- **Obter a diferença entre duas datas em dias:**
  ```typescript
  let diferencaTempo: number = data2.getTime() - data1.getTime();
  let diferencaDias: number = diferencaTempo / (1000 * 3600 * 24);
  console.log(`Diferença entre as datas: ${diferencaDias} dias`);
  ```

Estes são alguns exemplos básicos de manipulação de datas em TypeScript. Existem muitas outras operações que você pode realizar com datas, dependendo das necessidades do seu projeto.