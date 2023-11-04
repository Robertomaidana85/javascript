// Pedir al usuario que ingrese su nombre y apellido
var nombreApellido = prompt("Por favor, ingrese su nombre y apellido:");

// Verificar si se ha ingresado un valor o si se ha cancelado
if (nombreApellido === null) {
    alert("¡Hasta luego! Gracias por visitarnos.");
} else {
    // Dividir el valor ingresado por el usuario en nombre y apellido
    var nombreApellidoArray = nombreApellido.split(" ");
    var nombre = nombreApellidoArray[0];
    var apellido = nombreApellidoArray[1];

    // Pedir al usuario que seleccione el destino del viaje
    var destino = prompt("Hola " + nombre + ", elija el destino del viaje (1: Cataratas, 2: Mendoza, 3: Bariloche):");

    if (destino === null) {
        alert("¡Hasta luego! Gracias por visitarnos.");
    } else if (destino === "1") {
        // Costo de viaje a Cataratas
        var costoTotal = 143000;
        alert("El costo total del viaje a Cataratas es: " + costoTotal + " pesos.");
    } else if (destino === "2") {
        // Costo de viaje a Mendoza
        var costoTotal = 180000;
        alert("El costo total del viaje a Mendoza es: " + costoTotal + " pesos.");
    } else if (destino === "3") {
        // Costo de viaje a Bariloche
        var costoTotal = 400000;
        alert("El costo total del viaje a Bariloche es: " + costoTotal + " pesos.");
    } else {
        alert("Destino no válido. ¡Hasta luego! Gracias por visitarnos.");
    }

    if (costoTotal) {
        // Pedir al usuario que elija el tipo de moneda
        var moneda = prompt("¿En qué tipo de moneda desea pagar? (1: pesos, 2: dólares):");

        if (moneda === null) {
            alert("¡Hasta luego! Gracias por visitarnos.");
        } else if (moneda === "1") {
            // Pedir al usuario que ingrese la cantidad de cuotas
            var cuotas = parseInt(prompt("¿En cuántas cuotas desea pagar? (1, 3, 6):"));

            if (cuotas === null || isNaN(cuotas)) {
                alert("Cantidad de cuotas no válida. ¡Hasta luego! Gracias por visitarnos.");
            } else {
                // Calcular el costo total con las tasas de interés
                if (cuotas === 1) {
                    alert("El costo total en 1 pago es: " + costoTotal + " pesos.");
                } else if (cuotas === 3) {
                    var costoConIntereses = costoTotal * 1.15; // 15% de interés en 3 pagos
                    alert("El costo total en 3 pagos con 15% de interés es: " + costoConIntereses + " pesos.");
                } else if (cuotas === 6) {
                    var costoConIntereses = costoTotal * 1.40; // 40% de interés en 6 pagos
                    alert("El costo total en 6 pagos con 40% de interés es: " + costoConIntereses + " pesos.");
                } else {
                    alert("Cantidad de cuotas no válida. ¡Hasta luego! Gracias por visitarnos.");
                }
            }
        } else if (moneda === "2") {
            // Si se paga en dólares, no se aplican intereses
            alert("El costo total en dólares es: " + costoTotal + " dólares.");
        } else {
            alert("Opción de moneda no válida. ¡Hasta luego! Gracias por visitarnos.");
        }
    }
}



