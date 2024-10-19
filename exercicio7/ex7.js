// Implemente um programa que realiza operações matemáticas básicas (adição,
//     subtração, multiplicação e divisão) com base na escolha do usuário.
// Programa para realizar operações matemáticas básicas

let num1 = Number(prompt("Digite o primeiro número:"));
let num2 = Number(prompt("Digite o segundo número:"));

let operacao = prompt("Escolha a operação: + (adição), - (subtração), * (multiplicação), / (divisão)");

switch (operacao) {
    case "+":
        alert("Resultado: " + (num1 + num2));
        break;
    case "-":
        alert("Resultado: " + (num1 - num2));
        break;
    case "*":
        alert("Resultado: " + (num1 * num2));
        break;
    case "/":
        if (num2 !== 0) {
            alert("Resultado: " + (num1 / num2));
        } else {
            alert("Erro: Divisão por zero não é permitida.");
        }
        break;
    default:
        alert("Operação inválida. Por favor, escolha uma das seguintes: +, -, *, /.");
        break;
}
