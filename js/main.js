let productos = [
    { nombre: "Pizza", precio: 5500 },
    { nombre: "Empanada", precio: 700 },
    { nombre: "Sanguche", precio: 3400 },
    { nombre: "Tarta", precio: 6500 }
];

let total = 0;
let carrito = [];

function sumarAlTotal(precio) {
    return total += precio;
}

function buscarProducto(nombre) {
    return productos.find(producto => producto.nombre.toLowerCase() === nombre.toLowerCase());
}

function mostrarCarrito() {
    console.log("Carrito de compras:");
    carrito.forEach(item => {
        console.log(`${item.producto.nombre} - Cantidad: ${item.cantidad}`);
    });
}

function mostrarMenu() {
    let menu = "Ingrese lo que va a llevar: \n\n";
    productos.forEach((producto, i) => {
        menu += `${i + 1}. ${producto.nombre} - $${producto.precio}\n`;
    });
    menu += "\n5. Ir a la caja.\n6. Salir del menú";
    let opcion = parseInt(prompt(menu));

    if (opcion >= 1 && opcion <= 4) {
        let productoSeleccionado = productos[opcion - 1];
        let productoEncontrado = buscarProducto(productoSeleccionado.nombre);
        if (productoEncontrado) {
            alert(`${productoSeleccionado.nombre} está disponible.`);
        } else {
            alert(`${productoSeleccionado.nombre} no está disponible.`);
            opcion = 0;
        }
    }
    
    return opcion;
}

function main() {
    let opcion;
    do {
        opcion = mostrarMenu();
        if (opcion >= 1 && opcion <= 4) {
            let productoSeleccionado = productos[opcion - 1];
            let cantidad = parseInt(prompt(`Ingrese la cantidad de ${productoSeleccionado.nombre}:`));
            carrito.push({ producto: productoSeleccionado, cantidad: cantidad });
            sumarAlTotal(productoSeleccionado.precio * cantidad);
            alert(`Se agregaron ${cantidad} ${productoSeleccionado.nombre}(s) al carrito.`);
        } else if (opcion === 5) {
            mostrarCarrito();
            alert("Dirigiéndose a la caja.");
        } else if (opcion === 6) {
            alert("Saliendo del menú.");
        } else {
            alert("Opción inválida. Por favor, seleccione una opción válida.");
        }
    } while (opcion !== 5 && opcion !== 6);

    if (total > 0) {
        alert("El total a pagar es: $" + total);
    }
}

main();