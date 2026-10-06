class Inventario {
    constructor() {
        this.datos = [];
    }

    agregar(nuevo) {
        this.datos.push(nuevo);
    }

    buscar(codigo) {
        for (let i = 0; i < this.datos.length; i++) {
            if (this.datos[i].codigo === codigo) {
                return this.datos[i];
            }
        }
        return null; 
    }

    eliminar(codigo) {
        for (let i = 0; i < this.datos.length; i++) {
            if (this.datos[i].codigo === codigo) {
                let eliminado = this.datos[i];

                for (let j = i; j < this.datos.length - 1; j++) {
                    this.datos[j] = this.datos[j + 1];
                }

                this.datos.pop();
                return eliminado;
            }
        }
        return null;
    }

    agregarInicio(nuevo) {
        this.datos.push(nuevo);

        for (let i = this.datos.length - 1; i > 0; i--) {
            this.datos[i] = this.datos[i - 1];
        }

        this.datos[0] = nuevo;
    }

    extraerPrimero() {
        if (this.datos.length === 0) return null;

        let primero = this.datos[0];

        for (let i = 0; i < this.datos.length - 1; i++) {
            this.datos[i] = this.datos[i + 1];
        }

        this.datos.pop();
        return primero;
    }

    listar() {
        let resultado = "";
        for (let i = 0; i < this.datos.length; i++) {
            resultado += this.datos[i].infoHtml();
        }
        return resultado;
        
    }
    listarInverso(){
        let resultado = "";
        for (let i = this.datos.length - 1; i >= 0; i--) {
            resultado += this.datos[i].infoHtml();
        }
        return resultado;
    }
}   