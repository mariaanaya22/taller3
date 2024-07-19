
class Panaderia {
    constructor() {
        
        this.tipoPan = "";
        this.insumoPrincipal = "";
        this.cantidadProducida = 0;
        this.costoProduccion = 0;
    }

    // Métodos getters y setters para acceder y modificar los atributos de la clase
    getTipoPan() {
        
        return this.tipoPan;
    }

    setTipoPan(tipo) {
        this.tipoPan = tipo;
    }

    getInsumoPrincipal() {
        return this.insumoPrincipal;
    }

    setInsumoPrincipal(insumo) {
        this.insumoPrincipal = insumo;
    }

    getCantidadProducida() {
        return this.cantidadProducida;
    }

    setCantidadProducida(cantidad) {
        this.cantidadProducida = cantidad;
    }

    getCostoProduccion() {
        return this.costoProduccion;
    }

    setCostoProduccion(costo) {
        this.costoProduccion = costo;
    }

    
    descripcion() {
        console.log("Bienvenid@s a nuestra panaderia");
    }
}

class PanIntegral extends Panaderia {
    constructor() {
        super();
        this.setTipoPan("Avena");
        this.setInsumoPrincipal("Harina Avena");
    }


    descripcion() {
        console.log("Nuestro pan de avena está hecho con harina de avena, ideal para una dieta saludable.");
    }
}

class PanFrances extends Panaderia {
    constructor() {
        super();
        this.setTipoPan("Francés");
        this.setInsumoPrincipal("Harina de trigo");
    }

    descripcion() {
        console.log("El pan francés es conocido por su corteza crujiente y su interior suave y esponjoso.");
    }
}


let panaderia = new Panaderia();
let panIntegral = new PanIntegral();
let panFrances = new PanFrances();


panIntegral.setCantidadProducida(100);
console.log(`Cantidad producida de pan integral: ${panIntegral.getCantidadProducida()}`);

panaderia.descripcion();    
panIntegral.descripcion();  
panFrances.descripcion();  
