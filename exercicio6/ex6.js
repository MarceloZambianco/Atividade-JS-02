// Escreva um programa que classifique a idade de uma pessoa em diferentes
// categorias: criança, adolescente, adulto e idoso.
// Programa para classificar a idade em diferentes categorias

let idade = Number(prompt("Digite a sua idade:"))

switch (true) {
    case (idade >= 0 && idade <= 12):
        alert("Criança");
        break;
    case (idade >= 13 && idade <= 17):
        alert("Adolescente");
        break;
    case (idade >= 18 && idade <= 59):
        alert("Adulto");
        break;
    case (idade >= 60):
        alert("Idoso");
        break;
    default:
        alert("Idade inválida. Por favor, insira um número válido.");
        break;
}
