class Silos {
    constructor(tipoGrano, cantidad, cliente, fechaAlmacenamiento) {
        this.tipoGrano = tipoGrano;
        this.cantidad = cantidad;
        this.cliente = cliente;
        this.fechaAlmacenamiento = new Date(fechaAlmacenamiento); }

    calcularPrecio() {
        const costoPorDia = {
            '0-30': 8000,
            '31-60': 10000,
            '61+': 15000
        };

        const costoAdicionalPorEpoca = {
            'ene-jun': 15000,
            'jul-dic': 25000
        };

      
        let hoy = new Date();
        let diasAlmacenados = Math.floor((hoy - this.fechaAlmacenamiento) / (1000 * 60 * 60 * 24));

       
        let costoBasico =
            diasAlmacenados <= 30 ? costoPorDia['0-30'] :
            diasAlmacenados <= 60 ? costoPorDia['31-60'] :
            costoPorDia['61+'];

        
        let mesAlmacenamiento = this.fechaAlmacenamiento.getMonth();
        let costoAdicional = (mesAlmacenamiento >= 0 && mesAlmacenamiento <= 5) ? costoAdicionalPorEpoca['ene-jun'] : costoAdicionalPorEpoca['jul-dic'];

       
        let precioTotal = costoBasico + costoAdicional;

        return precioTotal;
    }
}


let silo1 = new Silos('Maíz', 1000, 'Cliente A', '2024-07-01');
console.log(`Tipo de grano: ${silo1.tipoGrano}`);
console.log(`Cantidad almacenada: ${silo1.cantidad} kg`);
console.log(`Cliente: ${silo1.cliente}`);
console.log(`Fecha de almacenamiento: ${silo1.fechaAlmacenamiento.toDateString()}`);
console.log(`Precio a cobrar: ${silo1.calcularPrecio()} pesos`);
