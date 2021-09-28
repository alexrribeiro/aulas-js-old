var numero = [];
var i = 0;
var j = 0;
var vernum;
var max;

function gerarNumeros(){
    var numerosResultado = document.getElementById("numerosGerados");
    numerosResultado.style.display = "block";

    numerosResultado.innerHTML = "";
    
    for (i = 0; i < 6; i++) {
        numero[i] = Math.ceil(Math.random() * 60);

        // Essa parte comentada só era útil quando estava usando o Math.floor 
    //     if(numero[i] == 0){
    //         numero[i] = 60;
    //     }
        
        j = i;
        numero[j] = numero[i]; // passa o valor do número i para o j sempre
        vernum = numero[i]; // número i atual será verificado

        for (j = 0; j < i; j++){
            // Resolve parcialmente, os dois últimos números podem se repetir
            if (vernum == numero[j]){
                //Se encontrado um número repetido, sorteia de novo
                numero[i] = Math.ceil(Math.random() * 60); 
            }
        }

        // numerosResultado.innerHTML += ("<p>" + numero[i] + "</p>");
        numerosResultado.innerHTML += (numero[i] + "&nbsp; &nbsp; &nbsp;");
    }
}

function megaSena(){
    var numerosResultado = document.getElementById("numerosGerados");
    numerosResultado.style.display = "block";
    numerosResultado.className = "alert alert-success";

    numerosResultado.innerHTML = "<p><strong>Mega Sena<strong></p>";
    
    for (i = 0; i < 6; i++) {
        numero[i] = Math.ceil(Math.random() * 60);
       
        j = i;
        numero[j] = numero[i];
        vernum = numero[i];

        for (j = 0; j < i; j++){
            if (vernum == numero[j]){
                numero[i] = Math.ceil(Math.random() * 60); 
            }
        }

        numerosResultado.innerHTML += (numero[i] + "&nbsp; &nbsp; &nbsp;");
    }
}

function quina(){
    var numerosResultado = document.getElementById("numerosGerados");
    numerosResultado.style.display = "block";
    numerosResultado.className = "alert alert-primary";

    numerosResultado.innerHTML = "<p><strong>Quina<strong></p>";
    
    for (i = 0; i < 5; i++) {
        numero[i] = Math.ceil(Math.random() * 80);
       
        j = i;
        numero[j] = numero[i];
        vernum = numero[i];

        for (j = 0; j < i; j++){
            if (vernum == numero[j]){
                numero[i] = Math.ceil(Math.random() * 80); 
            }
        }

        numerosResultado.innerHTML += (numero[i] + "&nbsp; &nbsp; &nbsp;");
    }
}

function duplaSena(){
    var numerosResultado = document.getElementById("numerosGerados");
    numerosResultado.style.display = "block";
    numerosResultado.className = "alert alert-danger";

    numerosResultado.innerHTML = "<p><strong>Dupla Sena<strong></p>";
    
    for (i = 0; i < 6; i++) {
        numero[i] = Math.ceil(Math.random() * 50);
       
        j = i;
        numero[j] = numero[i];
        vernum = numero[i];

        for (j = 0; j < i; j++){
            if (vernum == numero[j]){
                numero[i] = Math.ceil(Math.random() * 50); 
            }
        }

        numerosResultado.innerHTML += (numero[i] + "&nbsp; &nbsp; &nbsp;");
    }
}

function lotoFacil(){
    var numerosResultado = document.getElementById("numerosGerados");
    numerosResultado.style.display = "block";
    numerosResultado.className = "alert alert-danger";

    numerosResultado.innerHTML = "<p><strong>Lotofácil<strong></p>";
    
    for (i = 0; i < 15; i++) {
        numero[i] = Math.ceil(Math.random() * 25);
       
        j = i;
        numero[j] = numero[i];
        vernum = numero[i];

        for (j = 0; j < i; j++){
            if (vernum == numero[j]){
                numero[i] = Math.ceil(Math.random() * 25); 
            }
        }

        numerosResultado.innerHTML += (numero[i] + "&nbsp; &nbsp; &nbsp;");
    }
}

function lotoMania(){
    var numerosResultado = document.getElementById("numerosGerados");
    numerosResultado.style.display = "block";
    numerosResultado.className = "alert alert-warning";

    numerosResultado.innerHTML = "<p><strong>Lotomania<strong></p>";
    
    for (i = 0; i < 50; i++) {
        numero[i] = Math.floor(Math.random() * 100);
       
        j = i;
        numero[j] = numero[i];
        vernum = numero[i];

        for (j = 0; j < i; j++){
            if (vernum == numero[j]){
                numero[i] = Math.floor(Math.random() * 100); 
            }
        }

        numerosResultado.innerHTML += (numero[i] + "&nbsp; &nbsp; &nbsp;");
    }
}

function timeMania(){
    var numerosResultado = document.getElementById("numerosGerados");
    numerosResultado.style.display = "block";
    numerosResultado.className = "alert alert-warning";

    numerosResultado.innerHTML = "<p><strong>Timemania<strong></p>";
    
    for (i = 0; i < 10; i++) {
        numero[i] = Math.ceil(Math.random() * 80);
       
        j = i;
        numero[j] = numero[i];
        vernum = numero[i];

        for (j = 0; j < i; j++){
            if (vernum == numero[j]){
                numero[i] = Math.ceil(Math.random() * 80); 
            }
        }

        numerosResultado.innerHTML += (numero[i] + "&nbsp; &nbsp; &nbsp;");
    }

    // Gera time do coração
    var numTime = Math.ceil(Math.random() * 80);
    numerosResultado.innerHTML += ("<p>Time do coração: " + numTime + "</p>");
}

function diaDeSorte(){
    var numerosResultado = document.getElementById("numerosGerados");
    numerosResultado.style.display = "block";
    numerosResultado.className = "alert alert-warning";

    numerosResultado.innerHTML = "<p><strong>Dia de Sorte<strong></p>";
    
    for (i = 0; i < 7; i++) {
        numero[i] = Math.ceil(Math.random() * 31);
       
        j = i;
        numero[j] = numero[i];
        vernum = numero[i];

        for (j = 0; j < i; j++){
            if (vernum == numero[j]){
                numero[i] = Math.ceil(Math.random() * 31); 
            }
        }

        numerosResultado.innerHTML += (numero[i] + "&nbsp; &nbsp; &nbsp;");
    }

    // Gera Mês da Sorte
    var numMes = Math.ceil(Math.random() * 12);
    numerosResultado.innerHTML += ("<p>Mês da sorte: " + numMes + "</p>");
}

function superSete(){
    var numerosResultado = document.getElementById("numerosGerados");
    numerosResultado.style.display = "block";
    numerosResultado.className = "alert alert-success";

    numerosResultado.innerHTML = "<p><strong>Super Sete<strong></p>";
    
    for (i = 0; i < 7; i++) {
        numero[i] = Math.floor(Math.random() * 10);

        numerosResultado.innerHTML += (numero[i] + "&nbsp; &nbsp; &nbsp;");
    }
}
