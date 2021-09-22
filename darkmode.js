var botaoNoturno, botaoNormal;

function vincularId(){
    botaoNoturno = document.getElementById("btnNoturno");
    botaoNormal = document.getElementById("btnNormal");
}

function modoNoturno(){
    document.body.className = "bg-dark text-light";

    botaoNoturno.style.display = "none";
    botaoNormal.style.display = "block";
}

function modoNormal(){
    document.body.className = "bg-light";

    botaoNormal.style.display = "none";
    botaoNoturno.style.display = "block";
}