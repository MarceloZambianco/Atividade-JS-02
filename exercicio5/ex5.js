// 5. Crie um programa que pergunte ao usuário um número de 1 a 7 e exiba o dia da
// semana correspondente.

let numero = Number(prompt("Digite um número de 1 a 7:"));

switch (numero) {
    case 1:
        alert("Segunda-feira");
        break;
    case 2:
        alert("Terça-feira");
        break;
    case 3:
        alert("Quarta-feira");
        break;
    case 4:
        alert("Quinta-feira");
        break;
    case 5:
        alert("Sexta-feira");
        break;
    case 6:
        alert("Sábado");
        break;
    case 7:
        alert("Domingo");
        break;
    default:
        alert("Número inválido.");
        break;
}
