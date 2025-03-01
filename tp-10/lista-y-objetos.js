const listaPersonasEjemplo = [
    {
        "apellido": "Arin",
        "nombre": "Joaquin",
        "edad": 20,
        "documento": 12345
    },
    {
        "apellido": "Barrera",
        "nombre": "Lucas",
        "edad": 20,
        "documento": 23456
    },
    {
        "apellido": "Ayala",
        "nombre": "Fernanda",
        "edad": 19,
        "documento": 34567
    },
    {
        "apellido": "Duran",
        "nombre": "Tini",
        "edad": 16,
        "documento": 45678
    },
];

//01 - ordenarPorApellido
function ordenarPorApellido(listaDePersonas) {
    listaDePersonas.sort((e, e2) => {
        return e.apellido.localeCompare(e2.apellido);
    });

    return listaDePersonas;
}
console.log("ordenarPorApellido()", ordenarPorApellido(listaPersonasEjemplo));

//02 - soloNombres
function soloNombres(listaDePersonas) {
        return listaDePersonas.map(personas => personas.nombre);
}
console.log("soloNombres()", soloNombres(listaPersonasEjemplo));

//03 - promedioEdades
function promedioEdades(listaDePersonas) {
    let acum=0;    
    listaDePersonas.forEach(e=>{
            acum+=e.edad;
        })
    return acum/listaDePersonas.length;
}
console.log("promedioEdades()", promedioEdades(listaPersonasEjemplo));

//04 - soloMayoresDeEdad
function soloMayoresDeEdad(listaDePersonas) {
    const restuladoFilter= listaDePersonas.filter(e=>e.edad>=18);
    return restuladoFilter;
}
console.log("soloMayoresDeEdad()", soloMayoresDeEdad(listaPersonasEjemplo));

// 05 - laPersonaMayor
function laPersonaMayor(listaDePersonas) {
    let personaMayor=listaDePersonas[0];

    for (let i=1; i < listaDePersonas.length; i++){
        let personas=listaDePersonas[i];
        if(personas.edad>personaMayor.edad){
            personaMayor=personas;
        }
    }
    return personaMayor;
}
console.log("laPersonaMayor()", laPersonaMayor(listaPersonasEjemplo));