function calcularImposto(){
    //Recebe os valores das variáveis
    var anofab = document.getElementById("txtAno").value;
    var valor = document.getElementById("txtValor").value;
    var anoatual = new Date().getFullYear();
    var div = document.getElementById("resultado");
    var frase;
    
    //Compara os valores para dar o resultado
    if (anofab > anoatual - 20){
        var imposto = valor * 0.04;
        var impostoformatado = imposto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        frase = "Valor a pagar do imposto é: " + impostoformatado;
    }
    else {
        frase = "Veículo isento de pagamento!";
    }

    div.innerHTML = frase;
    div.style.display = "block";
}



