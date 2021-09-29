var valor;
var parcela;
var parcelaFormatada;
var meses;

function calcularParcelamento(){
    valor = parseFloat(document.getElementById("txtValor").value);
    meses = parseInt(document.getElementById("txtMeses").value);
    
    var resultado = document.getElementById("resultado");
    resultado.style.display = "block";

    var cont = 1;

    resultado.innerHTML = "";

    do {
        parcela = valor / cont;
        parcelaFormatada = parcela.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        resultado.innerHTML += ("<p>" + cont + " parcelas: " + parcelaFormatada + "</p>");

        cont++;
    } while(cont <= meses);

    // while(cont <= meses) {
    //     parcela = valor / cont;
    //     parcelaFormatada = parcela.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    //     resultado.innerHTML += ("<p>" + cont + " parcelas: " + parcelaFormatada + "</p>");

    //     cont++;
    // } 
}