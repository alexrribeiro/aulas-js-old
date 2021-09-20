var valor;
var valorFormatado;
var meses;
const taxa = 0.55/100;

function calcularInvestimento(){
    valor = parseFloat(document.getElementById("txtValor").value);
    meses = parseInt(document.getElementById("txtMeses").value);
    
    var resultParcial = document.getElementById("resultadoDetalhado");
    resultParcial.style.display = "block";
    var resultFinal = document.getElementById("resultado");
    resultFinal.style.display = "block";

    var cont = 0;

    resultParcial.innerHTML = "";
    resultFinal.innerHTML = "";

    while(cont < meses) {
        valor += valor * taxa;
        valorFormatado = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

        cont++;

        resultParcial.innerHTML += ("<p>" + cont + "º mês: " + valorFormatado + "</p>");
    }

    resultFinal.innerHTML = "<p>Ao final do período você terá " + valorFormatado + "</p>";
}