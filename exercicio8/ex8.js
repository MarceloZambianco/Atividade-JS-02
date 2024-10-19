// Aplicando desconto em produtos
// Objetivo: Criar um programa que permita ao usuário aplicar um desconto em um
// determinado produto, de acordo com o código promocional informado.
// Descrição: O programa deve solicitar ao usuário que informe um código promocional (DESC1,
// DESC2, DESC3, DESC4 ou DESC5) através de um prompt seguindo a informação de descontos
// a seguir:
// • "DESC1 - 05% de desconto"
// • "DESC2 - 10% de desconto"
// • "DESC3 - 15% de desconto"
// • "DESC4 - 20% de desconto"
// • "DESC5 - 25% de desconto”
// Usando a estrutura switch, o programa deve identificar qual foi o código promocional
// informado pelo usuário e aplicar o desconto correspondente ao produto.
// Após a aplicação do desconto, o programa deve exibir o valor original do produto e o valor
// com desconto na tela.
// Caso o usuário informe um código promocional inválido, o programa deve exibir uma
// mensagem de “erro” na tela, informando que o mesmo não é um cupom válido.
// Exemplo de uso:
// Suponha que um usuário informe o código promocional DESC2. Nesse caso, o programa deve
// exibir a mensagem "10% de desconto" na tela e aplicar um desconto de 10% no produto. Em
// seguida, o programa deve exibir o valor original do produto (R$ 1000) e o valor com desconto
// (R$ 900) na tela. 

let valorOriginal = Number(prompt("Digite o valor original do produto (em R$):"));

let codigoPromocional = prompt("Informe o código promocional (5, 10, 15, 20 ou 25):");

let valorComDesconto;

switch (codigoPromocional) {
    case "5":
        valorComDesconto = valorOriginal * 0.95;
        alert("5% de desconto aplicado.");
        break;
    case "10":
        valorComDesconto = valorOriginal * 0.90; 
        alert("10% de desconto aplicado.");
        break;
    case "15":
        valorComDesconto = valorOriginal * 0.85; 
        alert("15% de desconto aplicado.");
        break;
    case "20":
        valorComDesconto = valorOriginal * 0.80; 
        alert("20% de desconto aplicado.");
        break;
    case "25":
        valorComDesconto = valorOriginal * 0.75; 
        alert("25% de desconto aplicado.");
        break;
    default:
        alert("Erro: Código promocional inválido.");
        break;
}

if (valorComDesconto !== undefined) {
    alert("Valor original do produto: R$ " + valorOriginal.toFixed(2));
    alert("Valor com desconto: R$ " + valorComDesconto.toFixed(2));
}
