
class Inventario{
    constructor(){
        this.primero = null;
    }

    _agregateRec(nuevo,item){
        if(item.siguiente == null){
            item.siguiente = nuevo;
        } else {
            this._agregateRec(nuevo, item.siguiente);
        }
    }

    agregar(nuevo){
        if(this.primero == null){
            this.primero = nuevo;
            this.primero.siguiente = null;
        } else{
            this._agregateRec(nuevo,this.primero)
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
        let auxListado = "";
        let aux = this.primero;
        while(aux != null){
            auxListado = listadoInverso;
            listadoInverso = "";
            listadoInverso += "<" + aux.codigo + "> Nombre: " + aux.nombre
            + " Costo: " + aux.costo + " Cantidad: " + aux.cantidad + "<br>" + auxListado;
            
            aux = aux.siguiente;
        }
        return listadoInverso;
        }

    eliminar(codigo){
        if(this.primero == null){
            return false;
        } else if(this.primero.codigo == codigo){
            this.primero = this.primero.siguiente;
            return true;
        }

        let aux = this.primero;
        while(aux != null){
            if(aux.siguiente.codigo == codigo){
                aux.siguiente = aux.siguiente.siguiente;
                return true;
            } else{
                aux = aux.siguiente;
            }
        }

        return false;
    }

    insertar(posicion, nuevo){
        if(this.primero == null && posicion != 1){
            return false;
        }
            
        if(this.primero == null && posicion == 1){
            this.primero = nuevo;
            return true;
        }

        let aux = this.primero;
        let count = 1;
        while(aux != null){
            if(count == posicion && posicion == 1){
                this.primero = nuevo;
                nuevo.siguiente = aux;
                return true;
            } else if(count+1 == posicion){
                nuevo.siguiente = aux.siguiente;
                aux.siguiente = nuevo;
                return true;
            } else if(aux.siguiente == null && count < posicion){
                aux.siguiente = nuevo;
                nuevo.siguiente = null;
                return true;
            }
            aux = aux.siguiente;
            count++;
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