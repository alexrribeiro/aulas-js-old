var alcool;
var gasolina;
var valoralcool, valorgasolina;

function calcular(){
    //Recebe os valores das caixas de texto
    alcool = document.getElementById("txtAlcool").value;
    gasolina = document.getElementById("txtGasolina").value;

    //Trata os valores recebidos para que o JavaScript entenda como float
    valoralcool = alcool.replace(",",".");
    valorgasolina = gasolina.replace(",",".");

    //Compara os valores para dar o resultado
    if (valoralcool / valorgasolina > 0.7){
        alert("Abasteça com gasolina!");
    }
    else if (valoralcool / valorgasolina < 0.7){
        alert("Abasteça com álcool!");
    }
    else {
        alert("Você pode escolher qualquer um dos dois!");
    }
    
}