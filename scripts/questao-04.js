/*4. Transformador de Temperaturas (15 pontos)**

Crie um programa que converta uma lista de temperaturas de Celsius para Fahrenheit:

- Use o array: `[0, 10, 20, 30, 40]` (temperaturas em Celsius)
- Crie um novo array com as temperaturas convertidas para Fahrenheit usando a fórmula: F = C * 9/5 + 32
- Exiba ambos os arrays lado a lado usando console.table() */

const temperaturasEmCelsius = [0, 10, 20, 30, 40];
const temperaturaEmFahrenheit =[];
let contadorArrayFahrenheint = 0;

// Fórmula: F = C * 9/5 + 32

// Varredura do array com laço de repetição
for (let i = 0; i < temperaturasEmCelsius.length; i++) {
  temperaturaEmFahrenheit [contadorArrayFahrenheint] = temperaturasEmCelsius [i] * 9/5 + 32;
  contadorArrayFahrenheint++;
}

console.table (temperaturasEmCelsius);
console.table (temperaturaEmFahrenheit);