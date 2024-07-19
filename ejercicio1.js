
class Herramientas {
    estado() {
        console.log("Las herramientas son indispensables para las tareas de mantenimiento");
    }
}

class HerramientasMecanicas extends Herramientas {
    estado() {
        console.log("Las herramientas mecánicas son básicas y manejables");
    }
}

class HerramientasElectricas extends Herramientas {
    estado() {
        console.log("Las herramientas eléctricas o electrónicas son de alta precisión");
    }
}

let herramientasGenerales = new Herramientas();
let herramientasMecanicas = new HerramientasMecanicas();
let herramientasElectricas = new HerramientasElectricas();

herramientasGenerales.estado();  
herramientasMecanicas.estado(); 
herramientasElectricas.estado(); 
