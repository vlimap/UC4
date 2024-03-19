for (let i: number = 0; i < 5; i++) {
    console.log(`Iteração ${i}`);
}
// Saída:
// Iteração 0
// Iteração 1
// Iteração 2
// Iteração 3
// Iteração 4

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

let frutas: string[] = ['Maçã', 'Banana', 'Laranja'];
for (let fruta of frutas) {
    console.log(`Fruta: ${fruta}`);
}
// Saída:
// Fruta: Maçã
// Fruta: Banana
// Fruta: Laranja


