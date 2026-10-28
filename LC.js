class Base {
    constructor(nombre, minutos) {
        this.nombre = nombre;
        this.minutos = minutos;
        this.siguiente = null;
        this.anterior = null;
    }
}

class Ruta {
    constructor() {
        this.primero = null;
    }

    agregar(nuevo) {
        if (this.primero === null) {
            this.primero = nuevo;
        } else if (this.primero.siguiente === null) {
            this.primero.siguiente = nuevo;
            this.primero.anterior = nuevo;
            nuevo.anterior = this.primero;
            nuevo.siguiente = this.primero;

        } else {
            let aux = this.primero;
            while (aux.siguiente !== this.primero) {
                aux = aux.siguiente;
            }
            nuevo.anterior = aux;
            aux.siguiente = nuevo;
            nuevo.siguiente = this.primero;
            this.primero.anterior = nuevo;
        }
    }

    extraerPrimero() {
        const aux = this.primero;
        let ultimo = this.primero.siguiente;
        this.primero.siguiente = this.primero;
        while (ultimo.siguiente !== this.primero) {
            ultimo = ultimo.siguiente;
        }
        ultimo.siguiente = this.primero;
        this.primero.anterior = ultimo;
        return aux;
    }

    listar() {
        let i = this.primero;
        while (i.siguiente !== this.primero) {
            console.log(`Nombre de Base: (${i.nombre}) Minutos: (${i.minutos})`);
            i = i.siguiente;
        }
    }
}