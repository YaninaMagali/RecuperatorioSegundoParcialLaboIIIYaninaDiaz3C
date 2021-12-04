class Auto extends Vehiculo{

    cantidadPuertas;

    constructor(id, make, model, price, cantidadPuertas) {
        super(id, make, model, price)
        this.cantidadPuertas = cantidadPuertas;

      }
}