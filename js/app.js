const nombre = document.getElementById("nombre");

const edad = document.getElementById("edad");

const correo = document.getElementById("correo");

const modalidad = document.getElementById("modalidad");

const formulario = document.getElementById("formulario");

const salidaNombre = document.getElementById("salidadNombre");

const salidaEdad = document.getElementById("salidaEdad");

const salidaCorreo = document.getElementById("salidaCorreo");

const salidaModalidad = document.getElementById("salidaModalidad");

const resultado = document.getElementById("resultado");

const experiencia = document.getElementById("experiencia");

const salidaExp = document.getElementById("salidaExp");

nombre.addEventListener("focus", function(){
    salidaNombre.textContent = "Use minimo 5 caracteres"
})
nombre.addEventListener("input", function () {

    
    let cantidad = nombre.value.length;

    let participante = nombre.value;

    if (cantidad < 5) {
        salidaNombre.textContent = "Nombre demasiado corto | " + "Participante: " + participante + " | " + "Caracteres: "+ cantidad 
    } else {
        salidaNombre.textContent = "Nombre válido | "+ "Participante: " + participante + " | " + "Caracteres: "+ cantidad
    }
})

edad.addEventListener("focus", function(){
    salidaEdad.textContent = "Ingrese una edad valida entre 14 y 100 años"
})

edad.addEventListener("input", function(){
    let valor = Number(edad.value);

    if (valor < 14 || valor > 100) {
        salidaEdad.textContent = "Edad no valida"
    } else {
        salidaEdad.textContent = "Edad valida"
    }
})

experiencia.addEventListener("change", function(){

    let opcionExp = experiencia.value;

    if (opcionExp === "principiante") {
        salidaExp.textContent = "Tu experiencia es nivel principiante"
    } else if(opcionExp === "intermedio"){
        salidaExp.textContent = "Tu experiencia es nivel intermedio"
    } else if(opcionExp === "avanzado"){
        salidaExp.textContent = "Tu experiencia es nivel avanzado"
    } else{
        salidaExp.textContent = "Ingresa una opcion valida"
    }
})

modalidad.addEventListener("change", function(){

    let opcion = modalidad.value;

    if (opcion === "virtual") {
        salidaModalidad.textContent = "Seleccionaste la modalidad virtual"
    } else if(opcion === "presencial"){
        salidaModalidad.textContent = "Seleccionaste la modalidad presencial"
    } else if(opcion === "mixta"){
        salidaModalidad.textContent = "Seleccionaste la modalidad mixta"
    } else{
        salidaModalidad.textContent = "Seleccione una modalidad válida"
    }
})

correo.addEventListener("focus", function(){
    salidaCorreo.textContent = "Recuerde que el correo debe llevar @"
})
correo.addEventListener("blur", function(){
    let validacion = correo.value;

    if (validacion === "") {
        salidaCorreo.textContent = "Este campo es obligatorio"
    } else {
        salidaCorreo.textContent = ""
    }
})

formulario.addEventListener("submit", function(event){

    if (nombre.value ==="" || correo.value ==="" || edad.value ==="" || modalidad.value ==="" || experiencia.value === "") {
        event.preventDefault();
        resultado.textContent = "Falta llenar un campo"
    } else {
        resultado.textContent = "Formulario deligenciado correctamente"
    }

})