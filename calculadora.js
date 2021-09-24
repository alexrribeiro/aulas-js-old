// Declaração de variáveis
var num1sf, num2sf, num1, num2, oper, res;

function calcular(){
    // Atribuição de valor para o primeiro número e teste se está vazio
    num1sf = document.getElementById("txtNumero1").value;
    if(num1sf === ''){
        alert("Faltou digitar o primeiro número!");
    }

    // Atribuição do operador
    oper = document.getElementById("selOperacao").value;

    // Atribuição do valor para o segundo número e teste se está vazio
    num2sf = document.getElementById("txtNumero2").value;
    if(num2sf === ''){
        alert("Faltou digitar o segundo número!");
    }
    
    // Substitui , por . caso o usuário utilize para quebrar números
    num1 = num1sf.replace(",",".");
    num2 = num2sf.replace(",",".");
    
    // Faz as operações se os campos não estiverem vazios
    if (num1 !== '' && num2 !== ''){
        if(isNaN(num1) || isNaN(num2)){
            alert("Um dos números é inválido!");
            res = "Resultado";
        }
        else{
            switch(oper){
                case "soma":
                    res = somar(num1, num2);
                    break;
                case "subt":
                    res = subtrair(num1, num2);
                    break;
                case "mult":
                    res = multiplicar(num1, num2);
                    break;
                case "div":
                    res = dividir(num1, num2);
                    break;
                default:
                    alert("Escolha uma operação válida!");
                    res = "Resultado";
                    break;
            }
        }
    }
    // Tratamentos para campos vazios ou números inválidos
    else{
        res = "Resultado";
    }

    document.getElementById("txtResultado").value = res;
}

// // Funções da calculadora
function somar(n1, n2){
    this.n1 = n1;
    this.n2 = n2;

    var resultado = parseFloat(n1) + parseFloat(n2);

    return resultado;
}

function subtrair(n1, n2){
    this.n1 = n1;
    this.n2 = n2;

    resultado = n1 - n2;

    return resultado;
}

function multiplicar(n1, n2){
    this.n1 = n1;
    this.n2 = n2;

    resultado = n1 * n2;

    return resultado;
}

function dividir(n1, n2){
    this.n1 = n1;
    this.n2 = n2;

    resultado = n1 / n2;
    
    // Tratamento para se o usuário digitar zero no segundo número
    if(n2 == 0){
        alert("Não é possível dividir por zero!");
        resultado = "Resultado";
    }

    return resultado;
}