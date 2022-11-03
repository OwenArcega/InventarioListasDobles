
class Inventario{
    constructor(){
        this.primero = null;
        this.ultimo = null;
    }

    agregar(nuevo){
        if(this.primero == null){
            this.primero = nuevo;
            this.ultimo = nuevo;
            this.primero.anterior = null;
            this.primero.siguiente = null;
        } else{
            if(this.primero.codigo > nuevo.codigo){
                nuevo.siguiente = this.primero;
                nuevo.anterior = null;
                this.primero.anterior = nuevo;
                if(this.primero.siguiente == null){
                    this.ultimo = this.primero;
                }
                this.primero = nuevo;
                return true;
            }

            if(this.ultimo.codigo < nuevo.codigo){
                nuevo.anterior = this.ultimo;
                nuevo.siguiente = null;
                this.ultimo.siguiente = nuevo;
                this.ultimo = nuevo;
                return true;
            }

            let aux = this.primero;
            while(aux != null){
                if(aux.codigo > nuevo.codigo){
                    nuevo.siguiente = aux;
                    nuevo.anterior = aux.anterior;
                    aux.anterior.siguiente = nuevo;
                    aux.anterior = nuevo;
                    return true;
                }
                aux = aux.siguiente
            }
            return false;
        }
    }

    listar(){
        let listado="";
        let aux = this.primero;
        while(aux != null){
            listado += "<" + aux.codigo + "> Nombre: " + aux.nombre
            + " Costo: " + aux.costo + " Cantidad: " + aux.cantidad + "<br>";
            aux = aux.siguiente;
        }
        return listado;
    }

    listarInverso(){
        let listadoInverso="";
        let aux = this.ultimo;
        while(aux != null){
            listadoInverso += "<" + aux.codigo + "> Nombre: " + aux.nombre
            + " Costo: " + aux.costo + " Cantidad: " + aux.cantidad + "<br>";
            aux = aux.anterior;
        }
        return listadoInverso;
        }

    eliminar(codigo){
        if(this.primero == null){
            return false;
        } else if(this.primero.codigo == codigo){
            this.primero.siguiente.anterior = null;
            this.primero = this.primero.siguiente;
            return true;
        } else if(this.ultimo.codigo == codigo){
            this.ultimo.anterior.siguiente = null;
            this.ultimo = this.ultimo.anterior;
            return true;
        }

        let aux = this.primero;
        while(aux != null){
            if(aux.codigo == codigo){
                aux.anterior.siguiente = aux.siguiente;
                aux.siguiente.anterior = aux.anterior;
                return true;
            } else{
                aux = aux.siguiente;
            }
        }
        return false;
    }

    buscar(codigo){
        if(this.primero == null){
            return false;
        }

        let aux = this.primero;
        while(aux != null){
            if(aux.codigo == codigo){
                return aux;
            }
            aux = aux.siguiente
        }
        return null;
    }
}