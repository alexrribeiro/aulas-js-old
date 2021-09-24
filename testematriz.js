var marcas = ["Chevrolet", "Volkswagen", "Fiat", "Renault", "Hyundai"];

function teste(){
    document.write("<p>Conteúdo do array: ")
    document.write(marcas);

    document.write("</p><p>")
    document.write(marcas[4]);
    document.write("</p>");

    marcas.push("Toyota");
    marcas.unshift("Honda");
    document.write("<p>Conteúdo do array: ")
    document.write(marcas);

    marcas.sort();
    document.write("<p>Conteúdo do array: ")
    document.write(marcas);
    
    document.write("</p><p>");
    document.write(marcas[4]);
    document.write("</p>");
    
    var buscar = "Renault";
    var indice = marcas.indexOf(buscar);
    marcas.splice(indice, 1);

    document.write(indice);
    document.write("<p>Conteúdo do array: ")
    document.write(marcas);

    marcas.shift();
    marcas.pop();
    document.write("<p>Conteúdo do array: ")
    document.write(marcas);

}