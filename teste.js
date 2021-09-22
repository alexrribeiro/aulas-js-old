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
    var i = 0;

    resultado.innerHTML = "";
    
    for (i = 0; i <= 10; i++){
        produto = numero * i;
        resultado.innerHTML += ("<p>" + numero + " x " + i + " = " + produto + "</p>");
    }

    // while(i <= 10) {
    //     produto = numero * i;
    //     resultado.innerHTML += ("<p>" + numero + " x " + i + " = " + produto + "</p>");
    //     i++;
    // }

    // do {
    //     produto = numero * i;
    //     resultado.innerHTML += ("<p>" + numero + " x " + i + " = " + produto + "</p>");
    //     i++;
    // } while (i <= 10);
}

// function gerarNumeros(){
//     var numerosResultado = document.getElementById("numerosGerados");
//     numerosResultado.style.display = "block";
//     var numero;
//     var i = 0;

//     numerosResultado.innerHTML = "";
    
//     while (i < 6) {
//         numero = Math.floor(Math.random() * 60);
//         numerosResultado.innerHTML += ("<p>" + numero + "</p>");
//         i++;
//     }
// }


function gerarNumerosMatriz(){
    var numero = [];
    var numerosResultado = document.getElementById("numerosGerados");
    numerosResultado.style.display = "block";
    var i = 0;
    var j = 0;
    var vernum;

    numerosResultado.innerHTML = "";
    
    for (i = 0; i < 6; i++) {
        numero[i] = Math.floor(Math.random() * 60);

        if(numero[i] == 0){
            numero[i] = 60;
        }
        
        j = i;
        numero[j] = numero[i]; // passa o valor do número i para o j sempre
        vernum = numero[i]; // número i atual será verificado

        for (j = 0; j < i; j++){
            // Resolve parcialmente, os dois últimos números podem se repetir
            if (vernum == numero[j]){
                //Se encontrado um número repetido, sorteia de novo
                numero[i] = Math.floor(Math.random() * 60); 
            }
        }

        // numerosResultado.innerHTML += ("<p>" + numero[i] + "</p>");
        numerosResultado.innerHTML += (numero[i] + "&nbsp; &nbsp; &nbsp;");
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
    var mensagem;

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
        // alert("Escolha pelo menos uma das opções!");
        valor.style.display = "block";
        valor.innerHTML = "Escolha pelo menos uma das opções!"
    }
  
    mensagem = "Seu pedido custará " + total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    valor.style.display = "block";
    valor.innerHTML = mensagem;
}

function ocultarResult(){
    valor.style.display = "none";
}

function testesLoop(){
    // Declaração do array e exibição do conteúdo
    var carros = ["Polo", "Onix", "Argo", "HB20", "208"];

    document.write("Conteúdo do array: " + carros);

    // Exibindo o conteúdo utilizando estrutura For

    document.write("<hr>");
    document.write("<p>Testando com for:</p>");
    for(i = 0; i<carros.length; i++){
        document.write("<li>Modelo de carro: " + carros[i] + "</li>");
    }

    // Exibindo o conteúdo utilizando função forEach

    document.write("<hr>");
    document.write("<p>Testando forEach:</p>");
    
    function exibir(item){
        document.write("<li>Modelo de carro: " + item + "</li>");
    }

    carros.forEach(exibir);

    // Exibindo o conteúdo utilizando estrutura For of

    document.write("<hr>");
    document.write("<p>Testando for of</p>");

    for (let carro of carros) {
        document.write("<li>Modelo de carro: " + carro + "</li>");
    }

    // Exibindo o conteúdo utilizando estrutura For in

    document.write("<hr>");
    document.write("<p>Testando for in</p>");

    for (let carro in carros) {
        document.write("<li>Índice: " + carro + " Modelo: " + carros[carro] + "</li>");
    }
}