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

function exibirDataDeHoje(){
    var agora = new Date();
    var diasem = agora.getDay();
    var dia = agora.getDate();
    var mes = agora.getMonth();
    var ano = agora.getFullYear();
    var exibe = document.getElementById("exibirDia");

    // if(diasem == 0) {
    //     diasem = "Domingo";
    // } else if (diasem == 1 ){
    //     diasem = "Segunda-feira";
    // } else if (diasem == 2 ){
    //     diasem = "Terça-feira";
    // } else if (diasem == 3 ){
    //     diasem = "Quarta-feira";
    // } else if (diasem == 4 ){
    //     diasem = "Quinta-feira";
    // } else if (diasem == 5 ){
    //     diasem = "Sexta-feira";
    // } else if (diasem == 6 ){
    //     diasem = "Sábado";
    // } else {
    //     alert("Ocorreu um problema para determinar o dia da semana.")
    //     diasem = "";
    // }

    switch(diasem){
        case 0:
            diasem = "Domingo";
            break;
        case 1:
            diasem = "Segunda-feira";
            break;
        case 2:
            diasem = "Terça-feira";
            break;
        case 3:
            diasem = "Quarta-feira";
            break;
        case 4:
            diasem = "Quinta-feira";
            break;
        case 5:
            diasem = "Sexta-feira";
            break;
        case 6:
            diasem = "Sábado";
            break;
        default:
            alert("Ocorreu um problema para determinar o dia da semana.")
            diasem = "";
            break;
    }
    
    switch(mes){
        case 0:
        case 2:
        case 4:
        case 6:
        case 7:
        case 9:
        case 11:
            alert("Mês com 31 dias!");
            break;
        case 3:
        case 5:
        case 8:
        case 10:
            alert("Mês com 30 dias!");
            break;
        case 1:
            alert("Mês com 28 ou 29 dias!");
            break;
        default:
            alert("Não foi possível determinar o mês.");
    }

    switch(mes){
        case 0:
            mes = "janeiro"; 
            break;
        case 1:
            mes = "fevereiro"; 
            break;
        case 2:
            mes = "março"; 
            break;
        case 3:
            mes = "abril"; 
            break;
        case 4:
            mes = "maio"; 
            break;
        case 5:
            mes = "junho"; 
            break;
        case 6:
            mes = "julho"; 
            break;
        case 7:
            mes = "agosto"; 
            break;
        case 8:
            mes = "setembro";
            break;
        case 9:
            mes = "outubro"; 
            break;
        case 10:
            mes = "novembro"; 
            break;
        case 11:
            mes = "dezembro"; 
            break;
        default:
            alert("Ocorreu um problema para determinar o mês.");
            mes = "";
            break;
    }
    

    exibe.innerHTML = diasem + ", " + dia + " de " + mes + " de " + ano;

}

function tabuada(){
    var numero = document.getElementById("txtNumero").value;
    var resultado = document.getElementById("resultados");
    resultado.style.display = "block";
    var produto;

    resultado.innerHTML = "";
    
    for (i = 0; i <= 10; i++){
        produto = numero * i;
        resultado.innerHTML += ("<p>" + numero + " x " + i + " = " + produto + "</p>");
    }
}

function clear(){
    var resultado = document.getElementById("resultados");
    var numero = document.getElementById("txtNumero");
    resultado.style.display = "none";
    numero.focus();
}

// Ver possibilidade de fazer isso com matrizes, talvez seja viável... com while não foi.
function adicionarTelefone(){ 
    var telefone;
    var adicionados = document.getElementById("telefones");
    adicionados.style.display = "block";
    var i = 0;

    // resultado.innerHTML = "";
    
    while (i < 4) {
        telefone = document.getElementById("txtFone").value;
        adicionados.innerHTML += ("<p>Número " + parseInt(i+1) + " adicionado: " + telefone + "</p>");
        // alert(telefone);
        i++;
    }
}

function desconto(){
    // Verificam se os checkboxes estão marcados - Retorna true ou false
    var escolheuMarmitex = document.getElementById("chkMarmitex").checked;
    var escolheuRefri = document.getElementById("chkRefri").checked;
    var escolheuSobremesa = document.getElementById("chkSobremesa").checked;
    
    // Definindo os preços dos produtos
    var precoMarmitex = 16.9;
    var precoRefri = 5.9;
    var precoSobremesa = 6.9;
    var total;

    if (escolheuMarmitex == true && escolheuRefri == true && escolheuSobremesa == true) {
        total = (precoMarmitex + precoRefri + precoSobremesa) * 0.85;
    }
    if (escolheuMarmitex == true && escolheuRefri == true && escolheuSobremesa == false) {
        total = (precoMarmitex + precoRefri) * 0.9;
    }
    if (escolheuMarmitex == true && escolheuRefri == false && escolheuSobremesa == true) {
        total = (precoMarmitex + precoSobremesa) * 0.9;
    }
    if (escolheuMarmitex == false && escolheuRefri == true && escolheuSobremesa == true) {
        total = (precoRefri + precoSobremesa) * 0.95;
    }
    if (escolheuMarmitex == true && escolheuRefri == false && escolheuSobremesa == false) {
        total = precoMarmitex;
    }
    if (escolheuMarmitex == false && escolheuRefri == false && escolheuSobremesa == true) {
        total = precoSobremesa;
    }
    if (escolheuMarmitex == false && escolheuRefri == true && escolheuSobremesa == false) {
        total = precoRefri;
    }
    if (escolheuMarmitex == false && escolheuRefri == false && escolheuSobremesa == false) {
        alert("Escolha pelo menos uma das opções!");
    }
    
    valor.style.display = "block";
    valor.innerHTML = total;
}