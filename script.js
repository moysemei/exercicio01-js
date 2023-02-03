/*
Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [✓]  A soma dos dois números;
- [✓]  A subtração dos dois números;
- [✓]  A multiplicação dos dois números;
- [✓]  A divisão dos dois números;
- [✓]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [✓]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [✓]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

Lembre-se de sempre mostrar na tela o resultado de cada uma dessas operações!
*/

alert("Vamos calcular dois números!")
let numberOne = Number(prompt("Insira o primeiro número:"))
let numberTwo = Number(prompt("Insira o segundo número:"))

const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const mtp = numberOne * numberTwo
const div = numberOne / numberTwo
const rdv = numberOne % numberTwo

alert(`A soma dos dois números é ${sum}`)
alert(`A subtração dos dois números é ${sub}`)
alert(`A multiplicação dos dois números é ${mtp}`)
alert(`A divisão dos dois números é ${div}`)
alert(`O resto da divisão dos dois números é ${rdv}`)

if(sum % 2 ==0) {
  alert("A soma dos dois números é par!")
} else {
  alert("A soma dos dois números é ímpar!")
}

if(numberOne == numberTwo) {
  alert("Os números inseridos são iguais!")
} else {
  alert("Os números inseridos são diferentes!")
}