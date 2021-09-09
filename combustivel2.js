var alcool;
var gasolina;
var valoralcool, valorgasolina;
var qualabastecer;

function calcular(){
    //Recebe os valores das caixas de texto
    alcool = document.getElementById("txtAlcool").value;
    gasolina = document.getElementById("txtGasolina").value;

    //Trata os valores recebidos para que o JavaScript entenda como float
    valoralcool = alcool.replace(",",".");
    valorgasolina = gasolina.replace(",",".");

    //Compara os valores para dar o resultado
    if (valoralcool / valorgasolina > 0.7){
        qualabastecer = "Gasolina";
    }
    else {
        qualabastecer = "Álcool";
    }

    // window.location.href = "resultado.html";
    resultado();
}

function resultado(){
    // calculadora.hide();

    document.write("Abasteça com " + qualabastecer + "!");
}