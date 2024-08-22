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

