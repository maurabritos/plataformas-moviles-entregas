

/*1 - crearPersona*/
function crearPersona(nombre, apellido, edad, documento) {
    return {nombre,apellido,edad,documento};    
}
console.log("resultado crearPersona: ", crearPersona("Juan", "Pérez", 20, 123456));

/*2 - agregarApodo*/
var personaEjemplo = {
    "apellido": "Perez",
    "nombre": "Juan",
    "edad": 20,
    "documento": 12345
};

function agregarApodo(persona, apodo){
    persona.apodo=apodo;
    return persona.apodo;
}
console.log("resultado agregarApodo: ", agregarApodo(personaEjemplo,"JuanPe"));
console.log(personaEjemplo);

/*3 - sinDocumento*/
function sinDocumento(persona) {
    return delete persona.documento;
}
console.log("resultado sinDocumento: ", sinDocumento(personaEjemplo));
console.log(personaEjemplo);

/*4 - nombreCompletoDePersona*/
function nombreCompletoDePersona(persona) {
    return persona.apellido +" "+ persona.nombre;
}
console.log("resultado nombreCompletoDePersona: ", nombreCompletoDePersona(personaEjemplo));

/*5 - felizCumpleaños*/
function felizCumpleaños(persona) {
    return {
        nombre: persona.nombre,
        apellido: persona.apellido,
        edad: persona.edad + 1,
        documento: persona.documento,
    }
}
console.log("resultado felizCumpleaños: ", felizCumpleaños(personaEjemplo));

/*6 - sonLaMismaPersona*/
function sonLaMismaPersona(persona1, persona2) {
    return persona1===persona2;
}
//retorna false porque el objeto persona2 no cuenta con apodo,con edad 21 y además este objeto posee documento cosa que personaEjemplo o persona1 no tiene.
console.log("resultado sonLaMismaPersona: ", sonLaMismaPersona(
    personaEjemplo,{ apellido: "Perez", nombre: "Juan", edad: 20, documento: 12345 }
));