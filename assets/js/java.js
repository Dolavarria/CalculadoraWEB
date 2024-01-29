function nombre_carrera(){
var nombre= document.getElementById("nombre");
var carrera= document.getElementById("carrera");
nombre.innerHTML=prompt("Ingrese su nombre");
carrera.innerHTML=prompt("Ingrese su carrera");
}

function ingresarDatos(ramoId, nota1Id, nota2Id, nota3Id, promedioId) {
    var ramo = document.getElementById(ramoId);
    var nota1 = document.getElementById(nota1Id);
    var nota2 = document.getElementById(nota2Id);
    var nota3 = document.getElementById(nota3Id);
    var promedio = document.getElementById(promedioId);

    ramo.innerHTML = prompt("Ingrese su ramo");
    nota1.innerHTML = prompt("Ingrese su nota 1 de "+ramo.innerHTML);
    nota2.innerHTML = prompt("Ingrese su nota 2 de "+ramo.innerHTML);
    nota3.innerHTML = prompt("Ingrese su nota 3 de "+ramo.innerHTML);
    promedio.innerHTML = (parseInt(nota1.innerHTML) + parseInt(nota2.innerHTML) + parseInt(nota3.innerHTML)) / 3;
}
nombre_carrera();
ingresarDatos("Ramo1", "Nota1-1", "Nota1-2", "Nota1-3", "Promedio1");
ingresarDatos("Ramo2", "Nota2-1", "Nota2-2", "Nota2-3", "Promedio2");
ingresarDatos("Ramo3", "Nota3-1", "Nota3-2", "Nota3-3", "Promedio3");