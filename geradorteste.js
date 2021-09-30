var universo = []; // Universo de números (1 a 25 na LF)
var sorteado = []; // Array com os números sorteados (15 na LF)
var min, max, nums, tmp; // Menor e maior número do universo e quantidade de números sorteados

function criarUniverso(min, max) {
    this.min = min;
    this.max = max;

    for (i = min; i <= max; i++){
        universo[i] = i;
    }
    universo.shift();

    return universo;
}

function sortearNumeros(min, max, nums) {
    var maximo, posicao;
    this.min = min;
    this.max = max;
    this.nums = nums
    var univ = criarUniverso(min, max); // Faz um universo
    maximo = univ.length;

    function compararNumeros(a,b){
        return a - b;
    }
    
    for (var i = 0; i < nums; i++) {
        posicao = Math.floor(Math.random() * maximo);
        sorteado[i] = univ[posicao];
        univ.splice(posicao,1);
        maximo = univ.length;
    }

    sorteado.sort(compararNumeros);

    return sorteado;
}

function limpar(){
    universo.splice(0,100);
    sorteado.splice(0,50);
    min = max = nums = tmp = 0;
}

function megaSena() {
    limpar();
    var exibir = sortearNumeros(1,60,6);

    var numerosResultado = document.getElementById("numerosGerados");
    numerosResultado.style.display = "block";
    numerosResultado.className = "alert alert-success";

    numerosResultado.innerHTML = "<p><strong>Mega Sena<strong></p>";
    
    for(var result of exibir) {
        numerosResultado.innerHTML += (result + "&nbsp; &nbsp; &nbsp;");
    }
}

function quina() {
    limpar();
    var exibir = sortearNumeros(1,80,5);

    var numerosResultado = document.getElementById("numerosGerados");
    numerosResultado.style.display = "block";
    numerosResultado.className = "alert alert-primary";

    numerosResultado.innerHTML = "<p><strong>Quina<strong></p>";
    
    for(var result of exibir) {
        numerosResultado.innerHTML += (result + "&nbsp; &nbsp; &nbsp;");
    }
}

function duplaSena() {
    limpar();
    var exibir = sortearNumeros(1,50,6);

    var numerosResultado = document.getElementById("numerosGerados");
    numerosResultado.style.display = "block";
    numerosResultado.className = "alert alert-danger";

    numerosResultado.innerHTML = "<p><strong>Dupla Sena<strong></p>";
    
    for(var result of exibir) {
        numerosResultado.innerHTML += (result + "&nbsp; &nbsp; &nbsp;");
    }
}

function lotoFacil() {
    limpar();
    var exibir = sortearNumeros(1,25,15);

    var numerosResultado = document.getElementById("numerosGerados");
    numerosResultado.style.display = "block";
    numerosResultado.className = "alert alert-danger";

    numerosResultado.innerHTML = "<p><strong>Lotofacil<strong></p>";
    
    for(var result of exibir) {
        numerosResultado.innerHTML += (result + "&nbsp; &nbsp; &nbsp;");
    }
}

function lotoMania() {
    limpar();
    var exibir = sortearNumeros(0,99,50);

    var numerosResultado = document.getElementById("numerosGerados");
    numerosResultado.style.display = "block";
    numerosResultado.className = "alert alert-warning";

    numerosResultado.innerHTML = "<p><strong>Lotomania<strong></p>";
    
    for(var result of exibir) {
        numerosResultado.innerHTML += (result + "&nbsp; &nbsp; &nbsp;");
    }
}

function timeMania() {
    limpar();
    var exibir = sortearNumeros(1,80,10);

    var numerosResultado = document.getElementById("numerosGerados");
    numerosResultado.style.display = "block";
    numerosResultado.className = "alert alert-warning";

    numerosResultado.innerHTML = "<p><strong>Timemania<strong></p>";
    
    for(var result of exibir) {
        numerosResultado.innerHTML += (result + "&nbsp; &nbsp; &nbsp;");
    }

    limpar();
    var time = sortearNumeros(1,80,1);
    numerosResultado.innerHTML += ("<p>Time do coração: " + time + "</p>");
}

function diaDeSorte() {
    limpar();
    var exibir = sortearNumeros(1,31,7);

    var numerosResultado = document.getElementById("numerosGerados");
    numerosResultado.style.display = "block";
    numerosResultado.className = "alert alert-warning";

    numerosResultado.innerHTML = "<p><strong>Dia de Sorte<strong></p>";
    
    for(var result of exibir) {
        numerosResultado.innerHTML += (result + "&nbsp; &nbsp; &nbsp;");
    }

    limpar();
    var mes = sortearNumeros(1,12,1);
    numerosResultado.innerHTML += ("<p>Mês da sorte: " + mes + "</p>");
}

function superSete(){
    var numero;
    limpar();

    var numerosResultado = document.getElementById("numerosGerados");
    numerosResultado.style.display = "block";
    numerosResultado.className = "alert alert-success";

    numerosResultado.innerHTML = "<p><strong>Super Sete<strong></p>";

    for (var i = 0; i < 7; i++) {
        numero = sortearNumeros(0,9,1);
        numerosResultado.innerHTML += (numero + "&nbsp; &nbsp; &nbsp;");
    }
}