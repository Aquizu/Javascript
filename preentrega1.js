// Comidas con sus precios
const comidas = {
            "hamburguesa": 10,
            "pizza": 8,
            "ensalada": 6,
            "cazuela": 7,
};

// Compra de la comida
function realizarCompra() {
            let totalCompra = 0;

            while (true) {
                        let comida = prompt("Ingrese la comida que desea comprar \nHamburguesa \nPizza \nEnsalada \nCazuela \nFin ");
                        if (comida === "fin") {
                                    break;
                        }
                        if (comidas.hasOwnProperty(comida)) {
                                    totalCompra += comidas[comida];
                                    alert("Has comprado una " + comida + ". Desea agregar algo mas?");
                        } else {
                                    alert("Lo siento, la comida ingresada no está disponible.");
                        }
            }

            alert("Total de la compra: $" + totalCompra);
}

realizarCompra();