/*5. Calculadora de Desconto (15 pontos)**

Uma loja está com uma promoção onde produtos com preço acima de 100 reais têm 10% de desconto:

- Use o array de preços: `[150, 50, 220, 80, 120, 30, 480, 70, 90, 190]`
- Crie um novo array onde cada preço já esteja com o desconto aplicado (se necessário)
- Calcule quanto a loja vai perder com os descontos
- Calcule o valor médio dos produtos após os descontos */

const precos = [150, 50, 220, 80, 120, 30, 480, 70, 90, 190];
const precosComDesconto = [];
let contadorArrayPrecosDesconto = 0;
let preco = 0;
let desconto = 0;
let somaTotalPrecos = 0;
let somaTotalPrecosComDescontos = 0;
let perda = 0;
let mediaDescontos = 0;
// Varredura de array com laço de repetição
for (let i = 0; i < precos.length; i++) {
  preco = precos[i];
  if (precos[i] > 100) {
    desconto = precos[i] * 0.1; // 10/100
    preco = precos[i] - desconto;
  }

  precosComDesconto[contadorArrayPrecosDesconto] = preco;
  contadorArrayPrecosDesconto++;

  somaTotalPrecos += precos[i];
  somaTotalPrecosComDescontos += precosComDesconto[i];
}

perda = somaTotalPrecos - somaTotalPrecosComDescontos;
mediaDescontos = somaTotalPrecosComDescontos / precosComDesconto.length;

console.table(precos);
console.table(precosComDesconto);
console.log(`A loja irá perder: R$ ${perda.toFixed(2)}`);
console.log(`O valor da média após o desconto aplicado é: R$ ${mediaDescontos.toFixed(2)}`);
