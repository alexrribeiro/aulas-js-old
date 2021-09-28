//Declaração do Array
var marcas = ["Chevrolet", "Volkswagen", "Fiat", "Renault", "Hyundai"];

function teste(){
    // Exibição do conteúdo do array
    document.write("<p>Conteúdo do array: ")
    document.write(marcas);

    // Exibição 2º elemento do array
    document.write("</p><p>");
    document.write(marcas[2]); // Fiat
    document.write("</p>");

    // Insere Toyota no final e Honda no início
    marcas.unshift("Honda");
    marcas.push("Toyota");
    document.write("<p>Conteúdo do array: ")
    document.write(marcas);

    // Ordena em ordem alfabética
    marcas.sort();
    // marcas.reverse();
    document.write("<p>Conteúdo do array: ")
    document.write(marcas);
    
    // // Exibição do 4º elemento do array
    // document.write("</p><p>");
    // document.write(marcas[4]); // Renault
    // document.write("</p>");
    
    // Busca e remove Renault do array
    var buscar = "Renault";
    var indice = marcas.indexOf(buscar);
    marcas.splice(indice, 1);

    // document.write(indice);
    document.write("<p>Conteúdo do array: ")
    document.write(marcas);

    // Remove o primeiro e o último elemento do array
    marcas.shift();
    marcas.pop();
    document.write("<p>Conteúdo do array: ")
    document.write(marcas);

    // Exibe o tamanho do array
    var tamanho = marcas.length;
    document.write("<p>Tamanho do array: ")
    document.write(tamanho);
    document.write("</p>");

    // Apaga todos os elementos
    marcas.splice(0, tamanho);
    document.write("<p>Conteúdo do array: ")
    document.write(marcas);
    document.write("</p>");
}