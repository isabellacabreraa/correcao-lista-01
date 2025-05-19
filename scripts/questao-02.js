/* 2. Verificador de Números (10 pontos)**

Dado o array de números: `[12, 5, 8, 21, 16, 7, 30, 45, 13, 27]`

- Conte quantos números são pares
- Conte quantos números são ímpares
- Conte quantos números são maiores que 20
- Exiba os resultados no console
*/

numeros = [12,5,8,21,16,7,30,45,13,27];
quantidadeNúmerosPares = 0;
quatidadeNúmerosImpares = 0;
numerosMaioresQue20 = 0;

//Varredura do array
for (let i = 0; i < numeros.length; i++) {
   // Condicional para números pares
    if (numeros [i] % 2 == 0) {
        quantidadeNúmerosPares ++;
    }else {
        quatidadeNúmerosImpares ++;
    } // Condicional para maiores que 20
      if (numeros [i] > 20 ) {
        numerosMaioresQue20 ++;
    } 
}

// quatidadeNúmerosImpares = numeros.length - quantidadeNúmerosPares 

console.log(`${quantidadeNúmerosPares} números são pares`);
console.log(`${quatidadeNúmerosImpares} números são impares`);
console.log(`${numerosMaioresQue20} números são maiores que 20`);

