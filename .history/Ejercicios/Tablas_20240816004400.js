// Función para generar y mostrar las tablas de multiplicar del 1 al 10
function generarTablasDeMultiplicar() {
    // Iterar sobre los números del 1 al 10
    for (let i = 1; i <= 10; i++) {
        console.log(`Tabla del ${i}:`);
        
        // Iterar sobre los números del 1 al 10 para cada tabla
        for (let j = 1; j <= 10; j++) {
            console.log(`${i} x ${j} = ${i * j}`);
        }
        
        // Espacio entre las tablas
        console.log('');
    }
}

// Llamar a la función para mostrar las tablas de multiplicar
generarTablasDeMultiplicar();

// Función para probar condicionales con ciclo while por nombres y edades
function probarCondicionales() {
    let nombres = ["Ana", "Luis", "Carlos", "María"];
    let edades = [25, 17, 30, 22];
    let i = 0;

    while (i < nombres.length) {
        if (edades[i] >= 18) {
            console.log(`${nombres[i]} es mayor de edad.`);
        } else {
            console.log(`${nombres[i]} es menor de edad.`);
        }
        i++;
    }
}

// Llamar a la función para probar condicionales
probarCondicionales();
