// var valor1 = 8;
// var valor2 = 7;
// var valor3 = "8";
// var valor4 = "7";
// var valor5 = "teste"

// alert(valor1 + valor2);
// alert(valor3 + valor4);
// alert(valor1 + valor3);
// alert(valor1 + parseInt(valor3));
// alert(parseInt(valor5, 10));

// var nome = prompt("Qual é o seu nome?");
// document.write("<h3>Bem-vindo(a), " + nome + "!</h3>");
// alert("Bem-vindo, " + nome);

// var num1 = parseInt(prompt("Digite um número:"));
// var num2 = parseInt(prompt("Digite outro número:"));

// var soma = num1 + num2;
// var sub = num1 - num2;
// var mult = num1 * num2;
// var div = num1 / num2;
// var mod = num1 % num2;
// var pot = num1 ** num2;

// document.write("<p>Soma dos dois números: " + soma + "</p>");
// document.write("<p>Diferença entre os dois números: " + sub + "</p>");
// document.write("<p>Produto dos dois números: " + mult + "</p>");
// document.write("<p>Resultado da divisão entre os números: " + div + "</p>");
// document.write("<p>Resto da divisão entre os números: " + mod + "</p>");
// document.write("<p>Primeiro número elevado ao segundo: " + pot + "</p>");

function clique(){
    alert("Obrigado por clicar aqui!");
}

function naoClique(){
    alert("Não era para clicar aqui! Clique no outro botão!");
}

function parOuImpar(){
    var numero = document.getElementById("txtNumero").value;

    numero % 2 == 0 ? alert("É par!") : alert("É ímpar!");
}

function ola(){
    var nome = document.getElementById("txtNome").value;
    alert("Olá, " + nome);
}

function oferta(){
    var cidade = prompt("Qual é a sua cidade?");

    if (cidade == "Pindamonhangaba"){
        alert("Temos uma oferta especial para você!");
    }
}

// function veja(){
//     var ano = new Date().getFullYear();
//     alert(ano);
// }

var botaoNoturno, botaoNormal;


function modoNoturno(){
    botaoNoturno = document.getElementById("btnNoturno");
    botaoNormal = document.getElementById("btnNormal");

    document.body.className = "bg-dark text-light";

    botaoNoturno.style.display = "none";
    botaoNormal.style.display = "block";
}

function modoNormal(){
    botaoNoturno = document.getElementById("btnNoturno");
    botaoNormal = document.getElementById("btnNormal");

    document.body.className = "bg-light";

    botaoNormal.style.display = "none";
    botaoNoturno.style.display = "block";
}