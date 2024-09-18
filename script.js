class Coche {
    constructor(marca, modelo, año, color) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.color = color;
        this.nivel_combustible = 10.0;
        this.motor_encendido = false;

        document.getElementById('marca').innerText = this.marca;
        document.getElementById('modelo').innerText = this.modelo;
        document.getElementById('año').innerText = this.año;
        document.getElementById('color').innerText = this.color;
        document.getElementById('nivel_combustible').innerText = this.nivel_combustible;
    }

    encender() {
        if (!this.motor_encendido) {
            this.motor_encendido = true;
            document.getElementById('estado_motor').innerText = "Encendido";
            this.mostrarMensaje("El motor está ahora encendido.");
        } else {
            this.mostrarMensaje("El motor ya está encendido.");
        }
    }

    apagar() {
        if (this.motor_encendido) {
            this.motor_encendido = false;
            document.getElementById('estado_motor').innerText = "Apagado";
            this.mostrarMensaje("El motor está ahora apagado.");
        } else {
            this.mostrarMensaje("El motor ya está apagado.");
        }
    }

    acelerar() {
        if (this.motor_encendido && this.obtener_nivel_combustible() > 0.1) {
            this.nivel_combustible -= 0.1;
            document.getElementById('nivel_combustible').innerText = this.obtener_nivel_combustible().toFixed(1);
            this.mostrarMensaje("El coche está acelerando.");
        } else if (!this.motor_encendido) {
            this.mostrarMensaje("No se puede acelerar. El motor está apagado.");
        } else if (this.obtener_nivel_combustible() <= 0.1) {
            this.mostrarMensaje("No se puede acelerar. No hay suficiente combustible.");
        }
    }

    recargar() {
        let cantidad = prompt("Ingrese la cantidad de combustible a recargar (máximo 12 galones):");
        cantidad = parseFloat(cantidad);
        let mensaje = "";

        if (isNaN(cantidad) || cantidad <= 0) {
            this.mostrarMensaje("Cantidad inválida.");
            return;
        }

        if (this.obtener_nivel_combustible() + cantidad > 12) {
            mensaje += "No se puede recargar más de 12 galones. Recargando al máximo.";
            this.nivel_combustible = 12.0;
        } else {
            this.nivel_combustible += cantidad;
        }

        document.getElementById('nivel_combustible').innerText = this.obtener_nivel_combustible().toFixed(1);
        mensaje += `Se han recargado ${cantidad} galones. Nivel de combustible actual: ${this.obtener_nivel_combustible().toFixed(1)} galones.`
        this.mostrarMensaje(mensaje);
    }

    obtener_nivel_combustible() {
        return this.nivel_combustible;
    }

    mostrarMensaje(mensaje) {
        document.getElementById('mensaje').innerText = mensaje;
    }
}

const coche = new Coche("Toyota", "Corolla", 2020, "Rojo");

function encender() {
    coche.encender();
}

function apagar() {
    coche.apagar();
}

function acelerar() {
    coche.acelerar();
}

function recargar() {
    coche.recargar();
}
