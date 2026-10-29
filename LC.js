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
            nuevo.siguiente = nuevo;
            nuevo.anterior = nuevo;
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
        if (this.primero === null) {
            return null;
        }
        const aux = this.primero;
        if (this.primero.siguiente === this.primero) {
            this.primero = null;
            return aux;
        }
        let ultimo = this.primero.siguiente;
        while (ultimo.siguiente !== this.primero) {
            ultimo = ultimo.siguiente;
        }
        ultimo.siguiente = this.primero.siguiente;
        this.primero.siguiente.anterior = ultimo;
        this.primero = this.primero.siguiente;
        aux.siguiente = null;
        aux.anterior = null;
        return aux;
    }

    listar() {
        if (this.primero === null) {
            return null;
        } else {
            let i = this.primero;
            let txt = "";
            do {
                txt += `Nombre de Base: (${i.nombre}) Minutos: (${i.minutos})`;
                i = i.siguiente;
            } while (i.siguiente !== this.primero);
            return txt;
        }
    }
}